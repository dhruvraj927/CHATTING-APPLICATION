// here all query write 
import pool from '../config/connectdb.js';

// ---------------------------------------login-----------------------//

export async function check(username,password){
    try{
        const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2',
             [username, password]);
        return result;

    }catch(err){
        console.log("databse error -> " , err);
        throw err;
    }
}

export async function register(username,password){
    try{
        const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
             [username, password]);
        return result;
    }
    catch(err){
        console.log("databse error -> " , err);
        throw err;
    }
}