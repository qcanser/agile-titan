import pg from 'pg';
const { Pool } = pg;

const connectionString =
    "postgresql://postgres:mjVL5zkpexgdi1pCZnEH@containers-us-west-54.railway.app:5645/railway";

const pool = new Pool({
    connectionString,
});

export default pool;
