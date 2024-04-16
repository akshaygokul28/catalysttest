"use strict"

const express = require('express');
const catalyst = require('zcatalyst-sdk-node');
const fs = require('fs');
const app = express();
app.use(express.json());

app.post("/zia", async(req, res) => {

    const catalystApp = catalyst.initialize(req);
	var arr = []
	var feature = {"Feature" : "Zia"}
	arr.push(feature)
	var t1 = await testcase1to2(catalystApp)
	for(let i = 0; i < t1.length; i++)
	{
		arr.push(t1[i])
	}
	var t2 = await testcase3to4(catalystApp)
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
	var repo = []
	for(let i = 1; i < arr.length; i++)
	{
		repo.push(arr[i])
	}
	var rep = JSON.stringify(arr)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Ziadata : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)

});

async function testcase1to2(catalystApp)
{
	var list;
	var test= [];
	var zia = catalystApp.zia();
	await zia.extractOpticalCharacters(fs.createReadStream('testocr.png'),  {"modelType":"OCR", "language" : "eng"})
	.then((result) => {
		if(Object.keys(result.text).length != 0)
		{
			console.log("​✅ Test Case 1 : Request send to extract optical character from a image and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 1", "Description" : "Request send to extract optical character from a image and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}
	}).catch((err) => {
		console.log(" ❗ Failed Case 1 : Request send to extract optical character from a image and check whether any exception is thrown");
		list = {"Test Case No" : "Test Case 1", "Description" : "Request send to extract optical character from a image and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})

	await zia.extractOpticalCharacters(fs.createReadStream('package.json'),  {"modelType":"OCR", "language" : "eng"})
	.then((result) => {
		console.log(result);
		console.log(Object.keys(result.text).length != 0)
		{
			console.log(" ❗ Failed Case 2 : Request send to extract optical character from a image and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 2", "Description" : "Request send to extract optical character from a invalid file and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	}).catch((err) => {
	console.log("​✅ Test Case 2 : Request send to extract optical character from an invalid file and check whether proper is thrown")
		list = {"Test Case No" : "Test Case 2", "Description" : "Request send to extract optical character from a invalid file and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list)
	})
	return test;
}

async function testcase3to4(catalystApp)
{
	var list;
	var test = [];
	var zia = catalystApp.zia();
	await zia.analyseFace(fs.createReadStream('testface.jpg'), 
	{
		age: true,
		emotion: true,
		gender: true
	}).then((result) => {
		if(Object.keys(result).length != 0)
		{
			console.log("​✅ Test Case 3 : Request send to perform facial detection in image and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 3", "Description" : "Request send to perform facial detection in image and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}

	})
	.catch((err) =>{ 
		console.log(" ❗ Failed Case 3 : Request send to perform facial detection in image and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 3", "Description" : "Request send to perform facial detection in image and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	});

	await zia.analyseFace(fs.createReadStream('package.json'), 
	{
		age: true,
		emotion: true,
		gender: true
	}).then((result) => {
		console.log(" ❗ Failed Case 4 : Request send to perform facial detection from an invalid file and check whether proper exception is thrown")
		list = {"Test Case No" : "Test Case 4", "Description" : " Request send to perform facial detection from an invalid file and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)	
	})
	.catch((err) => {
		console.log("​✅ Test Case 4 : Request send to perform facial detection from an invalid file and check whether proper exception is thrown")
		list = {"Test Case No" : "Test Case 4", "Description" : " Request send to perform facial detection from an invalid file and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list)	
	});

	return test;
}

async function testcase3(catalystApp)
{
	var test = []
	var list
	const zia = catalystApp.zia();
	const sourceImage1 = fs.createReadStream('AadhaarFront1-b3900d1b00.png');
	const queryImage1 = fs.createReadStream('EKYC1-7d55fefcbf.png');
	await zia.compareFace(sourceImage1, queryImage1).then((res) => {
	if(res.matched == "true")
	{
		console.log("​✅ Test Case 5 : Request send to performs facial detection from an image and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 5", "Description" : " Request send to performs facial detection from an image and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)	
	}
	else
	{
		console.log("​✅ Test Case 5 : Request send to performs facial detection from an image and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 5", "Description" : " Request send to performs facial detection from an image and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)	
	}
	}).catch((err) => { 
		console.log(" ❗ Failed Case 5 : Request send to perform facial detection from an image and check whether proper exception is thrown")
		list = {"Test Case No" : "Test Case 5", "Description" : " Request send to performs facial detection from an image and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)	
});

	const sourceImage2 = fs.createReadStream('AadhaarFront1-b3900d1b00.png');
	const queryImage2 = fs.createReadStream('package.json');
	await zia.compareFace(sourceImage2, queryImage2).then((res) => {
		console.log(" ❗ Failed Case 6 : Request send to performs facial detection from an invalid file and check whether proper exception is thrown")
		list = {"Test Case No" : "Test Case 6", "Description" : "Request send to performs facial detection from an invalid file and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)	
	}).catch((err) => {
		console.log("​✅ Test Case 6 : Request send to perform facial detection from an invalid file and check whether proper exception is thrown")
		list = {"Test Case No" : "Test Case 6", "Description" : "Request send to performs facial detection from an invalid file and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list)	
		})
			return test;
}

async function testcase4(catalystApp)
{
	var list;
	var test = []
	const zia = catalystApp.zia();
	await zia.moderateImage(fs.createReadStream('IM_Sample_Image-6-6233fe6c1f.jpg'))
	.then((result) => {
		console.log("​✅ Test Case 7 : Request send to perform image moderation and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 7", "Description" : "Request send to perform image moderation and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)	
	})
	.catch((err) =>{ 
		console.log(" ❗ Failed Case 7 : Request send to perform image moderation and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 7", "Description" : "Request send to perform image moderation and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)	
	}); 

	await zia.moderateImage(fs.createReadStream('package.json'))
	.then((result) => {
		console.log(" ❗ Failed Case 8 : Request send to perform image moderation from a invalid file and check whether proper exception is thrown")
		list = {"Test Case No" : "Test Case 8", "Description" : "Request send to perform image moderation from a invalid file and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)	
	})
	.catch((err) => { 
		list = {"Test Case No" : "Test Case 8", "Description" : " Request send to perform image moderation from a invalid file and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list)	
		console.log("​✅ Test Case 8 : Request send to perform image moderation from a invalid file and check whether proper exception is thrown")
	}); 
	return test;
}

async function testcase5(catalystApp)
{
	var test = []
	var list;
	var zia = catalystApp.zia(); 
	await zia.detectObject(fs.createReadStream('testface.jpg'))
	.then((result) => {
		if(result.objects.length != 0)
		{
			console.log("​✅ Test Case 9 : Request send to perform object recognition from a image and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 9", "Description" : "Request send to perform object recognition from a image and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)	
		}
	})
	.catch((err) =>{ 
		console.log(" ❗ Failed Case 9 : Request send to perform object recognition from a image and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 9", "Description" : "Request send to perform object recognition from a image and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)	
	});

	await zia.detectObject(fs.createReadStream('package.json'))
	.then((result) => {
		if(result.objects.length != 0)
		{
			console.log(" ❗ Failed Case 10 : Request send to perform object recognition from a invalid file and check whether proper exception is thrown")
			list = {"Test Case No" : "Test Case 10", "Description" : "Request send to perform object recognition from a invalid file and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)	 
		}
	})
	.catch((err) => { 
		console.log("​✅ Test Case 10 : Request send to perform object recognition from a invalid file and check whether proper exception is thrown")
		list = {"Test Case No" : "Test Case 10", "Description" : "Request send to perform object recognition from a invalid file and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list)	
			});
			return test;
}

async function testcase6(catalystApp)
{
	var list;
	var test = []
	var zia = catalystApp.zia();
	await zia.scanBarcode(fs.createReadStream('BARCODE_Sample_Image_Catalyst-QR-71395d5d95.png'))
	.then((result) => {
		console.log("​✅ Test Case 11 : Request send to perform barcode scan from a image and check whether any exception is thrown");
		list = {"Test Case No" : "Test Case 11", "Description" : "Request send to perform object recognition from a image and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)	
	})
	.catch((err) => {
		console.log(" ❗ Failed Case 11 : Request send to perform barcode scan from a image and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 11", "Description" : "Request send to perform object recognition from a image and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list)	
	})
	
	await zia.scanBarcode(fs.createReadStream('package.json'))
	.then((result) => {
		console.log(" ❗ Failed Case 12 : Request send to perform object recognition from a invalid file and check whether proper exception is thrown");
		list = {"Test Case No" : "Test Case 12", "Description" : "Request send to perform object recognition from a invalid file and check whether proper exception is thrown", "Failed" : "Passed"}
			test.push(list)
	})
	.catch((err) =>{ 
		console.log("​✅ Test Case 12 : Request send to perform object recognition from a invalid file and check whether proper exception is thrown");
		list = {"Test Case No" : "Test Case 12", "Description" : "Request send to perform object recognition from a invalid file and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list)
			})
			return test;
}

app.post("/terminatezia", async(req, res) => {
	process.exit(0)
})

module.exports = app;
