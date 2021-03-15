# ShowMe

ShowMe is a website that allows all users to view ratings, reviews, and basic information about TV shows. If a user creates an account with ShowMe they are able to store lists of shows, called ShowShelves. There are three empty ShowShelves provided when a user signs up-Want to watch, Watching, and Watched-but users are able to create, name, and delete additional ShowShelves.

Logged in users are also able to rate shows on a scale of 1-5, and the average of the user ratings can be found on the show page. Finally, users are able to write, edit, and delete reviews that are featured on the show page to be viewed by all users.

## Link to live site
 https://salty-headland-52925.herokuapp.com/


## Site Wiki
https://github.com/ashley-brown13/ShowMe/wiki


## Technologies
* Express
* Bcrypt
* PUG
* Sequelize

As a team we used the technologies stated above to create our application in order to let it act like a single page application for some of our features. Express was used to create our server routes for get, post, delete, and patch requests. Along with express we used bcryptjs alogorithms to hash the password that will be store in the database. Pug was used for our html which would be render from the response object sent back to the front end. It allowed us to dynamically allow us to use if..else statement and also forEach which html wouldn't let us do. Sequelize was used to create the schema of our database.


## ShowShelves
The show shelves are a feature in our website that was interesting to create in our app. It allows users to add a show to a shelve, so that they can remember to watch it later, while they keep browsing through the many shows in the application.

An api route was used to make a fetch call that would allow the user to add a show without redirecting the client.
```js
const res = await fetch(`/api/showshelves/${showShelfId}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json'}
```

This feature tooke some time to solve, but it worked. The harder part was the delete button once the show has been added successfully.

```pug
form(action=`/showShelves/${showShelf.id}/shows/${show.id}` method='post' class="showShelfDeleteForm")
  button(type="submit" name='showTitle'class="showShelfDeleteButton") Delete
```

The problem was that the delete button that a form with a post was used and then the await destroy() was used on the show, so that it would be deleted in the database and then reloaded the same page.

```js
router.post('/showShelves/:id(\\d+)/shows/:showid(\\d+)', asyncHandler (async(req, res, next) => {
  const showId = req.params.showid;
  const showShelfId = req.params.id;
  const join = await db.ShowShelvesShow.findOne({where: {showId, showShelfId}})
  await join.destroy();
  res.redirect(`/showshelves/${showShelfId}`)
}))
```
The problem was that at first when a person kept pressing the delete button instead of deleting the show it would create more delete buttons. The reason was because the delete buttons wasn't a child of the form directly, once this was fixed the button start working as it was supposed to.

## Ratings

Implement the ratings feature was interesting and an exciting challenge because the client can submit their rating without the page reloading, also it dynamically changes the stars representing the ratings from grey to a yellow color.

The stars are actually anchor tags that have an href that leads no where. There is a total of five anchor representing five stars.

```pug
a(href="" class="star off" title="Like it" id=4) 4 of 5
```
It uses an api route to make a post fetch call, but that is not the most exciting part of the ratings. What is actually exciting is that the anchor tags have a `mouseenter` event on each anchor tag which removes and adds a class and vice versa with a setTimeout function which removes a class and adds a class.

```js
ratings.forEach(rating => {
    rating.addEventListener("mouseenter", async(e) => {
      e.target.classList.remove('off')
      e.target.classList.add('on')
      setTimeout(() => {
        e.target.classList.remove('on');
        e.target.classList.add('off')
      }, 2000)
    })
  })
```
## Challenges
This was the first time, I have worked on an application starting from the design to the implementation as a student. As a group we worked cohesively using our strengths to create an application that we are all proud of.

The problems that I, Mauro Sanchez, encountered was that I had difficulty at the beginning with making api calls in the same application without having two servers one for the api and the other for the front end, but once I figure this out, it made working in our application easier.

Sean Rader: The biggest issue that I faced all week personally was using CSS to style the review and show pages. It definitely is not a strength of mine, and it took a lot of reading through old notes, readings, and MDN. 

Savannah Rice: The biggest challenge I faced was setting up the API route to add a movie from the index page to a user's showshelf. It was challenging to get all the pieces (Pug, API route, etc.) to connect properly, however I learned a lot and am very happy with the result. 

Heba Elkasaby: The challenges I faced:
                                      1- impelmenting the lougout button, at the beginning I coded it as an anchor element, but it didn't work and was still show me as I am logged in. It took me time to be able to code it as a form with method 'post'.
                                      2- although the CSS is my favorite part, it was a little tricky. But I went through the reading then it became much easier.
