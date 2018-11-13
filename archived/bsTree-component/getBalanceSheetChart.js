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
				"SELECT a.ORDERLINK, a.INDEXORDER, a.MAPCODE, c.DESCRIPTION, a.LITERAL, b.FORMCODE, b.LITERAL, b.ROLLUPCODE, b.CHARTCODE, a.DOUBLECOUNTED, a.NOPRINT " +
                "FROM WELLS.COMPANYACCOUNT a " +
                "JOIN WELLS.CHARTACCOUNT b ON a.MAPCODE = b.MAPCODE " +
                "JOIN WELLS.FORMTYPE c ON b.FORMCODE = c.FORMCODE " +
				"where (COMPNUMBER = ?) AND (b.CHARTCODE = ?) and (a.ACCOUNTTYPECODE = ?) and (c.FORMCODE = ?) " +
				"ORDER BY b.FORMCODE, b.ROLLUPCODE, a.ACCOUNTTYPECODE, c.INDEXORDER, a.INDEXORDER";
				
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

