require("dotenv").config();

const PORT = process.env.PORT;
const app = require("./src/server");

app.listen(PORT | 3000, () => {
  console.log(`Servidor esucuchando en el puerto ${PORT}`);
});
