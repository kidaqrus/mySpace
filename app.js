const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
var compression = require('compression');
const path = require('path');
var helmet = require('helmet');


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(compression());
app.use(helmet());

app.get('/',  (req, res) => {
  
  
  return res.render('index')
})

app.get('/about', async (req, res) => {
  const about_author = await aboutBlogger.find().sort({ date_time_track: 'desc' })
  return res.render('about_views/about', { about_author: about_author })
})
// for linking css/other static assets
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log("Server started successfully")
})