const express = require('express')
const methodOverride = require('method-override')
const app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.get('/',  (req, res) => {
  
  
  return res.render('index')
})

// for linking css/other static assets
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log("Server started successfully")
})