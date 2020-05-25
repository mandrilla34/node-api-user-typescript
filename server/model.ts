import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        nickname: { type: String, required: true, unique: true },
        whatsapp: { type: String, required: true, unique: true },
        createdAt: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
    }
);

export default mongoose.model('users', UserSchema);
