"use strict"
const xl = require('excel4node');
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');
var fs = require('fs');
const app = express();
app.use(express.json());

app.get('/report', async (req, res) => {
	
	var catalystApp = catalyst.initialize(req)
	var zcql = catalystApp.zcql()
	var queryres = await zcql.executeZCQLQuery("Select report from smartbrowzreport")
	// await zcql.executeZCQLQuery("Delete from Report")
	var rep = []
	var finalreport = []
	console.log(queryres)
	for(let i = 0; i < queryres.length; i++)
	{
		rep.push(JSON.parse(queryres[i].Report.report))
	}

	for(let j = 0; j < rep.length; j++)
	{
		for(let k=0;k<rep[j].length;k++){
			finalreport.push(rep[j][k])
		}
	}
	// const now = new Date();
	// const year = await now.getFullYear();
    // const month = String(now.getMonth() + 1).padStart(2, '0');
    // const day =  String(now.getDate()).padStart(2, '0');
    // const hours =  String(now.getHours()).padStart(2, '0');
    // const minutes =  String(now.getMinutes()).padStart(2, '0');
    // const seconds =  String(now.getSeconds()).padStart(2, '0');
    // const timestamp = year+month+day+hours+minutes+seconds;
	// const fname = timestamp+".xlsx"
	// console.log(finalreport.length)
	// await generatereport(finalreport)
	// await sleep(10)
	// let filestore = catalystApp.filestore();
	// let folder = await filestore.folder("Report").uploadFile({code: fs.createReadStream("/tmp/Report.xlsx"),name: fname});
	
	// console.log(folder)

	// 	const fileObject = await catalystApp.filestore().folder("Report").downloadFile(folder.id);
	// 	res.writeHead(200, {
	// 		'Content-Length': fileObject.length,
	// 		'Content-Disposition': `attachment; filename="report.xlsx"`
	// 	});
	// 	res.end(fileObject);

	res.send(finalreport)
})
async function sleep(seconds) {
	return new Promise((resolve) => {
	  setTimeout(resolve, seconds * 1000);
	});
  }
async function generatereport(finalreport)
{
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
	finalreport.forEach(async record => {
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
