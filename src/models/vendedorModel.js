import { Schema, model } from 'mongoose';

const vendedorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    specialties: [{
        type: Array,
        required: true
    }]
})

export default model('Vendedor', vendedorSchema);