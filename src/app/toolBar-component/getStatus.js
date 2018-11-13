var mysql= require('mysql');

exports.handler = (event, context, callback) => {
try {
    if (event.context['http-method'] == "GET") {
        var connection = mysql.createConnection({
            host		: 'test.cluster-ceb0mxahsbfu.us-east-1.rds.amazonaws.com',
            user		: 'adibia',
            password	: 'w+:,"VtLz5b$TsZW'
        });
        var sql= "SELECT * " +
                "FROM PRAEDEAWELLS.PTMDOCUMENTSTATUSTYPE " +
                "WHERE STATUS = ?";
        var identifier= [event.params.querystring['status']];

        connection.query(sql, identifier, function(err, rows, fields) {
            if (err) {
            /* mySQL Error */
                connection.end();
                callback(err);
            } else {
            /* Statement completed, let's see what we've got */
                connection.end();
                callback(null, rows);
            }
        });
    } else if (event.context['http-method'] == "PUT") {
    } else if (event.context['http-method'] == "POST") {
        var connection = mysql.createConnection({
            host		: 'test.cluster-ceb0mxahsbfu.us-east-1.rds.amazonaws.com',
            user		: 'adibia',
            password	: 'w+:,"VtLz5b$TsZW'
        });

        connection.connect();
            var sql= "UPDATE PRAEDEAWELLS.PTMDOCUMENTSTATUSTYPE " +
                    "SET DESCRIPTION=? "+
                    "WHERE STATUS= ?";
            var identifier= [event.params.querystring['description'],
                    event.params.querystring['status']];
                    
        connection.query(sql, identifier, function(err, rows, fields) {
            if (err) {
                /* mySQL Error */
                connection.end();
            callback(err);
            } else {
                /* Statement completed, let's see what we've got */
                connection.end();
                callback(null, rows);
            }
        });
    }
} catch (err) {
callback(err);
}    
};
