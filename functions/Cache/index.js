'use strict';
var express = require('express');
var fs = require('fs');
const fileUpload = require('express-fileupload');
var app = express();
var catalyst = require('zcatalyst-sdk-node');
app.use(express.json());
app.use(fileUpload());

app.post('/cache', async (req, res) => {
	var catalystApp = catalyst.initialize(req)
	var arr = []
	var feature = {"Feature" : "Cache"}
	arr.push(feature)
	console.log("CACHE")
	var t1 = await testcase1(catalystApp)
	for(var i=0;i<t1.length;i++){
		arr.push(t1[i]);
	}
	var t2 = await testcase2to5(catalystApp)
	for(var i=0;i<t2.length;i++){
		arr.push(t2[i]);
	}
	var t3 = await testcase6to7(catalystApp)
	for(var i=0;i<t3.length;i++){
		arr.push(t3[i]);
	}
	var t4 = await testcase8(catalystApp)
	for(var i=0;i<t4.length;i++){
		arr.push(t4[i]);
	}
	var repo = []
	for(let i = 1; i < arr.length; i++)
	{
		repo.push(arr[i])
	}
	var rep = JSON.stringify(arr)
	let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Cachedata : rep});
    insertPromise.then((row) => {
        });

	res.send(repo);
});

async function testcase1(catalystApp)
{
	var list;
	var test = []
	let cache = catalystApp.cache();
    let segment = cache.segment("testcache");
	await segment.put("testing","testcase1");
	let cachePromise = segment.get("testing");
    await cachePromise.then((entity) => {
            if(entity != 0)
			{
				console.log("​✅ Test Case 1 : Request send to retrieve the Segment details and check whether any exception is thrown")
				list = {"Test Case No" : "Test Case 1", "Description" : "Request send to retrieve the Segment details and check whether any exception is thrown", "Result" : "Passed"}
				test.push(list)
			}
        }).catch(err => {
			console.log(" ❗ Failed Case 1 : Request send to retrieve the Segment details and check whether any exception is thrown");
			list = {"Test Case No" : "Test Case 1", "Description" : "Request send to retrieve the Segment details and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)
		})
		return test;
}

async function testcase2to5(catalystApp)
{
	var list;
	var test = []
	let cache = catalystApp.cache();
    let segment = cache.segment("testcache");
    let cachePromise1 = segment.put("testcache","test1");
    await cachePromise1.then((entity) => {
		if(entity != 0)
		{
			console.log("​✅ Test Case 2 : Request send to create a Cache item and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 2", "Description" : "Request send to create a Cache item and check any exception is thrown", "Result" : "Passed"}
			test.push(list);
		}
	}).catch(err => {
		console.log(" ❗ Failed Case 2 : Request send to create a Cache item and check whether any exception is thrown");
		list = {"Test Case No" : "Test Case 2", "Description" : "Request send to create a Cache item and check any exception is thrown", "Result" : "Failed"}
		test.push(list);
	})
    let cachePromise2 = segment.put("#$%^(*","test1");
    await cachePromise2.then((entity) => {
		if(entity != 0)
		{
			console.log(" ❗ Failed Case 3 : Request send to create a Cache item with special characters and check whether proper is thrown")
			list = {"Test Case No" : "Test Case 3", "Description" : "Request send to create a Cache item with special characters and check whether proper is thrown", "Result" : "Failed"}
			test.push(list);
		}
	}).catch(err => {
		console.log("​✅ Test Case 3 : Request send to create a Cache item with special characters and check whether proper is thrown");
		list = {"Test Case No" : "Test Case 3", "Description" : "Request send to create a Cache item with special characters and check whether proper is thrown", "Result" : "Passed"}
		test.push(list);
	})
	let cachePromise3 = segment.put("😏😔😊😏😔😊","test2");
    await cachePromise3.then((entity) => {
		if(entity != 0)
		{
			console.log("​✅ Test Case 4 : Request send to create a Cache item with emoji and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 4", "Description" : "Request send to create a Cache item with emoji and check any exception is thrown", "Result" : "Passed"}
			test.push(list);
		}
	}).catch(err => {
		console.log(" ❗ Failed Case 4 : Request send to create a Cache item with emoji and check whether any exception is thrown");
		list = {"Test Case No" : "Test Case 4", "Description" : "Request send to create a Cache item with emoji and check any exception is thrown", "Result" : "Failed"}
		test.push(list);
	})
	let cachePromise4 = segment.put("23456","test1");
    await cachePromise4.then((entity) => {
		if(entity != 0)
		{
			console.log("​✅ Test Case 5 : Request send to create a Cache item with integer and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 5", "Description" : "Request send to create a Cache item with integer and check any exception is thrown", "Result" : "Passed"}
			test.push(list);
		}
	}).catch(err => {
		console.log(" ❗ Failed Case 5 : Request send to create a Cache item with integer and check any exception is thrown");
		list = {"Test Case No" : "Test Case 5", "Description" : "Request send to create a Cache item with integer and check any exception is thrown", "Result" : "Failed"}
		test.push(list);
	})
	return test;
}

async function testcase6to7(catalystApp)
{
	var list;
	var test = [];
	let cache = catalystApp.cache();
    let segment = cache.segment("testcache");
    let cachePromise1 = segment.update("testcache", "😏😔😊😏😔😊");
    await cachePromise1.then((entity) => {
		if(entity.cache_value == "😏😔😊😏😔😊")
		{
			console.log("​✅ Test Case 6 : Request send to update an existing cache item and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 6", "Description" : "Request send to update an existing cache item and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
		else
		{
			console.log(" ❗ Failed Case 6 : Request send to update an existing cache item and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 6", "Description" : "Request send to update an existing cache item and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed Case 6 : Request send to update an existing cache item and check whether any exception is thrown");
		list = {"Test Case No" : "Test Case 6", "Description" : "Request send to update an existing cache item and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})
	let cachePromise2 = segment.update("upcreate", "update");
    await cachePromise2.then((entity) => {
		if(entity.cache_value == "update")
		{
			console.log("​✅ Test Case 7 : Request send to update a cache item which is not exist and check whether new cache item has created and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 7", "Description" : "Request send to update a cache item which is not exist and check whether new cache item has created and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
	}).catch(err => {
		console.log(" ❗ Failed Case 7 : Request send to update a cache item which is not exist and check whether new cache item has created and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 7", "Description" : "Request send to update a cache item and check whether new cache item has created and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})
	return test;
}

async function testcase8(catalystApp)
{
	var list;
	var test = []
	let cache = catalystApp.cache();
    let segment = cache.segment("testcache");
	await segment.delete("testcache");
	await segment.delete("upcreate");
	await segment.delete("23456");
	await segment.delete("😏😔😊😏😔😊");
    let deletePromise = segment.delete("testing");
    await deletePromise.then((entity) => {
		if(true)
		{
			console.log("​✅ Test Case 8 : Request send to delete a cache item and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 8", "Description" : "Request send to delete a cache item and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
        }).catch(err => {
			console.log(" ❗ Failed Case 8 : Request send to delete a cache item and check whether any exception is thrown");
			list = {"Test Case No" : "Test Case 8", "Description" : "Request send to delete a cache item and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)
		})
		return test;
}

app.post('/terminatecache', async (req, res) => {
	process.exit(0)
})

module.exports = app;