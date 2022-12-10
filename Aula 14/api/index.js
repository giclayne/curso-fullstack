const express = require ("express")
const app = express ()

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//rotas - endpoint
        //get
app.get('/', (req,res) =>{
    res.status(200).json({message: 'Primeira rota criada com sucesso'})
})
        //post
app.post('/createproduct', (req,res)=>{
    const name = req.body.name
    const price = req.body.price

    if(!name){
        res.status(422).json({message: "O campo nome é obrigatorio"})
        return
    }

    console.log(name)
    console.log(price)
    //status
    res.status(201).json({message: `O produto ${name} custa ${price}`})
})


app.listen(3000)