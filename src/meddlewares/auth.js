const { verifyuser } = require("../lib/jwt")
const userModel = require('../model/users')

module.exports =  async (req, res, next) => {
    try {
        const admin = await adminModel.find()
        const { token } = req.cookies
        
        const { userId, name } = verifyuser(token)

        const fondAdmin = admin.find(e => e.password === userId && e.name === name)
        
        if (!fondAdmin) {
            res.redirect("/api/user/login")
            return
        }
        next()
    } catch (error) {
        res.redirect("/api/user/login")
    }
}