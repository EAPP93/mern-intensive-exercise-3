import mongoose from 'mongoose'

export const katasEntity = () => {
    const katasSchema = new mongoose.Schema(
        {
            name: String,
            description: String,
            level: Number, // (nivel de dificultad numérico)
            User: String, // (id asociado al usuario que lo ha creado)
            date: Date, // (Fecha de creación del reto)
            Valoration: Number, // Valoration  (sobre 5, valor numérico)
            chances: Number // (número de intentos realizados por otros usuarios)
        }
    )
    return mongoose.model('Katas', katasSchema)
}
