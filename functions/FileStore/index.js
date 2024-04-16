'use strict';
var express = require('express');
var fs = require('fs');
const fileUpload = require('express-fileupload');
var app = express();
var catalyst = require('zcatalyst-sdk-node');
app.use(express.json());
app.use(fileUpload());
app.post('/filestore', async (req, res) => {
	var arr = [];
	var feature = {"Feature" : "FileStore"}
	arr.push(feature)
	var catalystApp = catalyst.initialize(req, {scope : 'admin'})
	console.log("FILE STORE")

	var t1 = await testcase1(catalystApp)
	for(var i=0;i<t1.length;i++){
		arr.push(t1[i]);
	}
	var t2 = await testcase5to6(catalystApp)
	for(var i=0;i<t2.length;i++){
		arr.push(t2[i]);
	}
	var t3 = await testcase7(catalystApp)
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
    let insertPromise = table.insertRow({Filestoredata : rep});
    insertPromise.then((row) => {
        });

	res.send(repo);
});

async function testcase1(catalystApp) {
	var test = []
	var list;
	let filestore = catalystApp.filestore();
	let folderPromise1 = filestore.getFolderDetails("Testfile");
	await folderPromise1.then((folder) => {
		if(folder != 0)
		{
			console.log("​✅ Test Case 1 : Request send to retrieve folder details and check whether any exception is thrown")
			list = {"Test Case No": "Test Case 1" ,"Description" : "Request send to retrieve folder details and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list);
		}
	}).catch(err => {
		console.log(" ❗ Failed Case 1 : Request send to retrieve folder details and check whether any exception is thrown");
		list = {"Test Case No": "Test Case 1" ,"Description" : "Request send to retrieve folder details and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list);
	})
	let folderPromise2 = filestore.getFolderDetails("13527000000147114");
	await folderPromise2.then((folder) => {
		if(folder != 0)
		{
			console.log(" ❗ Failed Case 2 : Request send to retrive folder details for a invalid folder id and check whether proper exception is thrown")
			list = {"Test Case No": "Test Case 2" ,"Description" : "Request send to retrive folder details for a invalid folder id and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list);
		}
	}).catch(err => {
		console.log("​✅ Test Case 2 : Request send to retrive folder details for a invalid folder id and check whether proper exception is thrown");
		list = {"Test Case No": "Test Case 2" ,"Description" : "Request send to retrive folder details for a invalid folder id and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list);
	})
	let folderPromise3 = filestore.getFolderDetails("");
	await folderPromise3.then((folder) => {
		if(folder != 0)
		{
			console.log(" ❗ Failed Case 3 : Request send to retrive folder details without passing folder id and check whether any exception is thrown")
			list = {"Test Case No": "Test Case 3" ,"Description" : "Request send to retrive folder details without passing folder id and check whether any exception is thrown", "Result" : "Failed"}
			test.push(list);
		}
	}).catch(err => {
		console.log("​✅ Test Case 3 : Request send to retrive folder details without passing folder id and check whether any exception is thrown");
		list = {"Test Case No": "Test Case 3" ,"Description" : "Request send to retrive folder details without passing folder id and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list);
	})
	let folderPromise4 = filestore.getFolderDetails("idsmnlenv");
	await folderPromise4.then((folder) => {
		if(folder != 0)
		{
			console.log(" ❗ Failed Case 4 : Request send to retrive folder details for a invalid folder id and check whether proper exception is thrown")
			list = {"Test Case No": "Test Case 4" ,"Description" : "Request send to retrive folder details for a invalid folder id and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list);
		}
	}).catch(err => {
		console.log("​✅ Test Case 4 : Request send to retrive folder details for a invalid folder id and check whether proper exception is thrown");
		list = {"Test Case No": "Test Case 4" ,"Description" : "Request send to retrive folder details for a invalid folder id and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list);
	})
	return test;
}



async function testcase5to6(catalystApp)
{
	var test = []
	var list;
	let filestore = catalystApp.filestore();
	let folder = filestore.folder("Testfile"); 
	let uploadPromise1 = folder.uploadFile({code: fs.createReadStream("empdata.csv"),name: "testfile.csv"});
	await uploadPromise1.then((fileObject) => {
		var fileid = fileObject.id;

		let rowData = 
    { 
        FileId : fileid
    };
    let datastore = catalystApp.datastore();
    let table = datastore.table("FileUpload");
    let insertPromise = table.insertRow(rowData);

            if(fileObject != 0)
			{
				console.log("​✅ Test Case 5 : Request send to upload a file filestore and check whether any exception is thrown")
				list = {"Test Case No": "Test Case 5" ,"Description" : "Request send to upload a file filestore and check whether any exception is thrown", "Result" : "Passed"}
				test.push(list);
			}
        }).catch(err => {
			console.log(err)
			console.log("❗ Failed Case 5 : Request send to upload a file filestore and check whether any exception is thrown");
			list = {"Test Case No": "Test Case 5" ,"Description" : "Request send to upload a file filestore and check whether any exception is thrown", "Result" : "Failed"}
				test.push(list);
		})

		let uploadPromise2 = folder.uploadFile({code: fs.createReadStream("test.txt"),name: "testFile1.txt"});
		await uploadPromise2.then((fileObject) => {
			console.log(" ❗ Failed case 6 : Request send to upload a empty file with 0 bytes and check whether proper exception is thrown")
			list = {"Test Case No": "Test Case 6" ,"Description" : "Request send to upload a empty file with 0 bytes and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list);
		}).catch(err => {
			console.log("​✅ Test Case 6 : Request send to upload a empty file with 0 bytes and check whether proper exception is thrown and check whether any exception is thrown");
			list = {"Test Case No": "Test Case 6" ,"Description" : "Request send to upload a empty file with 0 bytes and check whether proper exception is thrown and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list);
		})
		return test;
}

async function testcase7(catalystApp)
{
	var test = [];
	var list;
	var queryRes = await catalystApp.zcql().executeZCQLQuery("Select FileID from FileUpload Order by CREATEDTIME")
	var length = queryRes.length
	var getfile = queryRes[length - 1].FileUpload.FileId;

	let filestore = catalystApp.filestore();
	let folder = filestore.folder("Testfile");
	let downloadPromise = folder.downloadFile(getfile);
	await downloadPromise.then((fileObject) => {
		if(fileObject != 0)
		{
			console.log("​✅ Test Case 7 : Request send to download a file from filestore and check whether any exception is thrown and check whether any exception is thrown")
			list = {"Test Case No": "Test Case 7" ,"Description" : "Request send to download a file from filestore and check whether any exception is thrown and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list);
		}
	}).catch(err => {
		console.log(err)
		console.log(" ❗ Failed case 7 : Request send to download a file from filestore and check whether any exception is thrown and check whether any exception is thrown");
		list = {"Test Case No": "Test Case 7" ,"Description" : "Request send to download a file from filestore and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list);
	})

	let folder1 = filestore.folder("Testfile");
	let downloadPromise1 = folder.downloadFile("Testfile");
	await downloadPromise1.then((fileObject) => {
		if(fileObject != 0)
		{
			console.log(" ❗ Failed case 8 : Request send to download a file from filestore with invalid file id and check whether proper exception is thrown")
			list = {"Test Case No": "Test Case 8" ,"Description" : "Request send to download a file from filestore with invalid file id and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list);
		}
	}).catch(err => {
		console.log("​✅ Test Case 8 : Request send to download a file from filestore with invalid file id and check whether proper exception is thrown");
		list = {"Test Case No": "Test Case 8" ,"Description" : "Request send to download a file from filestore with invalid file id and check whether proper exception is thrown", "Result" : "Passed"}
		test.push(list);
	})
	return test;
}

async function testcase8(catalystApp)
{
	var test = [];
	var list;
	var queryRes = await catalystApp.zcql().executeZCQLQuery("Select FileID from FileUpload Order by CREATEDTIME")
	var length = queryRes.length
	var getfile = queryRes[length - 1].FileUpload.FileId;

	let filestore = catalystApp.filestore();
	let folder = filestore.folder("Testfile");
	let deletePromise = folder.deleteFile(getfile);
	await deletePromise.then((fileObject) => {
            if(fileObject == true)
			{
				console.log("​✅ Test Case 9 : Request send to delete a file from filestore and check whether any exception is thrown")
				list = {"Test Case No": "Test Case 9" ,"Description" : "Request send to delete a file from filestore and check whether any exception is thrown", "Result" : "Passed"}
				test.push(list);
			}
        }).catch(err => {
			console.log(err)
			console.log(" ❗ Failed case 9 : Request send to delete a file from filestore and check whether any exception is thrown");
			list = {"Test Case No": "Test Case 9" ,"Description" : "Request send to delete a file from filestore and check whether any exception is thrown", "Result" : "Failed"}
				test.push(list);
		})

	let deletePromise1 = folder.deleteFile(getfile);
	await deletePromise1.then((fileObject) => {
		if(fileObject == true)
		{
			console.log("❗ Failed case 10 : Request send to delete a file from filestore which is already been deleted and check whether proper exception is thrown")
			list = {"Test Case No": "Test Case 10" ,"Description" : "Request send to delete a file from filestore which is already been deleted and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list);
		}
	}).catch(err => {
		console.log(" ✅ Test Case 10 : Request send to delete a file from filestore which is already been deleted and check whether proper exception is thrown");
		list = {"Test Case No": "Test Case 10" ,"Description" : "Request send to delete a file from filestore which is already been deleted and check whether proper exception is thrown", "Result" : "Passed"}
		test.push(list);
	})
	return test;
}

app.post('/terminate', async (req, res) => {
	process.exit(0)
})


module.exports=app;