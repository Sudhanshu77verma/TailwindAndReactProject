import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import {errorhandler} from '../utils/error.js'
import jwt from "jsonwebtoken";
  export const signup = async(req,res,next)=>{
    // fetch from req body 

      const {email,password,username}=req.body; 

      // hashed password for security purpose 
      const hashedpassword=bcryptjs.hashSync(password,10); 
      // create a new user  

      // we can also use create 

      const newuser=new User({username,email,password:hashedpassword});
     try{
      await newuser.save(); 
      res.status(201).json({
        success:"true",
        message:"user created successfully",
      })
        

     }
     catch(error)
     {
      next(error);
     }
     
   
  };


  export const signin =async(req,res,next)=>{
    try{
           const {email,password}=req.body;

           const validUser=await User.findOne({email});

           if(!validUser)
           {
            return next(errorhandler(404,'User not found'));

           }
           const vailidPassword=  bcryptjs.compareSync(password,validUser.password);

           if(!vailidPassword)
           {
            return next(errorhandler(401,'Wrong credentials'));
           } 

     const token = jwt.sign({id:validUser._id },process.env.JWT_SECRET)
     //removing password 
     const {password:pass,...rest}=validUser._doc;
     const options={
      httpOnly:true
     };
     res.cookie('access_token',token,options)
     .status(200).json(
      rest
     );
    }
    catch(error)
    {
      next(error);
    }
  }