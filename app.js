 const express = require("express")
 const app = express()
 const PORT = 4000
 app.use(express.static('assets'))
 const bodyparser= require("body-parser")
const  bodyParserMiddleWare= bodyparser.urlencoded({extended: true})
const path = require("path")
app.use(express.static(path.join(__dirname + '/')));
 //const dataRoute = require("./routes/data.route.js")
 //app.use(dataRoute)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); 
const booking=require("./routes/booking")
app.use(booking)



 app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
  })
  app.get('/contact', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "/views/contact.html"))
  })
  app.get('/faq', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "/views/faq.html"))
  })
  app.get('/login', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
  })

  app.get('/details', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "/veiws/details.html"))
  })


 app.listen(PORT, ()=>{
     console.log(`working on http://localhost:${PORT}`)
 })