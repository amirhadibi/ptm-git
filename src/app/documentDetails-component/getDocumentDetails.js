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
				"select  a.DOCUMENTID, b.COLUMNID, a.ITEMNAME, a.VALUEORDER, " +
				"a.MAPCODE, z.MAPCODE WELLSMAPCODE, a.ORDERLINK, z.ORDERLINK WELLSORDERLINK," +
				"TRIM(TRAILING '.' FROM TRIM(TRAILING '0' from AMOUNT)) as AMOUNT, z.COMPLITERAL, z.WELLSLITERAL, z.DOUBLECOUNTED, z.NOPRINT " +
				"from PRAEDEAWELLS.PTMDOCUMENTITEMNAME a " +
				"left outer join PRAEDEAWELLS.PTMDOCUMENTVALUE b on a.VALUEORDER = b.VALUEORDER and a.DOCUMENTID = b.DOCUMENTID " +
				"left outer join " +
				"	(SELECT aa.LITERAL COMPLITERAL, bb.LITERAL as WELLSLITERAL, aa.MAPCODE, aa.ORDERLINK, aa.NOPRINT, aa.DOUBLECOUNTED " +
				"FROM WELLS.COMPANYACCOUNT aa JOIN WELLS.CHARTACCOUNT bb ON aa.MAPCODE= bb.MAPCODE " + 
				"JOIN WELLS.FORMTYPE cc ON bb.FORMCODE= cc.FORMCODE where COMPNUMBER= ? AND bb.CHARTCODE= ? " +
				"and aa.ACCOUNTTYPECODE= ? and cc.FORMCODE = ? "+
 				") as z on ((a.MAPCODE = z.MAPCODE) and (a.ORDERLINK = z.ORDERLINK))  " +
				"where (a.DOCUMENTID = ?) and (a.FORMCODE = ?) and b.COLUMNID is not null " +
				"order by a.ITEMNAME, a.VALUEORDER, b.COLUMNID";
				
   var identifier= [event['COMPNUMBER'], event['CHARTCODE'], event['ACCOUNTTYPECODE'], 
   			event['FORMCODE'], event['DOCUMENTID'], event['FORMCODE']];

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

