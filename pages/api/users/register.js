import User from '../../../models/User'
import dbConnect from '../../../utils/dbConnect'
import {StatusCodes} from 'http-status-codes'
import bcrypt from 'bcryptjs'

const handler = async (req,res)=> {
    await dbConnect();
    const body = req.body;
    const user = await User.findOne({ email:body.email })
    if(user){
        return res.status(StatusCodes.UNAUTHORIZED).json({message:"User already exists"})
    }
    try {
        const newUser = await new User(body)
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10)
        // create hash
        newUser.password = await bcrypt.hash(newUser.password,salt)
        newUser.confirmPassword = await bcrypt.hash(newUser.password,salt)
        await newUser.save();
        res.status(StatusCodes.CREATED).json({message:"User Created"})
    } catch (error) {
        console.log(error)
    }
}

export default handler;