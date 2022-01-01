const express = require("express")
const app = express()


// je recupere mon ficjier Json
const associations = require("../association.json")


const checkingAssociation = (req , res , next) => {
    const { name } = req.params

    const association = associations.find (element => element.name === name)
        
        if (association) {
            next()
        } else {
            res.status(404).send("Can Not get association")
        }
     }

app.get ('/association' ,(req , res) => {
 res.json(associations)   
})

app.get('/association:name', checkingAssociation,(req , res) =>{
    const  {name, image , slogan, decription} = req.params
    const nameAssociation = nameAssociations.find(nameAssociation.name === name , image , slogan, decription)
    res.json(nameAssociation)

})

