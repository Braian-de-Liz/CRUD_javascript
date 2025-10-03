import express from 'express';
import dotenv from 'dotenv';
import db from './conectar_db.js';
import rota_salvar_clients from './rotas/rota1.js'

dotenv.config();
const app = express();
app.use(express.json());





app.use("/api", rota_salvar_clients);



app.listen(process.env.PORT || 3250, () => {
    console.log("rodando com node que é melhor que php");

});