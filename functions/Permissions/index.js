"use strict"

const express = require('express');
const catalyst = require('zcatalyst-sdk-node');
var fs = require('fs');
const app = express();
app.use(express.json());

app.post("/permissions", async(req, res) => {

    const catalystApp = catalyst.initialize(req);
	var arr = [];
	var feature = {"Feature" : "Permissions"}
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
	var t8 = await testcase8(catalystApp)
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
    let insertPromise = table.insertRow({Permissionsdata : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)

});

async function testcase1(catalystApp)
{
	var test = [];
	var list;
	let datastore = catalystApp.datastore();
	let zcql = catalystApp.zcql();
    let table1 = datastore.table("Permission_admin_global");
    let insertPromise = table1.insertRow({"Data" : "test1"});
    await insertPromise.then(async (row) => {
		if(row.ROWID != 0)
		{
			console.log("Admin has the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 1", "Description" : "Admin has the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
		}
		await datastore.table("Permission_Data").insertRow({"Rowdata" : row.ROWID});
        }).catch(err =>{
			console.log(err)
			console.log("User does not have the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 1", "Description" : "Admin does not have the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
			})
	
	var info = await zcql.executeZCQLQuery("Select Rowdata from Permission_Data")

	var mod = info[info.length-1].Permission_Data.Rowdata
	let table2 = datastore.table('Permission_admin_global');
	let rowPromise1 = table2.updateRow({"ROWID" : mod, "Data" : "updated"});
	await rowPromise1.then((row) => {
			if(row.ROWID != 0)
			{
				console.log("Admin has the permission to update the row from the table")
				list = {"Test Case No" : "Test Case 2", "Description" : "Admin has the permission to insert the row in the table", "Result" : "Passed"}
				test.push(list)
			}
		}).catch(err =>{
			console.log("User has the permission to update the row from in the table")
			list = {"Test Case No" : "Test Case 2", "Description" : "Admin has the permission to update the row from in the table", "Result" : "Passed"}
			test.push(list)
			})

	let zcqlPromise = zcql.executeZCQLQuery("Select * from Permission_admin_global");
	await zcqlPromise.then(queryResult => {
			if(queryResult.length != 0)
			{
				console.log("Admin has the permission to select the rows from the table")
				list = {"Test Case No" : "Test Case 3", "Description" : "Admin has the permission to select the rows from the table", "Result" : "Passed"}
				test.push(list)
			}
	}).catch(err => {
		console.log("User does not have the permission to select rows from the table")
		list = {"Test Case No" : "Test Case 3", "Description" : "Admin does not have the permission to select rows from the table", "Result" : "Passed"}
		test.push(list)
	})

	let table = datastore.table('Permission_admin_global');
	let rowPromise2 = table.deleteRow(mod);
	await rowPromise2.then((row) => {
           if(row == true)
		   {
			console.log("Admin has the permission to delete a row from the table")
			list = {"Test Case No" : "Test Case 4", "Description" : "Admin has the permission to delete a row from the table", "Result" : "Passed"}
			test.push(list)
		   }
        }).catch(err =>{
			console.log("User does not have the permission to delete the row from the table")
			list = {"Test Case No" : "Test Case 4", "Description" : "Admin does not have the permission to delete the row from the table", "Result" : "Passed"}
			test.push(list)
		})
		return test;
}

async function testcase2(catalystApp)
{
	var test = []
	var list
	let datastore = catalystApp.datastore();
	let zcql = catalystApp.zcql();
    let table1 = datastore.table("Permission_user_global");
    let insertPromise = table1.insertRow({"Data" : "test1"});
    await insertPromise.then(async (row) => {
		if(row.ROWID != 0)
		{
			console.log("User has the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 5", "Description" : "User has the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
		}
		await datastore.table("Permission_Data").insertRow({"Rowdata" : row.ROWID});
        }).catch(err =>{
			console.log("Admin does not have the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 5", "Description" : "Admin does not have the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
			})
	
	var info = await zcql.executeZCQLQuery("Select Rowdata from Permission_Data")

	var mod = info[info.length-1].Permission_Data.Rowdata
	let table2 = datastore.table('Permission_user_global');
	let rowPromise1 = table2.updateRow({"ROWID" : mod, "Data" : "updated"});
	await rowPromise1.then((row) => {
			if(row.ROWID != 0)
			{
				console.log("User has the permission to update the row from the table")
				list = {"Test Case No" : "Test Case 6", "Description" : "User has the permission to update the row from the table", "Result" : "Passed"}
			test.push(list)
			}
		}).catch(err =>{
			console.log("Admin does not have the permission to update the row from the table")
			list = {"Test Case No" : "Test Case 6", "Description" : "Admin does not have the permission to update the row from the table", "Result" : "Passed"}
			test.push(list)
			})

	let zcqlPromise = zcql.executeZCQLQuery("Select * from Permission_user_global");
	await zcqlPromise.then(queryResult => {
			if(queryResult.length != 0)
			{
				console.log("User has the permission to select the row from the table")
				list = {"Test Case No" : "Test Case 7", "Description" : "User has the permission to select the row from the table", "Result" : "Passed"}
			test.push(list)
			}
	}).catch(err => {
		console.log("Admin does not have the permission to select the row from the table")
		list = {"Test Case No" : "Test Case 7", "Description" : "Admin does not have the permission to select the row from the table", "Result" : "Passed"}
			test.push(list)
	})

	let table = datastore.table('Permission_user_global');
	let rowPromise2 = table.deleteRow(mod);
	await rowPromise2.then((row) => {
           if(row == true)
		   {
			console.log("User has the permission to delete a row from the table")
			list = {"Test Case No" : "Test Case 8", "Description" : "User has the permission to delete a row from the table", "Result" : "Passed"}
			test.push(list)
		   }
        }).catch(err =>{
			console.log("Admin does not have the permission to delete the row from the table")
			list = {"Test Case No" : "Test Case 8", "Description" : "Admin does not have the permission to delete the row from the table", "Result" : "Passed"}
			test.push(list)
		})
		return test;
}

async function testcase3(catalystApp)
{
	var test = []
	var list;
	let datastore = catalystApp.datastore();
	let zcql = catalystApp.zcql();
    let table1 = datastore.table("Permission_admin_org");
    let insertPromise = table1.insertRow({"Data" : "test1"});
    await insertPromise.then(async (row) => {
		if(row.ROWID != 0)
		{
			console.log("Admin has the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 9", "Description" : "Admin has the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
		}
		await datastore.table("Permission_Data").insertRow({"Rowdata" : row.ROWID});
        }).catch(err =>{
			console.log("User does not the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 9", "Description" : "User does not the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
			})
	
	var info = await zcql.executeZCQLQuery("Select Rowdata from Permission_Data")

	var mod = info[info.length-1].Permission_Data.Rowdata
	let table2 = datastore.table('Permission_admin_org');
	let rowPromise1 = table2.updateRow({"ROWID" : mod, "Data" : "updated"});
	await rowPromise1.then((row) => {
			if(row.ROWID != 0)
			{
				console.log("Admin has the permission to update the row from the table")
				list = {"Test Case No" : "Test Case 10", "Description" : "Admin has the permission to update the row from the table", "Result" : "Passed"}
			test.push(list)
			}
		}).catch(err =>{
			console.log("User does not have the permission to update the row from in the table")
			list = {"Test Case No" : "Test Case 10", "Description" : "User does not have the permission to update the row from in the table", "Result" : "Passed"}
			test.push(list)
			})

	let zcqlPromise = zcql.executeZCQLQuery("Select * from Permission_admin_global");
	await zcqlPromise.then(queryResult => {
			if(queryResult.length != 0)
			{
				console.log("Admin has the permission to select the rows from the table")
				list = {"Test Case No" : "Test Case 11", "Description" : "Admin has the permission to select the rows from the table", "Result" : "Passed"}
				test.push(list)
			}
	}).catch(err => {
		console.log("User does not have the permission to select rows from the table")
		list = {"Test Case No" : "Test Case 11", "Description" : "User does not have the permission to select rows from the table", "Result" : "Passed"}
			test.push(list)
	})

	let table = datastore.table('Permission_admin_org');
	let rowPromise2 = table.deleteRow(mod);
	await rowPromise2.then((row) => {
           if(row == true)
		   {
			console.log("Admin has the permission to delete a row from the table")
			list = {"Test Case No" : "Test Case 12", "Description" : "Admin has the permission to delete a row from the table", "Result" : "Passed"}
			test.push(list)
		   }
        }).catch(err =>{
			console.log("User does not have the permission to delete the row from the table")
			list = {"Test Case No" : "Test Case 12", "Description" : "User does not have the permission to delete the row from the table", "Result" : "Passed"}
			test.push(list)
		})
	return test;
}

async function testcase4(catalystApp)
{
	var test = [];
	var list;
	let datastore = catalystApp.datastore();
	let zcql = catalystApp.zcql();
    let table1 = datastore.table("Permission_user_org");
    let insertPromise = table1.insertRow({"Data" : "test1"});
    await insertPromise.then(async (row) => {
		if(row.ROWID != 0)
		{
			console.log("User has the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 13", "Description" : "User has the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
		}
		await datastore.table("Permission_Data").insertRow({"Rowdata" : row.ROWID});
        }).catch(err =>{
			console.log("Admin does not have the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 13", "Description" : "Admin does not have the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
			})
	
	var info = await zcql.executeZCQLQuery("Select Rowdata from Permission_Data")

	var mod = info[info.length-1].Permission_Data.Rowdata
	let table2 = datastore.table('Permission_user_org');
	let rowPromise1 = table2.updateRow({"ROWID" : mod, "Data" : "updated"});
	await rowPromise1.then((row) => {
			if(row.ROWID != 0)
			{
				console.log("User has the permission to update the row from the table")
				list = {"Test Case No" : "Test Case 14", "Description" : "User has the permission to update the row from the table", "Result" : "Passed"}
			test.push(list)
			}
		}).catch(err =>{
			console.log("Admin does not have the permission to update the row from the table")
			list = {"Test Case No" : "Test Case 14", "Description" : "Admin does not have the permission to update the row from the table", "Result" : "Passed"}
			test.push(list)
			})

	let zcqlPromise = zcql.executeZCQLQuery("Select * from Permission_user_global");
	await zcqlPromise.then(queryResult => {
			if(queryResult.length != 0)
			{
				console.log("User has the permission to select the row from the table")
				list = {"Test Case No" : "Test Case 15", "Description" : "User has the permission to select the row from the table", "Result" : "Passed"}
			test.push(list)
			}
	}).catch(err => {
		console.log("Admin does not have the permission to select the row from the table")
		list = {"Test Case No" : "Test Case 15", "Description" : "Admin does not have the permission to select the row from the table", "Result" : "Passed"}
			test.push(list)
	})

	let table = datastore.table('Permission_user_org');
	let rowPromise2 = table.deleteRow(mod);
	await rowPromise2.then((row) => {
           if(row == true)
		   {
			console.log("User has the permission to delete a row from the table")
			list = {"Test Case No" : "Test Case 16", "Description" : "User has the permission to delete a row from the table", "Result" : "Passed"}
			test.push(list)
		   }
        }).catch(err =>{
			console.log("Admin does not have the permission to delete the row from the table")
			list = {"Test Case No" : "Test Case 16", "Description" : "Admin does not have the permission to delete the row from the table", "Result" : "Passed"}
			test.push(list)
		})
		return test;
}

async function testcase5(catalystApp)
{
	var test = []
	var list;
	let datastore = catalystApp.datastore();
	let zcql = catalystApp.zcql();
    let table1 = datastore.table("Permission_admin_user");
    let insertPromise = table1.insertRow({"Data" : "test1"});
    await insertPromise.then(async (row) => {
		if(row.ROWID != 0)
		{
			console.log("Admin has the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 17", "Description" : "Admin has the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
		}
		await datastore.table("Permission_Data").insertRow({"Rowdata" : row.ROWID});
        }).catch(err =>{
			console.log("Admin does not have the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 17", "Description" : "Admin does not have the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
			})
	
	var info = await zcql.executeZCQLQuery("Select Rowdata from Permission_Data")

	var mod = info[info.length-1].Permission_Data.Rowdata
	let table2 = datastore.table('Permission_admin_user');
	let rowPromise1 = table2.updateRow({"ROWID" : mod, "Data" : "updated"});
	await rowPromise1.then((row) => {
			if(row.ROWID != 0)
			{
				console.log("Admin has the permission to update the row from the table")
				list = {"Test Case No" : "Test Case 18", "Description" : "Admin has the permission to update the row from the table", "Result" : "Passed"}
			test.push(list)
			}
		}).catch(err =>{
			console.log("Admin does not have the permission to update the row from in the table")
			list = {"Test Case No" : "Test Case 18", "Description" : "Admin does not have the permission to update the row from in the table", "Result" : "Passed"}
			test.push(list)
			})

	let zcqlPromise = zcql.executeZCQLQuery("Select * from Permission_admin_global");
	await zcqlPromise.then(queryResult => {
			if(queryResult.length != 0)
			{
				console.log("Admin has the permission to select the rows from the table")
				list = {"Test Case No" : "Test Case 19", "Description" : "Admin has the permission to select the rows from the table", "Result" : "Passed"}
			test.push(list)
			}
	}).catch(err => {
		console.log("Admin does not have the permission to select rows from the table")
		list = {"Test Case No" : "Test Case 19", "Description" : "Admin does not have the permission to select rows from the table", "Result" : "Passed"}
			test.push(list)
	})

	let table = datastore.table('Permission_admin_user');
	let rowPromise2 = table.deleteRow(mod);
	await rowPromise2.then((row) => {
           if(row == true)
		   {
			console.log("Admin has the permission to delete a row from the table")
			list = {"Test Case No" : "Test Case 20", "Description" : "Admin has the permission to delete a row from the table", "Result" : "Passed"}
			test.push(list)
		   }
        }).catch(err =>{
			console.log("Admin does not have the permission to delete the row from the table")
			list = {"Test Case No" : "Test Case 20", "Description" : "Admin does not have the permission to delete the row from the table", "Result" : "Passed"}
			test.push(list)
		})
	return test;
}

async function testcase6(catalystApp)
{
	var test = []
	var list;
	let datastore = catalystApp.datastore();
	let zcql = catalystApp.zcql();
    let table1 = datastore.table("Permission_user_user");
    let insertPromise = table1.insertRow({"Data" : "test1"});
    await insertPromise.then(async (row) => {
		if(row.ROWID != 0)
		{
			console.log("User has the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 21", "Description" : "User has the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
		}
		await datastore.table("Permission_Data").insertRow({"Rowdata" : row.ROWID});
        }).catch(err =>{
			console.log("Admin does not have the permission to insert the row in the table")
			list = {"Test Case No" : "Test Case 21", "Description" : "Admin does not have the permission to insert the row in the table", "Result" : "Passed"}
			test.push(list)
			})
	
	var info = await zcql.executeZCQLQuery("Select Rowdata from Permission_Data")

	var mod = info[info.length-1].Permission_Data.Rowdata
	let table2 = datastore.table('Permission_user_user');
	let rowPromise1 = table2.updateRow({"ROWID" : mod, "Data" : "updated"});
	await rowPromise1.then((row) => {
			if(row.ROWID != 0)
			{
				console.log("User has the permission to update the row from the table")
				list = {"Test Case No" : "Test Case 22", "Description" : "User has the permission to update the row from the table", "Result" : "Passed"}
			test.push(list)
			}
		}).catch(err =>{
			console.log("Admin does not have the permission to update the row from the table")
			list = {"Test Case No" : "Test Case 22", "Description" : "Admin does not have the permission to update the row from the table", "Result" : "Passed"}
			test.push(list)
			})

	let zcqlPromise = zcql.executeZCQLQuery("Select * from Permission_user_global");
	await zcqlPromise.then(queryResult => {
			if(queryResult.length != 0)
			{
				console.log("User has the permission to select the row from the table")
				list = {"Test Case No" : "Test Case 23", "Description" : "User has the permission to select the row from the table", "Result" : "Passed"}
			test.push(list)
			}
	}).catch(err => {
		console.log("Admin does not have the permission to select the row from the table")
		list = {"Test Case No" : "Test Case 23", "Description" : "Admin does not have the permission to select the row from the table", "Result" : "Passed"}
			test.push(list)
	})

	let table = datastore.table('Permission_user_user');
	let rowPromise2 = table.deleteRow(mod);
	await rowPromise2.then((row) => {
           if(row == true)
		   {
			console.log("User has the permission to delete a row from the table")
			list = {"Test Case No" : "Test Case 24", "Description" : "User has the permission to delete a row from the table", "Result" : "Passed"}
			test.push(list)
		   }
        }).catch(err =>{
			console.log("Admin does not have the permission to delete the row from the table")
			list = {"Test Case No" : "Test Case 24", "Description" : "Admin does not have the permission to delete the row from the table", "Result" : "Passed"}
			test.push(list)
		})
		return test;
}

async function testcase7(catalystApp)
{
	var test = []
	var list;
	var datastore = catalystApp.datastore();
	var zcql = catalystApp.zcql();
	let filestore = catalystApp.filestore();
	let folder1 = filestore.folder("13527000000274802"); 
	let uploadPromise1 = folder1.uploadFile({code: fs.createReadStream("package.json"),name: "testpermission.txt"});
	await uploadPromise1.then(async (fileObject) => {
		console.log("Admin has the permission to upload a file in the folder")
		list = {"Test Case No": "Test Case 25" ,"Description" : "Admin has the permission to upload a file in the folder", "Result" : "Passed"}
			test.push(list);
		await datastore.table("Permission_Data").insertRow({"Rowdata" : fileObject.id});
	}).catch(err => {
		console.log("User does not have the permission to upload a file in the folder");
		list = {"Test Case No": "Test Case 25" ,"Description" : "User does not have the permission to upload a file in the folder", "Result" : "Passed"}
			test.push(list);
	})

	var info = await zcql.executeZCQLQuery("Select Rowdata from Permission_Data")
	var mod = info[info.length-1].Permission_Data.Rowdata

	let folder2 = filestore.folder("13527000000274802");
	let downloadPromise = folder2.downloadFile(mod);
	await downloadPromise.then((fileObject) => {
		console.log("Admin has the permission to download a file in the folder")
		list = {"Test Case No": "Test Case 26" ,"Description" : "Admin has the permission to download a file in the folder", "Result" : "Passed"}
			test.push(list);
	}).catch(err => {
		console.log("User does not have the permission to download a file in the folder");
		list = {"Test Case No": "Test Case 26" ,"Description" : "User does not have the permission to download a file in the folder", "Result" : "Passed"}
			test.push(list);
	})

	let folder = filestore.folder("13527000000274802");
	let deletePromise = folder.deleteFile(mod);
	await deletePromise.then((fileObject) => {
		console.log("Admin has the permission to delete a file in the folder")
		list = {"Test Case No": "Test Case 27" ,"Description" : "Admin has the permission to delete a file in the folder", "Result" : "Passed"}
			test.push(list);
        }).catch(err => {
			console.log("User does not have the permission to delete a file in the folder");
			list = {"Test Case No": "Test Case 27" ,"Description" : "User does not have the permission to delete a file in the folder", "Result" : "Passed"}
			test.push(list);
		})
		return test;
}

async function testcase8(catalystApp)
{
	var test = []
	var list;
	var datastore = catalystApp.datastore();
	var zcql = catalystApp.zcql();
	let filestore = catalystApp.filestore();
	let folder1 = filestore.folder("13527000000274825"); 
	let uploadPromise1 = folder1.uploadFile({code: fs.createReadStream("package.json"),name: "testpermission.txt"});
	await uploadPromise1.then(async (fileObject) => {
		console.log("User has the permission to upload a file in the folder")
		list = {"Test Case No": "Test Case 28" ,"Description" : "User has the permission to upload a file in the folder", "Result" : "Passed"}
			test.push(list);
		await datastore.table("Permission_Data").insertRow({"Rowdata" : fileObject.id});
	}).catch(err => {
		console.log("Admin does not have the permission to upload a file in the folder");
		list = {"Test Case No": "Test Case 28" ,"Description" : "Admin does not have the permission to upload a file in the folder", "Result" : "Passed"}
			test.push(list);
	})

	var info = await zcql.executeZCQLQuery("Select Rowdata from Permission_Data")
	var mod = info[info.length-1].Permission_Data.Rowdata

	let folder2 = filestore.folder("13527000000274825");
	let downloadPromise = folder2.downloadFile(mod);
	await downloadPromise.then((fileObject) => {
		console.log("User has the permission to download a file in the folder")
		list = {"Test Case No": "Test Case 29" ,"Description" : "User has the permission to download a file in the folder", "Result" : "Passed"}
			test.push(list);
	}).catch(err => {
		console.log("Admin does not have the permission to download a file in the folder");
		list = {"Test Case No": "Test Case 29" ,"Description" : "Admin does not have the permission to download a file in the folder", "Result" : "Passed"}
			test.push(list);
	})

	let folder = filestore.folder("13527000000274825");
	let deletePromise = folder.deleteFile(mod);
	await deletePromise.then((fileObject) => {
		list = {"Test Case No": "Test Case 30" ,"Description" : "User has the permission to delete a file in the folder", "Result" : "Passed"}
			test.push(list);
            console.log("User has the permission to delete a file in the folder")
        }).catch(err => {
			console.log("Admin does not have the permission to delete a file in the folder");
			list = {"Test Case No": "Test Case 30" ,"Description" : "Admin does not have the permission to delete a file in the folder", "Result" : "Passed"}
			test.push(list);
		})

	await zcql.executeZCQLQuery("Delete from Permission_Data");

		return test;
}

app.post("/terminatepermission", async(req, res) => {
	process.exit(0)
})
module.exports = app;
