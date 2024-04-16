"use strict"

const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

app.post("/functions", async (req, res) => {

    const catalystApp = catalyst.initialize(req);
	var arr = []
	var feature = {"Feature" : "Functions"}
	arr.push(feature)
	console.log("Functions")
	var t1 = await testcase1to2(catalystApp)
	for(let i = 0; i < t1.length; i++)
	{
		arr.push(t1[i])
	}
	var t2 = await testcase3(catalystApp)
	for(let i = 0; i < t2.length; i++)
	{
		arr.push(t2[i])
	}
	var t3 = await testcase4(catalystApp)
	for(let i = 0; i < t3.length; i++)
	{
		arr.push(t3[i])
	}
	var t4 = await testcase5(catalystApp)
	for(let i = 0; i < t4.length; i++)
	{
		arr.push(t4[i])
	}
	var t5 = await testcase6to8(catalystApp)
	for(let i = 0; i < t5.length; i++)
	{
		arr.push(t5[i])
	}
	var t6 = await testcase9to11(catalystApp)
	for(let i = 0; i < t6.length; i++)
	{
		arr.push(t6[i])
	}
	var t7 = await testcase12(catalystApp)
	for(let i = 0; i < t7.length; i++)
	{
		arr.push(t7[i])
	}
	var t8 = await testcase13to14(catalystApp)
	for(let i = 0; i < t8.length; i++)
	{
		arr.push(t8[i])
	}
	var repo = []
	for(let i = 1; i < arr.length; i++)
	{
		repo.push(arr[i])
	}
	var rep = JSON.stringify(arr)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Functionsdata : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)

});

async function testcase1to2(catalystApp)
{
	var list;
	var test = [];
	let conf = {
        args: {
            name : "all"
        }
    }
	let functions = catalystApp.functions();
	let promiseResult1 = functions.execute("BasicNode",conf);
	await promiseResult1.then((functionResponse) => {
            if(functionResponse != "hello");
			{
				console.log("​✅​ Test case 1 : Request send to execute a Basic IO function and check whether any exception is thrown")
				list = {"Test Case No": "Test case 1", "Description": "Request send to Executing a Basic IO function and verify whether it has executed properly", "Result" : "Passed"};
				test.push(list)
			}
        }).catch(err => {
			console.log(" ❗ Failed case 1 : Request send to execute a Basic IO function and check whether any exception is thrown")
			list = {"Test Case No": "Test case 1", "Description": "Request send to Executing a Basic IO function and verify whether it has executed properly", "Result" : "Failed"};
			test.push(list)
		})
	let promiseResult2 = functions.execute("13527000000147065",conf);
	await promiseResult2.then((functionResponse) => {
		if(functionResponse != "hello");
		{
			console.log(" ❗ Failed case 2 : Request send to execute a Basic IO function with invalid function id and check whether proper exception is thrown")
			list = {"Test Case No": "Test case 2", "Description": "Request send to Executing a Basic IO function with invalid function id and check whether proper exception is thrown", "Result" : "Failed"};
			test.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 2 : Request send to execute a Basic IO function with invalid function id and check whether proper exception is thrown")
		list = {"Test Case No": "Test case 2", "Description": "Request send to Executing a Basic IO function with invalid function id and check whether proper exception is thrown", "Result" : "Passed"};
			test.push(list)
	})
	return test;
}

async function testcase3(catalystApp)
{
	var list;
	var test = [];
	let functions = catalystApp.cron()
	let datastore = catalystApp.datastore();
	var details = {
		time_of_execution: "1681127280000",
		timezone: "Asia/Kolkata"
	}

	var info = {
		url: "www.google.com",
		headers: {},
		params: {},
		request_method: "POST",
		request_body: ""
	}

	var createcron = {
		cron_name: "testcron1",
		description: "testing",
		cron_type: "OneTime",
		cron_function_identifier : "Cron",
		status: true,
		cron_url_details: info,
		job_detail: details
	}

	let promiseResult =  functions.createCron(createcron)
	await promiseResult.then(async (functionResponse) => {
		if(functionResponse.id != 0)
		{
			console.log("​✅​ Test case 3 : Request send to create a onetime cron and check whether any exception is thrown")
			list = {"Test Case No": "Test case 3", "Description": "Request send to create a onetime cron and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
		await datastore.table("Cron").insertRow({CronId : functionResponse.id});
        }).catch(err => {
			console.log(" ❗ Failed case 3 : Request send to create a onetime cron and check whether any exception is thrown")
			list = {"Test Case No": "Test case 3", "Description": "Request send to create a onetime cron and check whether any exception is thrown", "Result" : "Failed"};
			test.push(list)
		})
		return test;
}

async function testcase4(catalystApp)
{
	var list;
	var test = [];
	let functions = catalystApp.cron()
	let datastore = catalystApp.datastore();
	var details = {
		cron_name: "testcron2",
		description: "",
		cron_type: "Periodic",
		status: "true",
		cron_url_details: {
		  url: "www.google.com",
		  headers: {},
		  request_method: "POST",
		  request_body: "",
		  params: {}
		},
		job_detail: {
		  hour: "11",
		  minute: "53",
		  second: "00"
		},
		end_time: -1
	}
	let promiseResult =  functions.createCron(details)
	await promiseResult.then(async(functionResponse) => {
		if(functionResponse.id)
		{
			console.log("​✅​ Test case 4 : Request send to create a periodic cron and check whether any exception is thrown")
			list = {"Test Case No": "Test case 4", "Description": "Request send to create a periodic cron and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
		await datastore.table("Cron").insertRow({CronId : functionResponse.id});
	}).catch(err => {
		console.log(" ❗ Failed case 4 : Request send to create a periodic cron and check whether any exception is thrown")
		list = {"Test Case No": "Test case 4", "Description": "Request send to create a periodic cron and check whether any exception is thrown", "Result" : "Failed"};
		test.push(list)
	})
	return test;
}

async function testcase5(catalystApp)
{
	var list;
	var test = [];
	var functions = catalystApp.cron();
	var datastore = catalystApp.datastore();
	var details = {
		cron_name : "testcron3",
		description: "",
		cron_type: "Calendar",
		status: "true",
		cron_url_details: {
			url: "www.google.com",
			headers: {},
			request_method: "POST",
			request_body: "",
			params: {}
		},
		job_detail: {
			repetition_type: "Monthly",
			days: ["11"],
			timezone: "Asia/Kolkata",
			hour: "12",
			minute: "09",
			second: "00"
		},
		"end_time": -1,
		"cron_function_id": null
	}
	let promiseResult =  functions.createCron(details)
	await promiseResult.then(async(functionResponse) => {
		if(functionResponse.id != 0)
		{
			console.log("​✅​ Test case 5 : Request send to create a calendar cron and check whether any exception is thrown")
			list = {"Test Case No": "Test case 5", "Description": "Request send to create a calendar cron and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
		await datastore.table("Cron").insertRow({CronId : functionResponse.id});
	}).catch(err => {
		console.log(" ❗ Failed case 5 : Request send to create a calendar cron and check whether any exception is thrown")
		list = {"Test Case No": "Test case 5", "Description": "Request send to create a calendar cron and check whether any exception is thrown", "Result" : "Failed"};
		test.push(list)
	})
	return test;
}

async function testcase6to8(catalystApp)
{
	var list;
	var test = [];
	var functions = catalystApp.cron();
	var datastore = catalystApp.datastore();
	var details = {
		cron_name: "testcron4",
		description: "",
		cron_type: "OneTime",
		status: "true",
		cron_function_id: "16173000000030108",
		cron_url_details: {
		  params: {}
		},
		job_detail: {
		  time_of_execution: "1681158904000",
		  timezone: "Asia/Kolkata"
		}
	  }

	let promiseResult1 =  functions.createCron(details)
	await promiseResult1.then(async(functionResponse) => {
		if(functionResponse != 0)
		{
			console.log("​✅​ Test case 6 : Request send to create a cron with cron function and check whether any exception is thrown")
			list = {"Test Case No": "Test case 6", "Description": "Request send to create a cron with cron function and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
	await datastore.table("Cron").insertRow({CronId : functionResponse.id});
	}).catch(err => {
		console.log(" ❗ Failed case 6 : Request send to create a cron with cron function and check whether any exception is thrown : ",err)
		list = {"Test Case No": "Test case 6", "Description": "Request send to create a cron with cron function and check whether any exception is thrown", "Result" : "Failed"};
		test.push(list)
	})

	var details = {
		description: "",
		cron_type: "OneTime",
		status: "true",
		cron_function_id: "13527000000196729",
		cron_url_details: {
		  params: {}
		},
		job_detail: {
		  time_of_execution: "1681158904000",
		  timezone: "Asia/Kolkata"
		}
	  }
	let promiseResult2 =  functions.createCron(details)
	await promiseResult2.then(async(functionResponse) => {
		if(functionResponse != 0)
		{
			console.log(" ❗ Failed case 7 : Request send to create a cron without cron name and check whether proper exception is thrown")
			list = {"Test Case No": "Test case 7", "Description": "Request send to create a cron without cron name and check whether proper exception is thrown", "Result" : "Failed"};
			test.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 7 : Request send to create a cron without cron name and check whether proper exception is thrown")
		list = {"Test Case No": "Test case 7", "Description": "Request send to create a cron without cron name and check whether proper exception is thrown", "Result" : "Passed"};
			test.push(list)
	})

	var details = {
		cron_name: "test",
		description: "",
		cron_type: "OneTime",
		status: "true",
		cron_function_id: "13527000000196754329",
		cron_url_details: {
		  params: {}
		},
		job_detail: {
		  time_of_execution: "1681158904000",
		  timezone: "Asia/Kolkata"
		}
	  }

	let promiseResult3 =  functions.createCron(details)
	await promiseResult3.then(async(functionResponse) => {
		if(functionResponse != 0)
		{
			console.log(" ❗ Failed case 8 : Request send to create a cron with cron function with invalid function id and check whether proper exception is thrown")
			list = {"Test Case No": "Test case 8", "Description": "Request send to create a cron with cron function with invalid function id and check whether proper exception is thrown", "Result" : "Failed"};
			test.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 8 : Request send to create a cron with cron function with invalid function id and check whether proper exception is thrown")
		list = {"Test Case No": "Test case 8", "Description": "Request send to create a cron with cron function with invalid function id and check whether proper exception is thrown", "Result" : "Passed"};
			test.push(list)
	})
	return test;
}

async function testcase9to11(catalystApp)
{
	var list;
	var test = [];
	var functions = catalystApp.cron();


	var functions = catalystApp.cron();
	var datastore = catalystApp.datastore();
	var details = {
		cron_name : "testcron",
		description: "",
		cron_type: "Calendar",
		status: "true",
		cron_url_details: {
			url: "www.google.com",
			headers: {},
			request_method: "POST",
			request_body: "",
			params: {}
		},
		job_detail: {
			repetition_type: "Monthly",
			days: ["11"],
			timezone: "Asia/Kolkata",
			hour: "12",
			minute: "09",
			second: "00"
		},
		"end_time": -1,
		"cron_function_id": null
	}
	let cronResult =  await functions.createCron(details).catch(err => console.log(err))
		await datastore.table("Cron").insertRow({CronId : cronResult.id});

	var details = {
		cron_name : "testcron",
		description: "",
		cron_type: "Calendar",
		status: "true",
		id : cronResult.id,
		cron_url_details: {
			url: "www.google.com",
			headers: {},
			request_method: "POST",
			request_body: "",
			params: {}
		},
		job_detail: {
			repetition_type: "Monthly",
			days: ["12"],
			timezone: "Asia/Kolkata",
			hour: "12",
			minute: "12",
			second: "12"
		},
		"end_time": -1,
		"cron_function_id": null
	}

	let promiseResult1 =  functions.updateCron(details)
	await promiseResult1.then((functionResponse) => {
		if(functionResponse.id != 0)
		{
			console.log("​✅​ Test case 9 : Request send to update a cron and check whether any exception is thrown")
			list = {"Test Case No": "Test case 9", "Description": "Request send to update a cron and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 9 : Request send to update a cron and check whether any exception is thrown")
		list = {"Test Case No": "Test case 9", "Description": "Request send to update a cron and check whether any exception is thrown", "Result" : "Failed"};
		test.push(list)
	})

	var details = {
		cron_name : "testcron",
		description: "",
		cron_type: "Calendar",
		status: "true",
		id : "13527000000259045",
		cron_url_details: {
			url: "www.google.com",
			headers: {},
			request_method: "POST",
			request_body: "",
			params: {}
		},
		job_detail: {
			repetition_type: "Monthly",
			days: ["12"],
			timezone: "Asia/Kolkata",
			hour: "12",
			minute: "12",
			second: "12"
		},
		"end_time": -1,
		"cron_function_id": null
	}

	let promiseResult2 =  functions.updateCron(details)
	await promiseResult2.then((functionResponse) => {
		if(functionResponse.id != 0)
		{
			console.log(" ❗ Failed case 10 : Request send to update a cron with invalid cron id and check whether proper exception are thrown")
			list = {"Test Case No": "Test case 10", "Description": "Request send to update a cron with invalid cron id and check whether proper exception are thrown", "Result" : "Failed"};
			test.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 10 : Request send to update a cron with invalid cron id and check whether proper exception are thrown")
		list = {"Test Case No": "Test case 10", "Description": "Request send to update a cron with invalid cron id and check whether proper exception are thrown", "Result" : "Passed"};
			test.push(list)
	})

	var functions = catalystApp.cron();
	let promiseResult =  functions.getCronDetails(cronResult.id)
	await promiseResult.then((functionResponse) => {
		if(functionResponse.id != 0)
		{
			console.log("​✅​ Test case 11 : Request send to get the details of a cron and check whether any exception is thrown")
			list = {"Test Case No": "Test case 11", "Description": "Request send to get the details of a cron and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 11 : Request send to get the details of a cron and check whether any exception is thrown")
		list = {"Test Case No": "Test case 11", "Description": "Request send to get the details of a cron and check whether any exception is thrown", "Result" : "Failed"};
			test.push(list)
	})

	return test;
}

async function testcase12(catalystApp)
{
	var list;
	var test = [];
	var functions = catalystApp.cron();
	let promiseResult =  functions.getAllCron()
	await promiseResult.then((functionResponse) => {
		if(functionResponse.length != 0)
		{
			console.log("​✅​ Test case 12 : Request send to get the details of all the cron and check whether any exception is thrown")
			list = {"Test Case No": "Test case 12", "Description": "Request send to get the details of all the cron and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 12 : Request send to get the details of all the cron and check whether any exception is thrown")
		list = {"Test Case No": "Test case 12", "Description": "Request send to get the details of all the cron and check whether any exception is thrown", "Result" : "Failed"};
			test.push(list)
	})
	return test;
}

async function testcase13to14(catalystApp)
{ 
	var list;
	var test = [];
	var functions = catalystApp.cron();
	var zcql = catalystApp.zcql()
	let zcqlPromise = await zcql.executeZCQLQuery("Select CronId from Cron order by CREATEDTIME");
	var deletepromise1 = await functions.deleteCron(zcqlPromise[zcqlPromise.length-1].Cron.CronId).catch(err => {
		console.log(err)
	})

	var deletepromise2 = await functions.deleteCron(zcqlPromise[zcqlPromise.length-2].Cron.CronId).catch(err => {
		console.log(err)
	})

	var deletepromise3 = await functions.deleteCron(zcqlPromise[zcqlPromise.length-3].Cron.CronId).catch(err => {
		console.log(err)
	})

	var deletepromise4 = await functions.deleteCron(zcqlPromise[zcqlPromise.length-4].Cron.CronId).catch(err => {
		console.log(err)
	})

	var deletepromise5 = await functions.deleteCron(zcqlPromise[zcqlPromise.length-5].Cron.CronId).catch(err => {
		console.log(" ❗ Failed case 13 : Request send to delete a cron and check whether any exception is thrown")
		list = {"Test Case No": "Test case 13", "Description": "Request send to delete a cron and check whether any exception is thrown", "Result" : "Failed"};
		test.push(list)
	})
	if(deletepromise5 == true)
		{
			console.log("​✅​ Test case 13 : Request send to delete a cron and check whether any exception is thrown")
			list = {"Test Case No": "Test case 13", "Description": "Request send to delete a cron and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}

	var deletepromise5 = functions.deleteCron(zcqlPromise[zcqlPromise.length-5].Cron.CronId)
	await deletepromise5.then((functionResponse) => {
		if(functionResponse == true)
		{
			console.log(" ❗ Failed case 14 : Request send to delete a cron with invalid cron id and check whether proper exception are thrown")
			list = {"Test Case No": "Test case 14", "Description": "Request send to delete a cron with invalid cron id and check whether proper exception are thrown", "Result" : "Failed"};
			test.push(list)	
		}
	}).catch(err => {
		console.log("​✅​ Test case 14 : Request send to delete a cron with invalid cron id and check whether proper exception are thrown")
		list = {"Test Case No": "Test case 14", "Description": "Request send to delete a cron with invalid cron id and check whether proper exception are thrown", "Result" : "Passed"};
		test.push(list)
	})

	await zcql.executeZCQLQuery("Delete from cron");
	return test;
}

app.post("/terminatefun", async (req, res) => {
	process.exit(0)
})

module.exports = app;
