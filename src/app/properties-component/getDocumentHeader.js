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
	
            var sql= "SELECT columnid, DATE_FORMAT(reportdate, '%Y-%m-%d') reportdate, reporttype, reportdate_text, " 
                    + "multiplier, auditor, currencycode, caption, CONSOLIDATED, FYECHANGE, PERIODFISCALYEAR, "
                    + "SOURCETYPEID, PRINCIPLETYPEID "
                    + "FROM PRAEDEAWELLS.PTMDOCUMENTHEADER a WHERE a.DOCUMENTID = ? AND a.FORM = ? ORDER BY a.COLUMNID";
                    
            var identifier= [event['DOCUMENTID'], event['FORM']];

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
