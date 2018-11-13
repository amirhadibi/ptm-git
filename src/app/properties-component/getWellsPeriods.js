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
	
            // Get Wells Period for Matching use based on the form code

            var sql= "SELECT COLUMNLINK, DATE_FORMAT(REPORTDATE, '%Y-%m-%d') REPORTDATE, FINANCIALREPORTTYPE, CURRENCYCODE, MULTIPLIERCODE "
                    + "FROM ("
                    +     "SELECT DISTINCT a.COLUMNLINK, a.REPORTDATE, a.FINANCIALREPORTTYPE, a.CURRENCYCODE, a.MULTIPLIERCODE "
                    +     "FROM WELLS.FINANCIALREPORT a "
                    +         "JOIN WELLS.FINRPTACCOUNT b ON a.COMPNUMBER = b.COMPNUMBER AND a.COLUMNLINK = b.COLUMNLINK "
                    +         "JOIN WELLS.COMPANYACCOUNT c ON b.COMPNUMBER = c.COMPNUMBER AND c.ORDERLINK = b.ORDERLINK "
                    +         "JOIN WELLS.FINANCIALREPORTTYPE d on a.FINANCIALREPORTTYPE = d.FINANCIALREPORTTYPE "
                    +        "JOIN WELLS.CHARTACCOUNT e ON c.MAPCODE = e.MAPCODE "
                    +    "WHERE a.COMPNUMBER= ? AND d.REPORTGROUPCODE = ? AND e.FORMCODE = ? "
                    +        "AND a.REPORTDATE > ( "
                    +            "SELECT DATE_ADD(MAX(sa.REPORTDATE), INTERVAL -24 MONTH) "
                    +            "FROM WELLS.FINANCIALREPORT sa "
                    +            "JOIN WELLS.FINANCIALREPORTTYPE sb on sa.FINANCIALREPORTTYPE = sb.FINANCIALREPORTTYPE "
                    +            "WHERE sa.COMPNUMBER= ? AND sb.REPORTGROUPCODE = ?) "
                    +") AS T "
                    +"ORDER BY REPORTDATE DESC";
                            
            var identifier= [event['COMPNUMBER'], event['REPORTGROUPCODE'], event['COMPNUMBER'], event['FORMCODE'],
            event['COMPNUMBER'], event['REPORTGROUPCODE']];

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
