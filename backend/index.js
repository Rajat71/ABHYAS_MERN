import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  "mongodb+srv://navin-admin:September1392@cluster0.u1nd2hc.mongodb.net/Abhyas",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = new mongoose.model("user", userSchema);

//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Login Successfully",user: user})
            }else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"User already registered"})
    }
    else{
        const user = new User({
            name,
            email,
            password,
          });
          user.save((err) => {
            if (err) {
              res.send(err);
            } else {
              res.send({ message: "Successfully Registered, Please Login Now !" });
            }
          });
    }
  })

  
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});
