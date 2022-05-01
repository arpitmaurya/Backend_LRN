 let express = require('express')
 let app = express()
 app.listen(3000)


 // Over Here In Express We Dont Have to define Status code like in Node Server 
 // (Automatic)express pata kr k send kr deta (wo bhi some case mai and some case mai
 // likhna pdta hn )
 
 // This Is Routing ->

 app.get('/', (req, res) => {

                // Method_1 => Full Path
 res.sendFile('./views/home.html', { root: __dirname });
 
 });
 app.get('/about', (req, res) => {

 // For sending HtmlFile -> res.sendFile(full_path) and for Html code 
 // res.send(<h1>HI<h1 />) ----- Over here we dont set setHeader and res.en()
 // apne aap yaha ho jata hn as compare to Node 

 app.get('/', (req, res) => {
 res.sendFile('./views/home.html', { root: __dirname });
 });
 
 res.sendFile('/home/arpit/Documents/arpit-root/Backend/views/about.html');
               // Method_2 => Full Path
 });

 // Redirect
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404 and MiddleWare
app.use((req, res) => {
 
  // In this we have to set Status code -> Express 200 dega (just we are sending file)
  // but konsa file hn nhi pata (404)
  // To set status code there are two Ways
  // One Like Node way
  // res.statusCode = 404
  // Two New One With chaning
 res.status(404).sendFile('./views/404.html', { root: __dirname });

})
 