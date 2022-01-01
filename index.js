
const express = require('express');
const app = express();
const port = 5000
// const cors=installer
// je recupere mes routes 
const associationRoutes = require ("./Routes/association")

app.use(express.json())

app.use('/association' , associationRoutes)


app.listen (port, () => {
    console.log('Server started on port: ' + port);
})

//  Un route qui retournera le nom des 3 associations

// - Une route qui retournera une seule association avec:
//     - une image
//     - le nom
//     - une description de l’association
//     - utiliser un middleware qui vérifie que l'association existe bien

// - Une route pour créer un message avec dans le message:
//     - Un nom
//     - Un contenu de message
//     - Une date
//     - L'association concernée
//     - Enregistrer les messages dans un fichier json
//     - utiliser un middleware qui vérifie que l'association existe bien

// Un route qui retournera la liste de tous les messages importés par ordre du plus récent au plus anciens