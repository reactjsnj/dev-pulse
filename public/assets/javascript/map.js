$(document).ready(function(){

    // var config = {
	 //    apiKey: "AIzaSyBmkCEad6AxdRJVEy8MtrzETphHcnsNb24",
	 //    authDomain: "map-data-1e0ef.firebaseapp.com",
	 //    databaseURL: "https://map-data-1e0ef.firebaseio.com",
	 //    storageBucket: "map-data-1e0ef.appspot.com",
	 //    messagingSenderId: "729944294128"
    // };
    //
    // firebase.initializeApp(config);

    var database = firebase.database();

    var jobsInCountry = 122873;

	function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */

		return "<h4>"+n+"</h4><table>"+
			"<tr><td>Javascript</td><td>"+(d.javascript)+"</td></tr>"+
			"<tr><td>Node</td><td>"+(d.node)+"</td></tr>"+
			"<tr><td>Python</td><td>"+(d.python)+"</td></tr>"+
			"<tr><td>Ruby</td><td>"+(d.ruby)+"</td></tr>"+
			"<tr><td>PHP</td><td>"+(d.php)+"</td></tr>"+
			"<iframe src='https://map-data-1e0ef.firebaseapp.com/?s="+ (d.id)+"' width='275' height='325'></iframe>"+ 
			"</table>";
	}
	
	var sampleData ={};	/* Sample random data. */	
	["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
	"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
	"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
	"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
	"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
		.forEach(function(d){

			var javascript;

			var node;

			var python;

			var ruby;

			var php;

			database.ref(d).once("value").then(function(snapshot){

				console.log(snapshot.val().totalJobs);

				console.log(jobsInCountry);

				javascript = snapshot.val().javascript;

				node = snapshot.val().node;

				python = snapshot.val().python;

				ruby = snapshot.val().ruby;

				php = snapshot.val().php;

				var colorNum = (snapshot.val().totalJobs*10/jobsInCountry).toFixed(2);

				sampleData[d]={

					javascript: javascript, 

					node:node,

					python:python,

					ruby: ruby,

					php: php,

					id: d,

					color:d3.interpolate("#ffffff", "#000000")(colorNum)

				};

				if(d == 'VA'){

					mapImg.draw("#statesvg", sampleData, tooltipHtml);
		
					d3.select(self.frameElement).style("height", "600px");

				}

			});

		});
	
	/* draw states on id #statesvg */

	

	$('#radioStacked0').on('click', function(){

		$('.mapLabel').html('Programming Jobs');

		$('svg').css('display', 'none');

		$('#statesvg').css('display', 'block');

	});

	$('#radioStacked1').on('click', function(){

		$('.mapLabel').html('Popularity Of Javascript');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
				"<tr><td>Number of Jobs</td><td>"+(d.javascript)+"</td></tr>"+
				"<tr><td>Popularity</td><td> "+(d.javascriptPercentage)+"%</td></tr>"+
				"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
			.forEach(function(d){ 

				var javascriptStateJob;

				var javascriptStatePercent;

				database.ref(d).once("value").then(function(snapshot){

					javascriptStateJob = snapshot.val().javascript;

					javascriptStatePercent= snapshot.val().javascriptPercentage;

					sampleData[d]={

						javascript: javascriptStateJob, 

						javascriptPercentage: (javascriptStatePercent*100).toFixed(2),

						color:d3.interpolate("#ffffff", "#ffff00")((javascriptStatePercent.toFixed(2))*2)

					};

					if(d == 'VA'){

						mapJavascript.draw("#javascriptMap", sampleData, tooltipHtml);
			
						d3.select(self.frameElement).style("height", "600px");

					}

				});

			});
	
		$('svg').css('display', 'none');

		$('#javascriptMap').css('display', 'block');

	});

	$('#radioStacked2').on('click', function(){

		$('.mapLabel').html('Popularity Of Node');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
				"<tr><td>Number of Jobs</td><td>"+(d.node)+"</td></tr>"+
				"<tr><td>Popularity</td><td> "+(d.nodePercentage)+"%</td></tr>"+
				"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
			.forEach(function(d){ 

				var nodeStateJob;

				var nodeStatePercent;

				database.ref(d).once("value").then(function(snapshot){

					nodeStateJob = snapshot.val().node;

					nodeStatePercent= snapshot.val().nodePercentage;

					sampleData[d]={

						node: nodeStateJob, 

						nodePercentage: (nodeStatePercent*100).toFixed(2),

						color:d3.interpolate("#ffffff", "#00ff00")((nodeStatePercent.toFixed(2))*3)

					};

					if(d == 'VA'){

						mapNode.draw("#nodeMap", sampleData, tooltipHtml);
			
						d3.select(self.frameElement).style("height", "600px");

					}

				});

			});
		
		$('svg').css('display', 'none');

		$('#nodeMap').css('display', 'block');

	});

	$('#radioStacked3').on('click', function(){

		$('.mapLabel').html('Popularity Of Python');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
				"<tr><td>Number of Jobs</td><td>"+(d.python)+"</td></tr>"+
				"<tr><td>Popularity</td><td> "+(d.pythonPercentage)+"%</td></tr>"+
				"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
			.forEach(function(d){ 

				var pythonStateJob;

				var pythonStatePercent;

				database.ref(d).once("value").then(function(snapshot){

					pythonStateJob = snapshot.val().python;

					pythonStatePercent= snapshot.val().pythonPercentage;

					sampleData[d]={

						python: pythonStateJob, 

						pythonPercentage: (pythonStatePercent*100).toFixed(2),

						color:d3.interpolate("#ffffff", "#0000ff")((pythonStatePercent.toFixed(2))*1.5)

					};

					if(d == 'VA'){

						mapPython.draw("#pythonMap", sampleData, tooltipHtml);
			
						d3.select(self.frameElement).style("height", "600px");

					}

				});

			});

		$('svg').css('display', 'none');

		$('#pythonMap').css('display', 'block');
		

	});

	$('#radioStacked4').on('click', function(){

		$('.mapLabel').html('Popularity Of Ruby');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
				"<tr><td>Number of Jobs</td><td>"+(d.ruby)+"</td></tr>"+
				"<tr><td>Popularity</td><td> "+(d.rubyPercentage)+"%</td></tr>"+
				"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
			.forEach(function(d){ 

				var rubyStateJob;

				var rubyStatePercent;

				database.ref(d).once("value").then(function(snapshot){

					rubyStateJob = snapshot.val().ruby;

					rubyStatePercent= snapshot.val().rubyPercentage;

					sampleData[d]={

						ruby: rubyStateJob, 

						rubyPercentage: (rubyStatePercent*100).toFixed(2),

						color:d3.interpolate("#ffffff", "#ff0000")((rubyStatePercent.toFixed(2))*1.5)

					};

					if(d == 'VA'){

						mapRuby.draw("#rubyMap", sampleData, tooltipHtml);
			
						d3.select(self.frameElement).style("height", "600px");

					}

				});

			});

		$('svg').css('display', 'none');

		$('#rubyMap').css('display', 'block');
		

	});

	$('#radioStacked5').on('click', function(){

		$('.mapLabel').html('Popularity Of PHP');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
				"<tr><td>Number of Jobs</td><td>"+(d.php)+"</td></tr>"+
				"<tr><td>Popularity</td><td> "+(d.phpPercentage)+"%</td></tr>"+
				"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LA", "VA"]
			.forEach(function(d){ 

				var phpStateJob;

				var phpStatePercent;

				database.ref(d).once("value").then(function(snapshot){

					phpStateJob = snapshot.val().php;

					phpStatePercent= snapshot.val().phpPercentage;

					sampleData[d]={

						php: phpStateJob, 

						phpPercentage: (phpStatePercent*100).toFixed(2),

						color:d3.interpolate("#ffffff", "#551a8b")((phpStatePercent.toFixed(2))*1.8)

					};

					if(d == 'VA'){

						mapPHP.draw("#phpMap", sampleData, tooltipHtml);
			
						d3.select(self.frameElement).style("height", "600px");

					}

				});

			});

		$('svg').css('display', 'none');

		$('#phpMap').css('display', 'block');
		

	});

});