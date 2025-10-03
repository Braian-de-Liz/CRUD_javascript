import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const clientes = {
    id: 1,
    nome: 'elias',
    idade: 34,
    uf: 'RS'
};


async function inserir_User(clientee) {

    cliente.push(clientee);
}

async function selecionar_Clientes(id) {

    return clientes.find(c => c.id === id);

}

async function selecionar(cliente) {

}

async function conectar() {
    
    try { 
        const connetar = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            passoword: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        })
    }

    catch (error) { 
        console.error("não conectou certo", error.message);
        throw error;
    }


}

export { inserir_User, selecionar_Clientes, conectar };

