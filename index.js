//expressebibliotecas
const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
app.use(cors());
/*rotas*/
/*inicial*/ 




app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/download', (req,res)=>{
    var URL = req.query.URL;
    
    
   res.header('content-Disposition', 'attachment; filename="teste.mp4"');
   ytdl(URL, {format: 'mp4'}).pipe(res);
});




app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/'))

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));


/*ultima linha*/
app.listen(777, ()=> {
    console.log('server rodando na porta 777')
})