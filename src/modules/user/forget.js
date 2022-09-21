


module.exports = {
    GET: async (req, res) => {
        res.render("forget")
    },
    POST: async (req, res) => {
        try {
            const {gmail} = req.body
            
            res.send("gmail")
        } catch (error) {
            res.status(400).send({
                status: 400,
                error: "Bad request"
            })
        }
    }
}