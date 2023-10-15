const apikey = "Bearer uiXTjOetV4sMDc4azxklccywMklJueCLj071X6Wii7lnOLr-7WBjn7Om1DXQTibS78ryOn3bMb8rsCKNWBeD3ccaiWugRttPSTVYJxE6o0D1R2rp2oXBlzcROd4qZXYx"
document.getElementById("submitbutton").addEventListener("click", getRestaurantsByCity, false);

function getRestaurantsByCity(){   
    // Setting variable for form input (get from HTML form)
    var location = document.getElementById("city").value;
    document.getElementById("city").value = "";

    var term = document.getElementById("").value;
    document.getElementById("").value = "";

    let url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + location + "&term=" + term +"&radius=10000&categories=&price=2&open_now=true&attributes=&sort_by=rating&limit=20";

    const settings = {
        async: true,
        crossDomain: true,
        url: url,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apikey
        }
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(response.businesses);
      });

    //   getRating(response);
}
