const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/imgs', express.static('imgs'));
app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile('index.html',
    {
        root: __dirname
    });
});
app.get('/registro', function(req, res){
  res.sendFile('registro.html',
  {
      root: __dirname
  });
});
app.get('/inicio', (req, res) => {
  res.send('index')
});
app.get('/formulario', (req, res) => {
    res.send('formulario')
  });
// Require employee routes
const usuarioRoutes = require('./src/Routers/usuariosRouter')
// using as middleware
app.use('/api/v1/usuario', usuarioRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});