
var weatherStor = [ "-4" , "0" , "75", "82", "32", "44", "54", "21", "57", "47", "31", "20", "41", "51", "40", "39", "92", "101", "93", "67", "65", "-9", "12", "35","24"]; //24
var busyDate = ["Sunday" , "Monday", "Friday"]; //2
var regularDate = ["Saturday","Thursday","Wednesday","Tuesday","Sunday" , "Monday", "Friday"]; //6
var connectionDelay = [0,0,0,0,0,0,30,10,20,68,47,146,87,126,97,203,0,40,19,0,0,0,];
var isConnecting = [true, false];

/** Need to input tracking number 
 * Need weather conditions from all connections(if any) along with take off spot
 * Need dates to see hoilday or time of year
 * If its a connecting flight, input tracking number and search for any delays in current route. 
 * after all this information is summited and ranked, a perstange of flight cancelation will print on screen
*/


//picks number from lists randomly
function randomPic(x){
    let b = Math.floor(Math.random() * x.length);
    return b;
}

function createPlane(){
    for(var i = 0; i < 1; i++){
        var plane = {};
    //planeNumber
        let b = Math.floor(Math.random() * 10000);
        plane.number = b;
    //weather
        plane.weather = weatherStor[randomPic(weatherStor)];
    //date
        plane.date = regularDate[randomPic(regularDate)];
    //connection
        plane.connection = isConnecting[randomPic(isConnecting)];
        if(plane[2] = true){
        //connectiondelay
            plane.dConnection = connectionDelay[randomPic(connectionDelay)];
            console.log(plane.dConnection);
        }
    }
    console.log(plane)
    return plane;
}

var plane1 = createPlane();
document.getElementById("Plane1").innerHTML = plane1.number;
var plane2 = createPlane();
document.getElementById("Plane2").innerHTML = plane2.number;
var plane3 = createPlane();
document.getElementById("Plane3").innerHTML = plane3.number;
var plane4 = createPlane();
document.getElementById("Plane4").innerHTML = plane4.number;
var plane5 = createPlane();
document.getElementById("Plane5").innerHTML = plane5.number;
var plane6 = createPlane();
document.getElementById("Plane6").innerHTML = plane6.number;
var plane7 = createPlane();
document.getElementById("Plane7").innerHTML = plane7.number;


function callTr(){
    let call = document.getElementById("trackingnum");
    var number = call.value;
    if(number == plane1.number){
        canclPre(plane1);
    }
    if(number == plane2.number){
        canclPre(plane2);
    }
    if(number == plane3.number){
        canclPre(plane3);
    }
    if(number == plane4.number){
        canclPre(plane4);
    }
    if(number == plane5.number){
        canclPre(plane5);
    }
    if(number == plane6.number){
        canclPre(plane6);
    }
    if(number == plane7.number){
        canclPre(plane7);
    }

}

//returns 0 if not busy, returns 1 if busy
function dateDe(x){
    if(x.date == "sunday" || "monday" || "friday"){
        return 1;
    }
    return 0;
}
//takes the paramenter of connectionsDe determines flight delays returns the delays as a rank of busyness, 3 to 2 to 1, one being the lightest
function delayConnections(){
    let a = 0;
    for(var i = 0; i < 4; i++){
        a += randomPic(connectionDelay);
    }
    if(a < 500){
        if(a > 200){
            return 3;
        }
    }
    if(a < 200){
        if(a > 60){
            return 2;
        }
    }
    if(a < 60){
        return 1;
    }
}
//Detemines cancellation based off other numbers decided above 
function canclPre(x){
    document.getElementById("Weather").innerHTML = "Weather: " + x.weather + "˚F ";
    document.getElementById("Date").innerHTML = "Day: " + x.date;
    document.getElementById("Connecting").innerHTML = "Connecting Flight: " + x.connection;
    document.getElementById("Delay").innerHTML = "Delay: " + x.dConnection + " min";
    let TOTAL = 0;
    if(x.weather < 32){
        TOTAL += (x.weather / 17) * 10;
    } else if (x.weather >= 100){
        TOTAL += (x.weather / 170) * 10;
    }
    if(dateDe(x) == 1){
        TOTAL += 17;
    }
    if(x.connection != false){
        TOTAL += 24.239;
    }else{
        if(x.dConnection >= 60){
            TOTAL += (x.dConnection / 100) * 75;
            console.log((x.dConnection / 100) * 75)
        }
    }
    TOTAL = Math.floor(TOTAL);
    console.log(TOTAL +"%");
    document.getElementById("Cal").innerHTML = TOTAL + "%";
}

