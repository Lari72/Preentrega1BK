import express from "express";

const app = express();
const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) =>{
res.send("Hola")
})
app.post("/products", async (req, res) =>{
    res.send("Post")
    })
    
app.listen(PORT, () => {
    console.log(`Servidor Express Puerto ${PORT}`);
});
