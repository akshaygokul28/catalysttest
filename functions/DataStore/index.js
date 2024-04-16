'use strict';
var express = require('express');
var fs = require('fs');
const fileUpload = require('express-fileupload');
var app = express();
var catalyst = require('zcatalyst-sdk-node');
const { query } = require('express');
app.use(express.json());
app.use(fileUpload());
app.post('/datastore', async (req, res) => {
	var catalystApp = catalyst.initialize(req, {scope : 'admin'})
	var arr = [];
	var feature = {"Feature" : "DataStore"}
	arr.push(feature)
	console.log("DATA STORE")
	var t1 = await testcase1(catalystApp)
	for(var i=0;i<t1.length;i++){
		arr.push(t1[i]);
	}
	var t2 = await testcase2(catalystApp)
	for(var i=0;i<t2.length;i++){
		arr.push(t2[i]);
	}
	var t3 = await testcase3to6(catalystApp)
	for(var i=0;i<t3.length;i++){
		arr.push(t3[i]);
	}
	var t4 = await testcase7to8(catalystApp)
	for(var i=0;i<t4.length;i++){
		arr.push(t4[i]);
	}
	var t5 = await testcase9(catalystApp)
	for(var i=0;i<t5.length;i++){
		arr.push(t5[i]);
	}
	var t6 = await testcase10to16(catalystApp)
	for(var i=0;i<t6.length;i++){
		arr.push(t6[i]);
	}
	var t7 = await testcase17to23(catalystApp)
	for(var i=0;i<t7.length;i++){
		arr.push(t7[i]);
	}
	var t8 = await testcase24to29(catalystApp)
	for(var i=0;i<t8.length;i++){
		arr.push(t8[i]);
	}
	var t9 = await testcase30to37(catalystApp)
	for(var i=0;i<t9.length;i++){
		arr.push(t9[i]);
	}
	var t10 = await testcase38to43(catalystApp)
	for(var i=0;i<t10.length;i++){
		arr.push(t10[i]);
	}
	var t11 = await testcase44to47(catalystApp)
	for(var i=0;i<t11.length;i++){
		arr.push(t11[i]);
	}
	var t12 = await testcase48to49(catalystApp)
	for(var i=0;i<t12.length;i++){
		arr.push(t12[i]);
	}
	var t13 = await testcase50to51(catalystApp)
	for(var i=0;i<t13.length;i++){
		arr.push(t13[i]);
	}
	var repo = []
	for(let i = 1; i < arr.length; i++)
	{
		repo.push(arr[i])
	}
	var rep = JSON.stringify(arr)
	let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Datastoredata : rep});
    insertPromise.then((row) => {

        });

	res.send(repo);
});

async function testcase1(catalystApp) {
	var test1 = []
	var list;
	let datastore = catalystApp.datastore();
	let tablePromise = datastore.getTableDetails("Datastore");
	await tablePromise.then((table) => {
            if(table != 0)
			{
				console.log("​✅​ Test case 1 : Request send to retrieve the table details and check whether any exception is thrown");
				list = {"Test Case No": "Test case 1", "Description": "Request send to retrieve the table details and check whether any exception is thrown", "Result" : "Passed"};
				test1.push(list)
			}
	}).catch(err => {
		console.log(" ❗ Failed case 1 : Request send to retrieve the table details and check whether any exception is thrown");
		list = {"Test Case No": "Test case 1", "Description": "Request send to retrieve the table details and check whether any exception is thrown", "Result" : "Failed"};
		test1.push(list)
	})
	return test1;
}

async function testcase2(catalystApp)
{
	var test2 = []
	var list;
	let datastore = catalystApp.datastore();
	let table = datastore.table("Datastore");
	let columnPromise = table.getColumnDetails("testrow");
	await columnPromise.then((column) => {
		if(column != 0)
		{
			console.log("​✅​ Test case 2 :Request send to retrieve the column details and check whether any exception is thrown");
			list = {"Test Case No": "Test case 2", "Description": "Request send to retrieve the column details and check whether any exception is thrown", "Result" : "Passed"};
			test2.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 2 : Request send to retrieve the column details and check whether any exception is thrown");
		list = {"Test Case No": "Test case 2", "Description": "Request send to retrieve the column details and check whether any exception is thrown", "Result" : "Failed"};
		test2.push(list)
	})
	return test2;
}


//Test cases for creating varchar rows
async function testcase3to6(catalystApp)
{
	var test3 = []
	var list;
    let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
    let insertPromise1 = table.insertRow({testrow : "\"testrowabcd1234\""});
    await insertPromise1.then(async (row) => {	
		if(row != 0)
		{
			console.log("​✅​ Test case 3 : Request send to insert a row with string in varchar datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 3", "Description": "Request send to insert a row with string in varchar datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test3.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 3 : Request send to insert a row with string in varchar datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 3", "Description": "Request send to insert a row with string in varchar datatype column and check whether any exception is thrown", "Result" : "Failed"};
		test3.push(list)
	})

	let insertPromise2 = table.insertRow({testrow : "@#$$%^=[]';%^"});
    await insertPromise2.then(async (row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 4 : Request send to insert a row with special characters in varchar datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 4", "Description": "Request send to insert a row with special characters in varchar datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test3.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 4 : Request send to insert a row with special characters in varchar datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 4", "Description": "Request send to insert a row with special characters in varchar datatype column and check whether any exception is thrown", "Result" : "Failed"};
		test3.push(list)
	})

	let insertPromise3 = table.insertRow({testrow : "🥹🥺😀😩"});
    await insertPromise3.then(async (row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 5 : Request send to insert a row with emoji in varchar datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 5", "Description": "Request send to insert a row with emoji in varchar datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test3.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 5 : Request send to insert a row with emoji in varchar datatype column and check whether any exception is thrown")
		list = {"Test Case No": "Test case 5", "Description": "Request send to insert a row with emoji in varchar datatype column and check whether any exception is thrown", "Result" : "Failed"};
		test3.push(list)
	})
	let insertPromise4 = table.insertRow({testrow : "173738"});
    await insertPromise4.then(async (row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 6 : Request send to insert a row with integers in varchar datatype column sucessfully and check whether any exception is thrown");
			list = {"Test Case No": "Test case 6", "Description": "Request send to insert a row with integers in varchar datatype column sucessfully and check whether any exception is thrown", "Result" : "Passed"};
			test3.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 6 : Request send to insert a row with integers in varchar datatype column sucessfully and check whether any exception is thrown");
		list = {"Test Case No": "Test case 6", "Description": "Request send to insert a row with integers in varchar datatype column sucessfully and check whether any exception is thrown", "Result" : "Failed"};
			test3.push(list)
	})
	return test3;
}

//Test cases for creating unique rows
async function testcase7to8(catalystApp)
{
	var test4 = []
	var list;
    let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
	let zcql = catalystApp.zcql()
    let insertPromise1 = table.insertRow({testrow : "uniquetest1", uniquetest : "testunique"});
    await insertPromise1.then(async(row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 7 : Request send to Inserted a row in unique data and check whether any exception is thrown");
			list = {"Test Case No": "Test case 7", "Description": "Request send to Inserted a row in unique data and check whether any exception is thrown", "Result" : "Passed"};
			test4.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 7 :Request send to Inserted a row in unique data and check whether any exception is thrown");
		list = {"Test Case No": "Test case 7", "Description": "Request send to Inserted a row in unique data and check whether any exception is thrown", "Result" : "Failed"};
		test4.push(list)
	})
	let insertPromise2 = table.insertRow({testrow : "uniquetest2", uniquetest : "testunique"});
    await insertPromise2.then(async(row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 8 : Request send to insert a row in unique data and check whether any exception is thrown");
			list = {"Test Case No": "Test case 8", "Description": "Request send to insert a row in unique data and check whether any exception is thrown", "Result" : "Failed"};
			test4.push(list)
		}
	}).catch(err => {
		console.log(" ✅​ Test case 8 : Request send to insert a row in unique data and check whether any exception is thrown");
		list = {"Test Case No": "Test case 8", "Description": "Request send to insert a row in unique data and check whether any exception is thrown", "Result" : "Passed"};
			test4.push(list)
	})
	await zcql.executeZCQLQuery("Delete from datastore where uniquetest = 'testunique' ")
	return test4;
    
}

async function testcase9(catalystApp)
{
	var test5 = []
	var list;
	let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
    let insertPromise = table.insertRow({uniquetest : "1234"});
    await insertPromise.then((row) => {
		if(row != 0)
		{
			console.log("❗ Failed case 9 :Request send to insert the row without mandatory field and check whether any exception is thrown");
			list = {"Test Case No": "Test case 9", "Description": "Request send to insert the row without mandatory field and check whether any exception is thrown", "Result" : "Failed"};
		test5.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 9 : Request send to insert the row without mandatory field and check whether any exception is thrown");
		list = {"Test Case No": "Test case 9", "Description": "Request send to insert the row without mandatory field and check whether any exception is thrown", "Result" : "Passed"};
		test5.push(list)
	})
	return test5;
}

async function testcase10to16(catalystApp)
{
	var test6 = []
	var list;
	let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
    let insertPromise1 = table.insertRow({testrow : "testdate1", testdate : "2023-03-02"});
    await insertPromise1.then(async(row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 10 : Request send to insert a row with date in date datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 10", "Description": " Request send to insert a row with date in date datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test6.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 10 : Request send to insert a row with date in date datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 10", "Description": " Request send to insert a row with date in date datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test6.push(list)
	})
	let insertPromise2 = table.insertRow({testrow : "testdate2", testdate : "qwer-ty-po"});
    await insertPromise2.then(async(row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 11 : Request send to insert a row with string in date datatype and check whether any exception is thrown");
			list = {"Test Case No": "Test case 11", "Description": "Request send to insert a row with string in date datatype and check whether any exception is thrown", "Result" : "Failed"};
		test6.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 11 : Request send to insert a row with string in date datatype and check whether any exception is thrown");
		list = {"Test Case No": "Test case 11", "Description": "Request send to insert a row with string in date datatype and check whether any exception is thrown", "Result" : "Passed"};
		test6.push(list)
	})
	let insertPromise3 = table.insertRow({testrow : "testdate3", testdate : "99999-400-400"});
    await insertPromise3.then(async(row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 12 : Request send to insert a row with an invalid date in date datatype column sucessfully and check whether any exception is thrown");
			list = {"Test Case No": "Test case 12", "Description": "Request send to insert a row with an invalid date in date datatype column and check whether any exception is thrown", "Result" : "Failed"};
		test6.push(list)
		}
	}).catch(err => {
		console.log("✅​ Test case 12: Request send to insert a row with an invalid date in date datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 12", "Description": "Request send to insert a row with an invalid date in date datatype column and check whether any exception is thrown", "Result" : "Passed"};
		test6.push(list)
	})
	let insertPromise4 = table.insertRow({testrow : "testdate4", testdate : "@)@#-)(-!@"});
    await insertPromise4.then(async(row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 13 : Request send to insert a row with special characters in date datatype and check whether any exception is thrown");
			list = {"Test Case No": "Test case 13", "Description": "Request send to insert a row with special characters in date datatype and check whether any exception is thrown", "Result" : "Failed"};
		test6.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 13 : Request send to insert a row with special characters in date datatype and check whether any exception is thrown");
		list = {"Test Case No": "Test case 13", "Description": "Request send to insert a row with special characters in date datatype and check whether any exception is thrown", "Result" : "Passed"};
		test6.push(list)
	})
	let insertPromise5 = table.insertRow({testrow : "testdate5", testdate : "😏😔😘😊-🥹🥺-😩😀"});
    await insertPromise5.then(async(row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 14 : Request send to insert a row with emoji in date datatype and check whether any exception is thrown");
			list = {"Test Case No": "Test case 14", "Description": "Request send to insert a row with emoji in date datatype and check whether any exception is thrown", "Result" : "Failed"};
		test6.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 14 : Request send to insert a row with emoji in date datatype and check whether any exception is thrown");
		list = {"Test Case No": "Test case 14", "Description": "Request send to insert a row with emoji in date datatype and check whether any exception is thrown", "Result" : "Passed"};
		test6.push(list)
	})
	let insertPromise6 = table.insertRow({testrow : "testdate6", testdate : "-2011--02--01"});
    await insertPromise6.then(async(row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 15:  Request send to insert a row with an invalid date in date datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 15", "Description": "Request send to insert a row with an invalid date in date datatype column and check whether any exception is thrown", "Result" : "Failed"};
		test6.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 15 : Request send to create date rows and check whether any exception is thrown");
		list = {"Test Case No": "Test case 15", "Description": "Request send to insert a row with an invalid date in date datatype column and check whether any exception is thrown", "Result" : "Passed"};
		test6.push(list)
	})
	let insertPromise7 = table.insertRow({testrow : "testdate7", testdate : "2099-11-26 01:01:01"});
    await insertPromise7.then(async(row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 16: Request send to insert a row with datetime input in date datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 16", "Description": "Request send to insert a row with datetime input in date datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test6.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 16 : Request send to insert a row with datetime input in date datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 16", "Description": "Request send to insert a row with datetime input in date datatype column and check whether any exception is thrown", "Result" : "Passed"};
		test6.push(list)
	})
	return test6;
}

async function testcase17to23(catalystApp)
{
	var test7 = []
	var list;
	let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
    let insertPromise1 = table.insertRow({testrow : "testdatetime1", testdatetime : "2023-03-02 01:01:01"});
    await insertPromise1.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 17 : Request send to insert a row with datetime input in datetime datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 17", "Description": "Request send to insert a row with datetime input in datetime datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test7.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 17: Request send to insert a row with datetime input in datetime datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 17", "Description": "Request send to insert a row with datetime input in datetime datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test7.push(list)
	})
	let insertPromise2 = table.insertRow({testrow : "testdatetime2", testdatetime : "2021-03-02 99:99:99"});
    await insertPromise2.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 18 : Request send to insert datetime row due to invalid time input and check whether any exception is thrown");
			list = {"Test Case No": "Test case 18", "Description": "Request send to insert datetime row due to invalid time input and check whether any exception is thrown", "Result" : "Failed"};
			test7.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 18 : Request send to insert datetime row due to invalid time input and check whether any exception is thrown");
		list = {"Test Case No": "Test case 18", "Description": "Request send to insert datetime row due to invalid time input and check whether any exception is thrown", "Result" : "Passed"};
			test7.push(list)
	})
	let insertPromise3 = table.insertRow({testrow : "testdatetime3", testdatetime : "2021-03-02"});
    await insertPromise3.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 19 : Request send to insert a row with date input in datetime datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 19", "Description": "Request send to insert a row with date input in datetime datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test7.push(list)
		}
	}).catch(err => {
		console.log(" ​✅​ Failed case 19 : Request send to insert a row with date input in datetime datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 19", "Description": "Request send to insert a row with date input in datetime datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test7.push(list)
	})
	let insertPromise4 = table.insertRow({testrow : "testdatetime4", testdatetime : "-2021--03--02 01:02:03"});
    await insertPromise4.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 20 : Request send to insert datetime row due to invalid date input and check whether any exception is thrown");
			list = {"Test Case No": "Test case 20", "Description": "Request send to insert datetime row due to invalid date input and check whether any exception is thrown", "Result" : "Failed"};
			test7.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 20 : Request send to insert datetime row due to invalid date input and check whether any exception is thrown");
		list = {"Test Case No": "Test case 20", "Description": "Request send to insert datetime row due to invalid date input and check whether any exception is thrown", "Result" : "Passed"};
			test7.push(list)
	})
	let insertPromise5 = table.insertRow({testrow : "testdatetime5", testdatetime : "2021-03-02 hh:mm:ss"});
    await insertPromise5.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 21 : Request send to insert datetime row due to invalid date input and check whether any exception is thrown");
			list = {"Test Case No": "Test case 21", "Description": "Request send to insert datetime row due to invalid date input and check whether any exception is thrown", "Result" : "Failed"};
			test7.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 21 : Request send to insert datetime row due to invalid date input and check whether any exception is thrown");
		list = {"Test Case No": "Test case 21", "Description": "Request send to insert datetime row due to invalid date input and check whether any exception is thrown", "Result" : "Passed"};
			test7.push(list)
	})
	let insertPromise6 = table.insertRow({testrow : "testdatetime6", testdatetime : "2021-03-02 !@:$^:#$"});
    await insertPromise6.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 22 : Request send to insert a row with special characters in datetime datatype and check whether any exception is thrown");
			list = {"Test Case No": "Test case 22", "Description": "Request send to insert a row with special characters in datetime datatype and check whether any exception is thrown", "Result" : "Failed"};
			test7.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 22 :  Request send to insert a row with special characters in datetime datatype and check whether any exception is thrown");
		list = {"Test Case No": "Test case 22", "Description": "Request send to insert a row with special characters in datetime datatype and check whether any exception is thrown", "Result" : "Passed"};
			test7.push(list)
	})
	let insertPromise7 = table.insertRow({testrow : "testdatetime7", testdatetime : "2021-03-02 ​😁​​😏​​:😕​​🙃:​​😩​​😬​"});
    await insertPromise7.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 23 : Request send to insert a row with emoji in datetime datatype and check whether any exception is thrown");
			list = {"Test Case No": "Test case 23", "Description": "Request send to insert a row with emoji in datetime datatype and check whether any exception is thrown", "Result" : "Failed"};
			test7.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 23 : Request send to insert a row with emoji in datetime datatype and check whether any exception is thrown");
		list = {"Test Case No": "Test case 23", "Description": "Request send to insert a row with emoji in datetime datatype and check whether any exception is thrown", "Result" : "Passed"};
			test7.push(list)
	})
	return test7;
}

async function testcase24to29(catalystApp)
{
	var test8 = []
	var list;
	let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
    let insertPromise1 = table.insertRow({testrow : "testint1", testint : "2023"});
    await insertPromise1.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 24 : Request send to insert a row with integer input in integer datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 24", "Description": "Request send to insert a row with integer input in integer datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test8.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 24 : Request send to insert a row with integer input in integer datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 24", "Description": "Request send to insert a row with integer input in integer datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test8.push(list)
	})
	let insertPromise2 = table.insertRow({testrow : "testint2", testint : "abcdef"});
    await insertPromise2.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 25 : Request send to insert string in integer datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 25", "Description": " Request send to insert string in integer datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test8.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 25 : Request send to insert string in integer datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 25", "Description": " Request send to insert string in integer datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test8.push(list)
	})
	let insertPromise3 = table.insertRow({testrow : "testint3", testint : "#$%%^&^"});
    await insertPromise3.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 26 : Request send to insert special characters in integer datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 26", "Description": " Request send to insert special characters in integer datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test8.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 26 : Request send to insert special characters in integer datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 26", "Description": " Request send to insert special characters in integer datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test8.push(list)
	})
	let insertPromise4 = table.insertRow({testrow : "testint4", testint : "😏😔😘😊"});
    await insertPromise4.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 27 : Request send to insert emoji in integer datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 27", "Description": " Request send to insert emoji in integer datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test8.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 27 : Request send to insert emoji in integer datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 27", "Description": " Request send to insert emoji in integer datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test8.push(list)
	})
	let insertPromise5 = table.insertRow({testrow : "testint5", testint : "13527000000181046"});
    await insertPromise5.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 28 : Request send to insert a row with bigint input in integer datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 28", "Description": "Request send to insert a row with bigint input in integer datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test8.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 28 : Request send to insert a row with bigint input in integer datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 28", "Description": "Request send to insert a row with bigint input in integer datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test8.push(list)
	})
	let insertPromise7 = table.insertRow({testrow : "testint6", testint : "1.2"});
    await insertPromise7.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 29 : Request send to insert double in integer datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 29", "Description": "Request send to insert double in integer datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test8.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 29 : Request send to insert double in integer datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 29", "Description": "Request send to insert double in integer datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test8.push(list)
	})
	return test8;
}

//Test cases for creating double rows
async function testcase30to37(catalystApp)
{
	var test9 = []
	var list;
	let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
	let insertPromise2 = table.insertRow({testrow : "testdouble2", testdouble : "172719.245"});
    await insertPromise2.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 30 : Request send to insert a row with double input in double datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 30", "Description": "Request send to insert a row with double input in double datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test9.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 30 : Request send to insert a row with double input in double datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 30", "Description": "Request send to insert a row with double input in double datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test9.push(list)
	})
	let insertPromise3 = table.insertRow({testrow : "testdouble3", testdouble : "172"});
    await insertPromise3.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 31 : Request send to insert a row with integer input in double datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 31", "Description": "Request send to insert a row with integer input in double datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test9.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 31 : Request send to insert a row with integer input in double datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 31", "Description": "Request send to insert a row with integer input in double datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test9.push(list)
	})
	let insertPromise4 = table.insertRow({testrow : "testdouble4", testdouble : "hsje.as"});
    await insertPromise4.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 32 : Request send to insert string in double datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 32", "Description": "Request send to insert string in double datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test9.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 32 : Request send to insert string in double datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 32", "Description": "Request send to insert string in double datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test9.push(list)
	})
	let insertPromise5 = table.insertRow({testrow : "testdouble5", testdouble : "-13.4256"});
    await insertPromise5.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 33 : Request send to insert a row with negative double input in double datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 33", "Description": "Request send to insert a row with negative double input in double datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test9.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 33 : Request send to insert a row with negative double input in double datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 33", "Description": "Request send to insert a row with negative double input in double datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test9.push(list)
	})
	let insertPromise6 = table.insertRow({testrow : "testdouble6", testdouble : "2.4773783821256"});
    await insertPromise6.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 34 : Request send to insert a row with double with 13 digits after decimal input in double datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 34", "Description": "Request send to insert a row with double with 13 digits after decimal input in double datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test9.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 34 : Request send to insert a row with double with 13 digits after decimal input in double datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 34", "Description": "Request send to insert a row with double with 13 digits after decimal input in double datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test9.push(list)
	})
	let insertPromise7 = table.insertRow({testrow : "testdouble7", testdouble : "7%^8.8@7"});
    await insertPromise7.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 35 : Request send to insert special characters in double datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 35", "Description": "Request send to insert special characters in double datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test9.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 35 : Request send to insert special characters in double datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 35", "Description": "Request send to insert special characters in double datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test9.push(list)
	})
	let insertPromise8 = table.insertRow({testrow : "testdouble8", testdouble : "😏😔.😘😊"});
    await insertPromise8.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 36 : Request send to insert emoji in integer datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 36", "Description": "Request send to insert emoji in integer datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test9.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 36 : Request send to insert emoji in integer datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 36", "Description": "Request send to insert emoji in integer datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test9.push(list)
	})
	let insertPromise9 = table.insertRow({testrow : "testdouble9", testdouble : "13.-836"});
    await insertPromise9.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 37 : Request send to insert row invalid input for double and check whether any exception is thrown");
			list = {"Test Case No": "Test case 37", "Description": "Request send to insert row invalid input for double and check whether any exception is thrown", "Result" : "Failed"};
			test9.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 37 : Request send to insert row invalid input for double and check whether any exception is thrown");
		list = {"Test Case No": "Test case 37", "Description": "Request send to insert row invalid input for double and check whether any exception is thrown", "Result" : "Passed"};
			test9.push(list)
	})
	return test9;
}

async function testcase38to43(catalystApp)
{
	var test10 = []
	var list;
	let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
    let insertPromise1 = table.insertRow({testrow : "testboolean1", testboolean : true});
    await insertPromise1.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 38 : Request send to insert a row with boolean input in boolean datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 38", "Description": "Request send to insert a row with boolean input in boolean datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test10.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 38 : Request send to insert a row with boolean input in boolean datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 38", "Description": "Request send to insert a row with boolean input in boolean datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test10.push(list)
	})
	let insertPromise2 = table.insertRow({testrow : "testboolean2", testboolean : false});
    await insertPromise2.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 39 : Request send to insert a row with boolean input in boolean datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 39", "Description": "Request send to insert a row with boolean input in boolean datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test10.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 39 : Request send to insert a row with boolean input in boolean datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 39", "Description": "Request send to insert a row with boolean input in boolean datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test10.push(list)
	})
	let insertPromise3 = table.insertRow({testrow : "testboolean3", testboolean : "abcdef"});
    await insertPromise3.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 40 : Request send to insert string in boolean datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 40", "Description": "Request send to insert string in boolean datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test10.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 40 : Request send to insert string in boolean datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 40", "Description": "Request send to insert string in boolean datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test10.push(list)
	})
	let insertPromise4 = table.insertRow({testrow : "testboolean4", testboolean : "#$%%^&^"});
    await insertPromise4.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 41 : Request send to insert special characters in boolean datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 41", "Description": "Request send to insert special characters in boolean datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test10.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 41 : Request send to insert special characters in boolean datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 41", "Description": "Request send to insert special characters in boolean datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test10.push(list)
	})
	let insertPromise5 = table.insertRow({testrow : "testboolean5", testboolean : "😏😔😘😊"});
    await insertPromise5.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 42 : Request send to insert emoji in boolean datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 42", "Description": "Request send to insert emoji in boolean datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test10.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 42 : Request send to insert emoji in boolean datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 42", "Description": "Request send to insert emoji in boolean datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test10.push(list)
	})
	let insertPromise6 = table.insertRow({testrow : "testboolean6", testboolean : "173"});
    await insertPromise6.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 43 : Request send to insert integer in boolean datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 43", "Description": "Request send to insert integer in boolean datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test10.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 43 : Request send to insert integer in boolean datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 43", "Description": "Request send to insert integer in boolean datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test10.push(list)
	})
	return test10;
}

async function testcase44to47(catalystApp)
{
	var test11 = []
	var list;
	let datastore = catalystApp.datastore();
    let table = datastore.table("Datastore");
    let insertPromise1 = table.insertRow({testrow : "testbigint1", testbigint : "13527000000173087"});
    await insertPromise1.then((row) => {
		if(row != 0)
		{
			console.log("​✅​ Test case 44 : Request send to insert a row with bigint input in bigint datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 44", "Description": "Request send to insert a row with bigint input in bigint datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test11.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 44 : Request send to insert a row with bigint input in bigint datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 44", "Description": "Request send to insert a row with bigint input in bigint datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test11.push(list)
	})
	let insertPromise3 = table.insertRow({testrow : "testbigint3", testbigint : "abcdef"});
    await insertPromise3.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 45 : Request send to insert string in bigint datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 45", "Description": "Request send to insert string in bigint datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test11.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 45 : Request send to insert string in bigint datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 45", "Description": "Request send to insert string in bigint datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test11.push(list)
	})
	let insertPromise4 = table.insertRow({testrow : "testbigint4", testbigint : "#$%%^&^"});
    await insertPromise4.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 46 : Request send to insert special characters in bigint datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 46", "Description": "Request send to insert special characters in bigint datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test11.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 46 : Request send to insert special characters in bigint datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 46", "Description": "Request send to insert special characters in bigint datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test11.push(list)
	})
	let insertPromise5 = table.insertRow({testrow : "testbigint5", testbigint : "😏😔😘😊"});
    await insertPromise5.then((row) => {
		if(row != 0)
		{
			console.log(" ❗ Failed case 47 : Request send to insert emoji in bigint datatype column and check whether any exception is thrown");
			list = {"Test Case No": "Test case 47", "Description": "Request send to insert emoji in bigint datatype column and check whether any exception is thrown", "Result" : "Failed"};
			test11.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 47 : Request send to insert emoji in bigint datatype column and check whether any exception is thrown");
		list = {"Test Case No": "Test case 47", "Description": "Request send to insert emoji in bigint datatype column and check whether any exception is thrown", "Result" : "Passed"};
			test11.push(list)
	})
	return test11;
}

async function testcase48to49(catalystApp)
{
	var test12 = []
	var list;
	let datastore = catalystApp.datastore();
	var up = await datastore.table("Datastore").insertRow({testrow : "updatetest"});
	let table = datastore.table("Datastore");
	let rowPromise1= table.updateRow({testrow : "update1",ROWID: up.ROWID, testdate : "2076-08-15", testdatetime : "2023-03-02 01:01:01",testint:"765",testdouble:"26.828",testboolean : true,testbigint : "13527000000173087"});
    await rowPromise1.then((row) => {
		if(row.ROWID != 0)
		{
			console.log("​✅​ Test case 48 : Request send to update a Row and check whether any exception is thrown");
			list = {"Test Case No": "Test case 48", "Description": "Request send to update a Row and check whether any exception is thrown", "Result" : "Passed"};
			test12.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed case 48 : Request send to update a Row and check whether any exception is thrown");
		list = {"Test Case No": "Test case 48", "Description": "Request send to update a Row and check whether any exception is thrown", "Result" : "Failed"};
			test12.push(list)
	})
	let rowPromise2 = table.updateRow({testrow : "update1",uniquetest : "abcd",ROWID: "135270000001840441",testdate : "2076-08-15", testdatetime : "2023-03-02 01:01:01",testint:"765",testdouble:"26.828",testboolean : true,testbigint : "13527000000173087"});
    await rowPromise2.then((row) => {
		if(row.ROWID != 0)
		{
			console.log(" ❗ Failed case 49 : Request send to update row due to invalid row id and check whether any exception is thrown");
			list = {"Test Case No": "Test case 49", "Description": "Request send to update row due to invalid row id and check whether any exception is thrown", "Result" : "Failed"};
			test12.push(list)
		}
	}).catch(err => {
		console.log("​✅​ Test case 49 : Request send to update row due to invalid row id and check whether any exception is thrown");
		list = {"Test Case No": "Test case 49", "Description": "Request send to update row due to invalid row id and check whether any exception is thrown", "Result" : "Passed"};
			test12.push(list)
	})
	return test12;
}

async function testcase50to51(catalystApp)
{
	var test13 = []
	var list;
	let datastore = catalystApp.datastore();
	var del = await datastore.table("Datastore").insertRow({testrow : "deletetest"});
	var delrow = del.ROWID
	let table = datastore.table("Datastore");
	let rowPromise1 = table.deleteRow(delrow);
	await rowPromise1.then((row) => {
		if(true)
            console.log("​✅​ Test case 50 : Request send to delete a row and check whether any exception is thrown");
			list = {"Test Case No": "Test case 50", "Description": "Request send to delete a row and check whether any exception is thrown", "Result" : "Passed"};
			test13.push(list)
        }).catch(err => {
			console.log(" ❗ Failed case 50 : Request send to delete a row and check whether any exception is thrown");
			list = {"Test Case No": "Test case 50", "Description": "Request send to delete a row and check whether any exception is thrown", "Result" : "Failed"};
			test13.push(list)
		})
	let rowPromise2 = table.deleteRow("Datastore");
	await rowPromise2.then((row) => {
		if(true)
			console.log(" ❗ Failed case 51 : Request send to delete row due to invalid row id and check whether any exception is thrown");
			list = {"Test Case No": "Test case 51", "Description": "Request send to delete row due to invalid row id and check whether any exception is thrown", "Result" : "Failed"};
			test13.push(list)
		}).catch(err => {
			console.log("​✅​ Test case 51 : Request send to delete row due to invalid row id and check whether any exception is thrown");
			list = {"Test Case No": "Test case 51", "Description": "Request send to delete row due to invalid row id and check whether any exception is thrown", "Result" : "Passed"};
			test13.push(list)
		})
		return test13;
}

app.post('/terminateds', async (req, res) => {
	process.exit(0)
})

module.exports=app;