const express = require('express');
const { validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models');
const {  reviewValidators } = require('./validators');
const router = express.Router();
const { Op } = require("sequelize");
const { response } = require('../app');
const fetch = require("node-fetch");

const KEY = process.env.API_VIDEO_KEY;

let shelves;

router.post('/search', asyncHandler (async (req, res) => {
    const { searchInput } = req.body
    if(req.session.auth){
        const loggedUser = req.session.auth.userId;
        shelves = await db.ShowShelf.findAll({
            where: { userId: loggedUser }
        })
    }
    const shows = await db.Show.findAll({
        where: {
            title: {[Op.iLike]: `%${searchInput}%`}
        },
    });


    if(!shows.length){
        let search = searchInput.split("").map(ele => {
            if(ele === " "){
                return "%20"
            }else if(ele === "'"){
                return "%27"
            }else return ele
        }).join("") + "%20Trailer";

        let searchB = searchInput.split("").map(ele => {
            if(ele === " "){
                return "%20"
            }else return ele
        }).join("");

        const showSearch = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${searchB}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${process.env.API_SHOW_KEY}`,
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        });

        const tt = await showSearch.json();
        const ttId = tt.d[0].id;

        const showInfo = await fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${ttId}&currentCountry=US`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${process.env.API_SHOW_KEY}`,
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        });

        const info = await showInfo.json();
        const synopsis = info.plotSummary ? info.plotSummary.text: "";
        const title = info.title? info.title.title: "";
        const imageURL = info.title? info.title.image.url: "";
        const yearReleased = info.title? info.title.seriesStartYear: "";
        const genre = info.genres[0];

        const youtubeVideo = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${search}&type=video&videoEmbeddable=true&key=${KEY}`
        )
        const result = await youtubeVideo.json();
        const vId = result.items[0].id.videoId;
        const youtubeVideoURL = `https://www.youtube.com/embed/${vId}?autoplay=1&mute=1`;

        const newShow = await db.Show.create({title, synopsis, yearReleased, "numberOfSeasons": 1, genre, imageURL, youtubeVideoURL});
        shows.push(newShow)
    };
    res.render('search', { shows, shelves })
}))

module.exports = router
