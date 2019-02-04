const express = require('express')
const app = express()
const hbs = require('hbs')

app.use(express.static(__dirname + '/public'));
//Express HBS engines
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Alonso'
    })
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
});