const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            require: true,
            max: 50,
            unique: false
        },

        lastName:{
            type: String,
            require: true,
            max: 50,
            unique: false
        },

        email:{
            type: String,
            require: true,
            max: 50,
            unique: false
        },

        phone:{
            type: String,
            require: true,
            min: 10,
            unique: false
        },

        eventType:{
            type: String,
            require: true,
            max: 50,
            unique: false
        },
        additionalNotes:{
            type: String,
            require: false,
            max: 500,
            unique: false
        }

    }
);
module.exports=mongoose.model("contacts", ContactSchema)