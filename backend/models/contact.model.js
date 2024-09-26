import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    message:String
},

{
    timestamps:true
})

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;