import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const FichajeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    timestamp: { type: String, required: true }
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

export default mongoose.model('Fichaje', FichajeSchema);