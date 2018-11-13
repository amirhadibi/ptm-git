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
			"SELECT a.REPORTDATE, a.FINANCIALREPORTTYPE, b.AMOUNT, b.DOUBLECOUNTED " +
			"FROM WELLS.FINANCIALREPORT a " +
			"JOIN WELLS.FINRPTACCOUNT b ON b.COMPNUMBER = a.COMPNUMBER AND b.COLUMNLINK = a.COLUMNLINK  " +
			"WHERE a.COMPNUMBER= ? AND a.CHARTCODE= ? AND b.ORDERLINK = ? AND b.AMOUNT IS NOT NULL AND a.REPORTDATE > ( " +
            "SELECT DATE_ADD(MAX(a.REPORTDATE), INTERVAL -24 MONTH) " +
            "FROM WELLS.FINANCIALREPORT a JOIN WELLS.FINRPTACCOUNT b ON b.COMPNUMBER = a.COMPNUMBER AND b.COLUMNLINK = a.COLUMNLINK " +
            "WHERE a.COMPNUMBER=? AND a.CHARTCODE=? AND b.ORDERLINK=? AND b.AMOUNT IS NOT NULL) " +
			"ORDER BY a.REPORTDATE DESC";

            var identifier= [event['COMPNUMBER'], event['CHARTCODE'], event['ORDERLINK'],
            	event['COMPNUMBER'], event['CHARTCODE'], event['ORDERLINK']];

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

