const express = require("express")
const app = express()
const router = require('./modules')
const mongo = require('./lib/mongo')
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

// create port
const PORT = process.env.PORT ||4000;


; (async () => {
    try {
        await mongo()

        app.set('view engine', 'ejs');
        app.use(cookieParser())
        app.use(express.json())
        app.use(cors())
        app.use(bodyParser.urlencoded({extended:true}))
        app.use('/api/',router)
        app.use('/*', (_, req) => {
            req.sendStatus(404)
        })

    } finally {
        //listen
        app.listen(PORT, ()=>{
           console.log(`server is running on port: http://localhost:${PORT}`);
})
    }
})()




