import express from 'express';
import {check} from '../querry/querry.js';
const router = express.Router();


router.post('/register', async (req,res)=>{
    try{
        const {username,password} = req.body;
        const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
             [username, password]);
        res.status(201).json({
            message:"user registered",
            user:result.rows[0]
        })
    }
    catch(error){
        console.error("Error occurred while registering:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

router.post('/login',async (req,res)=>{
    try{
        const {username,password} = req.body;
        const result = await check(username,password);


        if(result.rows.length>0){
            console.log("User found");
            res.status(200).json({
                message:"user find",
                user:result.rows[0]
            })
        }else{
            res.status(401).json({
                message:"user not found"
            })
        }



    }catch(error){
        console.error("Error occurred while logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;