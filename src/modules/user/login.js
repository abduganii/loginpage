const { signuser } = require('../../lib/jwt');
const usermodel = require('../../model/users')

module.exports = {
    GET: async (req, res) => {
        res.render("login")
    },
    POST: async (req, res) => {
        try {
            const user = await usermodel.find()
            const {gmail, password,name } = req.body
            const sortUser = user.find(e =>e.name === name && e.password === password && e.gmail===gmail)
        
            if (!sortUser) {
                res.redirect("/api/user/login")
                return
            }
            
            const token = signuser({ userId: req.body.password, name: req.body.name })
            res.cookie("token", token)
            res.render("index")
            // res.status(200).send({
            //     stutus:200,
            //     token:token
            // })
        } catch (error) {
            res.status(400).send({
                status: 400,
                error: "Bad request"
            })
        }
    }
}


