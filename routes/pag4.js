module.exports= (app)=> {
    //renderizar a view pagina4.ejs
    app.get('/localizacao', (req,res)=> {
        res.render('pagina4.ejs')
    })

    //abrir o Google Maps
    app.get('/mapa',(req,res)=>{
        res.redirect("http://maps.google.com")
        
    })

}