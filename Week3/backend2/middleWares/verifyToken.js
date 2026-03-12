import jwt from "jsonwebtoken"
const { verify } = jwt

export function verifyToken(req, res, next) {

    //token verification
    const token = req.cookies?.token;

    //if token is undefined
    if (!token) {
        return res.status(401).json({ message: "please login" })
    }

    try {

        //verify token
        const decodeToken = verify(token, 'abcdef')

        //attach user info
        req.user = decodeToken

        next();

    } catch (err) {
        return res.status(401).json({ message: "session expired. please relogin" })
    }
}