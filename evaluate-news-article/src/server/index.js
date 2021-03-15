// TODO: Configure the environment variables

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

// TODO add Configuration to be able to use env variables
require('dotenv').config();

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const path = require('path')
const MEAN_CLOUD_API_KEY = process.env.API_KEY;
const express = require('express');
const app = express();
const Cors = require('cors');
const bodyParser = require('body-parser')
const axios = require('axios')

// TODO: Create an instance for the server
// TODO: Configure cors to avoid cors-origin issue
// TODO: Configure express to use body-parser as middle-ware.
// TODO: Configure express static directory.
app.use(Cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(express.static(path.resolve('dist')))

app.get('/', function (req, res) {
     res.sendFile(path.resolve('dist/index.html'))
})
// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-url',(req, res) => {
    try {
       // 1. GET the url from the request body
        let {url} = req.body;
       // 2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
        const URL = `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
        let holderdata  = null
        axios.get("https://api.meaningcloud.com/sentiment-2.1&key=2bb45cad70e6fba12f092c41c345a228&url=www.google.com&lang=en").then(data=>{
            const {score_tag,agreement,subjectivity,confidence,irony} = data.data;
            const text = data.data.sentence_list[0].text
            let responseObject  = {text,agreement,subjectivity,confidence,irony,score_tag}
            res.json(responseObject)
        })

        /* TODO:
   
    
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
  */
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
module.exports = app ;
