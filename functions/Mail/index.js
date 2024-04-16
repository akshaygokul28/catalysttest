"use strict"
var fs = require('fs');
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

app.post("/mail", async(req, res) => {

    const catalystApp = catalyst.initialize(req);
	var arr = [];
	var feature = {"Feature" : "Mail"}
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
	var repo = []
	for(let i = 1; i < arr.length; i++)
	{
		repo.push(arr[i])
	}
	var rep = JSON.stringify(arr)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Maildata : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)
});

async function testcase1(catalystApp)
{
	var test = []
	var list; 
	let config = {
		from_email: "akshaygokul.gr+sdkautomation@zohotest.com", 
		to_email: "akshaygokul.gr+lz@zohotest.com", 
		html_mode: true,
		subject: 'Greetings from Zylker Corp!',
		content: "<p>Hello,</p> We're glad to welcome you at Zylker Corp. To begin your journey with us, please download the attached KYC form and fill in your details. You can send us the completed form to this same email address.</p>We cannot wait to get started!<p><p>Cheers!</p><p>Team Zylker</p>",
		attachments: [fs.createReadStream('package.json')] 
	};

	let email = catalystApp.email();
	let mailPromise = email.sendMail(config);
    await mailPromise.then((mailObject) => {
		if(mailObject.project_details.id != 0)
		{
			console.log("​✅​ Test case 1 : Request send to send a mail from a verfied mail ID to a proper receiver ID and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 1", "Description" : "Request send to send a mail from a verfied mail ID to a proper receiver ID and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
    })
	.catch((err) => {
		console.log(" ❗ Failed case 1 : Request send to send a mail from a verfied mail ID to a proper receiver ID and check whether any exception is thrown");
		list = {"Test Case No" : "Test case 1", "Description" : "Request send to send a mail from a verfied mail ID to a proper receiver ID and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	});
	return test;
}

async function testcase2(catalystApp)
{
	var test = []
	var list; 
	let config = {
		from_email: "akshaygokul28@gmail.com", 
		to_email: "akshaygokul.gr+sdkautomation@zohotest.com", 
		html_mode: true,
		subject: 'Greetings from Zylker Corp!',
		content: "<p>Hello,</p> We're glad to welcome you at Zylker Corp. To begin your journey with us, please download the attached KYC form and fill in your details. You can send us the completed form to this same email address.</p>We cannot wait to get started!<p><p>Cheers!</p><p>Team Zylker</p>",
		attachments: [fs.createReadStream('package.json')] 
	};

	let email = catalystApp.email();
	let mailPromise = email.sendMail(config);
    await mailPromise.then((mailObject) => {
        console.log(mailObject);
		if(mailObject.project_details.id != 0)
		{
			console.log(" ❗ Failed case 2 : Request send to send a mail from an unverified mail ID and check whether proper exception are thrown")
			list = {"Test Case No" : "Test case 2", "Description" : "Request send to send a mail from an unverified mail ID and check whether proper exception are thrown", "Result" : "Failed"}
			test.push(list)
		}
    })
	.catch((err) => {
		console.log("​✅​ Test case 2 : Request send to send a mail from an unverified mail ID and check whether proper exception are thrown");
		list = {"Test Case No" : "Test case 2", "Description" : "Request send to send a mail from an unverified mail ID and check whether proper exception are thrown", "Result" : "Passed"}
		test.push(list)
	});
	return test;
}

async function testcase3(catalystApp)
{
	var test = []
	var list; 
	let config = {
		from_email: "akshaygokul.gr+sdkautomation@zohotest.com", 
		to_email: "akshaygokul.gr+lz@zohotest.com", 
		html_mode: true,
		content: "<p>Hello,</p> We're glad to welcome you at Zylker Corp. To begin your journey with us, please download the attached KYC form and fill in your details. You can send us the completed form to this same email address.</p>We cannot wait to get started!<p><p>Cheers!</p><p>Team Zylker</p>",
		attachments: [fs.createReadStream('package.json')] 
	};

	let email = catalystApp.email();
	let mailPromise = email.sendMail(config);
    await mailPromise.then((mailObject) => {
        if(mailObject.project_details.id != 0)
		{
			console.log(" ❗ Failed case 3 : Request send to send a mail without subject and check whether proper exception are thrown")
			list = {"Test Case No" : "Test case 3", "Description" : "Request send to send a mail without subject and check whether proper exception are thrown", "Result" : "Failed"}
			test.push(list)
		}
    })
	.catch((err) => {
		console.log("​✅​ Test case 3 : Request send to send a mail without subject and check whether proper exception are thrown");
		list = {"Test Case No" : "Test case 3", "Description" : "Request send to send a mail without subject and check whether proper exception are thrown", "Result" : "Passed"}
		test.push(list)
	});
	return test;
}

app.post("/terminatemail", async(req, res) => {
	process.exit(0)
})

module.exports = app;