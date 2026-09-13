// write code for the acces the .env file url or check it is presernt or not.


import dotenv from 'dotenv'

dotenv.config();

if(!process.env.pg_port){
    throw new Error("pg_port is not defined in the .env file"); 
}
if(!process.env.pg_database){
    throw new Error("pg_database is not defined in the .env file"); 
}
if(!process.env.pg_password){
    throw new Error("pg_password is not defined in the .env file"); 
}

const config = {
    PORT: process.env.PORT || 5000,
    postgrs_password:process.env.pg_password,
    pg_name:process.env.pg_database
}

export default config;