const apikey = "Bearer uiXTjOetV4sMDc4azxklccywMklJueCLj071X6Wii7lnOLr-7WBjn7Om1DXQTibS78ryOn3bMb8rsCKNWBeD3ccaiWugRttPSTVYJxE6o0D1R2rp2oXBlzcROd4qZXYx"

document.getElementById("submitbutton").addEventListener("click", getUserInput, false);


function getUserInput(){   
    // Setting variable for form input (get from HTML form)
    var location = document.getElementById("city").value;
    document.getElementById("city").value = "";

    var cuisine = document.getElementById("cuisine").value;
    var rating = parseFloat(document.getElementById("fader").value);
    var price = parseInt(document.getElementById("fader1").value);
    var reviews = parseInt(document.getElementById("fader2").value);
    var radius = parseInt(document.getElementById("fader4").value) * 1600;

    // checkboxes
    // var reservation = document.getElementById("").value;
    // var outdoor_seating = document.getElementById("").value;
    // var wheelchair_accessible = document.getElementById("").value;
    // var open_now = document.getElementById("").value;
    // var veg_friendly = document.getElementById("").value;


    //let url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+location+"&term="+cuisine+"&radius="+radius+"&open_now="+open_now+"&attributes="+reservation+"&attributes="+outdoor_seating+"&attributes="+wheelchair_accessible+"attributes="+veg_friendly+"&categories=&sort_by=rating&limit=50";
    let url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+location+"&term="+cuisine+"&radius="+radius+"&categories=&sort_by=rating&limit=50";


    getRestaurants(url, reviews, price, rating);

}

function getRestaurants(url, reviews, price, rating){
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

        const filtered = [];
        var restaurants = response.businesses;

        let i = 0;
        let j = 0;
        while (i < restaurants.length) {
            if (j >= 5){
                break;
            }
            else {
                if (('review_count' in restaurants[i]) && ('rating' in restaurants[i]) && ('price' in restaurants[i])){
                    var newPrice = 1;
                    if (restaurants[i].price == "$"){
                        newPrice = 1;
                    }
                    else if (restaurants[i].price == "$$"){
                        newPrice = 2;
                    }
                    else if (restaurants[i].price == "$$$"){
                        newPrice = 3;
                    }
                    else {
                        newPrice = 4;
                    }

                    if ((restaurants[i].review_count >= reviews) && (restaurants[i].rating >= rating) && (newPrice >= price)){
                        filtered[j] = restaurants[i];
                        j++;
                    }             
                }
            }
            i++;
        }

        console.log(filtered);

        // show restaurants in table
        for (var k = 0; k < filtered.length; k++){
            var num = k+1;

            var link = document.createElement("a");
            link.setAttribute("href", filtered[k].url);

            var linkText = document.createTextNode(filtered[k].name);
            link.appendChild(linkText);

            document.getElementById("restaurant"+num).appendChild(link);
            document.getElementById("rating"+num).innerHTML = filtered[k].rating;
            document.getElementById("reviews"+num).innerHTML = filtered[k].review_count;
        }
        
    });
}

const eastAfrica = ["Ethiopian", "Eritrean", "Sudanese", "Somali", "Kenyan"];
const westAfrica = ["Senegalese", "Nigerian", "Cameroonian", "Ghanaian"];
const indianSubCont = ["Bangladeshi", "Bengali", "Indian", "Pakistani", "Afghani"];
const centralAmerica = ["Mexican", "Guatemalan"];
const caribbean = ["Bahamanian", "Puerto Rican", "Dominican"]
const southAmerica = ["Brazilian", "Argentinian", "Peruvian"];
const westEurope = ["Spanish", "French"];
const Italy = ["Italian"];
const ottoman = ["Greek", "Turkish"];
const middleEast = ["Lebanese", "Irani", "Iraqi", "Syrian"];
const eastAsia = ["Chinese", "Japanese", "Korean"];
const vietnam = ["Vietnamese"];
const seAsia = ["Thai", "Cambodian", "Lao", "Philippines"];

// $.ajax({
//   type: "POST",
//   url: "./backend/celebrity.py",
//   data: { param: text},
//   dataType: "text",
// }).done(function( o ) {
//    dish = get_chatgpt_response(input_string);
// });

function displayQuestionnaire(){

  document.getElementById("spiceQuestion").classList.remove("invisible");
  document.getElementById("vegQuestion").classList.remove("invisible");
  document.getElementById("meatQuestion").classList.remove("invisible");

  cuisine = document.getElementById("cuisine").value;
  if(eastAfrica.includes(cuisine)){

  }
  else if(eastAsia.includes(cuisine)){
    document.getElementById("starchQuestion").classList.remove("invisible");
  }
  else if(vietnam.includes(cuisine)){

  }
  else if(seAsia.includes(cuisine)){
    document.getElementById("sweetQuestion").classList.remove("invisible");
  }
  else if(westAfrica.includes(cuisine)){

  }
  else if(indianSubCont.includes(cuisine)){

  }
  else if(centralAmerica.includes(cuisine)){

  }
  else if(caribbean.includes(cuisine)){

  }
  else if(southAmerica.includes(cuisine)){

  }
  else if(westEurope.includes(cuisine)){

  }
  else if(Italy.includes(cuisine)){

  }
  else if(ottoman.includes(cuisine)){

  }
  else if(middleEast.includes(cuisine)){

  }
  


}
