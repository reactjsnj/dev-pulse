/**
 * Created by anthony on 10/1/16.
 */

$(document).ready(function () {
    getJobs('javascript', 'New+York');
});


// Create a function which takes in hexcode and a callback function
function getJobs(software, location) {

    //clear out last jobs search
    $('#joblist').empty();


    //GitHub Jobs API by Anthony
    var githubJobsURL = 'https://jobs.github.com/positions.json?description=' + software + '&location=' + location;

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
    var indeedURL = "https://crossorigin.me/http://api.indeed.com/ads/apisearch?publisher=8023780673544955&format=json&v=2&q=javascript&jobs?q=developer&l=New+York&limit=50";


    $.ajax({
        url: indeedURL,
        method: 'GET',
        dataType: 'jsonp'
    })
        .done(function (response) {

            var results = response.results;
            console.log(response);

            $.each(results, function (key, value) {
                console.log(value.company);
//                        var gig = '<li class="collection-item"><a href="' + value.url + '">' + value.jobtitle + ' at ' + value.company + ' ' + value.snippet + '</a></li>';
                var gig = ' <div class="col s12 m4"><div class="card"><div class="card-content"><span class="card-title truncate">' + value.jobtitle + '</span><p> at ' + value.company + '<br></p></div><div class="card-action"> <a class="waves-effect waves-light btn blue darken-3"><i class="material-icons left">add</i> Save</a> <a href="' + value.url + '" class="waves-effect waves-light btn blue darken-3" target="_blank"><i class="material-icons left">call_made</i> APPLY</a>   </div></div></div>';
                $('#joblist').append(gig);


            });


        });


}