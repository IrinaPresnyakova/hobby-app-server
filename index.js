const express = require ('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_reviews_db'
})

app.get('/', (req, res) => {
    const sqlInsert = 
        "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('from dusk to dawn', 'good movie')"
    db.query(sqlInsert, (err, result) => {
        res.send('GET US SOME MOVIES')
    })
    
})

app.listen(3307, ()=> {
    console.log("Running on port 3307");
})