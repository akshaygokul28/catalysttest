function push(){
    catalyst.notification.enableNotification().then(resp=>{
        catalyst.notification.messageHandler = msg => {
            console.log(msg)
             console.log("Notification send")
         }
   });
}
async function testfilestore(id)
{
    showLoader();
    $.ajax({ 
        url: "/server/FileStore/filestore",
        type: "post",
        success: function (data) {
            createTable(data, "filestore")
            hideLoader();
        },
        error: function (error) {
            //alert(error.message);
        }
    });
}

function createTable(respData, id) {
    var col = [];
    for (var i = 0; i < respData.length; i++) {
        for (var key in respData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table");
    table.id = id;

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        if(col[i]==="Test Case No"){
            th.style.width = "200px";
            th.style.backgroundColor = "#0d3f59"
        }
        if(col[i]==="Description"){
            th.style.width = "900px";
            th.style.backgroundColor = "#0d3f59"
        }
        if(col[i]==="Result"){
            th.style.width = "200px";
            th.style.backgroundColor = "#0d3f59"
        }
        if(col[i]==="Feature"){
            th.style.width = "200px";
            th.style.backgroundColor = "#0d3f59"
        }
        tr.appendChild(th);
    }
    for (var i = 0; i < respData.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = respData[i][col[j]];
            if(tabCell.innerHTML === "Passed" )
            {
                tabCell.style.color = "Green";
            }
            if(tabCell.innerHTML === "Failed" )
            {
                tabCell.style.color = "Red";
            }
        }
    }

    var divContainer = document.getElementById(id);
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}



async function testdatastore(id)
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
        url: "/server/DataStore/datastore",
        type: "post",
        success: function (data) {
            createTable(data, "datastore")
            hideLoader();
         },
         error: function (error) {
             //alert(error.message);
         }
    });
}

async function testcache(id)
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
        url: "/server/Cache/cache",
        type: "post",
        success: function (data) {
            console.log(data)
            createTable(data, "cache")
            hideLoader();
         },
         error: function (error) {
             //alert(error.message);
         }
    });
}

async function testcircuits(id)
{
    showLoader()
    // document.getElementById(id).innerHTML="";
    $.ajax({
    url: "/server/Circuits/circuits",
    type: "post",
    success: function (data) {
        createTable(data, "circuit")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testfunctions(id)
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
        url: "/server/Functions/functions",
        type: "post",
        success: function (data) {
            createTable(data, "fun")
            hideLoader();
         },
         error: function (error) {
             //alert(error.message);
         }
    });
}

async function testsearch(id)
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
    url: "/server/Search/search",
    type: "post",
    success: function (data) {
        createTable(data, "search")
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testmail(id)
{
    showLoader()
    // document.getElementById(id).innerHTML="";
    $.ajax({
    url: "/server/Mail/mail",
    type: "post",
    success: function (data) {
        createTable(data, "mail")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testpushnotification(id)
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
    url: "/server/PushNotifications/pushnotifications",
    type: "post",
    success: function (data) {
        createTable(data, "push");
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testzia(id)
{
    showLoader()
    $.ajax({
    url: "/server/Zia/zia",
    type: "post",
    success: function (data) {
        createTable(data, "zia")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testZCQL()
{
    showLoader();
    $.ajax({
    url: "/server/ZCQL/zcql1",
    type: "post",
    success: function (data) {
        createTable(data, "zcql")
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
})
await testZCQL1()
}

async function testZCQL1()
{
    showLoader();
    $.ajax({
    url: "/server/ZCQL/zcql2",
    type: "post",
    success: function (data) {
        createTable(data, "zcql1")
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
})
await testZCQL2()
}

async function testZCQL2()
{
    showLoader();
    $.ajax({
    url: "/server/ZCQL/zcql3",
    type: "post",
    success: function (data) {
        createTable(data, "zcql2")
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
})
await testZCQL3()
}

async function testZCQL3()
{
    showLoader();
    $.ajax({
    url: "/server/ZCQL/zcql4",
    type: "post",
    success: function (data) {
        createTable(data, "zcql3")
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
})
}

async function testpermission(id)
{
    showLoader();
    $.ajax({
    url: "/server/Permissions/permissions",
    type: "post",
    success: function (data) {
        createTable(data, "permission")
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testauthentication(id)
{
    showLoader();
    $.ajax({
    url: "/server/Authentication/authentication",
    type: "post",
    success: function (data) {
        createTable(data, "authentication")
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function tsmartbrowz()
{
    await testsmartbrowz()
    await testsmartbrowz1()
    await testsmartbrowz2()
    await testsmartbrowz3()
    await testsmartbrowz4()
    await sleep(40)
    await testsmartbrowz5()
    await testsmartbrowz6()
    await testsmartbrowz7()
    await testsmartbrowz8()
    await testsmartbrowz9()
    await sleep(40)
    await testsmartbrowz10()
    await testsmartbrowz11()
    await testsmartbrowz12()
    await testsmartbrowz13()
    await testsmartbrowz14()
    await sleep(40)
    await testsmartbrowz15()
    await testsmartbrowz16()
    await testsmartbrowz17()
    await testsmartbrowz18()
    await testsmartbrowz19()
    await sleep(40)
    await testsmartbrowz20()
    await testsmartbrowz21()
}
async function sleep(seconds) {
	return new Promise((resolve) => {
	  setTimeout(resolve, seconds * 1000);
	});
  }

async function testsmartbrowz()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello1",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz1()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello2",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz1")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz2()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello3",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz2")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz3()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello4",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz3")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz4()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello5",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz4")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz5()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello6",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz5")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}


async function testsmartbrowz6()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello7",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz6")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz7()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello8",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz7")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz8()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello9",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz8")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz9()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello10",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz9")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz10()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello11",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz10")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}


async function testsmartbrowz11()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello12",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz11")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz12()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello13",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz12")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz13()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello14",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz13")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz14()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello15",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz14")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz15()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello16",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz15")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}


async function testsmartbrowz16()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello17",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz16")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz17()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello18",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz17")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz18()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello19",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz18")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz19()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello20",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz19")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function testsmartbrowz20()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello21",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz20")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}


async function testsmartbrowz21()
{
    showLoader()
    $.ajax({
    url: "/server/sdk_application_function/execute/hello22",
    type: "get",
    success: function (data) {
        createTable(data, "smartbrowz21")
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function terminatefs()
{
    $.ajax({
        url: "/server/Filestore/terminate", 
        type: "post",
        success: function (data) {
            hideLoader();
        },
        error: function (error) {
            //alert(error.message);
        }
    });
}

async function terminateds()
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
        url: "/server/DataStore/terminateds",
        type: "post",
        success: function (data) {
            hideLoader();
         },
         error: function (error) {
             //alert(error.message);
         }
    });
}

async function terminatecache()
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
        url: "/server/Cache/terminatecache",
        type: "post",
        success: function (data) {
            hideLoader();
         },
         error: function (error) {
             //alert(error.message);
         }
    });
}

async function terminatecircuit()
{
    showLoader()
    // document.getElementById(id).innerHTML="";
    $.ajax({
    url: "/server/Circuits/terminatecircuit",
    type: "post",
    success: function (data) {
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function terminatefun()
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
        url: "/server/Functions/terminatefun",
        type: "post",
        success: function (data) {
            hideLoader();
         },
         error: function (error) {
             //alert(error.message);
         }
    });
}

async function terminatesearch()
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
    url: "/server/Search/terminatesearch",
    type: "post",
    success: function (data) {
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function terminatemail()
{
    showLoader()
    // document.getElementById(id).innerHTML="";
    $.ajax({
    url: "/server/Mail/terminatemail",
    type: "post",
    success: function (data) {
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function terminatenotification()
{
    showLoader();
    // document.getElementById(id).innerHTML="";
    $.ajax({
    url: "/server/PushNotifications/terminatenotification",
    type: "post",
    success: function (data) {
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function terminatezia()
{
    showLoader()
    $.ajax({
    url: "/server/Zia/terminatezia",
    type: "post",
    success: function (data) {
        hideLoader()
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function terminatezcql()
{
    showLoader();
    $.ajax({
    url: "/server/ZCQL/terminatezcql",
    type: "post",
    success: function (data) {
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
})
}

async function terminatepermission()
{
    showLoader();
    $.ajax({
    url: "/server/Permissions/terminatepermission",
    type: "post",
    success: function (data) {
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function terminateauth()
{
    showLoader();
    $.ajax({
    url: "/server/Authentication/terminateauth",
    type: "post",
    success: function (data) {
        hideLoader();
    },
     error: function (error) {
    //alert(error.message);
     }
});
}

async function terminategr()
{
   await terminatefs()
   await terminateds()
   await terminatecache()
   await terminatecircuit()
   await terminatefun()
   await terminatesearch()
   await terminatemail()
   await terminatenotification()
   await terminatezia()
   await terminatezcql()
   await terminatepermission()
   await terminateauth()
}

async function getCheckboxValue() {
    var lang1 = document.getElementById("s1");
    var lang2 = document.getElementById("s2");
    var lang3 = document.getElementById("s3");
    var lang4 = document.getElementById("s4");
    var lang5 = document.getElementById("s5");
    var lang6 = document.getElementById("s6");
    var lang7 = document.getElementById("s7");
    var lang8 = document.getElementById("s8");
    var lang9 = document.getElementById("s9");
    var lang10 = document.getElementById("s10");
    var lang11 = document.getElementById("s11");
    var lang12 = document.getElementById("s12");
    if (lang1.checked == true){
       await testfilestore('filestore')
    }
    if (lang2.checked == true){
      await testdatastore('datastore')
    }
    if (lang3.checked == true){
        await testcache('cache')
    }
    if (lang4.checked == true){
        await testfunctions('fun')
    }
    if (lang5.checked == true){
        await testsearch('search')
    }
    if (lang6.checked == true){
        await testmail('mail')
    }
    if (lang7.checked == true){
        await testpushnotification('pushnotification')
    }
    if (lang8.checked == true){
        await testzia('zia')
    }
    if (lang9.checked == true){
        await testZCQL('zcql')
    }
    if (lang10.checked == true){
        await testauthentication('authentication')
    }
    if (lang11.checked == true){
        await testcircuits('circuit')
    }
    if (lang12.checked == true){
        await testpermission('permission')
    }
   }


async function testrun()
{
    await testfilestore('filestore')
    await testdatastore('datastore')
    await testcache('cache')
    await testsearch('search')
    await testmail('mail')
    await testfunctions('fun')
    await testcircuits('circuit')
    await testpushnotification('push')
    await testzia('zia')
    await testpermission('permission')
    await testauthentication('authentication')
    await testZCQL() 
    await sleep(30)
    showLoader();
document.getElementById("global").click();
}

function showLoader()
{
    $("#result-container").hide();
    $("#loader").show();
}

function hideLoader()
{
    $("#loader").hide();
    $("#result-container").show();
}