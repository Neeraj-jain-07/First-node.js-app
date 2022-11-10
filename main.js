const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const hbs = require('hbs')


// static folder
app.use(express.static('public'))

// paths
const templatesPath = path.join(__dirname + '/templates/views')
const partialsPath = path.join(__dirname + '/templates/partials');

// set view engine
app.set('view engine', 'hbs')
app.set('views', templatesPath);


// hbs setting
hbs.registerPartials(partialsPath);


//get requiests
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})



// listening server
const server = app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`)
})