const apikey = "BWHpGPUkO7QAfZuh6dkozyoMwKtgwFMO";

document.getElementById("submitbutton").addEventListener("click", getCityKey, false);

function getCityKey(){   
    // Setting variable for form input (get from HTML form)
    var userinput = document.getElementById("city").value;
    document.getElementById("city").value = "";

    // https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
    let url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + apikey + "&q=" + userinput;
    
    var data = userinput;
    console.log(data);

    // Initalize AJAX Request
    var xhttp = new XMLHttpRequest();

    // Response handler
    xhttp.onreadystatechange = function() {

        // Wait for readyState = 4 & 200 response
        if (this.readyState == 4 && this.status == 200) {
            // parse JSON response
            var cityinfo = JSON.parse(this.responseText);

            // https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
            // used this reference doc to know to index at 0  
            var locationkey = cityinfo[0].Key;

            // https://flexiple.com/javascript/javascript-capitalize-first-letter/
            // for capitalizing first letter of city on the page
            document.getElementById('cityname').innerHTML = cityinfo[0].LocalizedName;

            getForecast(locationkey);
            getCurrent(locationkey);

        } else if (this.readyState == 4) {
            // this.status !== 200, error from server
            console.log(this.responseText);

        }
    };

    xhttp.open("GET", url, true);
    xhttp.send(JSON.stringify(data));
}

function getForecast(key){

    // https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
    let url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + key + "?apikey=" + apikey;

    // Initalize AJAX Request
    var xhttp = new XMLHttpRequest();

    // Response handler
    xhttp.onreadystatechange = function() {

        // Wait for readyState = 4 & 200 response
        if (this.readyState == 4 && this.status == 200) {
            // parse JSON response
            var forecast = JSON.parse(this.responseText);
            console.log(forecast);

            displayForecast(forecast);

            // https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D

        } else if (this.readyState == 4) {
            // this.status !== 200, error from server
            console.log(this.responseText);
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

function displayForecast(forecast){

    // day 1
    var day1 = forecast.DailyForecasts[0].Date;   
    var date1 = day1.split("T");
    date1array = date1[0].split("-");
    document.getElementById("day1").innerHTML = date1array[1] + "/" + date1array[2] + "/" + date1array[0];

    var weather1 = forecast.DailyForecasts[0].Day.IconPhrase;
    document.getElementById("weather1").innerHTML = weather1;

    var max1 = forecast.DailyForecasts[0].Temperature.Maximum;
    var hightemp1 = max1.Value + " \u00B0" + max1.Unit;
    document.getElementById("high1").innerHTML = hightemp1;

    var min1 = forecast.DailyForecasts[0].Temperature.Minimum;
    var lowtemp1 = min1.Value + " \u00B0" + min1.Unit;
    document.getElementById("low1").innerHTML = lowtemp1;

    // day 2
    var day2 = forecast.DailyForecasts[1].Date;   
    var date2 = day2.split("T");
    date2array = date2[0].split("-");
    document.getElementById("day2").innerHTML = date2array[1] + "/" + date2array[2] + "/" + date2array[0];

    var weather2 = forecast.DailyForecasts[1].Day.IconPhrase;
    document.getElementById("weather2").innerHTML = weather2;

    var max2 = forecast.DailyForecasts[1].Temperature.Maximum;
    var hightemp2 = max2.Value + " \u00B0" + max2.Unit;
    document.getElementById("high2").innerHTML = hightemp2;

    var min2 = forecast.DailyForecasts[1].Temperature.Minimum;
    var lowtemp2 = min2.Value + " \u00B0" + min2.Unit;
    document.getElementById("low2").innerHTML = lowtemp2;

    // day 3
    var day3 = forecast.DailyForecasts[2].Date;   
    var date3 = day3.split("T");
    date3array = date3[0].split("-");
    document.getElementById("day3").innerHTML = date3array[1] + "/" + date3array[2] + "/" + date3array[0];

    var weather3 = forecast.DailyForecasts[2].Day.IconPhrase;
    document.getElementById("weather3").innerHTML = weather3;

    var max3 = forecast.DailyForecasts[2].Temperature.Maximum;
    var hightemp3 = max3.Value + " \u00B0" + max3.Unit;
    document.getElementById("high3").innerHTML = hightemp3;

    var min3 = forecast.DailyForecasts[2].Temperature.Minimum;
    var lowtemp3 = min3.Value + " \u00B0" + min3.Unit;
    document.getElementById("low3").innerHTML = lowtemp3;

    // day 4
    var day4 = forecast.DailyForecasts[3].Date;   
    var date4 = day4.split("T");
    date4array = date4[0].split("-");
    document.getElementById("day4").innerHTML = date4array[1] + "/" + date4array[2] + "/" + date4array[0];

    var weather4 = forecast.DailyForecasts[3].Day.IconPhrase;
    document.getElementById("weather4").innerHTML = weather4;

    var max4 = forecast.DailyForecasts[3].Temperature.Maximum;
    var hightemp4 = max4.Value + " \u00B0" + max4.Unit;
    document.getElementById("high4").innerHTML = hightemp4;

    var min4 = forecast.DailyForecasts[3].Temperature.Minimum;
    var lowtemp4 = min4.Value + " \u00B0" + min4.Unit;
    document.getElementById("low4").innerHTML = lowtemp4;

    // day 5
    var day5 = forecast.DailyForecasts[4].Date;   
    var date5 = day5.split("T");
    date5array = date5[0].split("-");
    document.getElementById("day5").innerHTML = date5array[1] + "/" + date5array[2] + "/" + date5array[0];

    var weather5 = forecast.DailyForecasts[4].Day.IconPhrase;
    document.getElementById("weather5").innerHTML = weather5;

    var max5 = forecast.DailyForecasts[4].Temperature.Maximum;
    var hightemp5 = max5.Value + " \u00B0" + max5.Unit;
    document.getElementById("high5").innerHTML = hightemp5;

    var min5 = forecast.DailyForecasts[4].Temperature.Minimum;
    var lowtemp5 = min5.Value + " \u00B0" + min5.Unit;
    document.getElementById("low5").innerHTML = lowtemp5;

}

function getCurrent(key){
    // https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
    let url = "http://dataservice.accuweather.com/currentconditions/v1/" + key + "?apikey=" + apikey;

    // Initalize AJAX Request
    var xhttp = new XMLHttpRequest();

    // Response handler
    xhttp.onreadystatechange = function() {

        // Wait for readyState = 4 & 200 response
        if (this.readyState == 4 && this.status == 200) {
            // parse JSON response
            var conditions = JSON.parse(this.responseText);

            displayCurrent(conditions);

            // https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/5day/%7BlocationKey%7D

        } else if (this.readyState == 4) {
            // this.status !== 200, error from server
            console.log(this.responseText);
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();    
}

function displayCurrent(conditions){
    var day = conditions[0].LocalObservationDateTime;   
    var date = day.split("T");
    datearray = date[0].split("-");
    document.getElementById("day").innerHTML = datearray[1] + "/" + datearray[2] + "/" + datearray[0];

    var weather = conditions[0].WeatherText;
    document.getElementById("weather").innerHTML = weather;

    var temp = conditions[0].Temperature.Imperial;
    var currenttemp = temp.Value + " \u00B0" + temp.Unit;
    document.getElementById("temp").innerHTML = currenttemp;

}