const { signuser } = require('../../lib/jwt');
const usermodel = require('../../model/users')

module.exports = {
    GET: async (req, res) => {
        res.render("registor")
    },
    POST: async (req, res) => {
        try {

            const newUsermodel = new usermodel(req.body);
                
            await newUsermodel.save();

            const token = signuser({ userId: req.body.password, name: req.body.name })
            res.cookie("token", token)
            res.render("index")
            // res.status(200).send({
            //     stutus:200,
            //     token: token,
            //     message:"Registered successfully"
            // })
        } catch (error) {
            res.status(400).send({
                status: 400,
                error: "Bad request"
            })
        }
    }
}