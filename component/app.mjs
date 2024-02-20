import express from "express";
import pkg from "pg";
import path from "path";

const { Client } = pkg;
const __dirname = path.resolve(path.dirname(""));

const app = express();
const port = 3000;


const options = {
    root: path.join(__dirname)
};


const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Chuka',
    port: 5432
}

const client = new Client(dbConfig);

client.connect().then(() => {
    console.log("Connected to PostgreSQL");
}).catch((err) => {
    console.log("Error connecting to PostgreSQL");
    console.log(err);
})

app.use(express.json());
app.listen(port, () => {
    console.log("Server is running on port " + port);
})

// app.get("/" , async (req , res) => {
//     try {
//         res.sendFile()
//     } catch(err) {
//         cobsole.error(err);
//     }
// })

app.get("/products", async (req, res) => {
    try {
        const data = await client.query("SELECT * FROM public.products");
        res.status(200).json(data.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})





