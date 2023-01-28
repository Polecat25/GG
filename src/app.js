import express  from "express";
import { pool } from "./db.js";
import { PORT} from "./config.js";

const app = express();

app.get("/", (req, res)=>{
    res.send("Many worts people")
});


app.get("/create", async (req, res)=>{
    const result = await pool.query('INSERT Into personas (Nombre,cantidadMatriculadas,periodo) values ("casa", 2, 2)');
    res.json(result);
    //res.send("Many worts people")
});

app.get('/ping', async (req, res)=>{
    const result = await pool.query(`SELECT * from personas`);
    //console.log(result);
    res.json(result[0]);
    //res.send("Many worts people")
});

app.listen(PORT)
console.log("Server en porto 3000 ", PORT);