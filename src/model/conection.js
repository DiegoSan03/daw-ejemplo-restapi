const mysql = require('mysql');

const dataConection = {
    host: 'bzzdly20algjgyzyo3p6-mysql.services.clever-cloud.com',
    user: 'uv69cum5gafsqgiz',
    password: 'q1QSF7goA399DiGJ16zH',
    database: 'bzzdly20algjgyzyo3p6'
}

const pool = mysql.createPool(dataConection);

/*pool.getConection( function(conection) {
    pool.releaseConnection(conection);
    console.log('DB connected');
});*/

//const getConection = mysql.createConnection(dataConection);

/*mysqlConection.connect(function(error){
    if(error){
        console.log(error);
        return;
    }else{
        console.log('DB connected');
    }
});*/

module.exports = pool;