import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    password: "mjVL5zkpexgdi1pCZnEH",
    host: "containers-us-west-54.railway.app",
    port: "5645",
    database: "railway"
});

export default pool;
