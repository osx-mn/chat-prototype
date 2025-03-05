require('dotenv').config();
const express= require('express');
const connectDB= require('./src/config/db');
const messageRoutes= require('./src/routes/messageRoutes')
const cors= require('cors');

const app= express();
const PORT= process.env.PORT;

connectDB();

app.use(cors ({ origin: 'http://localhost:5173' }))
app.use(express.json());
app.use('/messages', messageRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`);
})