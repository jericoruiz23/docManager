import User from '../models/User'
import jwt  from 'jsonwebtoken'
import config from '../config';
import Role from '../models/Role';

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;

    try {
        const encryptedPassword = await User.encryptPassword(password);
        const newUser = new User({
            username,
            email,
            password: encryptedPassword // Asigna la contraseña encriptada al campo 'password'
        });

        if (roles){
            const foundRoles = await Role.find({name:{$in:roles}})
            newUser.roles = foundRoles.map(role => role._id)
        }else{
            const role = await Role.findOne({name:"user"})
            newUser.roles=[role._id]
        }   

        const savedUser = await newUser.save();
        console.log(savedUser);

        const token = jwt.sign({id:savedUser._id},config.SECRET,{
            expiresIn: 86400 //24horas
        })

        res.status(200).json({token})

    } catch (error) {
        // Manejar el error
        console.error(error);
        res.status(500).json({ error: 'Error al crear un nuevo usuario' });
    }
};

export const signIn = async (req, res) => {
    const userFound = await User.findOne({email:req.body.email}).populate("roles")
    if(!userFound) return res.status(400).json({message:"User not found"})

    const matchPassword = await User.comparePassword(req.body.password,userFound.password)
    if(!matchPassword) return res.status(401).json({token:null, message:'Invalid Password'})

    const token = jwt.sign({id:userFound._id}, config.SECRET,{
        expiresIn: 86400
    })
    res.json({token})

}