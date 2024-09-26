import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';



export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const hashPassword = await bcryptjs.hash(password, 10)

        const newUser = new User({ 
            name : name, 
            email : email, 
            password : hashPassword })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully',
            user: {
                _id : newUser._id,
                name: newUser.name,
                email: newUser.email
            }
         })
    } catch (error) {
        console.error("Error: ",error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    }
};






export const login = async (req , res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password , user.password);
        if (!isMatch || !user) {
            return res.status(400).json({ message: 'Invalid username or password' })
        }
        else{
            return res.status(200).json({ 
                message: 'User logged in successfully',
                user : {
                    _id : user._id,
                    name : user.name,
                    email : user.email
                }
             })
        }        
    } catch (error) {
        console.error("Error: ",error.message)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}