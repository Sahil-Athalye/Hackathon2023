const apikey = "Bearer uiXTjOetV4sMDc4azxklccywMklJueCLj071X6Wii7lnOLr-7WBjn7Om1DXQTibS78ryOn3bMb8rsCKNWBeD3ccaiWugRttPSTVYJxE6o0D1R2rp2oXBlzcROd4qZXYx"

document.getElementById("submitFlavors").addEventListener("click", displayDish, false);
document.getElementById("submitbutton").addEventListener("click", getUserInput, false);

let starch = false;
let sweet = false;

function getUserInput(){  
    // clear table with new user input
    for (var k = 0; k < 5; k++){
        var num = k+1;
        document.getElementById("restaurant"+num).innerHTML = "";
        document.getElementById("rating"+num).innerHTML = "";
        document.getElementById("reviews"+num).innerHTML = "";
    }
    
    // get all user inputs
    var location = document.getElementById("city").value;
    document.getElementById("city").value = "";

    var cuisine = document.getElementById("cuisine").value;
    var rating = parseFloat(document.getElementById("fader").value);
    var price = parseInt(document.getElementById("fader1").value);
    var reviews = parseInt(document.getElementById("fader2").value);
    var radius = parseInt(document.getElementById("fader3").value) * 1600;

    // get checkbox input
    var checkboxes = document.getElementsByName('box');
    var result = [];
    for (var i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked){
            result[i] = checkboxes[i].value;
        }
        else {
            result[i] = "";
        }
    }

    // convert checkbox input to string for api url
    var open_now = false;
    var wheelchair_accessible, veg_friendly, outdoor_seating, reservation = "";
    if (result[0] == "open_now"){
        open_now = true;
    }
    if (result[1] == "wheelchair_accessible"){
        wheelchair_accessible = "wheelchair_accessible";
    }
    if (result[2] == "veg_friendly"){
        veg_friendly = "veg_friendly";
    }
    if (result[3] == "outdoor_seating"){
        outdoor_seating = "outdoor_seating";
    }
    if (result[4] == "reservation"){
        reservation = "reservation";
    }



    let url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+location+"&term="+cuisine+"&radius="+radius+"&open_now="+open_now+"&attributes="+reservation+"&attributes="+outdoor_seating+"&attributes="+wheelchair_accessible+"attributes="+veg_friendly+"&categories=&sort_by=rating&limit=50";
    //let url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+location+"&term="+cuisine+"&radius="+radius+"&categories=&sort_by=rating&limit=50";

    getRestaurants(url, reviews, price, rating);
    displayQuestionnaire();

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

function displayQuestionnaire(){

    document.getElementById("allergyQuestion").classList.remove("invisible");
  
    document.getElementById("meatQuestion").classList.remove("invisible");
  
    document.getElementById("spiceQuestion").classList.remove("invisible");
  
    
    cuisine = document.getElementById("cuisine").value;
    
    if(eastAsia.includes(cuisine)){
      document.getElementById("starchQuestion").classList.remove("invisible");
      starch = true;
      document.getElementById("sweetQuestion").classList.add("invisible");
    }
    else if(seAsia.includes(cuisine)){
      document.getElementById("sweetQuestion").classList.remove("invisible");
      sweet = true;
      document.getElementById("starchQuestion").classList.add("invisible");
    }
    else{
      document.getElementById("sweetQuestion").classList.add("invisible");
      document.getElementById("starchQuestion").classList.add("invisible");
      starch = false;
      sweet = false;
    }
    // else if(vietnam.includes(cuisine)){
      
    // }
    // else if(eastAfrica.includes(cuisine)){
  
    // }
    // else if(westAfrica.includes(cuisine)){
  
    // }
    // else if(indianSubCont.includes(cuisine)){
  
    // }
    // else if(centralAmerica.includes(cuisine)){
  
    // }
    // else if(caribbean.includes(cuisine)){
  
    // }
    // else if(southAmerica.includes(cuisine)){
  
    // }
    // else if(westEurope.includes(cuisine)){
  
    // }
    // else if(Italy.includes(cuisine)){
  
    // }
    // else if(ottoman.includes(cuisine)){
  
    // }
    // else if(middleEast.includes(cuisine)){
  
    // }
    
  }
  
  function displayDish(){
    const input_strings = [];
  
    //allergy input
    if(document.getElementById('allergyInput').value==""){
      input_strings.push("null");
    }
    else{
      input_strings.push(document.getElementById('allergyInput').value);
    }
  
    //meat choice input
    if(document.getElementById('Beef').checked) {
      input_strings.push("beef");
    }
    if(document.getElementById('Pork').checked) {
      input_strings.push("pork");
    }
    if(document.getElementById('Chicken').checked) {
      input_strings.push("chicken");
    }
    else{
      input_strings.push("vegetarian");
    }
  
    //spice input
    if(document.getElementById('spiceYes').checked) {
      input_strings.push("spicy");
    }
    else{
      input_strings.push("");
    } 
  
    if(sweet){
      if(document.getElementById('sweetYes').checked) {
        input_strings.push("sweet");
      }
      else{
        input_strings.push("");
      } 
    }
  
    if(starch){
      if(document.getElementById('Rice').checked) {
        input_strings.push("rice");
      }
      else{
        input_strings.push("noodles");
      } 
    }
  

    var cuisine = document.getElementById("cuisine").value;

    var query = "Give me the name and only the name of a ";

    if(input_strings[2]=="spicy"){
      query = query + "spicy"
    }

    query = query + cuisine + " " + input_strings[1] + " dish ";

    if(sweet&&input_strings[3]==""){
      query = query + " that has no sugar, ";
    }

    if(starch&&input_strings.length==4){
      if(input_strings[3]=="rice"){
        query = query + " and can be eaten with rice, ";
      }
      if(input_strings[3]=="noodles"){
        query = query + " and can be eaten with noodles, ";
      }

    }

    if(input_strings[0]!="null"){
      query = query + "and does not contain " + input_strings[0];
    }

    console.log(query);






  }