// write code for the acces the .env file url or check it is presernt or not.


import dotenv from 'dotenv'

dotenv.config();

if(!process.env.MONGO_URI){
    console.log("MONGO_URI is not defined in the .env file");
    throw new Error("MONGO_URI is not defined in the .env file");
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 5000,
}

export default config;