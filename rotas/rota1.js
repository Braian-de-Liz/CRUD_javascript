import { Router } from "express";
import db from "../conectar_db.js";

const router = Router();

router.post("/clientes", async (req, res) => {
    const cliente = req.body;

    try {
        db.inserir_User(cliente);
        res.sendStatus(201);
    }

    catch {
        res.status(400).json({
            status: "erro",
            menssagem: "não funcionou"
        });
    }



});




export default router;