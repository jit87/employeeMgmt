import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, required: true }
});

usuarioSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

export default mongoose.model('Usuario', usuarioSchema);