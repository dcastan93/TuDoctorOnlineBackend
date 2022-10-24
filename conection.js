const mongoose = require("mongoose");
const userName = "dcastan93";
const passWord = "Sara0801";
const dataBase = "tuDoctorOnlineBD"

const URI = "mongodb+srv://"+userName+":"+passWord+ "@cluster0.dwiuaeo.mongodb.net/"+dataBase+"?retryWrites=true&w=majority";

const conectar = async()=>{
    /*try{
        await mongoose.connect(URI);
        console.log("atlas esta en linea")
    } catch{
        console.log("error en la conexion. "+ error)
    }*/
    
    mongoose.connect(URI)
    .then(()=>{console.log("atlas esta en linea")})
    .catch((error)=>{"error en la conexion. "+ error})
}

conectar();

module.export = mongoose;