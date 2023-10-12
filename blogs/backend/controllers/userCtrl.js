import User from '../models/userModel.js';
import bcrpyt from "bcrypt";
import jwt from 'jsonwebtoken';





export const register = async(req,res) => {
    const  { username, email, password } = req.body
    try {
       
       
        const hashedPassword = await bcrpyt.hash(password,10); 
        const newUser = new User ({username,email,password:hashedPassword });
        await newUser.save();
        res.json({message: "User created sucessfully"})

    }catch(err) {

        console.log(err);

    }
    
   
};


export const login = async(req,res) => {

    const { email , password } = req.body;
    try{
    
    const user = await User.findOne({ email });
    

    if(!user) {
        return res.json({message:"emailerr"})
    }

    const isPasswordVaild = await bcrpyt.compare(password, user.password)

    if(!isPasswordVaild) {
    return res.json({message:"passerr"})
    }
    
    const data = {
        user:{id:user.id}
    }

    const authToken = jwt.sign(data,"secret")
    return res.json({message:"success", authToken:authToken })
        
    
    }catch(err) {
        console.log(err);

    }
   
};


