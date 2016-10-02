$(document).ready(function(){

    var config = {

        apiKey: "AIzaSyBmkCEad6AxdRJVEy8MtrzETphHcnsNb24",
        authDomain: "map-data-1e0ef.firebaseapp.com",
        databaseURL: "https://map-data-1e0ef.firebaseio.com",
        storageBucket: "map-data-1e0ef.appspot.com",
        messagingSenderId: "729944294128"

    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $('.getData').on('click', function(){

        var states = ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
            "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
            "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
            "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
            "WI", "MO", "AR", "OK", "KS", "LA", "VA"]

        //Populate the default map with javascript===============================================

        for(var i=0; i< states.length; i++){

            var queryURL = 'http://api.indeed.com/ads/apisearch?publisher=1987650137841299&format=json&v=2&q=javascript&l='+states[i];

            $.ajax({url: queryURL, method: 'GET', crossDomain: true, dataType: 'jsonp'}).done(function(response){

                var jobAmount = response.totalResults;

                var state = response.location;

                console.log('Javascript in ', state, jobAmount);

                database.ref('javascript').update({

                    [state]: jobAmount

                })

                database.ref(state).update({

                    javascript: jobAmount,

                })

            });

        }

        for(var i=0; i< states.length; i++){

            var queryURL = 'http://api.indeed.com/ads/apisearch?publisher=1987650137841299&format=json&v=2&q=node&l='+states[i];

            $.ajax({url: queryURL, method: 'GET', crossDomain: true, dataType: 'jsonp'}).done(function(response){

                var jobAmount = response.totalResults;

                var state = response.location;

                console.log('Node in ', state, jobAmount);

                database.ref('node').update({

                    [state]: jobAmount

                })

                database.ref(state).update({

                    node: jobAmount,

                })

            });

        }

        for(var i=0; i< states.length; i++){

            var queryURL = 'http://api.indeed.com/ads/apisearch?publisher=1987650137841299&format=json&v=2&q=python&l='+states[i];

            $.ajax({url: queryURL, method: 'GET', crossDomain: true, dataType: 'jsonp'}).done(function(response){

                var jobAmount = response.totalResults;

                var state = response.location;

                console.log('python in ', state, jobAmount);

                database.ref('python').update({

                    [state]: jobAmount

                })

                database.ref(state).update({

                    python: jobAmount,

                })

            });

        }

        for(var i=0; i< states.length; i++){

            var queryURL = 'http://api.indeed.com/ads/apisearch?publisher=1987650137841299&format=json&v=2&q=ruby&l='+states[i];

            $.ajax({url: queryURL, method: 'GET', crossDomain: true, dataType: 'jsonp'}).done(function(response){

                var jobAmount = response.totalResults;

                var state = response.location;

                console.log('ruby in ', state, jobAmount);

                database.ref('ruby').update({

                    [state]: jobAmount

                })

                database.ref(state).update({
            
                    ruby: jobAmount,

                })

            });

        }

        for(var i=0; i< states.length; i++){

            var queryURL = 'http://api.indeed.com/ads/apisearch?publisher=1987650137841299&format=json&v=2&q=php&l='+states[i];

            $.ajax({url: queryURL, method: 'GET', crossDomain: true, dataType: 'jsonp'}).done(function(response){

                var jobAmount = response.totalResults;

                var state = response.location;

                console.log('php in ', state, jobAmount);

                database.ref('php').update({

                    [state]: jobAmount

                })

                database.ref(state).update({

                    php: jobAmount,

                })

            });

        }

    });

});