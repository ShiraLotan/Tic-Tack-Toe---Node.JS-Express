var mysql= require('promise-mysql');

var myDBhelper = {
    pool: null,
    connect: function () {
        var pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'XO',
            connectionLimit: 10
          });
          this.pool=pool;
          console.log('connected to db');
    } 
}

module.exports= myDBhelper