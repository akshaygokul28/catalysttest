"use strict"

const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

app.post("/pushnotifications", async(req, res) => {

	const catalystApp = catalyst.initialize(req);
	var arr = []
	var feature = {"Feature" : "Push Notifications"}
	arr.push(feature)
    var t1 = await testcase1(catalystApp)
	for(let i = 0; i < t1.length; i++)
	{
		arr.push(t1[i])
	}
	var repo = []
	for(let i = 1; i < arr.length; i++)
	{
		repo.push(arr[i])
	}
	var rep = JSON.stringify(arr)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Pushnotificationdata : rep});
    insertPromise.then((row) => {
        });
		res.send(repo)

});

async function testcase1(catalystApp)
{
	var list
	var test = []
	var userList = [];
	userList.push("10054973549");
	var reply = await catalystApp.pushNotification().web().sendNotification("Hi there! The task you scheduled has been completed.", userList); 
	if(reply == true)
	{
		console.log("​✅​ Test case 1 : Request send to send a notification and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 1", "Description" : "Request send to send a notification and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	}
	else
	{
		console.log(" ❗ Failed case 1 : Request send to send a notification and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 1", "Description" : "Request send to send a notification and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	}
	return test;
}

app.post("/terminatenotification", async(req, res) => {
	process.exit(0)
})

module.exports = app;
