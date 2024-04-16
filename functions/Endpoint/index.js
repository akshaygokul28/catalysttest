"use strict"
const axios = require('axios');
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

app.get("/endpoint", async(req, res) => {

	const catalystApp = catalyst.initialize(req);
	let zcql = catalystApp.zcql();
	await zcql.executeZCQLQuery("Delete from Finalreport")
	await sleep(2)

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/FileStore/filestore')
	.then((response) => {
		console.log(`Status Filestore: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Filestore:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/DataStore/datastore')
	.then((response) => {
		console.log(`Status datastore: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred datastore:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Cache/cache')
	.then((response) => {
		console.log(`Status cache: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred cache:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Circuits/circuits')
	.then((response) => {
		console.log(`Status circuits: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred circuits:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Authentication/authentication')
	.then((response) => {
		console.log(`Status authentication: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred authentication:', error.message);
	});
	
	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Functions/functions')
	.then((response) => {
		console.log(`Status functions: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred functions:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Mail/mail')
	.then((response) => {
		console.log(`Status Mail: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Mail:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Permissions/permissions')
	.then((response) => {
		console.log(`Status Permissions: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Permissions:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/PushNotifications/pushnotifications')
	.then((response) => {
		console.log(`Status Push Notifications: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Notifications:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Search/search')
	.then((response) => {
		console.log(`Status Search: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Search:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/Zia/zia')
	.then((response) => {
		console.log(`Status Zia: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred Zia:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/ZCQL/zcql1')
	.then((response) => {
		console.log(`Status Zcql 1: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred ZCQL 1:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/ZCQL/zcql2')
	.then((response) => {
		console.log(`Status Zcql 2: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred ZCQL 2:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/ZCQL/zcql3')
	.then((response) => {
		console.log(`Status zcql 3: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred ZCQL 3:', error.message);
	});

	axios.post('https://node-sdk-automation-85368650.development.localcatalystserverless.com/server/ZCQL/zcql4')
	.then((response) => {
		console.log(`Status zcql 4: ${response.status}`);
	})
	.catch((error) => {
		console.error('Error occurred ZCQL 4:', error.message);
	});

	

  res.send("Success")

});

async function sleep(seconds) {
	return new Promise((resolve) => {
	  setTimeout(resolve, seconds * 1000);
	});
  }

module.exports = app;
