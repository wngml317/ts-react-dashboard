import mongoose from "mongoose";

mongoose.pluralize(null);

const BoardSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    title: {
        type: String,
        default: true
    },
    content: {
        type: String
    },
    createAt: {
        type: Date,
        require: true,
        default: new Date()
    }
});

export default mongoose.model("BOARD", BoardSchema);