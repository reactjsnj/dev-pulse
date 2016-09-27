var x = document.getElementById("demo");
//Get curent locaiton of user==================================
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        // navigator.geolocation.getCurrentPosition(getJobs);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}





// Create dependency for 'request' npm package
// var request = require('request');

// Initialize color so that it is a global variable
var softwareData = [];
var graphData = [];


function renderChart(data) {

    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "programming language job popularity by region"
        },
        animationEnabled: true,
        theme: "theme2",
        data: [
            {
                type: "doughnut",
                indexLabelFontFamily: "Garamond",
                indexLabelFontSize: 20,
                startAngle: 0,
                indexLabelFontColor: "dimgrey",
                indexLabelLineColor: "darkgrey",
                toolTipContent: "{y} Jobs",

                dataPoints: data
            }
        ]
    });

    chart.render();

}


function buildGraph(data) {

    var totalJobs = 0;

    $.each( data, function( key, value ) {

            totalJobs = totalJobs + value.length;

            // alert( value.software + " has this many " + value.length );
    });


    $.each( data, function( key, value ) {

        var percent = value.length / totalJobs;

        console.log( value.software + " has this many percent " + percent * 100 + "%" );

        if(softwareData.length > 3){


            var toPush = {
                y: percent * 100,
                indexLabel: value.software
            };

            graphData.push(toPush);

            renderChart(graphData);
            console.log(graphData);

            if(value.software === 'node'){
            }

        }

    });

}

// Function which takes in a single parameter and prints it to the screen
function showGraph(x,software) {

    var toPush = {
        y: x,
        indexLabel: software
    };

    softwareData.push(toPush);
    console.log(softwareData);
    renderChart(softwareData)
    // buildGraph(softwareData);
}


// Create a function which takes in hexcode and a callback function
function getJobListLeng(latitude, longitude, software, callback) {
    // Create a request to the 'colourlovers' api which will select a specific color from their database based upon  and which will return its data within the 'response.body'
    $.ajax({
        url: 'https://jobs.github.com/positions.json?lat=' + latitude + '&long=' + longitude + '&search=' + software,
        method: 'GET',
        dataType: 'jsonp'
    }).done(function (response) {

        console.log('Request is being made... we found this many');
        // First, make sure there is a tags element (and thus a name)
        // name associated with the random color

        console.log(response);
        console.log(response.length);

        // Calls upon the callback function and provides with with the variable 'color' as its sole parameter
        callback(response.length, software);
    });

}


// Call the 'getRandomColor' function and provide it with 'printColor' as its sole parameter
// getRandomColor(printColor);

// Call the 'getSpecificColor' function and provide it with a hexcode value and 'printColor' as its parameters
// getJobListLeng(latitude, longitude, software, showGraph);




function getJobsLength(latitude, longitude, software) {

    var toReturn = '';

    var queryURL = 'https://jobs.github.com/positions.json?lat=' + latitude + '&long=' + longitude + '&search=' + software;
    $.ajax({url: queryURL, method: 'GET', dataType: 'jsonp'}).done(function (data) {
//        console.log(data);
//        console.log(data.length);
        toReturn = data.length;
    });

    return toReturn;
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;

    // ajaxutil.postAJax(position.coords.latitude, position.coords.longitude, 'java', callbackNow);

    getJobListLeng(position.coords.latitude, position.coords.longitude, 'java', showGraph);

    getJobListLeng(position.coords.latitude, position.coords.longitude, 'php', showGraph);

    getJobListLeng(position.coords.latitude, position.coords.longitude, 'ruby', showGraph);

    getJobListLeng(position.coords.latitude, position.coords.longitude, 'python', showGraph);

    getJobListLeng(position.coords.latitude, position.coords.longitude, 'c#', showGraph);

    getJobListLeng(position.coords.latitude, position.coords.longitude, 'react', showGraph);

    getJobListLeng(position.coords.latitude, position.coords.longitude, 'node', showGraph);

    var directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var city = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {zoom: 7, mapTypeId: google.maps.MapTypeId.ROADMAP, center: city}
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    directionsDisplay.setMap(map);


    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=true";
    $.ajax({url: queryURL, method: 'GET'}).done(function (data) {
        console.log(data);
        console.log(data.results[0].formatted_address);

        $("#address").text(data.results[0].formatted_address);


        var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });


    });


}



$(document).ready(function () {

    $('#getlocation').on('click', function () {

        $("#address").html('<div class="progress"><div class="indeterminate"></div></div>');

        getLocation();
    })

});