import "dotenv/config";
import express from "express";
// import { router } from "./src/router/indexrouter.js";
import axios from "axios";

const app = express();

// app.use("/", router);

app.get("/soyTA2", async (req, res) => {
  try {
    const { data } = await axios(
      "https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json"
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Algo salió mal" });
  }
});
app.listen(3000, () => {
  console.log(`Servidor esucuchando en el puerto 3000`);
});

export default app;
