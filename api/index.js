const express = require("express");
const app =express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
// var cors = require("cors");
const cors = require('cors');
const path = require('path');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

dotenv.config();

app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))
mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));


const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, "images");
},
fiilename:(req,file,cb) => {
    cb(null,"hi.jpeg");
},
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) => {
    res.status(200).json("File upload complete.");
});

// app.use(cors());
app.use(cors(corsOptions));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen("7000", ()=>{
    console.log("Backend is running.");
})