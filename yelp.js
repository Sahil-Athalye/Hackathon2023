const apikey = "Bearer uiXTjOetV4sMDc4azxklccywMklJueCLj071X6Wii7lnOLr-7WBjn7Om1DXQTibS78ryOn3bMb8rsCKNWBeD3ccaiWugRttPSTVYJxE6o0D1R2rp2oXBlzcROd4qZXYx"

document.getElementById("submitbutton").addEventListener("click", getUserInput, false);


function getUserInput(){   
    // Setting variable for form input (get from HTML form)
    var location = document.getElementById("city").value;
    document.getElementById("city").value = "";

    var term = "food"; // change this to cuisine drop down

    var rating = document.getElementById("fader").value;
    var price = document.getElementById("fader1").value;
    var reviews = document.getElementById("fader2").value;
    var radius = parseInt(document.getElementById("fader4").value) * 1600;

    console.log(location);
    console.log(rating);
    console.log(price);
    console.log(reviews);
    console.log(radius);

    let url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+location+"&term=indian&radius="+radius+"&categories=&sort_by=rating&limit=50";

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
                if ((restaurants[i].review_count >= reviews) && (restaurants[i].rating >= rating) && (restaurants[i].price >= price)){
                    filtered[j] = restaurants[i];
                    j++;
                }
                i++;
            }
        }

        console.log(filtered);
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

$.ajax({
  type: "POST",
  url: "./backend/celebrity.py",
  data: { param: text},
  dataType: "text",
}).done(function( o ) {
   dish = get_chatgpt_response(input_string);
});

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
