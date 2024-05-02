import { Schema, model } from "mongoose";

const documentSchema = new Schema({
    authorityName: { type: [String], required: true }, // Cambiado a un arreglo de cadenas
    documentType: { type: [String], required: true }, // Cambiado a un arreglo de cadenas
}, {
    timestamps: true,
    versionKey: false
});

export default model('doccatalog', documentSchema);
