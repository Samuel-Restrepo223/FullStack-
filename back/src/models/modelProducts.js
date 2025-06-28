import {Schema, model} from 'mongoose';

const esquemaProducto = new Schema ({
    modelo:{type: String, requiered: true},
    material: {type: String, requiered: true},
    precio: {type: Number, required: true},
    color:{type: String, requiered: true},
    imagen:{type: String, requiered: true},
},
{
    versionKey: false,
    timestamps: true,
});

export default model('productos', esquemaProducto)