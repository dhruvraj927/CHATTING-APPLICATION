import config from './config.js'
import pg from 'pg';
const {Pool} = pg;

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: config.pg_name,
  password: config.postgrs_password,
  port: config.pg_port,
});


pool.connect()
    .then(()=>{
        console.log("Connected to the PostgreSQL database");
    })
    .catch((err)=>{
        console.error("Error connecting to the PostgreSQL database", err);
    });

export default pool;