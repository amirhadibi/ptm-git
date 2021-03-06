var mysql= require('mysql');

exports.handler = (event, context, callback) => {
	//console.log("context: " + JSON.stringify(context));
	//console.log("event: " + JSON.stringify(event));
	try {
		if (event.method == "POST") {
		} else if (event.method == "PUT") {
		} else if (event.method == "GET") {
			var connection = mysql.createConnection({
				host		: 'mergent-dev-cluster.cluster-ro-ceb0mxahsbfu.us-east-1.rds.amazonaws.com',
				user		: 'api_read',
				password	: '#ugWH`:2z(DwBP?p'
			});

			connection.connect();
	
		    var sql= 
		    			"SELECT DISTINCT id FROM " +
             "(SELECT " +
                "if(mod(length(substr(ROLLUPCODE, 1, position('000' in ROLLUPCODE)-1)), 3)=0, " +
                    "substr(ROLLUPCODE, 1, position('000' in ROLLUPCODE)-1), " +
                    "concat(substr(ROLLUPCODE, 1, position('000' in ROLLUPCODE)-1),'0') " +
                ") as id, " +
                "if(length(substr(ROLLUPCODE, 1, position('000' in ROLLUPCODE)-1))=3, " +
                        "'', " +
                        "if(mod(length(substr(ROLLUPCODE, 1, position('000' in ROLLUPCODE)-4)), 3)=0, " +
                            "substr(ROLLUPCODE, 1, position('000' in ROLLUPCODE)-4), " +
                            "substr(ROLLUPCODE, 1, position('000' in ROLLUPCODE)-3)) " +
                ") as pid " +
             "FROM WELLS.COMPANYACCOUNT a " +
                "JOIN WELLS.CHARTACCOUNT b ON a.MAPCODE = b.MAPCODE " +
                "JOIN WELLS.FORMTYPE c ON b.FORMCODE = c.FORMCODE " +
													"WHERE (COMPNUMBER = ?) AND (b.CHARTCODE = ?) and (a.ACCOUNTTYPECODE = ?)  and (c.FORMCODE = ?) " +
													"ORDER BY id, pid " +
          ") as t1";
                    
   var identifier= [event['COMPNUMBER'], event['CHARTCODE'], event['ACCOUNTTYPECODE'], event['FORMCODE']];

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
