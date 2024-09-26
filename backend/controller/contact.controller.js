import Contact from "../models/contact.model.js";

export const submit = async (req , res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Contact({
      name: name,
      email: email,
      message: message,
    });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully',
        user: {
            _id : newMessage._id,
            name: newMessage.name,
            email: newMessage.email
        }
     })
  } catch (error) {
    console.error("Error: ",error.message)
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
