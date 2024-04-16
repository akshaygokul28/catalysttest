"use strict"

const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

app.get("/user", async(req, res) => {
	const catalystApp = catalyst.initialize(req);
	try {
		const userM = catalystApp.userManagement();
		const user = await userM.getCurrentUser();
		console.log(user);
		res.send(user);
	} catch(e) {
		res.send(e);
	}
	res.end();
});
app.post("/zcql1", async(req, res) => {

    const catalystApp = catalyst.initialize(req);
	var test = []
	var list;
	let zcql = catalystApp.zcql();
	var feature = {"feature" : "ZCQL1"}
	test.push(feature)
	let zcqlPromise1 = zcql.executeZCQLQuery("Insert into ZCQL(testvarchar)values(abcd)");
	await zcqlPromise1.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 1 : Request send to insert a row with varchar value in a varchar datatype column");
			list = {"Test Case No" : "Test Case 1", "Description" : "Request send to insert a row with varchar value in a varchar datatype column", "Result" : "Passed"}
			test.push(list)
		}
	}).catch(err => {
		console.log("❗ Failed case 1 : ")
		list = {"Test Case No" : "Test Case 1", "Description" : "Request send to insert a row with varchar value in a varchar datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise2 = zcql.executeZCQLQuery("Insert into ZCQL(testvarchar)values('@#$%^&*')");
	await zcqlPromise2.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 2 : Request send to insert a row with special characters value in a varchar datatype column");
			list = {"Test Case No" : "Test Case 2", "Description" : "Request send to insert a row with special characters value in a varchar datatype column", "Result" : "Passed"}
			test.push(list)
		}      
	}).catch(err => {
		console.log("❗ Failed case 2 : ")
		list = {"Test Case No" : "Test Case 2", "Description" : "Request send to insert a row with special characters value in a varchar datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise3 = zcql.executeZCQLQuery("Insert into ZCQL(testvarchar)values('43234')");
	await zcqlPromise3.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 3 : Request send to insert a row with integers value in a varchar datatype column");
			list = {"Test Case No" : "Test Case 3", "Description" : "Request send to insert a row with integers value in a varchar datatype column", "Result" : "Passed"}
			test.push(list)
		}      
	}).catch(err => {
		console.log("❗ Failed case 3 : ")
		list = {"Test Case No" : "Test Case 3", "Description" : "Request send to insert a row with integers value in a varchar datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise4 = zcql.executeZCQLQuery("Insert into ZCQL(testvarchar)values('🤫😀🥺😆🥹')");
	await zcqlPromise4.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 4 : Request send to insert a row with emoji value in a varchar datatype column");
			list = {"Test Case No" : "Test Case 4", "Description" : "Request send to insert a row with emoji value in a varchar datatype column", "Result" : "Passed"}
			test.push(list)
		}      
	}).catch(err => {
		console.log("❗ Failed case 4 : ")
		list = {"Test Case No" : "Test Case 4", "Description" : " Request send to insert a row with emoji value in a varchar datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise5 = zcql.executeZCQLQuery("Insert into ZCQL(testint)values(1234)");
	await zcqlPromise5.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 5 : Request send to insert a row with integer value in integer datatype column");
			list = {"Test Case No" : "Test Case 5", "Description" : "Request send to insert a row with integer value in integer datatype column", "Result" : "Passed"}
			test.push(list)
		}      
	}).catch(err => {
		console.log("❗ Failed case 5 : ")
		list = {"Test Case No" : "Test Case 5", "Description" : "Request send to insert a row with integer value in integer datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise6 = zcql.executeZCQLQuery("Insert into ZCQL(testint)values('abcd')");
	await zcqlPromise6.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 6 : Request send to insert a row with varchar value in integer datatype column");
			list = {"Test Case No" : "Test Case 6", "Description" : "Request send to insert a row with varchar value in integer datatype column", "Result" : "Failed"}
			test.push(list)
		}      
	}).catch(err => {
		console.log("✅​ Test case 6 : Request send to insert a row with varchar value in integer datatype column")
		list = {"Test Case No" : "Test Case 6", "Description" : "Request send to insert a row with varchar value in integer datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise7 = zcql.executeZCQLQuery("Insert into ZCQL(testint)values('@#$%^&*')");
	await zcqlPromise7.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 7 : Request send to insert a row with special characters in a integer datatype column");
			list = {"Test Case No" : "Test Case 7", "Description" : "Request send to insert a row with special characters in a integer datatype column", "Result" : "Failed"}
			test.push(list)
		}      
	}).catch(err => {
		console.log("✅​ Test case 7 : Request send to insert a row with special characters in a integer datatype column")
		list = {"Test Case No" : "Test Case 7", "Description" : "Request send to insert a row with special characters in a integer datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise8 = zcql.executeZCQLQuery("Insert into ZCQL(testint)values('🤫😀🥺😆🥹')");
	await zcqlPromise8.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 8 : Request send to insert a row with emoji in a integer datatype column");
			list = {"Test Case No" : "Test Case 8", "Description" : "Request send to insert a row with emoji in a integer datatype column", "Result" : "Failed"}
			test.push(list)
		}     
	}).catch(err => {
		console.log("✅​ Test case 8 : Request send to insert a row with emoji in a integer datatype column")
		list = {"Test Case No" : "Test Case 8", "Description" : "Request send to insert a row with emoji in a integer datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise9 = zcql.executeZCQLQuery("Insert into ZCQL(testdouble)values(1234.5678)");
	await zcqlPromise9.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 9 : Request send to insert a row with double value in double datatype column");
			list = {"Test Case No" : "Test Case 9", "Description" : "Request send to insert a row with double value in double datatype column", "Result" : "Passed"}
			test.push(list)
		}      
	}).catch(err => {
		console.log("❗ Failed case 9 : ")
		list = {"Test Case No" : "Test Case 9", "Description" : "Request send to insert a row with double value in double datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise10 = zcql.executeZCQLQuery("Insert into ZCQL(testdouble)values('764567')");
	await zcqlPromise10.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 10 : Request send to insert a row with integer value in double datatype column");
			list = {"Test Case No" : "Test Case 10", "Description" : "Request send to insert a row with integer value in double datatype column", "Result" : "Passed"}
			test.push(list)
		}      
	}).catch(err => {
		console.log("❗ Failed case 10 : ")
		list = {"Test Case No" : "Test Case 10", "Description" : "Request send to insert a row with integer value in double datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise11 = zcql.executeZCQLQuery("Insert into ZCQL(testdouble)values('abcd')");
	await zcqlPromise11.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 11 : Request send to insert a row with varchar value in double datatype column");
			list = {"Test Case No" : "Test Case 11", "Description" : "Request send to insert a row with varchar value in double datatype column", "Result" : "Failed"}
			test.push(list)
		}         
	}).catch(err => {
		console.log("✅​ Test case 11 : Request send to insert a row with varchar value in double datatype column")
		list = {"Test Case No" : "Test Case 11", "Description" : " Request send to insert a row with varchar value in double datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise12 = zcql.executeZCQLQuery("Insert into ZCQL(testdouble)values('@#$%^&*')");
	await zcqlPromise12.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 12 : Request send to insert a row with special characters in double datatype column");
			list = {"Test Case No" : "Test Case 12", "Description" : "Request send to insert a row with special characters in double datatype column", "Result" : "Failed"}
			test.push(list)
		}        
	}).catch(err => {
		console.log("✅​ Test case 12 : Request send to insert a row with special characters in double datatype column")
		list = {"Test Case No" : "Test Case 12", "Description" : "Request send to insert a row with special characters in double datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise13 = zcql.executeZCQLQuery("Insert into ZCQL(testdouble)values('🤫😀🥺😆🥹')");
	await zcqlPromise13.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 13 : Request send to insert a row with emoji in double datatype column");
			list = {"Test Case No" : "Test Case 13", "Description" : "Request send to insert a row with emoji in double datatype column", "Result" : "Failed"}
			test.push(list)
		}         
	}).catch(err => {
		console.log("✅​ Test case 13 : Request send to insert a row with emoji in double datatype column")
		list = {"Test Case No" : "Test Case 13", "Description" : "Request send to insert a row with emoji in double datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise14 = zcql.executeZCQLQuery("Insert into ZCQL(testboolean)values(false)");
	await zcqlPromise14.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 14 : Request send to insert a row with boolean value in boolean datatype column");
			list = {"Test Case No" : "Test Case 14", "Description" : "Request send to insert a row with boolean value in boolean datatype column", "Result" : "Passed"}
			test.push(list)
		}         
	}).catch(err => {
		console.log("❗ Failed case 50 : ")
		list = {"Test Case No" : "Test Case 14", "Description" : "Request send to insert a row with boolean value in boolean datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise15 = zcql.executeZCQLQuery("Insert into ZCQL(testboolean)values('764567')");
	await zcqlPromise15.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 15 : Request send to insert a row with integer value in boolean datatype column");
			list = {"Test Case No" : "Test Case 15", "Description" : "Request send to insert a row with integer value in boolean datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 15 : Request send to insert a row with integer value in boolean datatype column")
		list = {"Test Case No" : "Test Case 15", "Description" : "Request send to insert a row with integer value in boolean datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise16 = zcql.executeZCQLQuery("Insert into ZCQL(testboolean)values('abcd')");
	await zcqlPromise16.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 16 : Request send to insert a row with varchar value in boolean datatype column");
			list = {"Test Case No" : "Test Case 16", "Description" : "Request send to insert a row with varchar value in boolean datatype column", "Result" : "Failed"}
			test.push(list)
		}         
	}).catch(err => {
		console.log("✅​ Test case 16 : Request send to insert a row with varchar value in boolean datatype column")
		list = {"Test Case No" : "Test Case 16", "Description" : "Request send to insert a row with varchar value in boolean datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise17 = zcql.executeZCQLQuery("Insert into ZCQL(testboolean)values('@#$%^&*')");
	await zcqlPromise17.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 17 : Request send to insert a row with special charcters in boolean datatype column");
			list = {"Test Case No" : "Test Case 17", "Description" : "Request send to insert a row with special charcters in boolean datatype column", "Result" : "Failed"}
			test.push(list)
		}         
	}).catch(err => {
		console.log("✅​ Test case 17 : Request send to insert a row with special charcters in boolean datatype column")
		list = {"Test Case No" : "Test Case 17", "Description" : "Request send to insert a row with special charcters in boolean datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise18 = zcql.executeZCQLQuery("Insert into ZCQL(testboolean)values('🤫😀🥺😆🥹')");
	await zcqlPromise18.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 18 : Request send to insert a row with emoji in a boolean datatype column");
			list = {"Test Case No" : "Test Case 18", "Description" : "Request send to insert a row with emoji in a boolean datatype column", "Result" : "Failed"}
			test.push(list)
		}         
	}).catch(err => {
		console.log("✅​ Test case 18 : Request send to insert a row with emoji in a boolean datatype column")
		list = {"Test Case No" : "Test Case 18", "Description" : "Request send to insert a row with emoji in a boolean datatype column", "Result" : "Passed"}
			test.push(list)
	})


	let zcqlPromise19 = zcql.executeZCQLQuery("Insert into ZCQL(testdate)values('2023-03-09')");
	await zcqlPromise19.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 19 : Request send to insert a row with date value in date datatype column");
			list = {"Test Case No" : "Test Case 19", "Description" : "Request send to insert a row with date value in date datatype column", "Result" : "Passed"}
			test.push(list)
		}         
	}).catch(err => {
		console.log("❗ Failed case 19 : ")
		list = {"Test Case No" : "Test Case 19", "Description" : "Request send to insert a row with date value in date datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise20 = zcql.executeZCQLQuery("Insert into ZCQL(testdate)values('2023--03--09')");
	await zcqlPromise20.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 20 : Request send to insert a row with invalid date value in date datatype column");
			list = {"Test Case No" : "Test Case 20", "Description" : "Request send to insert a row with invalid date value in date datatype column", "Result" : "Failed"}
			test.push(list)
		}         
	}).catch(err => {
		console.log("✅​ Test case 20 : ")
		list = {"Test Case No" : "Test Case 20", "Description" : "Request send to insert a row with invalid date value in date datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise21 = zcql.executeZCQLQuery("Insert into ZCQL(testdate)values('764567')");
	await zcqlPromise21.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 21 : Request send to insert a row with integer value in date datatype column");
			list = {"Test Case No" : "Test Case 21", "Description" : "Request send to insert a row with integer value in date datatype column", "Result" : "Failed"}
			test.push(list)
		}           
	}).catch(err => {
		console.log("✅​ Test case 21 : Request send to insert a row with integer value in date datatype column")
		list = {"Test Case No" : "Test Case 21", "Description" : "Request send to insert a row with integer value in date datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise22 = zcql.executeZCQLQuery("Insert into ZCQL(testdate)values('abcd')");
	await zcqlPromise22.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 22 : Request send to insert a row with varchar value in date datatype column");
			list = {"Test Case No" : "Test Case 22", "Description" : "Request send to insert a row with varchar value in date datatype column", "Result" : "Failed"}
			test.push(list)
		}   
		}).catch(err => {
		console.log("✅​ Test case 22 : Request send to insert a row with varchar value in date datatype column")
		list = {"Test Case No" : "Test Case 22", "Description" : "Request send to insert a row with varchar value in date datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise23 = zcql.executeZCQLQuery("Insert into ZCQL(testdate)values('@#$%^&*')");
	await zcqlPromise23.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 23 : Request send to insert a row with special characters in date datatype column");
			list = {"Test Case No" : "Test Case 23", "Description" : "Request send to insert a row with special characters in date datatype column", "Result" : "Failed"}
			test.push(list)
		}   
		}).catch(err => {
		console.log("✅​ Test case 23 : Request send to insert a row with special characters in date datatype column")
		list = {"Test Case No" : "Test Case 23", "Description" : "Request send to insert a row with special characters in date datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise24 = zcql.executeZCQLQuery("Insert into ZCQL(testdate)values('🤫😀🥺😆🥹')");
	await zcqlPromise24.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 24 : Request send to insert a row with emoji in date datatype column");
			list = {"Test Case No" : "Test Case 24", "Description" : "Request send to insert a row with emoji in date datatype column", "Result" : "Failed"}
			test.push(list)
		}   
		}).catch(err => {
		console.log("✅​ Test case 24 : Request send to insert a row with emoji in date datatype column")
		list = {"Test Case No" : "Test Case 24", "Description" : "Request send to insert a row with emoji in date datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise25 = zcql.executeZCQLQuery("Insert into ZCQL(testdate)values('2023-03-04 01:01:01')");
	await zcqlPromise25.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 25 : Request send to insert a row with datetime value in date datatype column");
			list = {"Test Case No" : "Test Case 25", "Description" : "Request send to insert a row with datetime value in date datatype column", "Result" : "Passed"}
			test.push(list)
		}   
		}).catch(err => {
		console.log("❗ Failed case 25 : ")
		list = {"Test Case No" : "Test Case 25", "Description" : "Request send to insert a row with datetime value in date datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise26 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('2023-03-04 01:01:01')");
	await zcqlPromise26.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 26 : Request send to insert a row with datetime value in datetime datatype column");
			list = {"Test Case No" : "Test Case 26", "Description" : "Request send to insert a row with datetime value in datetime datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 26 : ")
		list = {"Test Case No" : "Test Case 26", "Description" : "Request send to insert a row with datetime value in datetime datatype column", "Result" : "Failed"}
			test.push(list)
	})

	
	let zcqlPromise27 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('2023-03-09')");
	await zcqlPromise27.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 27 : Request send to insert a row with date value in datetime datatype column");
			list = {"Test Case No" : "Test Case 27", "Description" : "Request send to insert a row with date value in datetime datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 27 : ")
		list = {"Test Case No" : "Test Case 27", "Description" : "Request send to insert a row with date value in datetime datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise28 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('2023--03--09 01:01:01')");
	await zcqlPromise28.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 28 : Request send to insert a row with invalid datetime value in datetime datatype column");
			list = {"Test Case No" : "Test Case 28", "Description" : "Request send to insert a row with invalid datetime value in datetime datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 28 : Request send to insert a row with invalid datetime value in datetime datatype column")
		list = {"Test Case No" : "Test Case 28", "Description" : "Request send to insert a row with invalid datetime value in datetime datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise29 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('2023-03-09 99:99:99')");
	await zcqlPromise29.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 29 : Request send to insert a row with invalid value in datetime datatype column");
			list = {"Test Case No" : "Test Case 29", "Description" : "Request send to insert a row with invalid value in datetime datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 29 : Request send to insert a row with invalid value in datetime datatype column")
		list = {"Test Case No" : "Test Case 29", "Description" : "Request send to insert a row with invalid value in datetime datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise30 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('01:01:01')");
	await zcqlPromise30.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 30 : Request send to insert a row with only time in datetime datatype column");
			list = {"Test Case No" : "Test Case 30", "Description" : "Request send to insert a row with only time in datetime datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 30 : Request send to insert a row with only time in datetime datatype column")
		list = {"Test Case No" : "Test Case 30", "Description" : "Request send to insert a row with only time in datetime datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise31 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('764567')");
	await zcqlPromise31.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 31 : Request send to insert a row with integer value in datetime datatype column");
			list = {"Test Case No" : "Test Case 31", "Description" : "Request send to insert a row with integer value in datetime datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 31 : Request send to insert a row with integer value in datetime datatype column")
		list = {"Test Case No" : "Test Case 31", "Description" : "Request send to insert a row with integer value in datetime datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise32 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('abcd')");
	await zcqlPromise32.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 32 : Request send to insert a row with varchar value in datetime datatype column")
			list = {"Test Case No" : "Test Case 32", "Description" : "Request send to insert a row with varchar value in datetime datatype column", "Result" : "Failed"}
			test.push(list);
		}   
	}).catch(err => {
		console.log("✅​ Test case 32 : Request send to insert a row with varchar value in datetime datatype column")
		list = {"Test Case No" : "Test Case 32", "Description" : "Request send to insert a row with varchar value in datetime datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise33 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('@#$%^&*')");
	await zcqlPromise33.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 33 : Request send to insert a row with special characters value in datetime datatype column");
			list = {"Test Case No" : "Test Case 33", "Description" : "Request send to insert a row with special characters value in datetime datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 33 : Request send to insert a row with special characters value in datetime datatype column")
		list = {"Test Case No" : "Test Case 33", "Description" : "Request send to insert a row with special characters value in datetime datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise34 = zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('🤫😀🥺😆🥹')");
	await zcqlPromise34.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 34 : Request send to insert a row with special charcters value in datetime datatype column");
			list = {"Test Case No" : "Test Case 34", "Description" : "Request send to insert a row with special charcters value in datetime datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 34 : Request send to insert a row with special charcters value in datetime datatype column")
		list = {"Test Case No" : "Test Case 34", "Description" : "Request send to insert a row with special charcters value in datetime datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise35 = zcql.executeZCQLQuery("Insert into ZCQL(testbigint)values(12345678987654321)");
	await zcqlPromise35.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 35 : Request send to insert a row with bigint value in bigint datatype column");
			list = {"Test Case No" : "Test Case 35", "Description" : "Request send to insert a row with bigint value in bigint datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 35 : ")
		list = {"Test Case No" : "Test Case 35", "Description" : "Request send to insert a row with bigint value in bigint datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise36 = zcql.executeZCQLQuery("Insert into ZCQL(testbigint)values('764567')");
	await zcqlPromise36.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 36 : Request send to insert a row with integer value in bigint datatype column");
			list = {"Test Case No" : "Test Case 36", "Description" : "Request send to insert a row with integer value in bigint datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 36 : ")
		list = {"Test Case No" : "Test Case 36", "Description" : "Request send to insert a row with integer value in bigint datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise37 = zcql.executeZCQLQuery("Insert into ZCQL(testbigint)values('2023-03-09')");
	await zcqlPromise37.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 37 : Request send to insert a row with date value in bigint datatype column");
			list = {"Test Case No" : "Test Case 37", "Description" : "Request send to insert a row with date value in bigint datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 37 : Request send to insert a row with date value in bigint datatype column")
		list = {"Test Case No" : "Test Case 37", "Description" : "Request send to insert a row with date value in bigint datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise38 = zcql.executeZCQLQuery("Insert into ZCQL(testbigint)values('abcd')");
	await zcqlPromise38.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 38 : Request send to insert a row with varchar value in bigint datatype column");
			list = {"Test Case No" : "Test Case 38", "Description" : "Request send to insert a row with varchar value in bigint datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 38 : Request send to insert a row with varchar value in bigint datatype column")
		list = {"Test Case No" : "Test Case 38", "Description" : "Request send to insert a row with varchar value in bigint datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise39 = zcql.executeZCQLQuery("Insert into ZCQL(testbigint)values('@#$%^&*')");
	await zcqlPromise39.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 39 : Request send to insert a row with special characters in bigint datatype column");
			list = {"Test Case No" : "Test Case 39", "Description" : "Request send to insert a row with special characters in bigint datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 39 : Request send to insert a row with special characters in bigint datatype column")
		list = {"Test Case No" : "Test Case 39", "Description" : "Request send to insert a row with special characters in bigint datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise40 = zcql.executeZCQLQuery("Insert into ZCQL(testbigint)values('🤫😀🥺😆🥹')");
	await zcqlPromise40.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 40 : Request send to insert a row with emoji in bigint datatype column");
			list = {"Test Case No" : "Test Case 40", "Description" : "Request send to insert a row with emoji in bigint datatype column", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 40 : Request send to insert a row with emoji in bigint datatype column")
		list = {"Test Case No" : "Test Case 40", "Description" : "Request send to insert a row with emoji in bigint datatype column", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise41 = zcql.executeZCQLQuery("Insert into ZCQL(testtext)values(testvalue@123)");
	await zcqlPromise41.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 41 : Request send to insert a row with varchar value in text datatype column");
			list = {"Test Case No" : "Test Case 41", "Description" : "Request send to insert a row with varchar value in text datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 41 : ")
		list = {"Test Case No" : "Test Case 41", "Description" : "Request send to insert a row with varchar value in text datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise42 = zcql.executeZCQLQuery("Insert into ZCQL(testtext)values('2023-03-09')");
	await zcqlPromise42.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 42 : Request send to insert a row with date value in text datatype column");
			list = {"Test Case No" : "Test Case 42", "Description" : "Request send to insert a row with date value in text datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 42 : ")
		list = {"Test Case No" : "Test Case 42", "Description" : "Request send to insert a row with date value in text datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise43 = zcql.executeZCQLQuery("Insert into ZCQL(testtext)values('abcd')");
	await zcqlPromise43.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 43 : Request send to insert a row with varchar value in text datatype column");
			list = {"Test Case No" : "Test Case 43", "Description" : "Request send to insert a row with varchar value in text datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 43 : ")
		list = {"Test Case No" : "Test Case 43", "Description" : "Request send to insert a row with varchar value in text datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise44 = zcql.executeZCQLQuery("Insert into ZCQL(testtext)values('@#$%^&*')");
	await zcqlPromise44.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 44 : Request send to insert a row with special characters in text datatype column");
			list = {"Test Case No" : "Test Case 44", "Description" : "Request send to insert a row with special characters in text datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 44 : ")
		list = {"Test Case No" : "Test Case 44", "Description" : "Request send to insert a row with special characters in text datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise45 = zcql.executeZCQLQuery("Insert into ZCQL(testtext)values('🤫😀🥺😆🥹')");
	await zcqlPromise45.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 45 : Request send to insert a row with emoji in text datatype column");
			list = {"Test Case No" : "Test Case 45", "Description" : "Request send to insert a row with emoji in text datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 45 : ")
		list = {"Test Case No" : "Test Case 45", "Description" : "Request send to insert a row with emoji in text datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise46 = zcql.executeZCQLQuery("Insert into ZCQL()values('🤫😀🥺😆🥹')");
	await zcqlPromise46.then(queryResult => {
		cif(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 46 : Request send to insert a row without giving column name");
			list = {"Test Case No" : "Test Case 46", "Description" : "Request send to insert a row without giving column name", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 46 : Request send to insert a row without giving column name")
		list = {"Test Case No" : "Test Case 46", "Description" : "Request send to insert a row without giving column name", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise47 = zcql.executeZCQLQuery("Insert into ZCQL(testtext)values(null)");
	await zcqlPromise47.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("✅​ Test case 47 : Request send to insert a row with null value in text datatype column");
			list = {"Test Case No" : "Test Case 47", "Description" : "Request send to insert a row with null value in text datatype column", "Result" : "Passed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("❗ Failed case 47 : ")
		list = {"Test Case No" : "Test Case 47", "Description" : "Request send to insert a row with null value in text datatype column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise48 = zcql.executeZCQLQuery("Insert into ZCQL(null)values('testtext')");
	await zcqlPromise48.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 48 : Request send to insert a row by giving null on column name");
			list = {"Test Case No" : "Test Case 48", "Description" : "Request send to insert a row by giving null on column name", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 48 : Request send to insert a row by giving null on column name")
		list = {"Test Case No" : "Test Case 48", "Description" : "Request send to insert a row by giving null on column name", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise49 = zcql.executeZCQLQuery("Insert into ZCQL(null)values(null)");
	await zcqlPromise49.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 49 : Request send to insert a row by giving null on column name and values");
			list = {"Test Case No" : "Test Case 49", "Description" : "Request send to insert a row by giving null on column name and values", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 49 : Request send to insert a row by giving null on column name and values")
		list = {"Test Case No" : "Test Case 49", "Description" : "Request send to insert a row by giving null on column name and values", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise50 = zcql.executeZCQLQuery("Insert into ZCQL('qwerty)values('ytrew')");
	await zcqlPromise50.then(queryResult => {
		if(Object.keys(queryResult[0].ZCQL).length != 0)
		{
			console.log("❗ Failed case 50 : Request send to insert a row with invalid column name");
			list = {"Test Case No" : "Test Case 50", "Description" : "Request send to insert a row with invalid column name", "Result" : "Failed"}
			test.push(list)
		}   
	}).catch(err => {
		console.log("✅​ Test case 50 : Request send to insert a row with invalid column name")
		list = {"Test Case No" : "Test Case 50", "Description" : "Request send to insert a row with invalid column name", "Result" : "Passed"}
			test.push(list)
	})
	var repo = []
	for(let i = 1; i < test.length; i++)
	{
		repo.push(test[i])
	}
	var rep = JSON.stringify(test)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Zcqldata1 : rep});
    insertPromise.then((row) => {
    });


	// let zcqlPromise1 = zcql.executeZCQLQuery("Select join1.*, join2.* from join1 inner join join2 on join1.fk1 = join2.ROWID");
	// await zcqlPromise1.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise2 = zcql.executeZCQLQuery("Select join2.*, join3.* from join2 inner join join3 on join2.fk2 = join3.ROWID");
	// await zcqlPromise2.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise3 = zcql.executeZCQLQuery("Select join2.*, join4.* from join2 inner join join4 on join2.fk3 = join4.ROWID");
	// await zcqlPromise3.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise4 = zcql.executeZCQLQuery("Select join1.*, join3.* from join1 inner join join3 on join1.fk4 = join3.ROWID");
	// await zcqlPromise4.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise5 = zcql.executeZCQLQuery("Update join1 inner join join2 on join1.fk1 = join2.ROWID set join1.test = 'asdfgh'");
	// await zcqlPromise5.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise6 = zcql.executeZCQLQuery("Update join2 inner join join3 on join2.fk2 = join3.ROWID set join2.test2 = 'zxcvbn'");
	// await zcqlPromise6.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise7 = zcql.executeZCQLQuery("Update join1 inner join join3 on join1.fk4 = join3.ROWID set join1.test = 'lkjhg'");
	// await zcqlPromise7.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise8 = zcql.executeZCQLQuery("Update join2 inner join join4 on join2.fk3 = join4.ROWID set join2.test2 = 'poiuyt'");
	// await zcqlPromise8.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise9 = zcql.executeZCQLQuery("Delete join1 from join1 inner join join2 on join1.fk1 = join2.ROWID where join1.test = 'delete'");
	// await zcqlPromise9.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise10 = zcql.executeZCQLQuery("Delete join2 from join2 inner join join3 on join2.fk2 = join3.ROWID where join2.test2 = 'delete'");
	// await zcqlPromise10.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise11 = zcql.executeZCQLQuery("Delete join1 from join1 inner join join3 on join1.fk4 = join1.ROWID where join1.test = 'delete'");
	// await zcqlPromise11.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	// let zcqlPromise12 = zcql.executeZCQLQuery("Delete join2 from join2 inner join join4 on join2.fk3 = join4.ROWID where join2.test2 = 'delete'");
	// await zcqlPromise12.then(queryResult => {
	// 	console.log(queryResult)
	// }).catch(err => {
	// 	console.log(err)
	// })

	res.send(repo)
});

app.post("/zcql2", async(req, res) => {
	var list;
	var test = []
	var feature = {"feature" : "ZCQL2"}
	test.push(feature)
    const catalystApp = catalyst.initialize(req);
	let zcql = catalystApp.zcql();
	let zcqlPromise1 = zcql.executeZCQLQuery("Select * from ZCQL");
	await zcqlPromise1.then(queryResult => {
		if(queryResult.length)
		{
    	  	console.log("✅​ Test case 51 : Request send to select all rows from a table");
			list = {"Test Case No" : "Test Case 51", "Description" : "Request send to select all rows from a table", "Result" : "Passed"}
			test.push(list)
		}
	}).catch(err => {
		console.log("❗ Failed case 51 : ")
		list = {"Test Case No" : "Test Case 51", "Description" : "Request send to select all rows from a table", "Result" : "Failed"}
			test.push(list)
	}) 

	let zcqlPromise2 = zcql.executeZCQLQuery("Select from ZCQL");
	await zcqlPromise2.then(queryResult => {
      console.log("❗ Failed case 52 : Request send to select all rows from a table without using * operator");
	  list = {"Test Case No" : "Test Case 52", "Description" : "Request send to select all rows from a table without using * operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 52 : Request send to select all rows from a table without using * operator")
		list = {"Test Case No" : "Test Case 52", "Description" : "Request send to select all rows from a table without using * operator", "Result" : "Passed"}
			test.push(list)
	}) 

	let zcqlPromise3 = zcql.executeZCQLQuery("Select ? from ZCQL");
	await zcqlPromise3.then(queryResult => {
      console.log("❗ Failed case 53 : Request send to select all rows from a table using ? operator");
	  list = {"Test Case No" : "Test Case 53", "Description" : "Request send to select all rows from a table using ? operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 53 : Request send to select all rows from a table using ? operator")
		list = {"Test Case No" : "Test Case 53", "Description" : "Request send to select all rows from a table using ? operator", "Result" : "Passed"}
			test.push(list)
	}) 

	await zcql.executeZCQLQuery("Insert into ZCQL(testvarchar)values(abcd)");
	let zcqlPromise4 = zcql.executeZCQLQuery("Select * from ZCQL where testvarchar = abcd");
	await zcqlPromise4.then(queryResult => {
      console.log("✅​ Test case 54 : Request send to select all rows from testvarchar column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 54", "Description" : "Request send to select all rows from testvarchar column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 54 : ")
		list = {"Test Case No" : "Test Case 54", "Description" : "Request send to select all rows from testvarchar column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testint)values(1234)");
	let zcqlPromise5 = zcql.executeZCQLQuery("Select * from ZCQL where testint = 1234");
	await zcqlPromise5.then(queryResult => {
      console.log("✅​ Test case 55 : Request send to select all rows from testint column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 55", "Description" : "Request send to select all rows from testint column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 55 : ")
		list = {"Test Case No" : "Test Case 55", "Description" : "Request send to select all rows from testint column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testdouble)values(1234.5678)");
	let zcqlPromise6 = zcql.executeZCQLQuery("Select * from ZCQL where testdouble = 1234.5678");
	await zcqlPromise6.then(queryResult => {
      console.log("✅​ Test case 56 : Request send to select all rows from testdouble column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 56", "Description" : "Request send to select all rows from testdouble column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 56 : ")
		list = {"Test Case No" : "Test Case 56", "Description" : "Request send to select all rows from testdouble column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise7 = zcql.executeZCQLQuery("Select * from ZCQL where testdouble = 1234.5");
	await zcqlPromise7.then(queryResult => {
      console.log("✅​ Test case 57 : Request send to select all rows from testdouble column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 57", "Description" : "Request send to select all rows from testdouble column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 57 : ")
		list = {"Test Case No" : "Test Case 57", "Description" : "Request send to select all rows from testdouble column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testboolean)values(false)");
	let zcqlPromise8 = zcql.executeZCQLQuery("Select * from ZCQL where testboolean = false");
	await zcqlPromise8.then(queryResult => {
      console.log("✅​ Test case 58 : Request send to select all rows from testboolean column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 58", "Description" : "Request send to select all rows from testboolean column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 58 : ")
		list = {"Test Case No" : "Test Case 58", "Description" : "Request send to select all rows from testboolean column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('2023-03-09')")
	let zcqlPromise9 = zcql.executeZCQLQuery("Select * from ZCQL where testdate = '2023-03-09'");
	await zcqlPromise9.then(queryResult => {
		
      console.log("✅​ Test case 59 : Request send to select all rows from testdatetime column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 59", "Description" : "Request send to select all rows from testdatetime column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 59 : ")
		list = {"Test Case No" : "Test Case 59", "Description" : "Request send to select all rows from testdatetime column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testdatetime)values('2023-03-04 01:01:01')")
	let zcqlPromise10 = zcql.executeZCQLQuery("Select * from ZCQL where testdatetime = '2023-03-04 01:01:01'");
	await zcqlPromise10.then(queryResult => {
		
      console.log("✅​ Test case 60 : Request send to select all rows from testdatetime column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 60", "Description" : "Request send to select all rows from testdatetime column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 60 : ")
		list = {"Test Case No" : "Test Case 60", "Description" : "Request send to select all rows from testdatetime column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise11 = zcql.executeZCQLQuery("Select * from ZCQL where testdatetime = '2023-03-04'");
	await zcqlPromise11.then(queryResult => {
		
      console.log("✅​ Test case 61 : Request send to select all rows from testdatetime column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 61", "Description" : "Request send to select all rows from testdatetime column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 61 : ")
		list = {"Test Case No" : "Test Case 61", "Description" : "Request send to select all rows from testdatetime column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testbigint)values('12345678987654321')")
	let zcqlPromise12 = zcql.executeZCQLQuery("Select * from ZCQL where testbigint = '12345678987654321'");
	await zcqlPromise12.then(queryResult => {
      console.log("✅​ Test case 62 : Request send to select all rows from testbigint column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 62", "Description" : "Request send to select all rows from testbigint column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 62 : ")
		list = {"Test Case No" : "Test Case 62", "Description" : "Request send to select all rows from testbigint column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise13 = zcql.executeZCQLQuery("Select * from ZCQL where testbigint = 'asdfg'");
	await zcqlPromise13.then(queryResult => {
      console.log("❗ Failed case 63 : Request send to select all rows from testbigint with invalid value using where");
	  list = {"Test Case No" : "Test Case 63", "Description" : "Request send to select all rows from testbigint with invalid value using where", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 63 : Request send to select all rows from testbigint with invalid value using where")
		list = {"Test Case No" : "Test Case 63", "Description" : "Request send to select all rows from testbigint with invalid value using where", "Result" : "Passed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testtext)values('testvalue@123')")
	let zcqlPromise14 = zcql.executeZCQLQuery("Select * from ZCQL where testtext = 'testvalue@123'");
	await zcqlPromise14.then(queryResult => {
      console.log("✅​ Test case 64 : Request send to select all rows from testtext column under a specific condition using where");
	  list = {"Test Case No" : "Test Case 64", "Description" : "Request send to select all rows from testtext column under a specific condition using where", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 64 : ")
		list = {"Test Case No" : "Test Case 64", "Description" : "Request send to select all rows from testtext column under a specific condition using where", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise15 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testtext = 'testvalue@123' AND testvarchar='abcd'");
	await zcqlPromise15.then(queryResult => {
      console.log("✅​ Test case 65 : Request send to select all rows from from testtext and testvarchar under a specific condition using AND operator");
	  list = {"Test Case No" : "Test Case 65", "Description" : "Request send to select all rows from from testtext and testvarchar under a specific condition using AND operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 65 : ")
		list = {"Test Case No" : "Test Case 65", "Description" : "Request send to select all rows from from testtext and testvarchar under a specific condition using AND operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise16 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testtext = 'testvalue@123' AND testvarchar='kjndkj'");
	await zcqlPromise16.then(queryResult => {
      console.log("✅​ Test case 66 : Request send to select all rows from testtext and testvarchar under a specific condition using AND operator");
	  list = {"Test Case No" : "Test Case 66", "Description" : "Request send to select all rows  from testtext and testvarchar under a specific condition using AND operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 66 : ")
		list = {"Test Case No" : "Test Case 66", "Description" : "Request send to select all rows from testtext and testvarchar under a specific condition using AND operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise17 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testtext = 'testvalue@123' AND testbigint = 'kjndkj'");
	await zcqlPromise17.then(queryResult => {
      console.log("❗ Failed case 67 : Request send to select all rows from testtext and testbigint with invalid input for testbigint under a specific condition using AND operator");
	  list = {"Test Case No" : "Test Case 67", "Description" : "Request send to select all rows from testtext and testbigint with invalid input for testbigint under a specific condition using AND operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 67 : Request send to select all rows from testtext and testbigint with invalid input for testbigint under a specific condition using AND operator")
		list = {"Test Case No" : "Test Case 67", "Description" : "Request send to select all rows from testtext and testbigint with invalid input for testbigint under a specific condition using AND operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise18 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testdouble = 'jsdhbdkj' AND testbigint = 'kjndkj'");
	await zcqlPromise18.then(queryResult => {
		console.log(queryResult.length)
      console.log("❗ Failed case 68 : Request send to select all rows from testdouble and testbigint with invalid input for testdouble and testbigint under a specific condition using AND operator");
	  list = {"Test Case No" : "Test Case 68", "Description" : "Request send to select all rows from testtext and testbigint with invalid input for testbigint under a specific condition using AND operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 68 : Request send to select all rows from testdouble and testbigint with invalid input for testdouble and testbigint under a specific condition using AND operator")
		list = {"Test Case No" : "Test Case 68", "Description" : "Request send to select all rows from testdouble and testbigint with invalid input for testdouble and testbigint under a specific condition using AND operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise19 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testtext = 'testvalue@123' OR testbigint = '12345678987654321'");
	await zcqlPromise19.then(queryResult => {
      console.log("✅​ Test case 69 : Request send to select all rows from testtext and testbigint under a specific condition using OR operator");
	  list = {"Test Case No" : "Test Case 69", "Description" : "Request send to select all rows from testtext and testbigint under a specific condition using OR operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 69 : ")
		list = {"Test Case No" : "Test Case 69", "Description" : "Request send to select all rows from testtext and testbigint under a specific condition using OR operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise20 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testdouble = 'jsdhbdkj' OR testbigint = 'hjdbhjhdb'");
	await zcqlPromise20.then(queryResult => {
		console.log(queryResult.length)
      console.log("❗ Failed case 70 : Request send to select all rows from testdouble and testbigint with invalid value under a specific condition using OR operator");
	  list = {"Test Case No" : "Test Case 70", "Description" : "Request send to select all rows from testtext and testbigint with invalid value under a specific condition using OR operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 70 : Request send to select all rows from testdouble and testbigint with invalid value under a specific condition using OR operator")
		list = {"Test Case No" : "Test Case 70", "Description" : "Request send to select all rows from testtext and testbigint with invalid value under a specific condition using OR operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise21 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testtext = 'jsdhbdkj' OR testbigint = '543234'");
	await zcqlPromise21.then(queryResult => {
      console.log("✅​ Test case 71 : Request send to select all rows from testtext and testbigint under a specific condition using OR operator");
	  list = {"Test Case No" : "Test Case 71", "Description" : "Request send to select all rows from testtext and testbigint under a specific condition using OR operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 71 : ")
		list = {"Test Case No" : "Test Case 71", "Description" : "Request send to select all rows from testtext and testbigint under a specific condition using OR operator", "Result" : "Failed"}
			test.push(list)
	})


	let zcqlPromise22 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testtext = 'jsdhbdkj' OR testbigint = 'hjdbhjhdb'");
	await zcqlPromise22.then(queryResult => {
		console.log(queryResult.length)
      console.log("❗ Failed case 72 : Request send to select all rows from testtext and testbigint with invalid input under a specific condition using OR operator");
	  list = {"Test Case No" : "Test Case 72", "Description" : "Request send to select all rows from testtext and testbigint with invalid input under a specific condition using OR operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 72 : Request send to select all rows from testtext and testbigint with invalid input under a specific condition using OR operator")
		list = {"Test Case No" : "Test Case 72", "Description" : "Request send to select all rows from testtext and testbigint with invalid input under a specific condition using OR operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise23 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testdouble = 'jsdhbdkj' OR testbigint = 'hjdbhjhdb'");
	await zcqlPromise23.then(queryResult => {
		console.log(queryResult.length)
      console.log("❗ Failed case 73 : Request send to select all rows from testdouble and testbigint with invalid input under a specific condition using OR operator");
	  list = {"Test Case No" : "Test Case 73", "Description" : "Request send to select all rows from testdouble and testbigint with invalid input under a specific condition using OR operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 73 : Request send to select all rows from testdouble and testbigint with invalid input under a specific condition using OR operator")
		list = {"Test Case No" : "Test Case 73", "Description" : "Request send to select all rows from testdouble and testbigint with invalid input under a specific condition using OR operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise24 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testbigint != '12345678987654321'");
	await zcqlPromise24.then(queryResult => {
      console.log("✅​ Test case 74 : Request send to select all rows from testbigint under a specific condition using NOT operator");
	  list = {"Test Case No" : "Test Case 74", "Description" : "Request send to select all rows from testbigint under a specific condition using NOT operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 74 : ")
		list = {"Test Case No" : "Test Case 74", "Description" : "Request send to select all rows from testbigint under a specific condition using NOT operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise25 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testvarchar != 'abcd'");
	await zcqlPromise25.then(queryResult => {
		list = {"Test Case No" : "Test Case 75", "Description" : "Request send to select all rows from testvarchar under a specific condition using NOT operator", "Result" : "Passed"}
			test.push(list)
      console.log("✅​ Test case 75 : Request send to select all rows from testvarchar under a specific condition using NOT operator");
	}).catch(err => {
		console.log("❗ Failed case 75 : ")
		list = {"Test Case No" : "Test Case 75", "Description" : "Request send to select all rows from testvarchar under a specific condition using NOT operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise26 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testbigint =! '12345678987654321'");
	await zcqlPromise26.then(queryResult => {
      console.log("❗ Failed case 76 : Request send to select all rows from testbigint under a specific condition using NOT operator");
	  list = {"Test Case No" : "Test Case 76", "Description" : "Request send to select all rows from testbigint under a specific condition using NOT operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 76 : Request send to select all rows from testbigint under a specific condition using NOT operator")
		list = {"Test Case No" : "Test Case 76", "Description" : "Request send to select all rows from testbigint under a specific condition using NOT operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise27 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE ROWID IS NULL;");
	await zcqlPromise27.then(queryResult => {
      console.log("✅​ Test case 77 : Request send to select all rows from testbigint under a specific condition using NULL");
	  list = {"Test Case No" : "Test Case 77", "Description" : "Request send to select all rows from testbigint under a specific condition using NULL", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 77 : ")
		list = {"Test Case No" : "Test Case 77", "Description" : "Request send to select all rows from testbigint under a specific condition using NULL", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise28 = zcql.executeZCQLQuery("SELECT * FROM zcql WHERE testbigint IS NOT NULL");
	await zcqlPromise28.then(queryResult => {
      console.log("✅​ Test case 78 : Request send to select all rows from testbigint under a specific condition using NOT NULL");
	  list = {"Test Case No" : "Test Case 78", "Description" : "Request send to select all rows from testbigint under a specific condition using NOT NULL", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 78 : ")
		list = {"Test Case No" : "Test Case 78", "Description" : "Request send to select all rows from testbigint under a specific condition using NOT NULL", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise29 = zcql.executeZCQLQuery("SELECT MAX(ROWID) FROM zcql;");
	await zcqlPromise29.then(queryResult => {
      console.log("✅​ Test case 79 : Request send to select maximum value from the ROWID column in ZCQL table");
	  list = {"Test Case No" : "Test Case 79", "Description" : "Request send to select maximum value from the ROWID column in ZCQL table", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 79 : ")
		list = {"Test Case No" : "Test Case 79", "Description" : "Request send to select maximum value from the ROWID column in ZCQL table", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise30 = zcql.executeZCQLQuery("SELECT MIN(ROWID) FROM zcql;");
	await zcqlPromise30.then(queryResult => {
      console.log("✅​ Test case 80 : Request send to select minimum value from the ROWID column in ZCQL table");
	  list = {"Test Case No" : "Test Case 80", "Description" : "Request send to select minimum value from the ROWID column in ZCQL table", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 80 : ")
		list = {"Test Case No" : "Test Case 80", "Description" : "Request send to select minimum value from the ROWID column in ZCQL table", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise31 = zcql.executeZCQLQuery("SELECT MIN(testvarchar) FROM zcql;");
	await zcqlPromise31.then(queryResult => {
		
      console.log("✅​ Test case 81 : Request send to select maximum value from the testvarchar column in ZCQL table");
	  list = {"Test Case No" : "Test Case 81", "Description" : "Request send to select maximum value from the testvarchar column in ZCQL table", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 81 : ")
		list = {"Test Case No" : "Test Case 81", "Description" : "Request send to select maximum value from the testvarchar column in ZCQL table", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise32 = zcql.executeZCQLQuery("SELECT AVG(testbigint) FROM zcql;");
	await zcqlPromise32.then(queryResult => {
		
      console.log("✅​ Test case 82 : Request send to select average value from the testbigint column in ZCQL table");
	  list = {"Test Case No" : "Test Case 82", "Description" : "Request send to select average value from the testbigint column in ZCQL table", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 82 : ")
		list = {"Test Case No" : "Test Case 82", "Description" : "Request send to select average value from the testbigint column in ZCQL table", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise33 = zcql.executeZCQLQuery("SELECT AVG(testvarchar) FROM zcql;");
	await zcqlPromise33.then(queryResult => {
      console.log("✅​ Test case 83 : Request send to select average value from the testvarchar column in ZCQL table");
	  list = {"Test Case No" : "Test Case 83", "Description" : "Request send to select average value from the testvarchar column in ZCQL table", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 83 : ")
		list = {"Test Case No" : "Test Case 83", "Description" : "Request send to select average value from the testvarchar column in ZCQL table", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise34 = zcql.executeZCQLQuery("SELECT SUM(testbigint) FROM zcql;");
	await zcqlPromise34.then(queryResult => {
      console.log("✅​ Test case 84 : Request send to select sum value from the testbigint column in ZCQL table");
	  list = {"Test Case No" : "Test Case 84", "Description" : "Request send to select sum value from the testbigint column in ZCQL table", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 84 : ")
		list = {"Test Case No" : "Test Case 84", "Description" : "Request send to select sum value from the testbigint column in ZCQL table", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise35 = zcql.executeZCQLQuery("SELECT SUM(testvarchar) FROM zcql;");
	await zcqlPromise35.then(queryResult => {
		
      console.log("✅​ Test case 85 : Request send to select sum value from the testvarchar column in ZCQL table");
	  list = {"Test Case No" : "Test Case 85", "Description" : "Request send to select sum value from the testvarchar column in ZCQL table", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 85 : ")
		list = {"Test Case No" : "Test Case 85", "Description" : "Request send to select sum value from the testvarchar column in ZCQL table", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise36 = zcql.executeZCQLQuery("SELECT * FROM zcql where testvarchar LIKE 'a*'");
	await zcqlPromise36.then(queryResult => {
      console.log("✅​ Test case 86 : Request send to select all rows from testvarchar column under a specific condition using LIKE operator");
	  list = {"Test Case No" : "Test Case 86", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 86 : ")
		list = {"Test Case No" : "Test Case 86", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Failed"}
			test.push(list)
	})


	let zcqlPromise37 = zcql.executeZCQLQuery("SELECT * FROM zcql where testvarchar LIKE '*y'");
	await zcqlPromise37.then(queryResult => {
      console.log("✅​ Test case 87 : Request send to select all rows from testvarchar column under a specific condition using LIKE operator");
	  list = {"Test Case No" : "Test Case 87", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 87 : ")
		list = {"Test Case No" : "Test Case 87", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise38 = zcql.executeZCQLQuery("SELECT * FROM zcql where testvarchar LIKE '*bc*'");
	await zcqlPromise38.then(queryResult => {
      console.log("✅​ Test case 88 : Request send to select all rows from testvarchar column under a specific condition using LIKE operator");
	  list = {"Test Case No" : "Test Case 88", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 88 : ")
		list = {"Test Case No" : "Test Case 88", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise39 = zcql.executeZCQLQuery("SELECT * FROM zcql where testvarchar LIKE '*d'");
	await zcqlPromise39.then(queryResult => {
      console.log("✅​ Test case 89 : Request send to select all rows from testvarchar column under a specific condition using LIKE operator");
	  list = {"Test Case No" : "Test Case 89", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 89 : ")
		list = {"Test Case No" : "Test Case 89", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise40 = zcql.executeZCQLQuery("SELECT * FROM zcql where testvarchar LIKE '?b*'");
	await zcqlPromise40.then(queryResult => {
      console.log("✅​ Test case 90 : Request send to select all rows from testvarchar column under a specific condition using LIKE operator");
	  list = {"Test Case No" : "Test Case 90", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 90 : ")
		list = {"Test Case No" : "Test Case 90", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise41 = zcql.executeZCQLQuery("SELECT * FROM zcql where testvarchar LIKE '[q]*'");
	await zcqlPromise41.then(queryResult => {
      console.log("✅​ Test case 91 : Request send to select all rows from testvarchar column under a specific condition using LIKE operator");
	  list = {"Test Case No" : "Test Case 91", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 91 : ")
		list = {"Test Case No" : "Test Case 91", "Description" : "Request send to select all rows from testvarchar column under a specific condition using LIKE operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise42 = zcql.executeZCQLQuery("SELECT * FROM zcql where testvarchar IN ('abcd', 'efgh', 'hijk')");
	await zcqlPromise42.then(queryResult => {
      console.log("✅​ Test case 92 : Request send to select all rows from testvarchar column under a specific condition using IN operator");
	  list = {"Test Case No" : "Test Case 92", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 92 : ")
		list = {"Test Case No" : "Test Case 92", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise43 = zcql.executeZCQLQuery("SELECT testvarchar FROM zcql order by MODIFIEDTIME");
	await zcqlPromise43.then(queryResult => {
      console.log("✅​ Test case 93 : Request send to select all rows from testvarchar column under a specific condition using order by");
	  list = {"Test Case No" : "Test Case 93", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator order by", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 93 : ")
		list = {"Test Case No" : "Test Case 93", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator order by", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise44 = zcql.executeZCQLQuery("SELECT testvarchar FROM zcql order by MODIFIEDTIME asc");
	await zcqlPromise44.then(queryResult => {
      console.log("✅​ Test case 94 : Request send to select all rows from testvarchar column under a specific condition using order by in ascending order");
	  list = {"Test Case No" : "Test Case 94", "Description" : "Request send to select all rows from testvarchar column under a specific condition using order by in ascending order", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 94 : ")
		list = {"Test Case No" : "Test Case 94", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise45 = zcql.executeZCQLQuery("SELECT testvarchar FROM zcql order by MODIFIEDTIME desc");
	await zcqlPromise45.then(queryResult => {
      console.log("✅​ Test case 95 : Request send to select all rows from testvarchar column under a specific condition using order by in decending order");
	  list = {"Test Case No" : "Test Case 95", "Description" : "Request send to select all rows from testvarchar column under a specific condition using order by in decending order", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 95 : ")
		list = {"Test Case No" : "Test Case 95", "Description" : "Request send to select all rows from testvarchar column under a specific condition using order by in decending order", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise46 = zcql.executeZCQLQuery("SELECT * FROM zcql where testvarchar in (SELECT testrow from datastore)");
	await zcqlPromise46.then(queryResult => {
      console.log("✅​ Test case 96 : Request send to select all rows from testvarchar column under a specific condition");
	  list = {"Test Case No" : "Test Case 96", "Description" : "Request send to select all rows from testvarchar column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 96 : ")
		list = {"Test Case No" : "Test Case 96", "Description" : "Request send to select all rows from testvarchar column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise47 = zcql.executeZCQLQuery("Select count(ROWID), testvarchar from ZCQL group by testvarchar");
	await zcqlPromise47.then(queryResult => {
		console.log("✅​ Test case 97 : Request send to count number of rows in ROWID column");
		list = {"Test Case No" : "Test Case 97", "Description" : "Request send to count number of rows in ROWID column", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 97 : ")
		list = {"Test Case No" : "Test Case 97", "Description" : "Request send to count number of rows in ROWID column", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise48 = zcql.executeZCQLQuery("Select count(testvarchar), ROWID from ZCQL group by ROWID");
	await zcqlPromise48.then(queryResult => {
		console.log("✅​ Test case 98 : Request send to select all rows from testvarchar column under a specific condition using IN operator");
		list = {"Test Case No" : "Test Case 98", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 98 : ")
		list = {"Test Case No" : "Test Case 98", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise49 = zcql.executeZCQLQuery("Select count(testvarchar), ROWID from ZCQL groupby ROWID");
	await zcqlPromise49.then(queryResult => {
		console.log("❗ Failed case 99 : Request send to select all rows from testvarchar column under a specific condition using IN operator");
		list = {"Test Case No" : "Test Case 99", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 99 : Request send to select all rows from testvarchar column under a specific condition using IN operator")
		list = {"Test Case No" : "Test Case 99", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise50 = zcql.executeZCQLQuery("Select count(ROWID), testvarchar from ZCQL group by testvarchar where testvarchar ='abcd'");
	await zcqlPromise50.then(queryResult => {
		console.log("❗ Failed case 100 : Request send to select all rows from testvarchar column under a specific condition using IN operator");
		list = {"Test Case No" : "Test Case 100", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 100 : Request send to select all rows from testvarchar column under a specific condition using IN operator")
		list = {"Test Case No" : "Test Case 100", "Description" : "Request send to select all rows from testvarchar column under a specific condition using IN operator", "Result" : "Passed"}
			test.push(list)
	})
	var repo = []
	for(let i = 1; i < test.length; i++)
	{
		repo.push(test[i])
	}
	var rep = JSON.stringify(test)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Zcqldata2 : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)
})


app.post("/zcql3", async(req, res) => {
	const catalystApp = catalyst.initialize(req);
	let zcql = catalystApp.zcql();
	var list;
	var test = [];
	var feature = {"feature" : "ZCQL3"}
	test.push(feature)
	await zcql.executeZCQLQuery("Insert into ZCQL(testvarchar)values('abcd')");
	let zcqlPromise1 = zcql.executeZCQLQuery("UPDATE ZCQL SET testvarchar = 'updated' WHERE testvarchar = 'abcd'");
	await zcqlPromise1.then(queryResult => {
		console.log("✅​ Test case 101 : Request send to update all rows from testvarchar column under a specific condition")
		list = {"Test Case No" : "Test Case 101", "Description" : "Request send to update all rows from testvarchar column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 101 : ")
		list = {"Test Case No" : "Test Case 101", "Description" : "Request send to update all rows from testvarchar column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise2 = zcql.executeZCQLQuery("UPDATE ZCQL SET testtext = 'updated' WHERE testvarchar = 'updated'");
	await zcqlPromise2.then(queryResult => {
		console.log("✅​ Test case 102 : Request send to update all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 102", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 102 : ")
		list = {"Test Case No" : "Test Case 102", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise3 = zcql.executeZCQLQuery("UPDATE ZCQL SET testint = 'updated' WHERE testvarchar = 'updated'");
	await zcqlPromise3.then(queryResult => {
		console.log("❗ Failed case 103 : ")
		list = {"Test Case No" : "Test Case 103", "Description" : "Request send to update all rows from testvarchar and testint column under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 103 : Request send to update all rows from testvarchar and testint column under a specific condition")
		list = {"Test Case No" : "Test Case 103", "Description" : "Request send to update all rows from testvarchar and testint column under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise4 = zcql.executeZCQLQuery("UPDATE ZCQL SET testint = '@!#$%^&*' WHERE testvarchar = 'updated'");
	await zcqlPromise4.then(queryResult => {
		console.log("❗ Failed case 104 : ")
		list = {"Test Case No" : "Test Case 104", "Description" : "Request send to update all rows from testvarchar and testint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 104 : Request send to update all rows from testvarchar and testint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 104", "Description" : "Request send to update all rows from testvarchar and testint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise5 = zcql.executeZCQLQuery("UPDATE ZCQL SET testint = '🤫😀🥺😆🥹' WHERE testvarchar = 'updated'");
	await zcqlPromise5.then(queryResult => {
		console.log("❗ Failed case 105 : ")
		list = {"Test Case No" : "Test Case 105", "Description" : "Request send to update all rows from testvarchar and testint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 105 : Request send to update all rows from testvarchar and testint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 105", "Description" : "Request send to update all rows from testvarchar and testint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise6 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdate = '28-11-2023' WHERE testvarchar = 'updated'");
	await zcqlPromise6.then(queryResult => {
		console.log("✅​ Test case 106 : Request send to update all rows from testvarchar and testdate column under a specific condition")
		list = {"Test Case No" : "Test Case 106", "Description" : "Request send to update all rows from testvarchar and testdate column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 106 : ")
		list = {"Test Case No" : "Test Case 106", "Description" : "Request send to update all rows from testvarchar and testdate column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise7 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdate = '2023--11--28' WHERE testvarchar = 'updated'");
	await zcqlPromise7.then(queryResult => {
		console.log("❗ Failed case 107 : Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 107", "Description" : "Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 107 : ")
		list = {"Test Case No" : "Test Case 107", "Description" : "Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise8 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdate = '5432123' WHERE testvarchar = 'updated'");
	await zcqlPromise8.then(queryResult => {
		console.log("❗ Failed case 108 : ")
		list = {"Test Case No" : "Test Case 108", "Description" : "Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 108 : Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 108", "Description" : "Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise9 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdate = '@!#$%^&*' WHERE testvarchar = 'updated'");
	await zcqlPromise9.then(queryResult => {
		console.log("❗ Failed case 109 : ")
		list = {"Test Case No" : "Test Case 109", "Description" : "Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 109 : Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 109", "Description" : "Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise10 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdate = '🤫😀🥺😆🥹' WHERE testvarchar = 'updated'");
	await zcqlPromise10.then(queryResult => {
		console.log("❗ Failed case 110 : ")
		list = {"Test Case No" : "Test Case 110", "Description" : "Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 110 : Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 110", "Description" : "Request send to update all rows from testvarchar and testdate column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise11 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdatetime = '2023-03-04 01:01:01' WHERE testvarchar = 'updated'");
	await zcqlPromise11.then(queryResult => {
		console.log("✅​ Test case 111 : Request send to update all rows from testvarchar and testdatetime column under a specific condition")
		list = {"Test Case No" : "Test Case 111", "Description" : "Request send to update all rows from testvarchar and testdatetime column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 111 : ")
		list = {"Test Case No" : "Test Case 111", "Description" : "Request send to update all rows from testvarchar and testdatetime column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise12 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdatetime = '2023-03-04 99:99:99' WHERE testvarchar = 'updated'");
	await zcqlPromise12.then(queryResult => {
		console.log("❗ Failed case 112 : ")
		list = {"Test Case No" : "Test Case 112", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 112 : Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 112", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise13 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdatetime = '28-11-2023' WHERE testvarchar = 'updated'");
	await zcqlPromise13.then(queryResult => {
		console.log("❗ Failed case 113 : ")
		list = {"Test Case No" : "Test Case 113", "Description" : "Request send to update all rows from testvarchar and testdatetime column under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 113 : Request send to update all rows from testvarchar and testdatetime column under a specific condition")
		list = {"Test Case No" : "Test Case 113", "Description" : "Request send to update all rows from testvarchar and testdatetime column under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise14 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdatetime = '2023--11--28' WHERE testvarchar = 'updated'");
	await zcqlPromise14.then(queryResult => {
		console.log("❗ Failed case 114 : ")
		list = {"Test Case No" : "Test Case 114", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 114 : Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 114", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise15 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdatetime = '5432123' WHERE testvarchar = 'updated'");
	await zcqlPromise15.then(queryResult => {
		console.log("❗ Failed case 115 : ")
		list = {"Test Case No" : "Test Case 115", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 115 : Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 115", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise16 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdatetime = '@!#$%^&*' WHERE testvarchar = 'updated'");
	await zcqlPromise16.then(queryResult => {
		console.log("❗ Failed case 116 : ")
		list = {"Test Case No" : "Test Case 116", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 116 : Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 116", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise17 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdatetime = '🤫😀🥺😆🥹' WHERE testvarchar = 'updated'");
	await zcqlPromise17.then(queryResult => {
		console.log("❗ Failed case 117 : ")
		list = {"Test Case No" : "Test Case 117", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 117 : Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 117", "Description" : "Request send to update all rows from testvarchar and testdatetime column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise18 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdouble = '321.123' WHERE testvarchar = 'updated'");
	await zcqlPromise18.then(queryResult => {
		console.log("✅​ Test case 118 : Request send to update all rows from testvarchar and testdouble column under a specific condition")
		list = {"Test Case No" : "Test Case 118", "Description" : "Request send to update all rows from testvarchar and testdouble column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 118 : ")
		list = {"Test Case No" : "Test Case 118", "Description" : "Request send to update all rows from testvarchar and testdouble column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})
	
	let zcqlPromise19 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdouble = 'updated' WHERE testvarchar = 'updated'");
	await zcqlPromise19.then(queryResult => {
		console.log("❗ Failed case 119 : ")
		list = {"Test Case No" : "Test Case 119", "Description" : "Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 119 : Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 119", "Description" : "Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise20 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdouble = '@!#$%^&*' WHERE testvarchar = 'updated'");
	await zcqlPromise20.then(queryResult => {
		console.log("❗ Failed case 120 : ")
		list = {"Test Case No" : "Test Case 120", "Description" : "Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 120 : Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 120", "Description" : "Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise21 = zcql.executeZCQLQuery("UPDATE ZCQL SET testdouble = '🤫😀🥺😆🥹' WHERE testvarchar = 'updated'");
	await zcqlPromise21.then(queryResult => {
		console.log("❗ Failed case 121 : ")
		list = {"Test Case No" : "Test Case 121", "Description" : "Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 121 : Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 121", "Description" : "Request send to update all rows from testvarchar and testdouble column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise22 = zcql.executeZCQLQuery("UPDATE ZCQL SET testboolean = true WHERE testvarchar = 'updated'");
	await zcqlPromise22.then(queryResult => {
		console.log("✅​ Test case 122 : Request send to update all rows from testvarchar and testboolean column under a specific condition")
		list = {"Test Case No" : "Test Case 122", "Description" : "Request send to update all rows from testvarchar and testboolean column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 122 : ")
		list = {"Test Case No" : "Test Case 122", "Description" : "Request send to update all rows from testvarchar and testboolean column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise23 = zcql.executeZCQLQuery("UPDATE ZCQL SET testboolean = '321.123' WHERE testvarchar = 'updated'");
	await zcqlPromise23.then(queryResult => {
		console.log("❗ Failed case 123 : ")
		list = {"Test Case No" : "Test Case 123", "Description" : "Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 123 : Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition")
		list = {"Test Case No" : "Test Case 123", "Description" : "Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise24 = zcql.executeZCQLQuery("UPDATE ZCQL SET testboolean = 'updated' WHERE testvarchar = 'updated'");
	await zcqlPromise24.then(queryResult => {
		console.log("❗ Failed case 124 : ")
		list = {"Test Case No" : "Test Case 124", "Description" : "Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 124 : Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition")
		list = {"Test Case No" : "Test Case 124", "Description" : "Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise25 = zcql.executeZCQLQuery("UPDATE ZCQL SET testboolean = '@!#$%^&*' WHERE testvarchar = 'updated'");
	await zcqlPromise25.then(queryResult => {
		console.log("❗ Failed case 125 : ")
		list = {"Test Case No" : "Test Case 125", "Description" : "Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 125 : Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition")
		list = {"Test Case No" : "Test Case 125", "Description" : "Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise26 = zcql.executeZCQLQuery("UPDATE ZCQL SET testboolean = '🤫😀🥺😆🥹' WHERE testvarchar = 'updated'");
	await zcqlPromise26.then(queryResult => {
		console.log("❗ Failed case 126 : ")
		list = {"Test Case No" : "Test Case 126", "Description" : "Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition column under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 126 : Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition column under a specific condition")
		list = {"Test Case No" : "Test Case 126", "Description" : "Request send to update all rows from testvarchar and testboolean column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise27 = zcql.executeZCQLQuery("UPDATE ZCQL SET testbigint = 43212345432134 WHERE testvarchar = 'updated'");
	await zcqlPromise27.then(queryResult => {
		console.log("✅​ Test case 127 : Request send to update all rows from testvarchar and testbigint column under a specific condition")
		list = {"Test Case No" : "Test Case 127", "Description" : "Request send to update all rows from testvarchar and testbigint column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 127 : ")
		list = {"Test Case No" : "Test Case 127", "Description" : "Request send to update all rows from testvarchar and testbigint column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise28 = zcql.executeZCQLQuery("UPDATE ZCQL SET testbigint = true WHERE testvarchar = 'updated'");
	await zcqlPromise28.then(queryResult => {
		console.log("❗ Failed case 128 : ")
		list = {"Test Case No" : "Test Case 128", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 128 : Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 128", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise29 = zcql.executeZCQLQuery("UPDATE ZCQL SET testbigint = '321.123' WHERE testvarchar = 'updated'");
	await zcqlPromise29.then(queryResult => {
		console.log("❗ Failed case 129 : ")
		list = {"Test Case No" : "Test Case 129", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 129 : Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 129", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise30 = zcql.executeZCQLQuery("UPDATE ZCQL SET testbigint = 'updated' WHERE testvarchar = 'updated'");
	await zcqlPromise30.then(queryResult => {
		console.log("❗ Failed case 130 : ")
		list = {"Test Case No" : "Test Case 130", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 130 : Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 130", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})
	
	let zcqlPromise31 = zcql.executeZCQLQuery("UPDATE ZCQL SET testbigint = '@!#$%^&*' WHERE testvarchar = 'updated'");
	await zcqlPromise31.then(queryResult => {
		console.log("❗ Failed case 131 : ")
		list = {"Test Case No" : "Test Case 131", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 131 : Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 131", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise32 = zcql.executeZCQLQuery("UPDATE ZCQL SET testbigint = '🤫😀🥺😆🥹' WHERE testvarchar = 'updated'");
	await zcqlPromise32.then(queryResult => {
		console.log("❗ Failed case 132 : ")
		list = {"Test Case No" : "Test Case 132", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log("✅​ Test case 132 : Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 132", "Description" : "Request send to update all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise33 = zcql.executeZCQLQuery("UPDATE ZCQL SET testtext = 43212345432134 WHERE testvarchar = 'updated'");
	await zcqlPromise33.then(queryResult => {
		console.log("✅​ Test case 133 : Request send to update all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 133", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 133 : ")
		list = {"Test Case No" : "Test Case 133", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise34 = zcql.executeZCQLQuery("UPDATE ZCQL SET testtext = true WHERE testvarchar = 'updated'");
	await zcqlPromise34.then(queryResult => {
		console.log("✅​ Test case 134 : Request send to update all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 134", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 134 : ")
		list = {"Test Case No" : "Test Case 134", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise35 = zcql.executeZCQLQuery("UPDATE ZCQL SET testtext = '321.123' WHERE testvarchar = 'updated'");
	await zcqlPromise35.then(queryResult => {
		console.log("✅​ Test case 135 : Request send to update all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 135", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 135 : ")
		list = {"Test Case No" : "Test Case 135", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})
	
	let zcqlPromise36 = zcql.executeZCQLQuery("UPDATE ZCQL SET testtext = 'updated' WHERE testvarchar = 'updated'");
	await zcqlPromise36.then(queryResult => {
		console.log("✅​ Test case 136 : Request send to update all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 136", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 136 : ")
		list = {"Test Case No" : "Test Case 136", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})
	
	let zcqlPromise37 = zcql.executeZCQLQuery("UPDATE ZCQL SET testtext = '@!#$%^&*' WHERE testvarchar = 'updated'");
	await zcqlPromise37.then(queryResult => {
		console.log("✅​ Test case 137 : Request send to update all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 137", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 137 : ")
		list = {"Test Case No" : "Test Case 137", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise38 = zcql.executeZCQLQuery("UPDATE ZCQL SET testtext = '🤫😀🥺😆🥹' WHERE testvarchar = 'updated'");
	await zcqlPromise38.then(queryResult => {
		console.log("✅​ Test case 138 : Request send to update all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 138", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log("❗ Failed case 138 : ")
		list = {"Test Case No" : "Test Case 138", "Description" : "Request send to update all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})
	var repo = []
	for(let i = 1; i < test.length; i++)
	{
		repo.push(test[i])
	}
	var rep = JSON.stringify(test)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Zcqldata3 : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)
})

app.post("/zcql4", async (req,res) => {
	const catalystApp = catalyst.initialize(req);
	let zcql = catalystApp.zcql();
	let list;
	let test = []
	var feature = {"feature" : "ZCQL4"}
	test.push(feature)

	await sleep(10)

	await zcql.executeZCQLQuery("Insert into ZCQL(testvarchar)values('abcd')");
	let zcqlPromise1 = zcql.executeZCQLQuery("Delete from ZCQL where testvarchar = 'abcd'");
	await zcqlPromise1.then(queryResult => {
		console.log(queryResult)
		console.log("✅​ Test case 139 : Request send to delete all rows from testvarchar column under a specific condition");
		list = {"Test Case No" : "Test Case 139", "Description" : "Request send to delete all rows from testvarchar column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 139 : Request send to delete all rows from testvarchar column under a specific condition")
		list = {"Test Case No" : "Test Case 139", "Description" : "Request send to delete all rows from testvarchar column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testvarchar, testtext)values('efgh','zxcv')");
	let zcqlPromise2 = zcql.executeZCQLQuery("Delete from ZCQL where testvarchar = 'efgh' and testtext = 'zxcv'");
	await zcqlPromise2.then(queryResult => {
		console.log(queryResult)
		console.log("✅​ Test case 140 : Request send to delete all rows from testvarchar and testtext column under a specific condition");
		list = {"Test Case No" : "Test Case 140", "Description" : "Request send to delete all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 140 : Request send to delete all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 140", "Description" : "Request send to delete all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise3 = zcql.executeZCQLQuery("Delete from ZCQL where testvarchar = 'efgh' and testtext = 'gnfdjhgbs'");
	await zcqlPromise3.then(queryResult => {
		console.log(queryResult)
		console.log("✅​ Test case 141 : Request send to delete all rows from testvarchar and testtext column under a specific condition");
		list = {"Test Case No" : "Test Case 141", "Description" : "Request send to delete all rows from testvarchar and testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 141 : Request send to delete all rows from testvarchar and testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 141", "Description" : "Request send to delete all rows from testvarchar and testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise4 = zcql.executeZCQLQuery("Delete from ZCQL where testvarchar = 'efgh' and testbigint = '@!#$%^&'");
	await zcqlPromise4.then(queryResult => {
		console.log(queryResult)
		console.log("❗ Failed case 142 : Request send to delete all rows from testvarchar and testbigint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 142", "Description" : "Request send to delete all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("✅​ Test case 142 : Request send to delete all rows from testvarchar and testbigint column with invalid input under a specific condition");
		list = {"Test Case No" : "Test Case 142", "Description" : "Request send to delete all rows from testvarchar and testbigint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	await zcql.executeZCQLQuery("Insert into ZCQL(testvarchar, testtext)values('efgh','zxcv')");
	let zcqlPromise5 = zcql.executeZCQLQuery("Delete from ZCQL where testvarchar = 'efgh' or testbigint = '2345432'");
	await zcqlPromise5.then(queryResult => {
		console.log(queryResult)
		console.log("✅​ Test case 143 : Request send to delete all rows from testvarchar or testbigint column under a specific condition");
		list = {"Test Case No" : "Test Case 143", "Description" : "Request send to delete all rows from testvarchar or testbigint column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 143 : Request send to delete all rows from testvarchar or testbigint column under a specific condition")
		list = {"Test Case No" : "Test Case 143", "Description" : "Request send to delete all rows from testvarchar or testbigint column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise6 = zcql.executeZCQLQuery("Delete from ZCQL where testvarchar = 'efgsdfxsh' or testbigint = '2345432'");
	await zcqlPromise6.then(queryResult => {
		console.log(queryResult)
		console.log("✅​ Test case 144 : Request send to delete all rows from testvarchar or testbigint column with invalid input under a specific condition");
		list = {"Test Case No" : "Test Case 144", "Description" : "Request send to delete all rows from testvarchar or testbigint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 144 : Request send to delete all rows from testvarchar or testbigint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 144", "Description" : "Request send to delete all rows from testvarchar or testbigint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	})
	
	let zcqlPromise7 = zcql.executeZCQLQuery("Delete from ZCQL where testvarchar = 'efgh' or testbigint = 'trdytfuyf'");
	await zcqlPromise7.then(queryResult => {
		console.log(queryResult)
		console.log("❗ Failed case 145 : Request send to delete all rows from testvarchar column or testbigint column with invalid input under a specific condition")
		list = {"Test Case No" : "Test Case 145", "Description" : "Request send to delete all rows from testvarchar column or testbigint column with invalid input under a specific condition", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("✅​ Test case 145 : Request send to delete all rows from testvarchar column or testbigint column with invalid input under a specific condition");
		list = {"Test Case No" : "Test Case 145", "Description" : "Request send to delete all rows from testvarchar column or testbigint column with invalid input under a specific condition", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise8 = zcql.executeZCQLQuery("Delete from ZCQL where testtext is not null");
	await zcqlPromise8.then(queryResult => {
		console.log(queryResult)
		console.log("✅​ Test case 146 : Request send to delete all rows from testtext column under a specific condition");
		list = {"Test Case No" : "Test Case 146", "Description" : "Request send to delete all rows from testtext column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 146 : Request send to delete all rows from testtext column under a specific condition")
		list = {"Test Case No" : "Test Case 146", "Description" : "Request send to delete all rows from testtext column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise9 = zcql.executeZCQLQuery("Delete from ZCQL where testdate is null");
	await zcqlPromise9.then(queryResult => {
		console.log(queryResult)
		console.log("✅​ Test case 147 : Request send to delete all rows from testdate column under a specific condition");
		list = {"Test Case No" : "Test Case 147", "Description" : "Request send to delete all rows from testdate column under a specific condition", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 147 : Request send to delete all rows from testdate column under a specific condition")
		list = {"Test Case No" : "Test Case 147", "Description" : "Request send to delete all rows from testdate column under a specific condition", "Result" : "Failed"}
			test.push(list)
	})

	let zcqlPromise10 = zcql.executeZCQLQuery("Delete max(ROWID) from zcql");
	await zcqlPromise10.then(queryResult => {
		console.log(queryResult)
		console.log("❗ Failed case 148 : Request send to delete with invalid query request")
		list = {"Test Case No" : "Test Case 148", "Description" : "Request send to delete with invalid query request", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("✅​ Test case 148 : Request send to delete with invalid query request");
		list = {"Test Case No" : "Test Case 148", "Description" : "Request send to delete with invalid query request", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise11 = zcql.executeZCQLQuery("Delete min(ROWID) from zcql");
	await zcqlPromise11.then(queryResult => {
		console.log(queryResult)
		console.log("❗ Failed case 149 : Request send to delete with invalid query request")
		list = {"Test Case No" : "Test Case 149", "Description" : "Request send to delete with invalid query request", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("✅​ Test case 149 : Request send to delete with invalid query request");
		list = {"Test Case No" : "Test Case 149", "Description" : "Request send to delete with invalid query request", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise12 = zcql.executeZCQLQuery("Delete * from ZCQL");
	await zcqlPromise12.then(queryResult => {
		console.log(queryResult)
		console.log("❗ Failed case 150 : Request send to delete all rows from ZCQL using * operator")
		list = {"Test Case No" : "Test Case 150", "Description" : "Request send to delete all rows from ZCQL using * operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("✅​ Test case 150 : Request send to delete all rows from ZCQL using * operator");
		list = {"Test Case No" : "Test Case 150", "Description" : "Request send to delete all rows from ZCQL using * operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise13 = zcql.executeZCQLQuery("Delete ? from ZCQL");
	await zcqlPromise13.then(queryResult => {
		console.log(queryResult)
		console.log("❗ Failed case 151 : Request send to delete all rows from ZCQL using ? operator")
		list = {"Test Case No" : "Test Case 151", "Description" : "Request send to delete all rows from ZCQL using ? operator", "Result" : "Failed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("✅​ Test case 151 : Request send to delete all rows from ZCQL using ? operator");
		list = {"Test Case No" : "Test Case 151", "Description" : "Request send to delete all rows from ZCQL using ? operator", "Result" : "Passed"}
			test.push(list)
	})

	let zcqlPromise14 = zcql.executeZCQLQuery("Delete from ZCQL");
	await zcqlPromise14.then(queryResult => {
		console.log(queryResult)
		console.log("✅​ Test case 152 : Request send to delete all rows from ZCQL");
		list = {"Test Case No" : "Test Case 152", "Description" : "Request send to delete all rows from ZCQL", "Result" : "Passed"}
			test.push(list)
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 152 : Request send to delete all rows from ZCQL")
		list = {"Test Case No" : "Test Case 152", "Description" : "Request send to delete all rows from ZCQL", "Result" : "Failed"}
			test.push(list)
	})
	var repo = []
	for(let i = 1; i < test.length; i++)
	{
		repo.push(test[i])
	}
	var rep = JSON.stringify(test)
    let datastore = catalystApp.datastore();
    let table = datastore.table('Finalreport');
    let insertPromise = table.insertRow({Zcqldata4 : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)
})

async function sleep(seconds) {
	return new Promise((resolve) => {
	  setTimeout(resolve, seconds * 1000);
	});
  }

app.post("/terminatezcql", async(req, res) => {
	process.exit(0)
})

module.exports = app;