import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {

    const { fullName, email, password } = req.body;

    try {
        if(!fullName || !email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        //hash password
        //123456 => wefbfb487weh3w83bfw34ffwidn
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be atleast 6 characters long" });
        }
        const user = await User.findOne(({ email }));

        if (user) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })

        if (newUser) {
            //generate jwt token
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            })
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }

    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({message:
                "Invalid credentials"})
            }
        } catch{

        }
    }


export const logout = (req, res) => {
    res.send("logout route");
}