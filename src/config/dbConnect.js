import mongoose from "mongoose";

mongoose.connect('mongodb+srv://RobsonMaestro:123@nodecursoalura.mlqzasr.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;