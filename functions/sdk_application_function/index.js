const express = require('express')
const app = express()
const catalyst = require('zcatalyst-sdk-node');

app.get("/execute/hello1", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();

	var test = [];
	var list;
	var tc = 0;
	var devices = [
		"Blackberry PlayBook",
		"Blackberry PlayBook landscape",
        "BlackBerry Z30",
        "BlackBerry Z30 landscape",
        "Galaxy Note 3",
        "Galaxy Note 3 landscape",
        "Galaxy Note II",
        "Galaxy Note II landscape",
        "Galaxy S III",
        "Galaxy S III landscape"
	];
	
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
			console.log("✅​ Test case "+tc+" : Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}).catch((err)=>{
		  console.log(err)
		})
	}
    res.status(200);
    res.send(test);

})

app.get("/execute/hello2", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();

	var test = [];
	var list;
	var tc = 0;
	var devices = [
		"Galaxy S5",
		"Galaxy S5 landscape",
		"Galaxy S8",
		"Galaxy S8 landscape",
		"Galaxy S9+",
		"Galaxy S9+ landscape",
		"Galaxy Tab S4",
		"Galaxy Tab S4 landscape",
		"iPad",
		"iPad landscape"
	];
	
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
			console.log("✅​ Test case "+tc+" : Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}).catch((err)=>{
		  console.log(err)
		})
	}
    res.status(200);
    res.send(test);

})




app.get("/execute/hello3", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 20
	var devices = [
		"iPad (gen 6)",
		"iPad (gen 6) landscape",
		"iPad (gen 7)",
		"iPad (gen 7) landscape",
		"iPad Mini",
		"iPad Mini landscape",
		"iPad Pro",
		"iPad Pro landscape",
		"iPad Pro 11",
		"iPad Pro 11 landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}
	res.status(200);
    res.send(test);

})

app.get("/execute/hello4", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();

	var test = [];
	var list;
	var tc = 0;
	var devices = [
		"iPhone 4",
		"iPhone 4 landscape",
		"iPhone 5",
		"iPhone 5 landscape",
		"iPhone 6",
		"iPhone 6 landscape",
		"iPhone 6 Plus",
		"iPhone 6 Plus landscape",
		"iPhone 7",
		"iPhone 7 landscape"
	];
	
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
			console.log("✅​ Test case "+tc+" : Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}).catch((err)=>{
		  console.log(err)
		})
	}
    res.status(200);
    res.send(test);

})

app.get("/execute/hello5", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 40
	var devices = [
		"iPhone 7 Plus",
		"iPhone 7 Plus landscape",
		"iPhone 8",
		"iPhone 8 landscape",
		"iPhone 8 Plus",
		"iPhone 8 Plus landscape",
		"iPhone SE",
		"iPhone SE landscape",
		"iPhone X",
		"iPhone X landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello6", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();

	var test = [];
	var list;
	var tc = 0;
	var devices = [
		"iPhone XR",
		"iPhone XR landscape",
		"iPhone 11",
		"iPhone 11 landscape",
		"iPhone 11 Pro",
		"iPhone 11 Pro landscape",
		"iPhone 11 Pro Max",
		"iPhone 11 Pro Max landscape",
		"iPhone 12",
		"iPhone 12 landscape"
	];
	
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
			console.log("✅​ Test case "+tc+" : Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}).catch((err)=>{
		  console.log(err)
		})
	}
    res.status(200);
    res.send(test);

})


app.get("/execute/hello7", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 60
	var devices = [
		"iPhone 7 Plus",
		"iPhone 7 Plus landscape",
		"iPhone 8",
		"iPhone 8 landscape",
		"iPhone 8 Plus",
		"iPhone 8 Plus landscape",
		"iPhone SE",
		"iPhone SE landscape",
		"iPhone X",
		"iPhone X landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello8", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();

	var test = [];
	var list;
	var tc = 0;
	var devices = [
		"iPhone XR",
		"iPhone XR landscape",
		"iPhone 11",
		"iPhone 11 landscape",
		"iPhone 11 Pro",
		"iPhone 11 Pro landscape",
		"iPhone 11 Pro Max",
		"iPhone 11 Pro Max landscape",
		"iPhone 12",
		"iPhone 12 landscape"
	];
	
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
			console.log("✅​ Test case "+tc+" : Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}).catch((err)=>{
		  console.log(err)
		})
	}
    res.status(200);
    res.send(test);

})


app.get("/execute/hello9", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 80
	var devices = [
		"iPhone 12 Pro",
		"iPhone 12 Pro landscape",
		"iPhone 12 Pro Max",
		"iPhone 12 Pro Max landscape",
		"iPhone 12 Mini",
		"iPhone 12 Mini landscape",
		"iPhone 13",
		"iPhone 13 landscape",
		"iPhone 13 Pro",
		"iPhone 13 Pro landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello10", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();

	var test = [];
	var list;
	var tc = 0;
	var devices = [
		"iPhone 13 Pro Max",
		"iPhone 13 Pro Max landscape",
		"iPhone 13 Mini",
		"iPhone 13 Mini landscape",
		"JioPhone 2",
		"JioPhone 2 landscape",
		"Kindle Fire HDX",
		"Kindle Fire HDX landscape",
		"LG Optimus L70",
		"LG Optimus L70 landscape"
	];
	
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
			console.log("✅​ Test case "+tc+" : Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}).catch((err)=>{
		  console.log(err)
		})
	}
    res.status(200);
    res.send(test);

})


app.get("/execute/hello11", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 100
	var devices = [
		"Microsoft Lumia 550",
		"Microsoft Lumia 950",
		"Microsoft Lumia 950 landscape",
		"Nexus 10",
		"Nexus 10 landscape",
		"Nexus 4",
		"Nexus 4 landscape",
		"Nexus 5",
		"Nexus 5 landscape",
		"Nexus 5X"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello12", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 120
	var devices = [
		"Nexus 6",
		"Nexus 6 landscape",
		"Nexus 6P",
		"Nexus 6P landscape",
		"Nexus 7",
		"Nexus 7 landscape",
		"Nokia Lumia 520",
		"Nokia Lumia 520 landscape",
		"Nokia N9"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello13", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 120
	var devices = [
		"Nokia N9 landscape",
		"Pixel 2",
		"Pixel 2 landscape",
		"Pixel 2 XL",
		"Pixel 2 XL landscape",
		"Pixel 3",
		"Pixel 3 landscape",
		"Pixel 4",
		"Pixel 4 landscape",
		"Pixel 4a (5G)",
		"Pixel 4a (5G) landscape",
		"Pixel 5",
		"Pixel 5 landscape",
		"Moto G4",
		"Moto G4 landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.generateFromTemplate("376000000002071",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}",
		"page_options": {"device": devices[i]}
		})
		.then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello8", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();

	var test = [];
	var list;
	var tc = 135
	var devices = [
		"Blackberry PlayBook",
		"Blackberry PlayBook landscape",
        "BlackBerry Z30",
        "BlackBerry Z30 landscape",
        "Galaxy Note 3",
        "Galaxy Note 3 landscape",
        "Galaxy Note II",
        "Galaxy Note II landscape",
        "Galaxy S III",
        "Galaxy S III landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.convertToPdf(
			"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <title>Certificate</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n        <link rel=\"stylesheet\" href=\"styles.css\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Parisienne&display=swap\" rel=\"stylesheet\"/>\n        <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap\" rel=\"stylesheet\">\n        <title>Certificate</title>\n      </head>\n    \n      <body>\n        <div class=\"container\">\n          <header>\n            <img\n              src=\"http://www.zylker.com/zf-logo-mark%20copy.png\"\n              alt=\"brand logo\"\n            />\n            <h1>Zylker</h1>\n          </header>\n    \n          <br />\n    \n          <h2>Certificate</h2>\n    \n          <div class=\"participation\">\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line2.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n            <p>OF PARTICIPATION</p>\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line1.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n          </div>\n    \n          <div class=\"cert-name\">\n            <p>PROUDLY PRESENTED TO</p>\n            <br />\n            <h2>Amelia Burrows</h2>\n          </div>\n    \n          <div class=\"cert-desc\">\n            <p>\n              has successfully attended and participated in\n              <b>\"Peak Level Serverless Computing\"</b> a one day workshop on building cutting-edge cloud applications held by <b>Zylker Technologies</b> at\n              <b>Zylker Technologies Pvt. Ltd.,</b>,\n              <b>Manhattan, NewYork </b> on\n              <b>20th February 2021</b>.\n            </p>\n          </div>\n    \n          <footer>\n            <div>\n    \n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Product Manager</p>\n            </div>\n            <div>\n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Manager - HR & Global Operations</p>\n            </div>\n          </footer>\n        </div>\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border1.png\"\n          alt=\"\"\n          class=\"bg-left\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border3.png\"\n          alt=\"\"\n          class=\"bg-right\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border2.png\"\n          alt=\"\"\n          class=\"bg-down\"\n        />\n      </body>\n    </html>",
			{
			"page_options": {
				"css": {
				"content": "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Poppins', sans-serif;\n    }\n    \n    p{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n    }\n    \n    h2 {\n      font-family: \"Parisienne\", cursive;\n      font-size: 60px;\n      font-weight: normal;\n    }\n    \n    header > img {\n      height: 38px;\n      object-fit: contain;\n    }\n    \n    header{\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    body {\n      position: relative;\n      background-color: #f0f0f2;\n    }\n    \n    .bg-right {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n    \n    .bg-down {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: 300px;\n      width: auto;\n    }\n    \n    .bg-left {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      height: 400px;\n      width: auto;\n    }\n    \n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n    }\n    \n    .participation {\n      display: flex;\n      gap: 4px;\n      align-items: center;\n    }\n    \n    .participation > img {\n      height: 12px;\n      object-fit: contain;\n    }\n    \n    .cert-name {\n      margin-top: 40px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .cert-desc {\n      margin-top: 20px;\n      width: 70%;\n      font-size: 16px;\n      line-height: 32px;\n      text-align: center;\n    }\n    \n    .cert-desc > span {\n      font-weight: bold;\n    }\n    \n    footer {\n      margin-top: 120px;\n      display: flex;\n      gap: 200px;\n      position: relative;\n    }\n    \n    footer > div {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n      flex-direction: column;\n    }\n    \n    footer img {\n      width: 160px;\n    }"
				},
				"device": devices[i]
			},
			"output_options": {
				"output_type": "pdf"
			},
			"pdf_options": {
				"landscape": false
			},
			}).then((data)=>{
				tc++
			console.log("✅​ Test case "+tc+" : Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}).catch((err)=>{
		  console.log(err)
		})
	}

    res.status(200);
    res.send(test);

})


app.get("/execute/hello9", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 155
	var devices = [
		"iPad (gen 6)",
		"iPad (gen 6) landscape",
		"iPad (gen 7)",
		"iPad (gen 7) landscape",
		"iPad Mini",
		"iPad Mini landscape",
		"iPad Pro",
		"iPad Pro landscape",
		"iPad Pro 11",
		"iPad Pro 11 landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
	await smartbrowz.convertToPdf(
		"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <title>Certificate</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n        <link rel=\"stylesheet\" href=\"styles.css\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Parisienne&display=swap\" rel=\"stylesheet\"/>\n        <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap\" rel=\"stylesheet\">\n        <title>Certificate</title>\n      </head>\n    \n      <body>\n        <div class=\"container\">\n          <header>\n            <img\n              src=\"http://www.zylker.com/zf-logo-mark%20copy.png\"\n              alt=\"brand logo\"\n            />\n            <h1>Zylker</h1>\n          </header>\n    \n          <br />\n    \n          <h2>Certificate</h2>\n    \n          <div class=\"participation\">\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line2.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n            <p>OF PARTICIPATION</p>\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line1.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n          </div>\n    \n          <div class=\"cert-name\">\n            <p>PROUDLY PRESENTED TO</p>\n            <br />\n            <h2>Amelia Burrows</h2>\n          </div>\n    \n          <div class=\"cert-desc\">\n            <p>\n              has successfully attended and participated in\n              <b>\"Peak Level Serverless Computing\"</b> a one day workshop on building cutting-edge cloud applications held by <b>Zylker Technologies</b> at\n              <b>Zylker Technologies Pvt. Ltd.,</b>,\n              <b>Manhattan, NewYork </b> on\n              <b>20th February 2021</b>.\n            </p>\n          </div>\n    \n          <footer>\n            <div>\n    \n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Product Manager</p>\n            </div>\n            <div>\n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Manager - HR & Global Operations</p>\n            </div>\n          </footer>\n        </div>\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border1.png\"\n          alt=\"\"\n          class=\"bg-left\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border3.png\"\n          alt=\"\"\n          class=\"bg-right\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border2.png\"\n          alt=\"\"\n          class=\"bg-down\"\n        />\n      </body>\n    </html>",
		{
		"page_options": {
			"css": {
			"content": "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Poppins', sans-serif;\n    }\n    \n    p{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n    }\n    \n    h2 {\n      font-family: \"Parisienne\", cursive;\n      font-size: 60px;\n      font-weight: normal;\n    }\n    \n    header > img {\n      height: 38px;\n      object-fit: contain;\n    }\n    \n    header{\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    body {\n      position: relative;\n      background-color: #f0f0f2;\n    }\n    \n    .bg-right {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n    \n    .bg-down {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: 300px;\n      width: auto;\n    }\n    \n    .bg-left {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      height: 400px;\n      width: auto;\n    }\n    \n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n    }\n    \n    .participation {\n      display: flex;\n      gap: 4px;\n      align-items: center;\n    }\n    \n    .participation > img {\n      height: 12px;\n      object-fit: contain;\n    }\n    \n    .cert-name {\n      margin-top: 40px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .cert-desc {\n      margin-top: 20px;\n      width: 70%;\n      font-size: 16px;\n      line-height: 32px;\n      text-align: center;\n    }\n    \n    .cert-desc > span {\n      font-weight: bold;\n    }\n    \n    footer {\n      margin-top: 120px;\n      display: flex;\n      gap: 200px;\n      position: relative;\n    }\n    \n    footer > div {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n      flex-direction: column;\n    }\n    \n    footer img {\n      width: 160px;\n    }"
			},
			"device": devices[i]
		},
		"output_options": {
			"output_type": "pdf"
		},
		"pdf_options": {
			"landscape": false
		},
		}).then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}
	res.status(200);
    res.send(test);

})

app.get("/execute/hello10", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 175
	var devices = [
		"iPhone 7 Plus",
		"iPhone 7 Plus landscape",
		"iPhone 8",
		"iPhone 8 landscape",
		"iPhone 8 Plus",
		"iPhone 8 Plus landscape",
		"iPhone SE",
		"iPhone SE landscape",
		"iPhone X",
		"iPhone X landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
	await smartbrowz.convertToPdf(
		"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <title>Certificate</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n        <link rel=\"stylesheet\" href=\"styles.css\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Parisienne&display=swap\" rel=\"stylesheet\"/>\n        <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap\" rel=\"stylesheet\">\n        <title>Certificate</title>\n      </head>\n    \n      <body>\n        <div class=\"container\">\n          <header>\n            <img\n              src=\"http://www.zylker.com/zf-logo-mark%20copy.png\"\n              alt=\"brand logo\"\n            />\n            <h1>Zylker</h1>\n          </header>\n    \n          <br />\n    \n          <h2>Certificate</h2>\n    \n          <div class=\"participation\">\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line2.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n            <p>OF PARTICIPATION</p>\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line1.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n          </div>\n    \n          <div class=\"cert-name\">\n            <p>PROUDLY PRESENTED TO</p>\n            <br />\n            <h2>Amelia Burrows</h2>\n          </div>\n    \n          <div class=\"cert-desc\">\n            <p>\n              has successfully attended and participated in\n              <b>\"Peak Level Serverless Computing\"</b> a one day workshop on building cutting-edge cloud applications held by <b>Zylker Technologies</b> at\n              <b>Zylker Technologies Pvt. Ltd.,</b>,\n              <b>Manhattan, NewYork </b> on\n              <b>20th February 2021</b>.\n            </p>\n          </div>\n    \n          <footer>\n            <div>\n    \n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Product Manager</p>\n            </div>\n            <div>\n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Manager - HR & Global Operations</p>\n            </div>\n          </footer>\n        </div>\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border1.png\"\n          alt=\"\"\n          class=\"bg-left\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border3.png\"\n          alt=\"\"\n          class=\"bg-right\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border2.png\"\n          alt=\"\"\n          class=\"bg-down\"\n        />\n      </body>\n    </html>",
		{
		"page_options": {
			"css": {
			"content": "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Poppins', sans-serif;\n    }\n    \n    p{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n    }\n    \n    h2 {\n      font-family: \"Parisienne\", cursive;\n      font-size: 60px;\n      font-weight: normal;\n    }\n    \n    header > img {\n      height: 38px;\n      object-fit: contain;\n    }\n    \n    header{\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    body {\n      position: relative;\n      background-color: #f0f0f2;\n    }\n    \n    .bg-right {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n    \n    .bg-down {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: 300px;\n      width: auto;\n    }\n    \n    .bg-left {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      height: 400px;\n      width: auto;\n    }\n    \n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n    }\n    \n    .participation {\n      display: flex;\n      gap: 4px;\n      align-items: center;\n    }\n    \n    .participation > img {\n      height: 12px;\n      object-fit: contain;\n    }\n    \n    .cert-name {\n      margin-top: 40px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .cert-desc {\n      margin-top: 20px;\n      width: 70%;\n      font-size: 16px;\n      line-height: 32px;\n      text-align: center;\n    }\n    \n    .cert-desc > span {\n      font-weight: bold;\n    }\n    \n    footer {\n      margin-top: 120px;\n      display: flex;\n      gap: 200px;\n      position: relative;\n    }\n    \n    footer > div {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n      flex-direction: column;\n    }\n    \n    footer img {\n      width: 160px;\n    }"
			},
			"device": devices[i]
		},
		"output_options": {
			"output_type": "pdf"
		},
		"pdf_options": {
			"landscape": false
		},
		}).then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})


app.get("/execute/hello11", async (req, res) => {
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 195
	var devices = [
		"iPhone 7 Plus",
		"iPhone 7 Plus landscape",
		"iPhone 8",
		"iPhone 8 landscape",
		"iPhone 8 Plus",
		"iPhone 8 Plus landscape",
		"iPhone SE",
		"iPhone SE landscape",
		"iPhone X",
		"iPhone X landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
	await smartbrowz.convertToPdf(
		"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <title>Certificate</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n        <link rel=\"stylesheet\" href=\"styles.css\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Parisienne&display=swap\" rel=\"stylesheet\"/>\n        <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap\" rel=\"stylesheet\">\n        <title>Certificate</title>\n      </head>\n    \n      <body>\n        <div class=\"container\">\n          <header>\n            <img\n              src=\"http://www.zylker.com/zf-logo-mark%20copy.png\"\n              alt=\"brand logo\"\n            />\n            <h1>Zylker</h1>\n          </header>\n    \n          <br />\n    \n          <h2>Certificate</h2>\n    \n          <div class=\"participation\">\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line2.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n            <p>OF PARTICIPATION</p>\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line1.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n          </div>\n    \n          <div class=\"cert-name\">\n            <p>PROUDLY PRESENTED TO</p>\n            <br />\n            <h2>Amelia Burrows</h2>\n          </div>\n    \n          <div class=\"cert-desc\">\n            <p>\n              has successfully attended and participated in\n              <b>\"Peak Level Serverless Computing\"</b> a one day workshop on building cutting-edge cloud applications held by <b>Zylker Technologies</b> at\n              <b>Zylker Technologies Pvt. Ltd.,</b>,\n              <b>Manhattan, NewYork </b> on\n              <b>20th February 2021</b>.\n            </p>\n          </div>\n    \n          <footer>\n            <div>\n    \n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Product Manager</p>\n            </div>\n            <div>\n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Manager - HR & Global Operations</p>\n            </div>\n          </footer>\n        </div>\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border1.png\"\n          alt=\"\"\n          class=\"bg-left\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border3.png\"\n          alt=\"\"\n          class=\"bg-right\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border2.png\"\n          alt=\"\"\n          class=\"bg-down\"\n        />\n      </body>\n    </html>",
		{
		"page_options": {
			"css": {
			"content": "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Poppins', sans-serif;\n    }\n    \n    p{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n    }\n    \n    h2 {\n      font-family: \"Parisienne\", cursive;\n      font-size: 60px;\n      font-weight: normal;\n    }\n    \n    header > img {\n      height: 38px;\n      object-fit: contain;\n    }\n    \n    header{\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    body {\n      position: relative;\n      background-color: #f0f0f2;\n    }\n    \n    .bg-right {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n    \n    .bg-down {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: 300px;\n      width: auto;\n    }\n    \n    .bg-left {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      height: 400px;\n      width: auto;\n    }\n    \n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n    }\n    \n    .participation {\n      display: flex;\n      gap: 4px;\n      align-items: center;\n    }\n    \n    .participation > img {\n      height: 12px;\n      object-fit: contain;\n    }\n    \n    .cert-name {\n      margin-top: 40px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .cert-desc {\n      margin-top: 20px;\n      width: 70%;\n      font-size: 16px;\n      line-height: 32px;\n      text-align: center;\n    }\n    \n    .cert-desc > span {\n      font-weight: bold;\n    }\n    \n    footer {\n      margin-top: 120px;\n      display: flex;\n      gap: 200px;\n      position: relative;\n    }\n    \n    footer > div {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n      flex-direction: column;\n    }\n    \n    footer img {\n      width: 160px;\n    }"
			},
			"device": devices[i]
		},
		"output_options": {
			"output_type": "pdf"
		},
		"pdf_options": {
			"landscape": false
		},
		}).then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})


app.get("/execute/hello12", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 215
	var devices = [
		"iPhone 12 Pro",
		"iPhone 12 Pro landscape",
		"iPhone 12 Pro Max",
		"iPhone 12 Pro Max landscape",
		"iPhone 12 Mini",
		"iPhone 12 Mini landscape",
		"iPhone 13",
		"iPhone 13 landscape",
		"iPhone 13 Pro",
		"iPhone 13 Pro landscape",
		"iPhone 13 Pro Max"
	];
	for(let i = 0; i < devices.length; i++)
	{
	await smartbrowz.convertToPdf(
		"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <title>Certificate</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n        <link rel=\"stylesheet\" href=\"styles.css\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Parisienne&display=swap\" rel=\"stylesheet\"/>\n        <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap\" rel=\"stylesheet\">\n        <title>Certificate</title>\n      </head>\n    \n      <body>\n        <div class=\"container\">\n          <header>\n            <img\n              src=\"http://www.zylker.com/zf-logo-mark%20copy.png\"\n              alt=\"brand logo\"\n            />\n            <h1>Zylker</h1>\n          </header>\n    \n          <br />\n    \n          <h2>Certificate</h2>\n    \n          <div class=\"participation\">\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line2.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n            <p>OF PARTICIPATION</p>\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line1.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n          </div>\n    \n          <div class=\"cert-name\">\n            <p>PROUDLY PRESENTED TO</p>\n            <br />\n            <h2>Amelia Burrows</h2>\n          </div>\n    \n          <div class=\"cert-desc\">\n            <p>\n              has successfully attended and participated in\n              <b>\"Peak Level Serverless Computing\"</b> a one day workshop on building cutting-edge cloud applications held by <b>Zylker Technologies</b> at\n              <b>Zylker Technologies Pvt. Ltd.,</b>,\n              <b>Manhattan, NewYork </b> on\n              <b>20th February 2021</b>.\n            </p>\n          </div>\n    \n          <footer>\n            <div>\n    \n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Product Manager</p>\n            </div>\n            <div>\n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Manager - HR & Global Operations</p>\n            </div>\n          </footer>\n        </div>\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border1.png\"\n          alt=\"\"\n          class=\"bg-left\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border3.png\"\n          alt=\"\"\n          class=\"bg-right\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border2.png\"\n          alt=\"\"\n          class=\"bg-down\"\n        />\n      </body>\n    </html>",
		{
		"page_options": {
			"css": {
			"content": "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Poppins', sans-serif;\n    }\n    \n    p{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n    }\n    \n    h2 {\n      font-family: \"Parisienne\", cursive;\n      font-size: 60px;\n      font-weight: normal;\n    }\n    \n    header > img {\n      height: 38px;\n      object-fit: contain;\n    }\n    \n    header{\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    body {\n      position: relative;\n      background-color: #f0f0f2;\n    }\n    \n    .bg-right {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n    \n    .bg-down {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: 300px;\n      width: auto;\n    }\n    \n    .bg-left {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      height: 400px;\n      width: auto;\n    }\n    \n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n    }\n    \n    .participation {\n      display: flex;\n      gap: 4px;\n      align-items: center;\n    }\n    \n    .participation > img {\n      height: 12px;\n      object-fit: contain;\n    }\n    \n    .cert-name {\n      margin-top: 40px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .cert-desc {\n      margin-top: 20px;\n      width: 70%;\n      font-size: 16px;\n      line-height: 32px;\n      text-align: center;\n    }\n    \n    .cert-desc > span {\n      font-weight: bold;\n    }\n    \n    footer {\n      margin-top: 120px;\n      display: flex;\n      gap: 200px;\n      position: relative;\n    }\n    \n    footer > div {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n      flex-direction: column;\n    }\n    \n    footer img {\n      width: 160px;\n    }"
			},
			"device": devices[i]
		},
		"output_options": {
			"output_type": "pdf"
		},
		"pdf_options": {
			"landscape": false
		},
		}).then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})


app.get("/execute/hello13", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 235
	var devices = [
		"Microsoft Lumia 550",
		"Microsoft Lumia 950",
		"Microsoft Lumia 950 landscape",
		"Nexus 10",
		"Nexus 10 landscape",
		"Nexus 4",
		"Nexus 4 landscape",
		"Nexus 5",
		"Nexus 5 landscape",
		"Nexus 5X",
		"Nexus 5X landscape",
		"Nexus 6"
	];
	for(let i = 0; i < devices.length; i++)
	{
	await smartbrowz.convertToPdf(
		"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <title>Certificate</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n        <link rel=\"stylesheet\" href=\"styles.css\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Parisienne&display=swap\" rel=\"stylesheet\"/>\n        <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap\" rel=\"stylesheet\">\n        <title>Certificate</title>\n      </head>\n    \n      <body>\n        <div class=\"container\">\n          <header>\n            <img\n              src=\"http://www.zylker.com/zf-logo-mark%20copy.png\"\n              alt=\"brand logo\"\n            />\n            <h1>Zylker</h1>\n          </header>\n    \n          <br />\n    \n          <h2>Certificate</h2>\n    \n          <div class=\"participation\">\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line2.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n            <p>OF PARTICIPATION</p>\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line1.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n          </div>\n    \n          <div class=\"cert-name\">\n            <p>PROUDLY PRESENTED TO</p>\n            <br />\n            <h2>Amelia Burrows</h2>\n          </div>\n    \n          <div class=\"cert-desc\">\n            <p>\n              has successfully attended and participated in\n              <b>\"Peak Level Serverless Computing\"</b> a one day workshop on building cutting-edge cloud applications held by <b>Zylker Technologies</b> at\n              <b>Zylker Technologies Pvt. Ltd.,</b>,\n              <b>Manhattan, NewYork </b> on\n              <b>20th February 2021</b>.\n            </p>\n          </div>\n    \n          <footer>\n            <div>\n    \n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Product Manager</p>\n            </div>\n            <div>\n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Manager - HR & Global Operations</p>\n            </div>\n          </footer>\n        </div>\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border1.png\"\n          alt=\"\"\n          class=\"bg-left\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border3.png\"\n          alt=\"\"\n          class=\"bg-right\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border2.png\"\n          alt=\"\"\n          class=\"bg-down\"\n        />\n      </body>\n    </html>",
		{
		"page_options": {
			"css": {
			"content": "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Poppins', sans-serif;\n    }\n    \n    p{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n    }\n    \n    h2 {\n      font-family: \"Parisienne\", cursive;\n      font-size: 60px;\n      font-weight: normal;\n    }\n    \n    header > img {\n      height: 38px;\n      object-fit: contain;\n    }\n    \n    header{\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    body {\n      position: relative;\n      background-color: #f0f0f2;\n    }\n    \n    .bg-right {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n    \n    .bg-down {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: 300px;\n      width: auto;\n    }\n    \n    .bg-left {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      height: 400px;\n      width: auto;\n    }\n    \n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n    }\n    \n    .participation {\n      display: flex;\n      gap: 4px;\n      align-items: center;\n    }\n    \n    .participation > img {\n      height: 12px;\n      object-fit: contain;\n    }\n    \n    .cert-name {\n      margin-top: 40px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .cert-desc {\n      margin-top: 20px;\n      width: 70%;\n      font-size: 16px;\n      line-height: 32px;\n      text-align: center;\n    }\n    \n    .cert-desc > span {\n      font-weight: bold;\n    }\n    \n    footer {\n      margin-top: 120px;\n      display: flex;\n      gap: 200px;\n      position: relative;\n    }\n    \n    footer > div {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n      flex-direction: column;\n    }\n    \n    footer img {\n      width: 160px;\n    }"
			},
			"device": devices[i]
		},
		"output_options": {
			"output_type": "pdf"
		},
		"pdf_options": {
			"landscape": false
		},
		}).then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello14", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 255
	var devices = [
		"Nokia N9 landscape",
			"Pixel 2",
			"Pixel 2 landscape",
			"Pixel 2 XL",
			"Pixel 2 XL landscape",
			"Pixel 3",
			"Pixel 3 landscape",
			"Pixel 4",
			"Pixel 4 landscape",
			"Pixel 4a (5G)"
	];
	for(let i = 0; i < devices.length; i++)
	{
	await smartbrowz.convertToPdf(
		"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <title>Certificate</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n        <link rel=\"stylesheet\" href=\"styles.css\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Parisienne&display=swap\" rel=\"stylesheet\"/>\n        <link href=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap\" rel=\"stylesheet\">\n        <title>Certificate</title>\n      </head>\n    \n      <body>\n        <div class=\"container\">\n          <header>\n            <img\n              src=\"http://www.zylker.com/zf-logo-mark%20copy.png\"\n              alt=\"brand logo\"\n            />\n            <h1>Zylker</h1>\n          </header>\n    \n          <br />\n    \n          <h2>Certificate</h2>\n    \n          <div class=\"participation\">\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line2.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n            <p>OF PARTICIPATION</p>\n            <img\n              src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line1.png\"\n              alt=\"\"\n              class=\"line\"\n            />\n          </div>\n    \n          <div class=\"cert-name\">\n            <p>PROUDLY PRESENTED TO</p>\n            <br />\n            <h2>Amelia Burrows</h2>\n          </div>\n    \n          <div class=\"cert-desc\">\n            <p>\n              has successfully attended and participated in\n              <b>\"Peak Level Serverless Computing\"</b> a one day workshop on building cutting-edge cloud applications held by <b>Zylker Technologies</b> at\n              <b>Zylker Technologies Pvt. Ltd.,</b>,\n              <b>Manhattan, NewYork </b> on\n              <b>20th February 2021</b>.\n            </p>\n          </div>\n    \n          <footer>\n            <div>\n    \n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Product Manager</p>\n            </div>\n            <div>\n              <img\n                src=\"https://www.zoho.com/sites/default/files/catalyst/examples/line3.png\"\n                alt=\"\"\n              />\n              <p>Manager - HR & Global Operations</p>\n            </div>\n          </footer>\n        </div>\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border1.png\"\n          alt=\"\"\n          class=\"bg-left\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border3.png\"\n          alt=\"\"\n          class=\"bg-right\"\n        />\n        <img\n          src=\"https://www.zoho.com/sites/default/files/catalyst/examples/border2.png\"\n          alt=\"\"\n          class=\"bg-down\"\n        />\n      </body>\n    </html>",
		{
		"page_options": {
			"css": {
			"content": "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Poppins', sans-serif;\n    }\n    \n    p{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n    }\n    \n    h2 {\n      font-family: \"Parisienne\", cursive;\n      font-size: 60px;\n      font-weight: normal;\n    }\n    \n    header > img {\n      height: 38px;\n      object-fit: contain;\n    }\n    \n    header{\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    body {\n      position: relative;\n      background-color: #f0f0f2;\n    }\n    \n    .bg-right {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n    \n    .bg-down {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: 300px;\n      width: auto;\n    }\n    \n    .bg-left {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      height: 400px;\n      width: auto;\n    }\n    \n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n    }\n    \n    .participation {\n      display: flex;\n      gap: 4px;\n      align-items: center;\n    }\n    \n    .participation > img {\n      height: 12px;\n      object-fit: contain;\n    }\n    \n    .cert-name {\n      margin-top: 40px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .cert-desc {\n      margin-top: 20px;\n      width: 70%;\n      font-size: 16px;\n      line-height: 32px;\n      text-align: center;\n    }\n    \n    .cert-desc > span {\n      font-weight: bold;\n    }\n    \n    footer {\n      margin-top: 120px;\n      display: flex;\n      gap: 200px;\n      position: relative;\n    }\n    \n    footer > div {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n      flex-direction: column;\n    }\n    \n    footer img {\n      width: 160px;\n    }"
			},
			"device": devices[i]
		},
		"output_options": {
			"output_type": "pdf"
		},
		"pdf_options": {
			"landscape": false
		},
		}).then((data)=>{
			tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})






app.get("/execute/hello15", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();

	var test = [];
	var list;
	var tc = 270
	var devices = [
		"Blackberry PlayBook",
		"Blackberry PlayBook landscape",
        "BlackBerry Z30",
        "BlackBerry Z30 landscape",
        "Galaxy Note 3",
        "Galaxy Note 3 landscape",
        "Galaxy Note II",
        "Galaxy Note II landscape",
        "Galaxy S III",
        "Galaxy S III landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.takeScreenshot("https://example.com", {
			"screenshot_options": {
				"type": "jpeg"
			},
			"page_options": {
				"device": devices[i]
				}
			}).then((data)=>{
				tc++
			console.log("✅​ Test case "+tc+" : Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to generate template using template id for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		}).catch((err)=>{
		  console.log(err)
		})
	}

    res.status(200);
    res.send(test);

})


app.get("/execute/hello16", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 290;
	var devices = [
		"iPad (gen 6)",
		"iPad (gen 6) landscape",
		"iPad (gen 7)",
		"iPad (gen 7) landscape",
		"iPad Mini",
		"iPad Mini landscape",
		"iPad Pro",
		"iPad Pro landscape",
		"iPad Pro 11",
		"iPad Pro 11 landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.takeScreenshot("https://example.com", {
			"screenshot_options": {
				"type": "jpeg"
			},
			"page_options": {
				"device": devices[i]
				}
			}).then((data)=>{
				tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}
	res.status(200);
    res.send(test);

})

app.get("/execute/hello17", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 310
	var devices = [
		"iPhone 7 Plus",
		"iPhone 7 Plus landscape",
		"iPhone 8",
		"iPhone 8 landscape",
		"iPhone 8 Plus",
		"iPhone 8 Plus landscape",
		"iPhone SE",
		"iPhone SE landscape",
		"iPhone X",
		"iPhone X landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.takeScreenshot("https://example.com", {
			"screenshot_options": {
				"type": "jpeg"
			},
			"page_options": {
				"device": devices[i]
				}
			}).then((data)=>{
				tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})


app.get("/execute/hello18", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 330;
	var devices = [
		"iPhone 7 Plus",
		"iPhone 7 Plus landscape",
		"iPhone 8",
		"iPhone 8 landscape",
		"iPhone 8 Plus",
		"iPhone 8 Plus landscape",
		"iPhone SE",
		"iPhone SE landscape",
		"iPhone X",
		"iPhone X landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.takeScreenshot("https://example.com", {
			"screenshot_options": {
				"type": "jpeg"
			},
			"page_options": {
				"device": devices[i]
				}
			}).then((data)=>{
				tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})


app.get("/execute/hello19", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 350
	var devices = [
		"iPhone 12 Pro",
		"iPhone 12 Pro landscape",
		"iPhone 12 Pro Max",
		"iPhone 12 Pro Max landscape",
		"iPhone 12 Mini",
		"iPhone 12 Mini landscape",
		"iPhone 13",
		"iPhone 13 landscape",
		"iPhone 13 Pro",
		"iPhone 13 Pro landscape"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.takeScreenshot("https://example.com", {
			"screenshot_options": {
				"type": "jpeg"
			},
			"page_options": {
				"device": devices[i]
				}
			}).then((data)=>{
				tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})


app.get("/execute/hello20", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 370
	var devices = [
		"Microsoft Lumia 550",
		"Microsoft Lumia 950",
		"Microsoft Lumia 950 landscape",
		"Nexus 10",
		"Nexus 10 landscape",
		"Nexus 4",
		"Nexus 4 landscape",
		"Nexus 5",
		"Nexus 5 landscape",
		"Nexus 5X"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.takeScreenshot("https://example.com", {
			"screenshot_options": {
				"type": "jpeg"
			},
			"page_options": {
				"device": devices[i]
				}
			}).then((data)=>{
				tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello21", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	var tc = 390;
	var devices = [
		"Nokia N9 landscape",
			"Pixel 2",
			"Pixel 2 landscape",
			"Pixel 2 XL",
			"Pixel 2 XL landscape",
			"Pixel 3",
			"Pixel 3 landscape",
			"Pixel 4",
			"Pixel 4 landscape",
			"Pixel 4a (5G)"
	];
	for(let i = 0; i < devices.length; i++)
	{
		await smartbrowz.takeScreenshot("https://example.com", {
			"screenshot_options": {
				"type": "jpeg"
			},
			"page_options": {
				"device": devices[i]
				}
			}).then((data)=>{
				tc++
		console.log("✅​ Test case "+tc+" : Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case "+tc, "Description" : "Request send to convert html to pdf for "+devices[i]+" device and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
		}).catch((err)=>{
		console.log(err)
		})
	}

	res.status(200);
    res.send(test);

})

app.get("/execute/hello22", async (req, res) => {
	
	const catalystApp = catalyst.initialize(req);
	const smartbrowz = catalystApp.smartbrowz();
	var test = [];
	var list;
	await smartbrowz.generateFromTemplate("376000000002032",
		{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}"}
	)
	.then((data)=>{
	  console.log(data)
	}).catch((err)=>{
		console.log("✅​ Test case 406 : Request send to generate template using invalid template id and check whether any excpetion is thrown")
		list = {"Test Case No" : "Test Case 406", "Description" : "Request send to generate template using invalid template id and check whether any excpetion is thrown", "Result" : "Passed"}
		test.push(list)
	})

	await smartbrowz.takeScreenshot("https://jdfhvbijdvbikb.com", {
		"screenshot_options": {
			"type": "jpeg"
		},
		"page_options": {
			"device": "iPad"
			}
		}).then((data)=>{
		console.log(data)
	}).catch((err)=>{
		console.log("✅​ Test case 407 : Request send to take screenshot of a website with invalid url and check whether any exception is thrown")
		list = {"Test Case No" : "Test Case 407", "Description" : "Request send to take screenshot of a website and check whether any exception is thrown", "Result" : "Passed"}
		test.push(list)
	})

	await smartbrowz.convertToPdf(
		{
			"page_options": {
				"css": {
				"content": "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Poppins', sans-serif;\n    }\n    \n    p{\n      font-family: 'Poppins', sans-serif;\n      font-weight: 400;\n    }\n    \n    h2 {\n      font-family: \"Parisienne\", cursive;\n      font-size: 60px;\n      font-weight: normal;\n    }\n    \n    header > img {\n      height: 38px;\n      object-fit: contain;\n    }\n    \n    header{\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    body {\n      position: relative;\n      background-color: #f0f0f2;\n    }\n    \n    .bg-right {\n      position: absolute;\n      right: 0px;\n      top: 0px;\n    }\n    \n    .bg-down {\n      position: absolute;\n      right: 0px;\n      bottom: 0px;\n      height: 300px;\n      width: auto;\n    }\n    \n    .bg-left {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      height: 400px;\n      width: auto;\n    }\n    \n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100vh;\n    }\n    \n    .participation {\n      display: flex;\n      gap: 4px;\n      align-items: center;\n    }\n    \n    .participation > img {\n      height: 12px;\n      object-fit: contain;\n    }\n    \n    .cert-name {\n      margin-top: 40px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .cert-desc {\n      margin-top: 20px;\n      width: 70%;\n      font-size: 16px;\n      line-height: 32px;\n      text-align: center;\n    }\n    \n    .cert-desc > span {\n      font-weight: bold;\n    }\n    \n    footer {\n      margin-top: 120px;\n      display: flex;\n      gap: 200px;\n      position: relative;\n    }\n    \n    footer > div {\n      display: flex;\n      gap: 12px;\n      align-items: center;\n      flex-direction: column;\n    }\n    \n    footer img {\n      width: 160px;\n    }"
				}
			},
			"output_options": {
				"output_type": "pdf"
			},
			"pdf_options": {
				"landscape": false
			},
			}).then((data)=>{
			console.log("Request send to convert html to pdf and check whether any exception is thrown")
			}).catch((err)=>{
			console.log("✅​ Test case 408 : Request send to convert html to pdf and check whether any exception is thrown")
			list = {"Test Case No" : "Test Case 408", "Description" : "Request send to convert html to pdf and check whether any exception is thrown", "Result" : "Passed"}
			test.push(list)
		})

		await smartbrowz.generateFromTemplate(
			{"template_data" : "{\n  \"address\": {\n    \"name\": \"107 Traction Street,Green Ville\",\n    \"postal\": \"South carolina-600028\"\n  },\n  \"client\": {\n    \"data\": [\n      {\n        \"name\": \"Amelia Burrows\",\n        \"phn\": \"+1-212-6782782\",\n        \"start\": \"Monday,Feburary,28,2019\",\n        \"end\": \"Monday,March,28,2019\"\n      }\n    ]\n  },\n  \"flight\": {\n    \"lines\": [\n      {\n        \"details\": \"Departure\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"04:52 PM\",\n        \"terminal\": \"ABX\"\n      },\n      {\n        \"details\": \"Arrival\",\n        \"date\": \"22/11/2019\",\n        \"airlines\": \"Wayne Airlines\",\n        \"arrivaltime\": \"09:10 AM\",\n        \"terminal\": \"ABX\"\n      }\n    ]\n  },\n  \"hotel\": {\n    \"lines\": [\n      {\n        \"in\": \"01:00 AM\",\n        \"name\": \"Zylker Hotel\",\n        \"address\": \"3796 Lincoln Street\",\n        \"inclusion\": \"All Inclusive\",\n        \"out\": \"12.00 PM\"\n      }\n    ]\n  },\n  \"activity\": {\n    \"lines\": [\n      {\n        \"date\": \"02/11/2019\",\n        \"place\": \"Yosimete National Park\",\n        \"activity\": \"Trekking\",\n        \"remark\": \"Water\"\n      },\n      {\n        \"date\": \"07/11/2019\",\n        \"place\": \"Golden Gate Bridge\",\n        \"activity\": \"Biking\",\n        \"remark\": \"Helmet Madate\"\n      }\n    ]\n  }\n}"}
			)
			.then((data)=>{
				console.log("Request send to generate template using template id and check whether any exception is thrown")
				list = {"Test Case No" : "Test Case 419", "Description" : "Request send to generate template using template id and check whether any exception is thrown", "Result" : "Passed"}
				test.push(list)
			}).catch((err)=>{
				console.log("✅​ Test case 409 : Request send to generate template using template id and check whether any exception is thrown")
				list = {"Test Case No" : "Test Case 409", "Description" : "Request send to generate template using template id and check whether any exception is thrown", "Result" : "Passed"}
				test.push(list)
			})
		
			await smartbrowz.takeScreenshot({
				"screenshot_options": {
					"type": "jpeg"
				},
				"page_options": {
					"device": "iPad"
					}
				}).then((data)=>{
				console.log("Request send to take screenshot of a website and check whether any exception is thrown")
				list = {"Test Case No" : "Test Case 410", "Description" : "Request send to take screenshot of a website and check whether any exception is thrown", "Result" : "Passed"}
				test.push(list)
			}).catch((err)=>{
				console.log("✅​ Test case 420 : Request send to take screenshot of a website and check whether any exception is thrown")
				list = {"Test Case No" : "Test Case 410", "Description" : "Request send to take screenshot of a website and check whether any exception is thrown", "Result" : "Passed"}
				test.push(list)
			})
		
		
	res.status(200);
    res.send(test);

})

module.exports.puppeteer = async (request, response, page) => {
    await page.goto('https://example.com/',{waitUntil: "domcontentloaded"});
    const pageTitle = await page.title();
    console.log(request.url);
    request.locals = pageTitle;
    app(request, response);

};