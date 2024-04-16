"use strict"
const axios = require('axios');
const express = require('express');
const catalyst = require('zcatalyst-sdk-node');

const app = express();
app.use(express.json());

app.get("/smartendpoint", async(req, res) => {


	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello1')
	.then((response) => {
		console.log(`Status 1: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 1:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello2')
	.then((response) => {
		console.log(`Status 2: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 2:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello3')
	.then((response) => {
		console.log(`Status 3: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 3:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello4')
	.then((response) => {
		console.log(`Status 4: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 4:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello5')
	.then((response) => {
		console.log(`Status 5: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 5:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello6')
	.then((response) => {
		console.log(`Status 6: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 6:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello7')
	.then((response) => {
		console.log(`Status 7: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 7:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello8')
	.then((response) => {
		console.log(`Status 8: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 8:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello9')
	.then((response) => {
		console.log(`Status 9: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 9:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello10')
	.then((response) => {
		console.log(`Status 10: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 10:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello11')
	.then((response) => {
		console.log(`Status 11: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 11:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello12')
	.then((response) => {
		console.log(`Status 12: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 12:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello13')
	.then((response) => {
		console.log(`Status 13: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 13:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello14')
	.then((response) => {
		console.log(`Status 14: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 14:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello15')
	.then((response) => {
		console.log(`Status 15: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 15:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello16')
	.then((response) => {
		console.log(`Status 16: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 16:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello17')
	.then((response) => {
		console.log(`Status 17: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 17:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello18')
	.then((response) => {
		console.log(`Status 18: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 18:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello19')
	.then((response) => {
		console.log(`Status 19: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 19:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello20')
	.then((response) => {
		console.log(`Status 20: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 20:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello21')
	.then((response) => {
		console.log(`Status 21: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 21:', error.message);
	});

	axios.get('https://sdk-application-798618741.development.catalystserverless.com/server/sdk_application_function/execute/hello22')
	.then((response) => {
		console.log(`Status 22: ${response.status}`);
	}).catch((error) => {
		console.error('Error occurred 22:', error.message);
	});
	res.send("Successs")
})
module.exports=app;