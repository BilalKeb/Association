

const express = require("express")
const app = express()


// je recupere mon ficjier Json
let associations = require("../association.json")


app.get ('/association' ,(req , res) => {
 res.json(associations)   
})

app.get('/association/:name', (req , res) =>{
    const  {name} = req.params
    const nameAssociation = nameAssociations.find(nameAssociation.name === name)
    res.json(nameAssociation)
})