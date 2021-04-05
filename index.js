const express=require('express');
const app= express();
const Productos = require('./api/productos');
const PORT=3000;

const productos=[
    
]
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');





app.post('/api/productos/guardar', (req, res) => {
    const { title, price, thumbnail } = req.body;
    const producto = { title, price, thumbnail };
    productos.push(producto);
    res.render('tablaProductos', {productos});
})

app.get('/',(req,res)=>{
   res.render('home.pug');
  
});


app.post('/api/productos/guardar', (req, res) => {
    const { title, price, thumbnail } = req.body;
    const producto = { title, price, thumbnail };
    productos.push(producto);
    res.render('tablaProductos', {productos});
})


const server=app.listen(PORT,()=>{console.log(`Escuchando puerto: ${PORT}`)})
.on('error',error=>{console.log(`Error:${error}`)});



