
const sql = require('mssql/msnodesqlv8')

config = {
  server: 'localhost',
  user: 'user',
  password: 'pass',
  options: {
    trustedConnection: false // !!! If used while connected to ActiveDirectory, may cause auth issues. Try with true.
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

async function query(queryString) {
  try {
    const pool = await poolPromise
    const result = await pool.request()
      .query(queryString);
    return (result);
  } catch (error) {
    return (error);
  }
}

async function execute(procedure, sqlParams = null, outputParams = null) {
  try {
    const pool = await poolPromise;
    const result = await pool.request();
    if(sqlParams)
    {
      sqlParams.forEach(param => {
        result.input(param.name, param.value);
      });
    }

   
    if(outputParams)
    {
      outputParams.forEach(outparam => {
        result.output(outparam.name, outparam.value);
      });
    }
    
    return await result.execute(procedure);

  } catch (error) {
    return (error);
  }
}

module.exports = {
  query, execute, sql
}