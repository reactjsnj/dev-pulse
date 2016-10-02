/**
 * Created by anthony on 10/1/16.
 */

$(document).ready(function () {


    var softwareselected = 'javascript';

    var locationselected = 'New+York';

        getJobs(softwareselected, locationselected, 12);

    var states = ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
        "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
        "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
        "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
        "WI", "MO", "AR", "OK", "KS", "LA", "VA"];

    $.each(states, function (key, value) {
        var state = '<li><a href="#" class="blue-text select-location" data-location="' + value + '">' + value + '</a></li>';
        $('#dropdown-state').append(state);
    });

    var softwares = ["Node", "React", "PHP", "Python", "Ruby", "Javascript"];

    $.each(softwares, function (key, value) {
        var software = '<li><a href="#" class="blue-text select-software" data-software="' + value + '">' + value + '</a></li>';
        $('#dropdown-software').append(software);
    });



 // #location-selected #software-selected
    $(document).on('click', '.select-software', function () {

        softwareselected = $(this).data('software');

        $('#software-selected').text(softwareselected);

        getJobs(softwareselected, locationselected, 50);
        event.preventDefault();

    });
    $(document).on('click', '.select-location', function () {

        locationselected = $(this).data('location');

        $('#location-selected').text(locationselected);

        getJobs(softwareselected, locationselected, 50);
        event.preventDefault();
    });

});


// Create a function which takes in hexcode and a callback function
function getJobs(software, location, limit) {

    //clear out last jobs search
    $('#joblist').empty();




    //GitHub Jobs API by Anthony
    var githubJobsURL = 'https://jobs.github.com/positions.json?description=' + software + '&location=' + location;

    console.log(githubJobsURL);

    $.ajax({
        url: githubJobsURL,
        method: 'GET',
        dataType: 'jsonp'
    }).done(function (response) {
        $.each(response, function (key, value) {
            var gig = ' <div class="col s12 m4"><div class="card"><div class="card-content"><span class="card-title truncate">' + value.title + '</span><p> at ' + value.company + '<br></p></div><div class="card-action"> <a class="waves-effect waves-light btn blue darken-3"><i class="material-icons left">add</i> Save</a> <a href="' + value.url + '" class="waves-effect waves-light btn blue darken-3" target="_blank"><i class="material-icons left">call_made</i> APPLY</a>   </div></div></div>';
            $('#joblist').append(gig);
        });

    });
    

    //Indeed API by Erick
    var indeedURL = "https://crossorigin.me/http://api.indeed.com/ads/apisearch?publisher=8023780673544955&format=json&v=2&q=" + software + "&l=" + location + "&limit=" + limit;

    console.log(indeedURL);

    $.ajax({
        url: indeedURL,
        method: 'GET',
        dataType: 'jsonp'
    })
        .done(function (response) {

            var results = response.results;
            // console.log(response);

            $.each(results, function (key, value) {
                // console.log(value.company);
//                        var gig = '<li class="collection-item"><a href="' + value.url + '">' + value.jobtitle + ' at ' + value.company + ' ' + value.snippet + '</a></li>';
                var gig = ' <div class="col s12 m4"><div class="card"><div class="card-content"><span class="card-title truncate">' + value.jobtitle + '</span><p> at ' + value.company + '<br></p></div><div class="card-action"> <a class="waves-effect waves-light btn blue darken-3"><i class="material-icons left">add</i> Save</a> <a href="' + value.url + '" class="waves-effect waves-light btn blue darken-3" target="_blank"><i class="material-icons left">call_made</i> APPLY</a>   </div></div></div>';
                $('#joblist').append(gig);


            });


        });




}