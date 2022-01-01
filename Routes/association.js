const express = require("express")
const app = express()

app.use(express.json())
// je recupere mesfichier Json 
let associations = require("../association.json")
let messageAssociation = require ("../Message-Association.json")

// Middelware pour verifier si l'association existe alors on fait  next si non return erreur status(404)
const checkingAssociation = (req , res , next) => {
    const { name } = req.params

    const association = associations.find (element => element.name === name)
        
        if (association) {
            next()
        } else {
            res.status(404).send("Can Not get association")
        }
     }

     const sameAssociation =(req, res, next) => {
       
        const theSameAssociation = associations.find(association => association.name === req.body.association.toLowerCase())
        if (theSameAssociation) {
            next()
        } else {
            res.status(404).send("Not founded ")
        }
    }

    //  route pour les 3 associations 
app.get ('/association' ,(req , res) => {
 res.json(associations)   
})
// route pour une association avec Middelware
app.get('/association:name', checkingAssociation,(req , res) =>{
    const  {name} = req.params
    const oneAssociation = associations.find(association => association.name === name )
    res.json(nameAssociation)
    res.status(200).json(oneAssociation)

})
// Voir les messages ajouter
app.get('/association/:name/messages',(req , res) =>{
    res.json(messageAssociation)

})

app.post("/association" ,sameAssociation, (req, res) =>{
    const addMessage = {...req.body}

    // Envoie du nouveua message dans le fichier Json
        messageAssociation =  [...messageAssociation, addMessage]
        res.status(200).json (messageAssociation)


})


module.exports = app