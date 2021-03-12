# ShowMe

<!-- Brief explanation of what the app is and does
Link to live site
Link to wiki docs

Discussion of technologies used
Discussion of two features that show off the team's technical abilities
Discussion of both challenges faced and the way the team solved them
Code snippets to highlight the best code -->

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

Some of the problem that were encountered when trying to implement this
