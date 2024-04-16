"use strict"

const express = require('express');
const catalyst = require('zcatalyst-sdk-node');
var https = require("https");

const app = express();
app.use(express.json());

app.post("/circuits", async(req, res) => {

    const catalystApp = catalyst.initialize(req);
	var arr = [];
	var feature = {"Feature" : "Circuits"}
	arr.push(feature) 
	
	var t1 = await testcase1to4(catalystApp)
	for(let i = 0; i < t1.length; i++)
	{
		arr.push(t1[i]);
	}
	var t2 = await testcase5to6(catalystApp)
	for(let i = 0; i < t2.length; i++)
	{
		arr.push(t2[i])
	}
	var t3 = await testcase7to9(catalystApp)
	for(let i = 0; i < t3.length; i++)
	{
		arr.push(t3[i])
	}
	var repo = []
	for(let i = 1; i < arr.length; i++)
	{
		repo.push(arr[i])
	}
	var rep = JSON.stringify(arr)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Circuitdata : rep});
    insertPromise.then((row) => {
        }).catch(err => 
			console.log(err))
	res.send(repo)
});

async function testcase1to4(catalystApp)
{ 
	var test = [];
	var list;
	var idz;
	let circuit = catalystApp.circuit();
	var name = Date.now();
	name = name.toString();
	var cir = await circuit.execute('test', name).catch((err) => console.log(err.toString()));
	try
	{
		if(cir.id.length != 0)
		{
			console.log("​✅​ Test case 1 : Request send to execute a circuit which was created and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 1", "Description" : "Request send to execute a circuit which was created and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
		idz = cir.id;
	}
	catch(e)
	{
		console.log(e)
	}
	await circuit.status("test", idz).then((result) => {
		if(result.status == "running")
		{
			console.log("​✅​ Test case 2 : Request send to check the status of the circuit which is in running state and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 2", "Description" : "Request send to check the status of the circuit which is in running state and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
		else
		{
			console.log("❗ Failed case 2 : Request send to check the status of the circuit which is in running state and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 2", "Description" : "Request send to check the status of the circuit which is in running state and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	})
	.catch((err) => console.log(err.toString()));

	await circuit.abort("test", idz).then((result) => {
		if(result.id.length != 0)
		{
			console.log("​✅​ Test case 3 : Request send to abort the circuit which is in running state and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 3", "Description" : "Request send to abort the circuit which is in running state and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
	})
	.catch((err) => console.log(err.toString()));

	await circuit.status("test", idz).then((result) => {
		if(result.status == "abort_processing")
		{
			console.log("​✅​ Test case 4 : Request send to check the status of the circuit which is aborted and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 4", "Description" : "Request send to check the status of the circuit which is aborted and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
		else
		{
			console.log("❗ Failed case 4 : Request send to check the status of the circuit which is aborted and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 4", "Description" : "Request send to check the status of the circuit which is aborted and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	}).catch(err => {
		console.log(err)
	})
	return test;
}

async function sleep(seconds) {
	return new Promise((resolve) => {
	  setTimeout(resolve, seconds * 1000);
	});
  }

async function testcase5to6(catalystApp)
{
	var test = [];
	var idz;
	var list;
	let circuit = catalystApp.circuit();
	var name = Date.now();
	name = name.toString();
	var cir = await circuit.execute('test1', name).catch((err) => console.log(err.toString()));
	try
	{
		idz = cir.id;
	}
	catch(e)
	{
		console.log(e)
	}
	await sleep(2);
	await circuit.status("test1", idz).then((result) => {
		if(result.status == "success")
		{
			console.log("​✅​ Test case 5 : Request send to check the status of the circuit which ran successfully and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 5", "Description" : "Request send to check the status of the circuit which ran successfully and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
		else
		{
			console.log("❗ Failed case 5 : Request send to check the status of the circuit which ran successfully and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 5", "Description" : "Request send to check the status of the circuit which ran successfully and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	})
	await circuit.abort("test1", idz).then((result) => {
		if(result.id.length != 0)
		{
			console.log(" ❗ Failed case 6 :  Request send to abort the circuit which is not in active state and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 6", "Description" : "Request send to abort the circuit which is not in active state and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	})
	.catch((err) => {
		console.log("​✅​ Test case 6 : Request send to abort the circuit which is not in active state and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 6", "Description" : "Request send to abort the circuit which is not in active state and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	});
	  

return test;
}

async function testcase7to9(catalystApp)
{
	var test = []
	var idz, list;
	let circuit = catalystApp.circuit();
	var cir = await circuit.execute('13527000000241113', 'testcircuit1')
	.catch((err) => {
		console.log("​✅​ Test case 7 : Request send to executing a circuit with invalid circuit ID and check whether proper exception is thrown")
		list = {"Test Case No" : "Test case 7", "Description" : "Request send to executing a circuit with invalid circuit ID and check whether proper exception is thrown", "Result" : "Passed"}
		test.push(list)	
});
	try
	{
		if(cir.id.length != 0)
		{
			console.log("❗ Failed case 7 : Request send to execute a circuit with invalid circuit ID and check whether proper exception is thrown")
			list = {"Test Case No" : "Test case 7", "Description" : "Request send to execute a circuit with invalid circuit ID and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
		idz = cir.id;
	}
	catch(e)
	{
	}
	await circuit.status("13527000000241113", idz).then((result) => {
		if(result.id.length != 0)
		{
			console.log("❗ Failed case 8 : Request send to check the status of the circuit with invalid circuit ID and check whether proper exception is thrown")
			list = {"Test Case No" : "Test case 8", "Description" : "Request send to check the status of the circuit with invalid circuit ID and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	})
	.catch((err) =>{
			console.log("​✅​ Test case 8 : Request send to check the status of the circuit with invalid circuit ID and check whether proper exception is thrown")
			list = {"Test Case No" : "Test case 8", "Description" : "Request send to check the status of the circuit with invalid circuit ID and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list)
		});

	await circuit.abort("13527000000241113", idz).then((result) => {
		if(result.id.length != 0)
		{
			console.log("❗ Failed case 9 : Request send to abort the circuit with invalid circuit ID and check whether proper exeception is thrown")
			list = {"Test Case No" : "Test case 9", "Description" : "Request send to abort the circuit with invalid circuit ID and check whether proper exeception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	})
	.catch((err) =>{ console.log("​✅​ Test case 9 : Request send to abort the circuit with invalid circuit ID and check whether proper exeception is thrown")
		list = {"Test Case No" : "Test case 9", "Description" : "Request send to abort the circuit with invalid circuit ID and check whether proper exeception is thrown", "Result" : "Passed"}
		test.push(list)
	});
	return test;
}

app.post("/terminatecircuit", async(req, res) => {
	process.exit(0)
})

module.exports = app;