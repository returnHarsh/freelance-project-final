import jwt from "jsonwebtoken";

const generateAndSetJWTtoken = async(user , res)=>{
    const token =  jwt.sign({user} , process.env.JWT_SECRET_KEY , {expiresIn : "1d"});

    res.cookie("jwt", token, {
        maxAge: 3600000,  // 1 hour expiration
        secure: true,     // Requires HTTPS connection
        httpOnly: true,   // Prevents client-side access
        sameSite: 'strict' // Restricts when the cookie is sent in cross-site requests
    });
    return token;
}

export default generateAndSetJWTtoken;