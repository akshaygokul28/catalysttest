"use strict"

const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());


app.post("/authentication", async(req, res) => {

	const catalystApp = catalyst.initialize(req, {scope : 'admin'});
	var arr = []
	var repo = arr;
	var feature = {"Feature" : "Authentication"}
	repo.push(feature)
   	var t1 = await testcase1to3(catalystApp)
	for(let i = 0; i < t1.length; i++)
	{
		arr.push(t1[i])
	}
	var t2 = await testcase4(catalystApp)
	for(let i = 0; i < t2.length; i++)
	{
		arr.push(t2[i])
	}
	var t3 = await testcase5(catalystApp)
	for(let i = 0; i < t3.length; i++)
	{
		arr.push(t3[i])
	}
	var t4 = await testcase6(catalystApp)
	for(let i = 0; i < t4.length; i++)
	{
		arr.push(t4[i])
	}
	var t5 = await testcase7to9(catalystApp)
	for(let i = 0; i < t5.length; i++)
	{
		arr.push(t5[i])
	}
	var t6 = await testcase10(catalystApp)
	for(let i = 0; i < t6.length; i++)
	{
		arr.push(t6[i])
	}
	var t7 = await testcase11to12(catalystApp)
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
    let insertPromise = table.insertRow({Authenticationdata : rep});
    insertPromise.then((row) => {
        });

	res.send(repo)

});

async function testcase1to3(catalystApp)
{
	var test = []
	var list;
	let userManagement = catalystApp.userManagement();
	let datastore = catalystApp.datastore();
	var signupConfig = {
		platform_type: 'web',
		zaid: "1018564802"
		 };
	var userConfig = {
		first_name:'qwer',
		last_name: 'asdf',
		email_id: 'akshaygokul.gr+lz@zohotest.com',
		role_id : '16173000000030019'
	};
	let registerPromise1 = userManagement.registerUser(signupConfig, userConfig);
	await registerPromise1.then(async userDetails => { 
		var uid = userDetails.user_details.user_id;
		await datastore.table("Authentication").insertRow({UserID : uid});
        if(userDetails.zaid != 0)
		{
			console.log("​✅​ Test case 1 : Request send to invite a user for authentication and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 1", "Description" : "Request send to invite a user for authentication and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		} 
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 1 : Request send to invite a user for authentication and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 1", "Description" : "Request send to invite a user for authentication and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})

	var signupConfig = {
		platform_type: 'ios',
		zaid: "1018564802"
		 };
	var userConfig = {
		first_name: 'abcd',
		last_name: 'efgh',
		email_id: 'akshaygokul.gr+test2@zohotest.com',
		role_id : '16173000000030019'
	};
	let registerPromise2 = userManagement.registerUser(signupConfig, userConfig);
	await registerPromise2.then(userDetails => {
        if(userDetails.zaid != 0)
		{
			console.log("❗ Failed case 2 : Request send to invite a user for Authentication by setting platform type as IOS in a web application and check whether proper exception is thrown")
			list = {"Test Case No" : "Test case 2", "Description" : "Request send to invite a user for Authentication by setting platform type as IOS in a web application and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	}).catch(err =>{
		console.log("​✅​ Test case 2 : Request send to invite a user for Authentication by setting platform type as IOS in a web application and check whether proper exception is thrown")
		list = {"Test Case No" : "Test case 2", "Description" : "Request send to invite a user for Authentication by setting platform type as IOS in a web application and check whether proper exception is thrown", "Result" : "Passed"}
		test.push(list)
	})

	var signupConfig = {
		platform_type: 'web',
		zaid: "1018564802"
		 };
	var userConfig = {
		first_name: 'abcd',
		last_name: 'efgh',
		email_id: 'hbckhadbskjb',
		role_id : '16173000000030019'
	};
	let registerPromise3 = userManagement.registerUser(signupConfig, userConfig);
	await registerPromise3.then(userDetails => {
		if(userDetails.zaid != 0)
		{
			console.log("❗ Failed case 3 : Request send to invite a user for Authentication using invalid e-mail ID and check whether proper exception is thrown")
			list = {"Test Case No" : "Test case 3", "Description" : "Request send to invite a user for Authentication using invalid e-mail ID and check whether proper exception is thrown", "Result" : "Failed"}
			test.push(list)
		}
	}).catch(err =>{
		console.log("​✅​ Test case 3 : Request send to invite a user for Authentication using invalid e-mail ID and check whether proper exception is thrown")
		list = {"Test Case No" : "Test case 3", "Description" : "Request send to invite a user for Authentication using invalid e-mail ID and check whether proper exception is thrown", "Result" : "Passed"}
		test.push(list)
	})
	return test;
}

async function testcase4(catalystApp)
{
	var test = []
	var list;
	var datastore = catalystApp.datastore();
	let userManagement = catalystApp.userManagement();
	var signupConfig = {
		platform_type: 'web',
		zaid: "1018564802"
		 };
	var userConfig = {
		first_name: 'abcd',
		last_name: 'efgh',
		email_id: 'akshaygokulmails@gmail.com',
		zaaid: "1018565032"
	};
	let registerPromise = userManagement.registerUser(signupConfig, userConfig);
	await registerPromise.then(async userDetails => {
		await datastore.table("Authentication").insertRow({UserID : userDetails.user_details.user_id});
        if(userDetails.zaid != 0)
		{
			console.log("​✅​ Test case 4 : Request send to invite a new user to an existing organization and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 4", "Description" : "Request send to invite a new user to an existing organization and check whether proper exception is thrown", "Result" : "Passed"}
			test.push(list)
		} 
	}).catch(err =>{
		console.log(" ❗ Failed case 4 : Request send to invite a new user to an existing organization and check whether any exception is thrown"+err)
		list = {"Test Case No" : "Test case 4", "Description" : "Request send to invite a new user to an existing organization and check whether proper exception is thrown", "Result" : "Failed"}
		test.push(list)
	})
	return test;
}

async function testcase5(catalystApp)
{
	var test = []
	var list;
	var signupConfig = {
        platform_type: 'web',
        zaid: "1018564802"
    };
    var userConfig = {
		first_name: 'abcd',
        last_name: 'efgh',
        email_id: 'akshaygokul.gr+v2@zohotest.com'
    };
	let userManagement = catalystApp.userManagement();
	let resetPromise = userManagement.resetPassword(signupConfig, userConfig);
	await resetPromise.then(response => {
      if(response.length != 0)
	  {
		console.log("​✅​ Test case 5 : Request send to send reset password mail for an exisiting user and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 5", "Description" : "Request send to send reset password mail for an exisiting user and check whether proper exception is thrown", "Result" : "Passed"}
		test.push(list)
	  }
}).catch(err => {
	console.log(err)
	console.log(" ❗ Failed case 5 : Request send to send reset password mail for an exisiting user and check whether any exception is thrown")
	list = {"Test Case No" : "Test case 5", "Description" : "Request send to send reset password mail for an exisiting user and check whether proper exception is thrown", "Result" : "Failed"}
	test.push(list)
})
return test;
}

async function testcase6(catalystApp)
{
	var test = []
	var list;
	let userManagement = catalystApp.userManagement();
	let userPromise = userManagement.getCurrentUser();
	await userPromise.then(currentUser => {
	if(currentUser != 0)
	{
		console.log(" ✅​ Test case 6 : Request send to retrieve the information of the current user and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 6", "Description" : "Request send to retrieve the information of the current user and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	}
	else
	{
		console.log(" ✅​ Test case 6 : Request send to retrieve the information of the current user and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 6", "Description" : "Request send to retrieve the information of the current user and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	}
	}).catch(err =>  {
		console.log(err)
		console.log(" ❗ Failed case 6 : Request send to retrieve the information of the current user and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 6", "Description" : "Request send to retrieve the information of the current user and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})
	return test;
}

async function testcase7to9(catalystApp)
{
	var test = []
	var list;
	let userManagement = catalystApp.userManagement();
	let userPromise1 = userManagement.getUserDetails("16173000000045955");
  	await userPromise1.then(userDetails => {
	if(userDetails.role_details.role_name == "App Administrator")
	{
		console.log("​✅​ Test case 7 : Request send to retrieve the details of App Administrator and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 7", "Description" : "Request send to retrieve the details of App Administrator and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	}
	else 
	{
		console.log("❗ Failed case 7 : Request send to retrieve the details of App Administrator and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 7", "Description" : "Request send to retrieve the details of App Administrator and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	}
   	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 7 : Request send to retrieve the details of App Administrator and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 7", "Description" : "Request send to retrieve the details of App Administrator and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})

	let userPromise2 = userManagement.getUserDetails("16173000000050463");
	await userPromise2.then(userDetails => {
	if(userDetails.role_details.role_name == "App User")
	{
		console.log("​✅​ Test case 8 : Request send to retrieve the details of App User and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 8", "Description" : "Request send to retrieve the details of App User and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	}
	else 
	{
		console.log("❗ Failed case 8 : Request send to retrieve the details of App User and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 8", "Description" : "Request send to retrieve the details of App User and check whether any exception is thrownr", "Result" : "Failed"}
		test.push(list)
	}
	}).catch(err => {
		console.log(err)
		console.log("❗ Failed case 8 : Request send to retrieve the details of App User and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 8", "Description" : "Request send to retrieve the details of App User and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})

	let userPromise3 = userManagement.getUserDetails("16173000000030019");
	await userPromise3.then(userDetails => {
		console.log("❗ Failed case 9 : Request send to retrieve the information of a user using invalid user ID and check whether proper exception is thrown");
		list = {"Test Case No" : "Test case 9", "Description" : "Request send to retrieve the information of a user using invalid user ID and check whether proper exception is thrown", "Result" : "Failed"}
		test.push(list)
	}).catch(err => {
		console.log("​✅​ Test case 9 : Request send to retrieve the information of a user using invalid user ID and check whether proper exception is thrown")
		list = {"Test Case No" : "Test case 9", "Description" : "Request send to retrieve the information of a user using invalid user ID and check whether proper exception is thrown", "Result" : "Passed"}
		test.push(list)
	})
	return test;
}

async function testcase10(catalystApp)
{
	var test = []
	var list;
	let userManagement = catalystApp.userManagement();
	let allUserPromise = userManagement.getAllUsers();
	await allUserPromise.then(allUserDetails => {
       if(allUserDetails != 0)
	   {
			console.log("​✅​ Test case 10 : Request send to retrieve the information of all the users and check whether any exception is thrown")
			list = {"Test Case No" : "Test case 10", "Description" : "Request send to retrieve the information of all the users and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
	   }
	}).catch(err => {
		console.log("❗ Failed case 10 : Request send to retrieve the information of all the users and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 10", "Description" : "Request send to retrieve the information of all the users and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})
	return test;
}

async function testcase11to12(catalystApp)
{
	var test = []
	var list;
	let userManagement = catalystApp.userManagement();
	let zcql = catalystApp.zcql();
	let zcqlPromise = await zcql.executeZCQLQuery("Select UserID from Authentication order by CREATEDTIME");
	const deluser = zcqlPromise[zcqlPromise.length-1].Authentication.UserID;
	let deleteUserPromise1 = userManagement.deleteUser(deluser);
	await deleteUserPromise1.then(deletedUser => {
       if( deletedUser == true)
	   {
		console.log("​✅​ Test case 11 : Request send to delete a user from the organization and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 11", "Description" : "Request send to delete a user from the organization and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	   }
	}).catch(err => {
		console.log("❗ Failed case 11 : Request send to delete a user from the organization and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 11", "Description" : "Request send to delete a user from the organization and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	})

	try
	{
		await userManagement.deleteUser(zcqlPromise[zcqlPromise.length-2].Authentication.UserID).catch(err => { console.log(err)})
	}
	catch(e)
	{
		console.log(e)
	}
	let deleteUserPromise3 = userManagement.deleteUser("13527000000207159");
	await deleteUserPromise3.then(deletedUser => {
       console.log("❗ Failed case 12 : Request send to delete a user from the organization using an invalid user ID and check whether any exception is thrown");
	   list = {"Test Case No" : "Test case 12", "Description" : "Request send to delete a user from the organization using an invalid user ID and check whether any exception is thrown", "Result" : "Failed"}
		test.push(list)
	}).catch(err => {
		console.log("​✅​ Test case 12 : Request send to delete a user from the organization using an invalid user ID and check whether any exception is thrown")
		list = {"Test Case No" : "Test case 12", "Description" : "Request send to delete a user from the organization using an invalid user ID and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	})

	await zcql.executeZCQLQuery("Delete from Authentication")
	return test;
}

app.post("/terminateauth", async(req, res) => {
	process.exit(0)
})

module.exports = app;
