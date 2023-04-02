import mongoose from "mongoose";

mongoose.pluralize(null);

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    done: {
        type: Boolean,
        require: true,
        default: false
    },
    createAt: {
        type: Date,
        require: true,
        default: new Date
    }
});

export default mongoose.model("TODO", TodoSchema);