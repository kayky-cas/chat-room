import mongoose = require('../connect');

const MessageSchema = new mongoose.Schema({

    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    

}, {timestamps: true});

const Message = mongoose.model("Message", MessageSchema);

export = Message;