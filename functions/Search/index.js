"use strict"
var fs = require('fs');
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');
const app = express();
app.use(express.json());

app.post("/search", async(req, res) => {
	const catalystApp = catalyst.initialize(req);
	var arr = []
	var feature = {"Feature" : "Search"}
	arr.push(feature)
	var t1 = await testcase1(catalystApp)
	for(let i = 0; i < t1.length; i++)
	{
		arr.push(t1[i])
	}
	var t2 = await testcase2(catalystApp)
	for(let i = 0; i < t2.length; i++)
	{
		arr.push(t2[i])
	}
	var t3 = await testcase3(catalystApp)
	for(let i = 0; i < t3.length; i++)
	{
		arr.push(t3[i])
	}
	var t4 = await testcase4(catalystApp)
	for(let i = 0; i < t4.length; i++)
	{
		arr.push(t4[i])
	}
	var t5 = await testcase5(catalystApp)
	for(let i = 0; i < t5.length; i++)
	{
		arr.push(t5[i])
	}
	var t6 = await testcase6(catalystApp)
	for(let i = 0; i < t6.length; i++)
	{
		arr.push(t6[i])
	}
	var t7 = await testcase7(catalystApp)
	for(let i = 0; i < t7.length; i++)
	{
		arr.push(t7[i])
	}
	var repo = []
	for(let i = 1; i < arr.length; i++)
	{
		repo.push(arr[i])
	}
	var rep = JSON.stringify(arr)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Searchdata : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)
});

async function testcase1(catalystApp)
{
	var list;
	var test = [];
	let config = {
        search: "testvarsearch",
        search_table_columns: {
            testsearch1 : ["testindex1"],
            testsearch2 : ["testindex2"]
        }
    };
	let search = catalystApp.search();  
	let searchPromise = search.executeSearchQuery(config);
	await searchPromise.then(searchResult => {
		if(searchResult.testsearch1.length != 0 && searchResult.testsearch2.length != 0)
		{
			console.log("​✅​ Test case 1 : Request send to search of varchar values from two different table and check whether any exception is thrown");
			list = {"Test Case No": "Test case 1", "Description": "Request send to search of varchar values from two different table and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 1 : Request send to search of varchar values from two different table and check whether any exception is thrown",err)
		list = {"Test Case No": "Test case 1", "Description": "Request send to search of varchar values from two different table and check whether any exception is thrown", "Result" : "Failed"};
		test.push(list)
	})
	return test;
}

async function testcase2(catalystApp)
{
	var list;
	var test = [];
	let config = {
        search: "12345",
        search_table_columns: {
            testsearch1 : ["testint"],
            testsearch2 : ["testbigint"]
        }
    };
	let search = catalystApp.search();  
	let searchPromise = search.executeSearchQuery(config);
	await searchPromise.then(searchResult => {
		if(searchResult.testsearch1.length != 0 && searchResult.testsearch2.length != 0)
		{
			console.log("​✅​ Test case 2 : Request send to search of int and bigint values in two different table and check whether any exception is thrown");
			list = {"Test Case No": "Test case 2", "Description": "Request send to search of int and bigint values in two different table and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
		}).catch(err => {
			console.log(" ❗ Failed case 2 : Request send to search of int and bigint values in two different table and check whether any exception is thrown")
			list = {"Test Case No": "Test case 2", "Description": "Request send to search of int and bigint values in two different table and check whether any exception is thrown", "Result" : "Failed"};
			test.push(list)
	})
	return test;
}

async function testcase3(catalystApp)
{
	var list;
	var test = [];
	let config = {
        search: "2023-03-10",
        search_table_columns: {
            testsearch1 : ["testdate"],
            testsearch2 : ["testdatetime"]
        }
    };
	let search = catalystApp.search();  
	let searchPromise = search.executeSearchQuery(config);
	await searchPromise.then(searchResult => {
		if(searchResult.testsearch1.length != 0 && searchResult.testsearch2.length != 0)
		{
			console.log("​✅​ Test case 3 : Request send to search of date and datetime values in two different table and check whether any exception is thrown");
			list = {"Test Case No": "Test case 3", "Description": "Request send to search of date and datetime values in two different table and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 3 : Request send to search of date and datetime values in two different table and check whether any exception is thrown")
		list = {"Test Case No": "Test case 3", "Description": "Request send to search of date and datetime values in two different table and check whether any exception is thrown", "Result" : "Failed"};
			test.push(list)
	})
	return test;
}

async function testcase4(catalystApp)
{
	var list;
	var test = [];
	let config = {
        search: "testvarsearch",
        search_table_columns: {
            testsearch1 : ["testindex1"]
        }
    };
	let search = catalystApp.search();  
	let searchPromise = search.executeSearchQuery(config);
	await searchPromise.then(searchResult => {
        if(Object.keys(searchResult).length != 0)
		{
			console.log("​✅​ Test case 4 : Request send to search of varchar value in two different table and check whether any exception is thrown")
			list = {"Test Case No": "Test case 4", "Description": "Request send to search of varchar value in two different table and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
		else
		{
			console.log(" ❗ Failed case 4 : Request send to search of varchar value in two different table and check whether any exception is thrown")
			list = {"Test Case No": "Test case 4", "Description": "Request send to search of varchar value in two different table and check whether any exception is thrown", "Result" : "Failed"};
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 4 : Request send to search of varchar value in two different table and check whether any exception is thrown")
		list = {"Test Case No": "Test case 4", "Description": "Request send to search of varchar value in two different table and check whether any exception is thrown", "Result" : "Failed"};
		test.push(list)
	})
	return test;
}

async function testcase5(catalystApp)
{
	var list;
	var test = [];
	let config = {
        search: "2023-03-10",
        search_table_columns: {
            testsearch1 : ["testdate"]
        }
    };
	let search = catalystApp.search();  
	let searchPromise = search.executeSearchQuery(config);
	await searchPromise.then(searchResult => {
		if(searchResult.testsearch1.length != 0)
		{
			console.log("​✅​ Test case 5 : Request send to search of date value from a table and check whether any exception is thrown")
			list = {"Test Case No": "Test case 5", "Description": "Request send to search of date value from a table and check whether any exception is thrown", "Result" : "Passed"};
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 5 : Request send to search of date value from a table and check whether any exception is thrown")
		list = {"Test Case No": "Test case 5", "Description": "Request send to search of date value from a table and check whether any exception is thrown", "Result" : "Failed"};
			test.push(list)
	})
	return test;
}

async function testcase6(catalystApp)
{
	var list;
	var test = [];
	let config = {
        search: "2023-03-10",
        search_table_columns: {
            testsearch : ["testdate"]
        }
    };
	let search = catalystApp.search();  
	let searchPromise = search.executeSearchQuery(config);
	await searchPromise.then(searchResult => {
		if(searchResult.testsearch1.length != 0)
		{
			console.log(" ❗ Failed case 6 : Request send to search of data from a table that does not exist and check whether proper exception is thrown")
			list = {"Test Case No": "Test case 6", "Description": "Request send to search of data from a table that does not exist and check whether proper exception is thrown", "Result" : "Failed"};
			test.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 6 : Request send to search of data from a table that does not exist and check whether proper exception is thrown")
		list = {"Test Case No": "Test case 6", "Description": "Request send to search of data from a table that does not exist and check whether proper exception is thrown", "Result" : "Passed"};
			test.push(list)
	})
	return test;
}

async function testcase7(catalystApp)
{
	var list;
	var test = [];
	let config = {
        search: "2023-03-10",
        search_table_columns: {
            testsearch1 : ["testdate1"]
        }
    };
	let search = catalystApp.search();  
	let searchPromise = search.executeSearchQuery(config);
	await searchPromise.then(searchResult => {
		if(searchResult.testsearch1.length != 0)
		{
			console.log(" ❗ Failed case 7 : Request send to search of data from a column that does not exist and check whether proper exception is thrown")
			list = {"Test Case No": "Test case 7", "Description": "Request send to search of data from a column that does not exist and check whether proper exception is thrown", "Result" : "Failed"};
			test.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 7 : Request send to search of data from a column that does not exist and check whether proper exception is thrown")
		list = {"Test Case No": "Test case 7", "Description": "Request send to search of data from a column that does not exist and check whether proper exception is thrown", "Result" : "Passed"};
			test.push(list)
	})
	return test;
}

app.post("/terminatesearch", async(req, res) => {
	process.exit(0)
})

module.exports = app;
