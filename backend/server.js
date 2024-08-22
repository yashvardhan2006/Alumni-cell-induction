import express from 'express';
import { connectDB } from "./config/db.js";
import senderuser from "./models/send.js";
import cors from "cors";
connectDB();
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/senddata', async (req, res) => {
    try {
            const send = new senderuser({
            Fname: req.body.Fname,
            Lname: req.body.Lname,
            Email: req.body.Email,
            Contact: req.body.Contact,
            Describe:req.body.Describe

        })
        await send.save();
        res.send({status:"True"})
        } catch (err) {
            console.error(err)
            res.send({error:err.name})
        }

    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})