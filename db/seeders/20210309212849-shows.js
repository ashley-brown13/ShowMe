'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shows', [
      {
        title: 'Blue Planet II',
        synopsis: "David Attenborough returns to the world's oceans in this sequel to the acclaimed documentary filming rare and unusual creatures of the deep, as well as documenting the problems our oceans face.",
        yearReleased: '2017',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fullmetal Alchemist: Brotherhood',
        synopsis: "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
        yearReleased: '2009',
        numberOfSeasons: '1',
        genre: 'Animation, Action, Adventure, Comedy, Drama, Fantasy, Sci-Fi',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Avatar: The Last Airbender',
        synopsis: 'In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.',
        yearReleased: '2005',
        numberOfSeasons: '3',
        genre: 'Animation, Action, Adventure, Family, Fantasy, Mystery',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cosmos',
        synopsis: 'Astronomer Carl Sagan leads us on an engaging guided tour of the various elements and cosmological theories of the universe.',
        yearReleased: '1980',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Planet Earth II',
        synopsis: "Wildlife documentary series with David Attenborough, beginning with a look at the remote islands which offer sanctuary to some of the planet's rarest creatures, to the beauty of cities, which are home to humans, and animals..",
        yearReleased: '2016',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Breaking Bad',
        synopsis: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        yearReleased: '2008',
        numberOfSeasons: '5',
        genre: 'Crime, Drama, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Planet Earth',
        synopsis: 'Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.',
        yearReleased: '2006',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Sopranos',
        synopsis: 'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.',
        yearReleased: '1999',
        numberOfSeasons: '6',
        genre: 'Crime, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Life',
        synopsis: "David Attenborough 's legendary BBC crew explains and shows wildlife all over planet earth in 10 episodes. The first is an overview of the challenges facing life, the others are dedicated ...",
        yearReleased: '2009',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNjJhMTAxZjYtNWZkYy00Nzg1LTlkYjItZTNhZWRjNzkxMDg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chernobyl',
        synopsis: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
        yearReleased: '2019',
        numberOfSeasons: '1',
        genre: 'Drama, History, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Last Dance',
        synopsis: "Charting the rise of the 1990's Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.",
        yearReleased: '2020',
        numberOfSeasons: '1',
        genre: 'Documentary, Biography, History, Sport',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Game of Thrones',
        synopsis: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
        yearReleased: '2011',
        numberOfSeasons: '8',
        genre: 'Action, Adventure, Drama, Fantasy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cosmos: A Spacetime Odyssey',
        synopsis: 'An exploration of our discovery of the laws of nature and coordinates in space and time.',
        yearReleased: '2014',
        numberOfSeasons: '2',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rick and Morty',
        synopsis: 'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.',
        yearReleased: '2013',
        numberOfSeasons: '4',
        genre: 'Animation, Adventure, Comedy, Sci-Fi',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Scam 1992: The Harshad Mehta Story',
        synopsis: "Set in 1980's and 90's Bombay, it follows the life of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.",
        yearReleased: '2020',
        numberOfSeasons: '1',
        genre: 'Biography, Crime, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Band of Brothers',
        synopsis: 'The story of Easy Company of the U.S. Army 101st Airborne Division, and their mission in World War II Europe, from Operation Overlord, through V-J Day.',
        yearReleased: '2001',
        numberOfSeasons: '1',
        genre: 'Action, Drama, History, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Wire',
        synopsis: 'The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.',
        yearReleased: '2002',
        numberOfSeasons: '5',
        genre: 'Crime, Drama, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Our Planet',
        synopsis: 'Documentary series focusing on the breadth of the diversity of habitats around the world, from the remote Arctic wilderness and mysterious deep oceans to the vast landscapes of Africa and diverse jungles of South America.',
        yearReleased: '2019',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BN2I1ZjA5YjQtYmQ0ZS00ZmE1LTk1ZjktNTQ5ODIzY2JiZDdhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The World at War',
        synopsis: 'A groundbreaking 26-part documentary series narrated by the actor Laurence Olivier about the deadliest conflict in history, World War II.',
        yearReleased: '1973',
        numberOfSeasons: '1',
        genre: 'Documentary, History, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYzExN2NhZDctOWEzMy00NzYwLTg3MDktNjYyNTQyOWY4MGYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Vietnam War',
        synopsis: "A comprehensive history of the United States' involvement in the bitterly divisive armed conflict in Southeast Asia.",
        yearReleased: '2017',
        numberOfSeasons: '1',
        genre: 'Documentary, History, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYWQ4ZGFhYmUtNDVhNC00N2VkLWIzYTQtOTk5ZTI1NWU2YjNlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Chappelle's Show",
        synopsis: 'Comedian Dave Chappelle hosts this sketch-comedy show that parodies many of the nuances of race and culture.',
        yearReleased: '2003',
        numberOfSeasons: '3',
        genre: 'Comedy, Music',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOWNjYTg5NGMtOWRjNy00ZGNlLTg2MmYtZjQ5NTM0MTQxOGM2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Death Note',
        synopsis: 'An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.',
        yearReleased: '2006',
        numberOfSeasons: '1',
        genre: 'Animation, Crime, Drama, Fantasy, Mystery, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How the Universe Works',
        synopsis: 'A users guide to the cosmos from the big bang to galaxies, stars, planets and moons. Where did it all come from and how does it all fit together. A primer for anyone who has ever looked up at the night sky and wondered.',
        yearReleased: '2010',
        numberOfSeasons: '8',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTc0MDQ3NzI4MV5BMl5BanBnXkFtZTgwNTk1NjE0MzE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Friends',
        synopsis: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
        yearReleased: '1994',
        numberOfSeasons: '10',
        genre: 'Comedy, Romance',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Oz',
        synopsis: 'A series chronicling the daily activities of an unusual prison facility and its criminal inhabitants.',
        yearReleased: '1997',
        numberOfSeasons: '6',
        genre: 'Crime, Drama, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYjY3N2M2YjgtZTFjZS00ODA1LWJjMDgtNDgxZDllZWFiMmYyXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Twin Peaks',
        synopsis: 'An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.',
        yearReleased: '1990',
        numberOfSeasons: '2',
        genre: 'Crime, Drama, Mystery, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ramayan',
        synopsis: "An adaptation of the ancient epic, in which the exiled Prince Rama and his brother Laxman set out to save Rama's wife, Sita, who has been kidnapped by the demon king of Lanka Ravana.",
        yearReleased: '1987',
        numberOfSeasons: '1',
        genre: 'Adventure, Drama, Family, Fantasy, Musical, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BODFjYWEyOTktMTU3OC00YTBhLWE4ZmEtNTJiYWUzYTYwMjIzXkEyXkFqcGdeQXVyNjU1NDgwMDg@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dark',
        synopsis: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
        yearReleased: '2017',
        numberOfSeasons: '3',
        genre: 'Crime, Drama, Mystery, Sci-Fi, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fawlty Towers',
        synopsis: "Hotel owner Basil Fawlty's incompetence, short fuse, and arrogance form a combination that ensures accidents and trouble are never far away.",
        yearReleased: '1975',
        numberOfSeasons: '2',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYzc3MTQyYzMtMWY4Ny00N2RiLWI3ZDYtOWRlYjUxZDllMjQxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Gravity Falls',
        synopsis: "Twin siblings Dipper and Mabel Pines spend the summer at their great-uncle's tourist trap in the enigmatic Gravity Falls, Oregon.",
        yearReleased: '2012',
        numberOfSeasons: '2',
        genre: 'Animation, Adventure, Comedy, Drama, Family, Fantasy, Horror, Mystery, Sci-Fi, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Stranger Things',
        synopsis: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
        yearReleased: '2016',
        numberOfSeasons: '4',
        genre: 'Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "It's Always Sunny in Philadelphia",
        synopsis: 'Five friends with big egos and small brains are the proprietors of an Irish pub in Philadelphia.',
        yearReleased: '2005',
        numberOfSeasons: '14',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOTExNGZkMWMtMmIwZC00YjA3LTgwM2ItZjQ2YmZkMzQ1YWZkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Senke nad Balkanom',
        synopsis: 'A historical fiction drama and thriller set in the turbulent period of the late 1920s in the Balkans as a place where high politics, local interests, capital and crime all merge together.',
        yearReleased: '2017',
        numberOfSeasons: '2',
        genre: 'Crime, Drama, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYjAzMzc3OTMtZTAzNi00OWI0LWJmOGEtYjI3MWZmY2IzNDkxXkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Mandalorian',
        synopsis: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
        yearReleased: '2019',
        numberOfSeasons: '3',
        genre: 'Action, Adventure, Sci-Fi',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Peaky Blinders',
        synopsis: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
        yearReleased: '2013',
        numberOfSeasons: '5',
        genre: 'Crime, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Arrested Development',
        synopsis: 'Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.',
        yearReleased: '2003',
        numberOfSeasons: '5',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Over the Garden Wall',
        synopsis: 'Two brothers find themselves lost in a mysterious land and try to find their way home.',
        yearReleased: '2014',
        numberOfSeasons: '1',
        genre: 'Animation, Adventure, Drama, Family, Fantasy, Horror, Mystery, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYjQwZDhhNzctNTZjYy00NjYzLWE3ZjctNGQwZWY2Zjg5NTgwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Vratice se rode',
        synopsis: 'A story of two friends and petty thieves trying to make a living, but failing in every possible way.',
        yearReleased: '2007',
        numberOfSeasons: '1',
        genre: 'Comedy, Crime, Drama, Romance',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMDJlYmI2NmEtZWZkMy00MTVlLTg1NzAtNjAxYWM5NWI0YmJiXkEyXkFqcGdeQXVyMzIwMTIwODc@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Better Call Saul',
        synopsis: 'The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.',
        yearReleased: '2015',
        numberOfSeasons: '6',
        genre: 'Crime, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The West Wing',
        synopsis: 'Inside the lives of staffers in the West Wing of the White House.',
        yearReleased: '1999',
        numberOfSeasons: '7',
        genre: 'Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNjk3ZWE3ZDctN2Q1YS00NzNhLWFjNmYtZTkwYWQxZmQ3NzM3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rome',
        synopsis: 'A down-to-earth account of the lives of both illustrious and ordinary Romans set in the last days of the Roman Republic.',
        yearReleased: '2005',
        numberOfSeasons: '2',
        genre: 'Action, Drama, History, Romance, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYTM4MmU1NWYtNzJjYy00YWFhLThjOGEtZmMxOGI1NzE0NGNiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dragon Ball Z',
        synopsis: 'After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.',
        yearReleased: '1996',
        numberOfSeasons: '15',
        genre: 'Animation, Action, Adventure, Fantasy, Sci-Fi, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Leyla and Mecnun',
        synopsis: 'Turkish television comedy series set in Istanbul, Leyla and Mecnun is a surreal and absurd comedy that revolves around the fictional love story between Leyla and Mecnun.',
        yearReleased: '2011',
        numberOfSeasons: '3',
        genre: 'Adventure, Comedy, Drama, Fantasy, Mystery, Romance',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMzE1YjMzZGItZTkwOS00ZmY3LWEzYmMtODM0OWVhNGU2MDkxXkEyXkFqcGdeQXVyNTY3OTUwODg@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Batman: The Animated Series',
        synopsis: 'The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.',
        yearReleased: '1992',
        numberOfSeasons: '4',
        genre: 'Animation, Action, Adventure, Family, Sci-Fi',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sherlock',
        synopsis: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
        yearReleased: '2010',
        numberOfSeasons: '4',
        genre: 'Crime, Drama, Mystery, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Blue Planet',
        synopsis: "Mammoth series, five years in the making, taking a look at the rich tapestry of life in the world's oceans.",
        yearReleased: '2001',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZGFhMGNmNDktYjY0Mi00YWE1LTlmMDQtZTBiNmU4NGYzZjZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dekalog',
        synopsis: 'Ten television drama films, each one based on one of the Ten Commandments.',
        yearReleased: '1989',
        numberOfSeasons: '1',
        genre: 'Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZWIzNDIzMTYtN2RiZS00NjA1LWFjNzMtOWQ0MDYxNWI1YTJiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Taskmaster',
        synopsis: 'Five comedians are set tasks challenging their creativity and wit. The tasks are supervised by Alex Horne but the Taskmaster, Greg Davies, always has the final word.',
        yearReleased: '2015',
        numberOfSeasons: '10',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTNlYzY0MTItZmI5Ni00ODEwLTkxNDktOTI3MGI1ODRmODJlXkEyXkFqcGdeQXVyMDE4MzA0NQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Persona',
        synopsis: "A man diagnosed with Alzheimer's decides to punish criminals.",
        yearReleased: '2018',
        numberOfSeasons: '1',
        genre: 'Crime, Drama, Mystery',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOTJkNzJmYzgtZTZmNC00MTQ2LWE2ZGQtM2EyYjliNGViMTY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'True Detective',
        synopsis: 'Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.',
        yearReleased: '2014',
        numberOfSeasons: '3',
        genre: 'Crime, Drama, Mystery, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTUwMGM2ZmYtZGEyZC00OWQyLWI2Y2QtMTdjYzMxZGJmNjhjXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Firefly',
        synopsis: 'Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.',
        yearReleased: '2002',
        numberOfSeasons: '1',
        genre: 'Adventure, Drama, Sci-Fi',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Monty Python's Flying Circus",
        synopsis: 'The original surreal sketch comedy showcase for the Monty Python troupe.',
        yearReleased: '1969',
        numberOfSeasons: '4',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMWY2ZGI0OGUtZDc3YS00ZmVjLWJiNWQtZDdmNzFmM2UzYWFhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Frozen Planet',
        synopsis: 'Focuses on life and the environment in both the Arctic and Antarctic.',
        yearReleased: '2011',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOGM5YWU2N2QtYjVhZi00MzYyLTk0ODctYmVlNDZlMjU5N2Q5XkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'BoJack Horseman',
        synopsis: `BoJack Horseman was the star of the hit television show "Horsin' Around" in the '80s and '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.`,
        yearReleased: '2014',
        numberOfSeasons: '6',
        genre: 'Animation, Comedy, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Civil War',
        synopsis: 'A comprehensive survey of the American Civil War.',
        yearReleased: '1990',
        numberOfSeasons: '1',
        genre: 'Documentary, History, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZDc1NzI2MGEtZDA2Yy00ZWExLTgwYmItNjU3N2QyYmM0MzYwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Twilight Zone',
        synopsis: 'Ordinary people find themselves in extraordinarily astounding situations, which they each try to solve in a remarkable manner.',
        yearReleased: '1959',
        numberOfSeasons: '5',
        genre: 'Drama, Fantasy, Horror, Mystery, Sci-Fi, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNTAzMDI5MzgtMGNkMC00MzllLWJhNjctNjA1NmViNGUxMzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Cowboy Bebop',
        synopsis: 'The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.',
        yearReleased: '1998',
        numberOfSeasons: '1',
        genre: 'Animation, Action, Adventure, Drama, Sci-Fi, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Human Planet',
        synopsis: 'Like all life forms, humanity partially adapts to types of natural environment, yet also tends to change them. Each episode examines how life differs for men and nature in some type of ...',
        yearReleased: '2011',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMjdhZjQzYjYtM2FmNS00Y2ExLThjODEtZGQzY2M3OWYzYzc0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Marvelous Mrs. Maisel',
        synopsis: 'A housewife in 1958 decides to become a stand-up comic.',
        yearReleased: '2017',
        numberOfSeasons: '4',
        genre: 'Comedy, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZTFhMDdmODEtN2UwOS00ZjQwLTgxMGYtM2JlMGM3YTUyM2FjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mahabharat',
        synopsis: 'A dynastic struggle occurs for the throne of Hastinapur, the kingdom ruled by the Kuru clan, between the Kauravas and Pandavas, collateral branches of the clan, which causes the Kurukshetra War.',
        yearReleased: '1988',
        numberOfSeasons: '1',
        genre: 'Adventure, Drama, History, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZDZkZGUxNmEtOWM0MC00ODJkLWEyYzgtNDJjMzJkZWQ4MjdkXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Six Feet Under',
        synopsis: 'A chronicle of the lives of a dysfunctional family who run an independent funeral home in Los Angeles.',
        yearReleased: '2001',
        numberOfSeasons: '5',
        genre: 'Comedy, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTQzODk5N2UtYjE4ZC00YWM1LWJkMGYtYmY2NjNjMjIzZDRmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Gullak',
        synopsis: 'Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family.',
        yearReleased: '2019',
        numberOfSeasons: '2',
        genre: 'Comedy, Drama, Family',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMmRjOTBjMGEtMGFmZi00MDc0LTgwNzMtNjMzZTUyM2M4ZTY1XkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Apocalypse: The Second World War',
        synopsis: 'Apocalypse: The Second World War(2009) is a six-part French documentary about the Second World War. The documentary is composed exclusively of actual footage of the war as filmed by war ...',
        yearReleased: '2009',
        numberOfSeasons: '1',
        genre: 'Documentary, History, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYzNkNWY1OWYtYzRjNy00ZTZhLTg4ZTAtODg5YmI3OTFlMzY5XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Vinland Saga',
        synopsis: "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father a homage.",
        yearReleased: '2019',
        numberOfSeasons: '1',
        genre: 'Animation, Action, Adventure, Drama, History',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BN2UwOTMwMjMtZTE5MS00YmY4LTg4YjAtZDE3ZTg3YTU5MmQ2XkEyXkFqcGdeQXVyODEyMDIxNDY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'South Park',
        synopsis: 'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.',
        yearReleased: '1997',
        numberOfSeasons: '24',
        genre: 'Animation, Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOGE2YWUzMDItNTg2Ny00NTUzLTlmZGYtNWMyNzVjMjQ3MThkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Adventures of Sherlock Holmes',
        synopsis: 'Sherlock Holmes and Dr Watson solve the mysteries of copper beeches, a Greek interpreter, the Norwood builder, a resident patient, the red-headed league, and one final problem.',
        yearReleased: '1984',
        numberOfSeasons: '2',
        genre: 'Crime, Drama, Mystery',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTI2MzM1Njk4OV5BMl5BanBnXkFtZTcwMzA0ODQyMQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Boys',
        synopsis: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
        yearReleased: '2019',
        numberOfSeasons: '3',
        genre: 'Action, Comedy, Crime, Sci-Fi',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Beatles Anthology',
        synopsis: 'An autobiographical documentary of the greatest of the rock bands.',
        yearReleased: '1995',
        numberOfSeasons: '1',
        genre: 'Documentary, Music',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNjgwZmE1NDAtN2JhNy00ZGQ4LWFhMjEtZDVmZDExNzQwNDgwXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'I, Claudius',
        synopsis: 'The history of the Roman Empire as experienced by one of its rulers.',
        yearReleased: '1976',
        numberOfSeasons: '1',
        genre: 'Biography, Drama, History',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZWM1MDY1MjYtYTAzZC00MDJiLTk4MjAtOGQzNDI4YWU1MWQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'House of Cards',
        synopsis: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.',
        yearReleased: '2013',
        numberOfSeasons: '6',
        genre: 'Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fleabag',
        synopsis: 'A comedy series adapted from the award-winning play about a young woman trying to cope with life in London whilst coming to terms with a recent tragedy.',
        yearReleased: '2016',
        numberOfSeasons: '2',
        genre: 'Comedy, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Office',
        synopsis: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
        yearReleased: '2005',
        numberOfSeasons: '9',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Curb Your Enthusiasm',
        synopsis: 'The life and times of Larry David and the predicaments he gets himself into with his friends and complete strangers.',
        yearReleased: '2000',
        numberOfSeasons: '10',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZjYyMmJjYWUtZjBjMS00MWQzLTk0OWYtYzU1MmE3NzFhZjJkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Attack on Titan',
        synopsis: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
        yearReleased: '2013',
        numberOfSeasons: '4',
        genre: 'Animation, Action, Adventure, Drama, Fantasy, Horror',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sarabhai V/S Sarabhai',
        synopsis: 'The show revolves around the lives of the members of an Uber Wealthy - High Society Gujarati family of Cuffe Parade - South Bombay, whose daughter-in-law is from a middle class Delhi background.',
        yearReleased: '2004',
        numberOfSeasons: '2',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNjYxNzBhMmQtZjM4Yy00MGZiLWFmNDAtYmVkZGM0MWNlMTU3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Justice League Unlimited',
        synopsis: 'A continuation of the Justice League animated series finds the original members of the team joined in their battle against crime and evil by dozens of other heroes from the DC comics universe.',
        yearReleased: '2004',
        numberOfSeasons: '3',
        genre: 'Animation, Action, Adventure, Fantasy, Sci-Fi',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTI3MjI1NTAtYjI2ZS00OTVlLTk0OTQtNTc5M2U3NmNmYjMzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Only Fools and Horses',
        synopsis: "Comedy that follows two brothers from London's rough Peckham estate as they wheel and deal through a number of dodgy deals and search for the big score that'll make them millionaires.",
        yearReleased: '1981',
        numberOfSeasons: '9',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYmI1NGIwNzYtOTVlMS00ZGYwLWE0ZTktYzVmMGVlMmRmN2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Thick of It',
        synopsis: "Set in the corridors of power and spin, the Minister for Social Affairs is continually harassed by Number 10's policy enforcer and dependent on his not-so-reliable team of civil servants.",
        yearReleased: '2005',
        numberOfSeasons: '4',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZjc0ZDA5OTItYzhjNi00ZTJjLTg4OTYtZjk3NzBhODRlMTViXkEyXkFqcGdeQXVyMjc5OTMxMzQ@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Still Game',
        synopsis: "Cult Scottish comedy about the lives of two OAP's Jack and Victor and their views on how it used to be in the old days and how bad it is now in the fictional area of Craiglang, Glasgow.",
        yearReleased: '2002',
        numberOfSeasons: '9',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTIwNTQwMDIwNV5BMl5BanBnXkFtZTcwMzExMzAzMQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'When They See Us',
        synopsis: "Five teens from Harlem become trapped in a nightmare when they're falsely accused of a brutal attack in Central Park. Based on the true story.",
        yearReleased: '2019',
        numberOfSeasons: '1',
        genre: 'Biography, Crime, Drama, History',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZmJjM2YzOWEtOTYxYi00YjhkLTliMzgtMTA2MTc0NDQ1MDM4XkEyXkFqcGdeQXVyODY5OTk4MA@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'One Strange Rock',
        synopsis: 'The extraordinary story of Earth and why it is special and uniquely brimming with life among a largely unknown but harsh cosmic arena; astronauts tell the story of Earth through a unique perspective.',
        yearReleased: '2018',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMzBlYjhmYTMtNzY1ZS00ZGU2LWFmMzktYTg5ZGU1N2JlMGRmXkEyXkFqcGdeQXVyMTg3MDg4NzM@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Africa',
        synopsis: "Africa, the world's wildest continent. David Attenborough takes us on an awe-inspiring journey through one of the most diverse places in the world. We visit deserts, savannas, and jungles and meet up with some of Africa's amazing wildlife.",
        yearReleased: '2013',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMjFkYzk3ZDktYThjZC00NDgzLWIzYWEtMjI0N2Y0ZmE5ZDMwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pride and Prejudice',
        synopsis: 'While the arrival of wealthy gentlemen sends her marriage-minded mother into a frenzy, willful and opinionated Elizabeth Bennet matches wits with haughty Mr. Darcy.',
        yearReleased: '1995',
        numberOfSeasons: '1',
        genre: 'Drama, Romance',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Last Week Tonight with John Oliver',
        synopsis: 'Former Daily Show host and correspondent John Oliver brings his persona to this weekly news satire program.',
        yearReleased: '2014',
        numberOfSeasons: '8',
        genre: 'Comedy, News, Talk-Show',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNDk4OTBkMGUtZWI3NC00M2Y0LWJjNjAtZmVjMGNiNDMyMmViXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Freaks and Geeks',
        synopsis: 'A high school mathlete starts hanging out with a group of burnouts while her younger brother navigates his freshman year.',
        yearReleased: '1999',
        numberOfSeasons: '1',
        genre: 'Comedy, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZWJhOGFiZWMtYTY5Ni00NGU1LWE5OWItNzA5NThkNWUwYzc4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'TVF Pitchers',
        synopsis: 'A story of trials and tribulations of four young entrepreneurs who quit their day jobs in order to pursue their start up venture.',
        yearReleased: '2015',
        numberOfSeasons: '1',
        genre: 'Comedy, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMjQwNTQ5MjAxNF5BMl5BanBnXkFtZTgwNTU0MDA3NjE@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Blackadder Goes Forth',
        synopsis: 'Stuck in the middle of World War I, Captain Edmund Blackadder does his best to escape the banality of the war.',
        yearReleased: '1989',
        numberOfSeasons: '1',
        genre: 'Comedy, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTQ0OTc1NTU1NV5BMl5BanBnXkFtZTcwNDk1NDYxMQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Seinfeld',
        synopsis: 'The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.',
        yearReleased: '1989',
        numberOfSeasons: '9',
        genre: 'Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Black Mirror',
        synopsis: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
        yearReleased: '2011',
        numberOfSeasons: '5',
        genre: 'Drama, Sci-Fi, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'One Punch Man',
        synopsis: 'The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.',
        yearReleased: '2015',
        numberOfSeasons: '2',
        genre: 'Animation, Action, Comedy, Fantasy, Sci-Fi',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fargo',
        synopsis: 'Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota.',
        yearReleased: '2014',
        numberOfSeasons: '4',
        genre: 'Crime, Drama, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BN2NiMGE5M2UtNWNlNC00N2Y4LTkwOWUtMDlkMzEwNTcyOTcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hunter x Hunter',
        synopsis: 'Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.',
        yearReleased: '2011',
        numberOfSeasons: '1',
        genre: 'Animation, Action, Adventure, Comedy, Fantasy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Das Boot',
        synopsis: 'A World War II German U-Boat crew have a terrifying patrol mission in the early days of the war.',
        yearReleased: '1985',
        numberOfSeasons: '1',
        genre: 'Drama, Thriller, War',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNTBhZTQzZGEtZmRiOS00MzAwLWI5MzQtYTc1YTRhMzU3NzQ5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "It's a Sin",
        synopsis: 'A chronicle of four friends during a decade in which everything changed, including the rise of AIDS.',
        yearReleased: '2021',
        numberOfSeasons: '1',
        genre: 'Comedy, Drama, History',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BZWIyNGI1N2YtNzRlZS00NTFjLTk5MzMtZjQ5MTUwMTljZDZkXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Kota Factory',
        synopsis: "Dedicated to Shrimati SL Loney ji, Shri Irodov ji and Maanniya HC Verma ji, 'Kota Factory' is TVF's latest original. India's first 'Black and White' show highlights the problems present day IIT-JEE aspirants face in their day-to-day lives.",
        yearReleased: '2019',
        numberOfSeasons: '1',
        genre: 'Comedy, Drama',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNWFlNTY5MzEtNDhhMy00YTRmLWJhYjMtM2JjODkyMGRkZmUzXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Nathan for You',
        synopsis: "Nathan Fielder uses his business degree and life experiences to help real small businesses turn a profit. But because of his unorthodox approach, Nathan's genuine efforts to do good often draw real people into an experience far beyond what they signed up for.",
        yearReleased: '2013',
        numberOfSeasons: '4',
        genre: 'Documentary, Comedy',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BOGY4ZWM1MDUtZmM3MS00ZjAxLTkyYzMtMjgxODI1YzkzNGUwXkEyXkFqcGdeQXVyNzk2NzE5Mjk@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Narcos',
        synopsis: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
        yearReleased: '2015',
        numberOfSeasons: '3',
        genre: 'Biography, Crime, Drama, Thriller',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Century of the Self',
        synopsis: 'A documentary about the rise of psychoanalysis as a powerful means of persuasion for both governments and corporations.',
        yearReleased: '2002',
        numberOfSeasons: '1',
        genre: 'Documentary',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BYjllMDM4OTAtNWE3Ni00MjVjLTkwY2EtYjFjNmI0YTY4OTFhXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shows', null, {});
  }
};
