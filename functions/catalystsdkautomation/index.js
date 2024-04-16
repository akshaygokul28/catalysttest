"use strict"
const axios = require('axios');
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

app.post("/catalyst", async(req, res) => {

	const catalystApp = catalyst.initialize(req);
	let zcql = catalystApp.zcql();
	await zcql.executeZCQLQuery("Delete from Finalreport")

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/FileStore/filestore')
	.then((response) => {
		console.log(`Status Filestore: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Filestore:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/DataStore/datastore')
	.then((response) => {
		console.log(`Status datastore: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred datastore:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Cache/cache')
	.then((response) => {
		console.log(`Status cache: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred cache:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Circuits/circuits')
	.then((response) => {
		console.log(`Status circuits: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred circuits:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Authentication/authentication')
	.then((response) => {
		console.log(`Status authentication: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred authentication:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Functions/functions')
	.then((response) => {
		console.log(`Status functions: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred functions:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Mail/mail')
	.then((response) => {
		console.log(`Status Mail: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Mail:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Permissions/permissions')
	.then((response) => {
		console.log(`Status Permissions: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Permissions:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/PushNotifications/pushnotifications')
	.then((response) => {
		console.log(`Status Push Notifications: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Notifications:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Search/search')
	.then((response) => {
		console.log(`Status Search: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Search:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Zia/zia')
	.then((response) => {
		console.log(`Status Zia: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Zia:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/ZCQL/zcql1')
	.then((response) => {
		console.log(`Status Zcql 1: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred ZCQL 1:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/ZCQL/zcql2')
	.then((response) => {
		console.log(`Status Zcql 2: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred ZCQL 2:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/ZCQL/zcql3')
	.then((response) => {
		console.log(`Status zcql 3: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred ZCQL 3:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/ZCQL/zcql4')
	.then((response) => {
		console.log(`Status zcql 4: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred ZCQL 4:', error.message);
	});

	axios.post('https://sdk-applicationlz-74681732.localcatalystserverless.com/server/catalystsdkautomation/catalyst')
	.then((response) => {
		console.log(`Status Filestore: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Filestore:', error.message);
	});
	

  res.send("Success")

});







app.get('/catalyst', async (req, res) => {
	const xl = require('excel4node');
	var fs = require('fs');
	var catalystApp = catalyst.initialize(req)
	var zcql = catalystApp.zcql()
	try{
		var finalreport = {} 
		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Circuitdata from Finalreport WHERE Circuitdata IS NOT NULL")
		var circuit = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			circuit.push(JSON.parse(queryres[0].Finalreport.Circuitdata))
		}
		for(let j = 0; j < circuit.length; j++)
		{
			for(let k=0;k<circuit[j].length;k++){
				repo.push(circuit[j][k])
			}
		}
		
		finalreport.circuits = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Filestoredata from Finalreport WHERE Filestoredata IS NOT NULL")
		var file = []
		var repo = []

		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Filestoredata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.filestore = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Cachedata from Finalreport WHERE Cachedata IS NOT NULL")
		var file = []
		var repo = []

		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Cachedata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.cache = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Datastoredata from Finalreport WHERE Datastoredata IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Datastoredata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.datastore = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Functionsdata from Finalreport WHERE Functionsdata IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Functionsdata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.functions = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Maildata from Finalreport WHERE Maildata IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Maildata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.mail = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Authenticationdata from Finalreport WHERE Authenticationdata IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Authenticationdata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.authentication = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Permissionsdata from Finalreport WHERE Permissionsdata IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Permissionsdata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.permissions = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Pushnotificationdata from Finalreport WHERE Pushnotificationdata IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Pushnotificationdata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.pushnotification = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Searchdata from Finalreport WHERE Searchdata IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Searchdata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.search = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Ziadata from Finalreport WHERE Ziadata IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Ziadata))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.zia = repo;


		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Zcqldata1 from Finalreport WHERE Zcqldata1 IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Zcqldata1))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.zcql1 = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Zcqldata2 from Finalreport WHERE Zcqldata2 IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Zcqldata2))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.zcql2 = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Zcqldata3 from Finalreport WHERE Zcqldata3 IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Zcqldata3))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.zcql3 = repo;

		var queryres;
		queryres = await zcql.executeZCQLQuery("Select Zcqldata4 from Finalreport WHERE Zcqldata4 IS NOT NULL")
		var file = []
		var repo = []
		for(let i = 0; i < queryres.length; i++)
		{
			file.push(JSON.parse(queryres[i].Finalreport.Zcqldata4))
		}
		for(let j = 0; j < file.length; j++)
		{
			for(let k=0;k<file[j].length;k++){
				repo.push(file[j][k])
			}
		}
		finalreport.zcql4 = repo;

	}
	catch(e)
	{
		console.log(e)
	}
	
	// console.log(folder)

	// 	const fileObject = await catalystApp.filestore().folder("Report").downloadFile(folder.id);
	// 	res.writeHead(200, {
	// 		'Content-Length': fileObject.length,
	// 		'Content-Disposition': `attachment; filename="report.xlsx"`
	// 	});
	// 	res.end(fileObject);

	// await sleep(10)

	var excel = []
	for (const key in finalreport) 
	{
		for(let i = 0; i < finalreport[key].length; i++)
		{
			excel.push(finalreport[key][i])
		}
	}
	var productionz = await axios.get('https://sdk-applicationlz-74681732.localcatalystserverless.com/server/catalystsdkautomation/catalyst')
	.then((response) => {
		console.log(`Status Filestore: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Filestore:', error.message);
	});

	const now = new Date();
	const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day =  String(now.getDate()).padStart(2, '0');
    const hours =  String(now.getHours()).padStart(2, '0');
    const minutes =  String(now.getMinutes()).padStart(2, '0');
    const seconds =  String(now.getSeconds()).padStart(2, '0');
    const timestamp = year+month+day+hours+minutes+seconds;
	const fname = timestamp+".xlsx"
	console.log(repo.length)
	await generatereport(excel)
	await sleep(10)
	let filestore = catalystApp.filestore();
	let folder = await filestore.folder("Report").uploadFile({code: fs.createReadStream("/tmp/Report.xlsx"),name: fname});


	for (const key in finalreport) 
	{
		finalreport[key].splice(0, 1);
	}
	var count = 0;
	for (const key in finalreport) 
	{
		var featurecount = finalreport[key].length;
		count = count + featurecount;
	}
	var pass = 0;
	var fail = 0;
	var eligibility
	for (const key in finalreport) 
	{
		for(let i = 0; i < finalreport[key].length; i++)
		{
			if(finalreport[key][i].Result == "Passed")
			{
				pass++;
			}
			else if(finalreport[key][i].Result == "Failed")
			{
				fail++;
			}
		}
	}
	if(fail <= 8)
	{
		eligibility = true
	}
	else if(fail > 8)
	{
		eligibility = false
	}
	finalreport.production = productionz;
	var build = {"totalcases": count, "passed": pass, "failed": fail, expected_bugs_count : 8, "eligibility": eligibility}
	
	finalreport.result = build;
	res.send(finalreport)
})
async function sleep(seconds) {
	return new Promise((resolve) => {
	  setTimeout(resolve, seconds * 1000);
	});
  }
async function generatereport(repo)
{
	const xl = require('excel4node');
	const wb = new xl.Workbook();
	const ws = wb.addWorksheet('Worksheet Name');
	const headingColumnNames = [
		"Test Case No",
		"Description",
		"Results"
	]
	let headingColumnIndex = 1;
	headingColumnNames.forEach(async heading => {
		console.log(heading)
		await ws.cell(1, headingColumnIndex++)
			.string(heading)
	});
	let rowIndex = 2;
	repo.forEach(async record => {
		console.log(record)
		let columnIndex = 1;
		Object.keys(record ).forEach(async columnName =>{
			console.log(record)
			await ws.cell(rowIndex,columnIndex++)
				.string(record [columnName])
		});
		rowIndex++;
	}); 
	await wb.write('/tmp/Report.xlsx');
}



module.exports = app;
