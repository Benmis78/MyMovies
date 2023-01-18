const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register.js")
const {register} = require("../controllers/register");

router.post('/', registerController.register)

router.post('/api/utilisateurs', (req, res) => {
    const { email, pwd } = req.body;
    // Utiliser les données pour créer un enregistrement dans la base de données
    db.query('INSERT INTO utilisateurs (email, pwd) VALUES (?, ?)', [email, pwd], (error, results) => {
        if (error) {
            res.status(500).json({ error });
        } else {
            res.status(201).json({ results });
        }
    });
});

module.exports = router;
