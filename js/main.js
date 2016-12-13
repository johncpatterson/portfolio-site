jQuery(function() {

   // Even handler for hitting the enter key and getting the value of the text input
   $("#submitForm").on("submit", function() {
         event.preventDefault();
         var city = $("#searchBox").val();
         getTeam(city);
         $("#searchBox").val('');

      })
      // Even handler for clicking the button and getting the value of the text input
   $("#button").on("click", function() {
      var city = $("#searchBox").val();
      getTeam(city);
      $("#searchBox").val('');

   })

   // Bring in team data for the Bengals ON PAGE LOAD
   $.ajax({
      url: `http://nflarrest.com/api/v1/team/topCrimes/cin?limit=6`,
      method: 'GET',
      success: function successHandler(Data) {
         console.log(Data);
         var labels = [];
         var data = [];

         // Loop through data array 
         Data.forEach(function(Data) {
            labels.push(Data.Category);
            data.push(Data.arrest_count);
         })
         drawChart(labels, data);
      },
   });

   // Draw chart for Bengals data that was loaded in ON PAGE LOAD
   function drawChart(labels, data) {

      var ctx = document.getElementById("myChart").getContext("2d");

      var myChart = new Chart(ctx, {
         type: 'pie',
         data: {
            labels: labels,
            datasets: [{
               label: '# of Arrests',
               data: data,
               backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
               ],
               borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
               ],
               borderWidth: 2
            }]
         },
         options: {
            scales: {
               yAxes: [{
                  ticks: {
                     beginAtZero: true
                  }
               }]
            }
         }
      });
   }
   // Get search term (e.g. den or cin) from team name from API for use in the getData function to return the team's arrest data
   function getTeam(query) {
      $.ajax({
         url: `http://nflarrest.com/api/v1/team/search/?term=${query}`,
         method: 'GET',
         success: function successHandler(returnedTeam) {
            $("#teamCityGoesHere").text(returnedTeam[0].city);
            $("#teamNameGoesHere").text(returnedTeam[0].teams_full_name);
            var teamToSearch = returnedTeam[0].team_code;
            console.log(teamToSearch);
            getData(teamToSearch);
         },
      });
   }
   // Use team name returned from getTeam to get arrest data for team from API
   function getData(teamToSearch) {
      $.ajax({
         url: `http://nflarrest.com/api/v1/team/topCrimes/${teamToSearch}?limit=6`,
         method: 'GET',
         success: function successHandler(Data) {
            console.log(Data);
            var labels = [];
            var data = [];

            // Loop through data array 
            Data.forEach(function(Data) {
               labels.push(Data.Category);
               data.push(Data.arrest_count);
            })
            drawChart(labels, data);
         },
      });
   }
   // Use the data returned from the API (labels and data) to draw a Chart.js chart
   function drawChart(labels, data) {

      var ctx = document.getElementById("myChart").getContext("2d");

      var myChart = new Chart(ctx, {
         type: 'bar',
         data: {
            labels: labels,
            datasets: [{
               label: '# of Arrests',
               data: data,
               backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
               ],
               borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
               ],
               borderWidth: 2
            }]
         },
         options: {
            scales: {
               yAxes: [{
                  ticks: {
                     beginAtZero: true
                  }
               }]
            }
         }
      });
   }

});
