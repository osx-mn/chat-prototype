require('dotenv').config();
const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');

const app= express();
const PORT= process.env.PORT;

app.use(cors ({ origin: 'http://localhost:5173' }))
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("conectado con mongodb"))
.catch(err => console.log("Error al realizar la conexión con mongodb: ",err));

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`);
})