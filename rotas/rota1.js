import { Router } from "express";
import { conectar } from "../conectar_db.js";

const router = Router();

router.post("/clientes", async(req, res) => {
    const cliente = req.body;


});




export default router;