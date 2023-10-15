<script src = "https://cdn.jsdelivr.net/npm/vue@2" setup>


import OpenAI from "openai";
import {ref} from 'vue'

let resp = ref("")

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Who is the creator of Fortnite" }],
    model: "gpt-3.5-turbo",
});

resp.value = chatCompletion.choices[0].message.content;

let app = Vue.createApp({
                data: function() {
                    return {
                        isVisible: false
                    }
                },
    methods: {
        displayDish() {
            // Your displayDish logic goes here
            console.log('Submit Flavors clicked');
        },
        getUserInput() {
            // Your getUserInput logic goes here
            console.log('Submit Button clicked');
        }
    }
});



</script>




<template>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Restaurantify</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="title">Restaurantify</h1>
    <form ::id="cityform">
        <label>Enter your location (city or address): </label>
        <input type="text" ::id="city">
    </form>

    <div class="content-parent">
        <div class="left">

            <div class="slider">
                <label for="fader">Star Rating </label>
                <input type="range" min="0" max="5" value="4" :id="fader" step="1" list="numStars1" oninput="rangeValue.innerText = this.value"> <p :id="rangeValue">4</p>
                <datalist ::id="numStars1">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </datalist>
            </div> 
            
            <div class="sliderPrice">
                <label for="fader1">Price </label>
                <input type="range" min="1" max="4" value="2" :id="fader1" step="1" list="price" oninput="rangeValue1.innerText = this.value"> <p :id="rangeValue1">2</p> $
                <datalist :id="price">
                    <option value="1"> </option>
                    <option value="2"> </option>
                    <option value="3"> </option>
                    <option value="4"> </option>
                </datalist>
            </div> 
            
            <div class="sliderReviews">
                <label for="fader2">Minimum Number of Reviews </label>
                <input type="range" min="0" max="300" value="60" :id="fader2" step="30" list="numReviews" oninput="rangeValue2.innerText = this.value"> <p :id="rangeValue2">60</p>
                <datalist :id="numReviews">
                    <option>0</option>
                    <option>30</option>
                    <option>60</option>
                    <option>90</option>
                    <option>120</option>
                    <option>150</option>
                    <option>180</option>
                    <option>210</option>
                    <option>240</option>
                    <option>270</option>
                    <option>300</option>
                </datalist>
            </div> 
            
            <div class="sliderDistance">
                <label for="fader3">Distance (miles) </label>
                <input type="range" min="0" max="25" value="10" :id="fader3" step="5" list="distance" oninput="rangeValue3.innerText = this.value"> <p :id="rangeValue3">10</p>
                <datalist :id="distance">
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                </datalist>
            </div>
            
            <div class="dropdown">
                <form>
                    <label for="cars">Choose a cuisine:</label>
                    <select name="cuisine" :id="cuisine">
                        <option value="Ethiopian">Ethiopian</option>
                        <option value="Sudanese">Sudanese</option>
                        <option value="Somali">Somali</option>
                        <option value="Kenyan">Kenyan</option>
                        <option value="Senegalese">Senegalese</option>
                        <option value="Nigerian">Nigerian</option>
                        <option value="Cameroonian">Cameroonian</option>
                        <option value="Ghanaian">Ghanaian</option>
                        <option value="Ethiopian">Ethiopian</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Indian">Indian</option>
                        <option value="Pakistani">Pakistani</option>
                        <option value="Afghani">Afghani</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Guatemalan">Ethiopian</option>
                        <option value="Bahamanian">Bahamanian</option>
                        <option value="Puerto Rican">Puerto Rican</option>
                        <option value="Dominican">Dominican</option>
                        <option value="Brazilian">Brazilian</option>
                        <option value="Argentinian">Argentinian</option>
                        <option value="Peruvian">Peruvian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="Italian">Italian</option>
                        <option value="Greek">Greek</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Lebanese">Lebanese</option>
                        <option value="Irani">Irani</option>
                        <option value="Iraqi">Iraqi</option>
                        <option value="Syrian">Syrian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Thai">Thai</option>
                        <option value="Cambodian">Cambodian</option>
                        <option value="Lao">Lao</option>
                        <option value="Filipino">Filipino</option>
                        <option value="Hawaiian">Hawaiian</option>
                        <option value="British">British</option>
                    </select>
                    <br><br>
                </form>
            </div>
            
            <div class="check-container">
                <label class="container">Open Now 
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                  
                  <label class="container">Wheelchair Accessible
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                  
                  <label class="container">Vegetarian-friendly
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                  
                  <label class="container">Outdoor Seating
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                
                  <label class="container">Takes Reservations
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
            </div>
            
            
            
            <div class="submit-parent">
                <input @click="getUserInput" type="button" :id="submitbutton" class="button" value="submit">
            </div>
            
          <div class="questionContainer">
            <div :id = "allergyQuestion" class="invisible">
                <form>
                    <label>Do you have any allergies? If so please list them or leave blank</label>
                    <input type="text" :id="allergyInput">
                </form>
            </div>
            
            <div :id = "meatQuestion" class="invisible">
                <legend :id = "meatText">Would you like a beef, chicken, pork, or vegetarian dish?</legend>
                
                  <div>
                    <input type="radio" :id="Beef" name="meat" value="Beef" checked />
                    <label :id = "meat">Beef</label>
                  </div>
                
                  <div>
                    <input type="radio" :id="Chicken" name="meat" value="Chicken" />
                    <label :id = "meat">Chicken</label>
                  </div>
            
                  <div>
                    <input type="radio" :id="Pork" name="meat" value="Pork" />
                    <label :id = "meat">Pork</label>
                  </div>  
                  
                  <div>
                    <input type="radio" :id="Vegetarian" name="meat" value="Vegetarian" />
                    <label :id = "meat">Vegetarian</label>
                  </div> 
            </div>
            
            <div :id = "spiceQuestion" class="invisible">
                <legend :id = "spiceText">Do you enjoy spice?</legend>
                
                  <div>
                    <input type="radio" :id="spiceYes" name="spice" value="Yes" checked />
                    <label>Yes</label>
                  </div>
                
                  <div>
                    <input type="radio" :id="spiceNo" name="spice" value="No" />
                    <label>No</label>
                  </div>
            </div>
            
            
            <div :id = "starchQuestion" class="invisible">
                <legend :id = "starchText">Would you like rice or noodles?</legend>
                
                  <div>
                    <input type="radio" :id="starchYes" name="starch" value="Rice" checked />
                    <label>Rice</label>
                  </div>
                
                  <div>
                    <input type="radio" :id="starchNo" name="starch" value="Noodles" />
                    <label>Noodles</label>
                  </div>
            </div>
            
            <div :id = "sweetQuestion" class="invisible">
                <legend :id = "sweetText">Are you opposed to a hint of sweetness in your entree?</legend>
                
                  <div>
                    <input type="radio" :id="sweetYes" name="sweet" value="Yes" checked />
                    <label>Yes</label>
                  </div>
                
                  <div>
                    <input type="radio" :id="sweetNo" name="sweet" value="No" />
                    <label>No</label>
                  </div>
            </div>
          </div>  
            
        </div>
        <div class="right">
            <div :id="recs">
                <h4>Restaurant recommendations</h4>
                <table :id="current">
                  <tr>
                    <th>Restaurant</th>
                    <th>Rating</th>
                    <th>Reviews</th>
                  </tr>
                  <tr>
                    <td :id="restaurant1"></td>
                    <td :id="rating1"></td>
                    <td :id="reviews1"></td>     
                  </tr>
                  <tr>
                    <td :id="restaurant2"></td>
                    <td :id="rating2"></td>
                    <td :id="reviews2"></td>
                  </tr>
                  <tr>
                    <td :id="restaurant3"></td>
                    <td :id="rating3"></td>
                    <td :id="reviews3"></td>
                  </tr>
                  <tr>
                    <td :id="restaurant4"></td>
                    <td :id="rating4"></td>
                    <td :id="reviews4"></td>
                  </tr>
                  <tr>
                    <td :id="restaurant5"></td>
                    <td :id="rating5"></td>
                    <td :id="reviews5"></td>
                  </tr>
                </table>
              </div>
        </div>
    </div>

    <input @click="displayDish" type="button" :id="submitFlavors" class="button" value="Submit">

    <!-- <script src="yelp.js"></script>  -->
</body>
</html>
    {{resp}}
</template>

<style> 
* {
    /* background-color: rgb(255, 255, 218); */
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

input {
    border: 2px solid rgb(144, 152, 176);
    border-radius: 3px;
    background-color: rgb(227, 231, 241);
}

h1 {
    padding-top: 3%;
}

#cityform, #cityname {
    padding-top: 1%;
}

#week, #current, h4 {
    margin-left: auto;
    margin-right: auto;
}

th, td {
    border: 1px solid;
    padding: 5px;
    text-align: center;
}

th {
    background-color: rgb(157, 206, 248);
}

td {
    background-color: rgb(227, 231, 241)
}

table {
    border-collapse: collapse;
}



body {
    background: white;
}
.slider {
    position: relative;
    top: 10%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 60px;
    padding: 20px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;
    display: flex;
    align-items: center;box-shadow: 0px 15px 40px #7E6D5766;
}
.slider label {
    font-size: 20px;
    font-weight: 400;
    font-family: Open Sans;
    padding-left: 10px;
    color: black;
}
.slider input[type="range"] {
    width: 420px;
    height: 2px;
    background: black;
    border: none;
    outline: none;
} 
   
.sliderPrice {
    position: relative;
    top: 15%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 60px;
    padding: 20px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;display: flex;align-items: center;box-shadow: 0px 15px 40px #7E6D5766;
}.sliderPrice label {
    font-size: 24px;font-weight: 400;font-family: Open Sans;padding-left: 10px;color: black;
}
.sliderPrice input[type="range"] {
    width: 420px;height: 2px;background: black;border: none;outline: none;
} 


.sliderReviews {
    position: relative;
    top: 20%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 60px;
    padding: 20px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0px 15px 40px #7E6D5766;
}.sliderReviews label {
    font-size: 20px;
    font-weight: 400;
    font-family: Open Sans;
    padding-left: 10px;color: black;
}
.sliderReviews input[type="range"] {
    width: 420px;
    height: 2px;
    background: black;
    border: none;
    outline: none;
} 

.sliderDistance {
    position: relative;
    top: 25%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 60px;
    padding: 20px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0px 15px 40px #7E6D5766;
}
.sliderDistance label {
    font-size: 24px;
    font-weight: 400;
    font-family: Open Sans;
    padding-left: 10px;
    color: black;
}
.sliderDistance input[type="range"] {
    width: 420px;height: 2px;
    background: black;
    border: none;
    outline: none;
} 

/* Dropdown Button */

.dropdown {
    color: black;
    padding: 5px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    position: relative;
    top: 25%;
    right: 15%;
    background-color:beige;
    display: inline-block;
  }
  
  
  /* The container <div> - needed to position the dropdown content */
  /* .dropdown {
    position: relative;
    top: 25%;
    right: 15%;
    background-color:beige;
    display: inline-block;
  } */
  

.check-container {
    display: block;
    position: relative;
    top: 35%;
    /* padding-top: 50%; */
    padding-right: 20%;
    /* z-index: -10; */
}  
  /* CHECKBOX Customize the label (the container) */
.container {
    display: block;
    position: relative;
    top: 32%; 
    padding-left: 10%;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    z-index: 150;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 20%;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  
  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
         
  /* Checkbox checked effect */
  .checkbox:checked + .toggle::after {
      left : 49px; 
  }
         
  /* Checkbox checked toggle label bg color */
  .checkbox:checked + .toggle {
      background-color: green;
  }
         
  /* Checkbox vanished */
  .checkbox { 
      display : none;
  }


.button {
    position: relative;
    top: 50%;
    right: 10%; 
    background-color: rgb(157, 206, 248);
    border: none;
    border-radius: 3px;
    padding: 8px 10px;
}

@media screen and (max-width: 444px) {
    .button {
        position: relative;
    }
}

.questionContainer {
    display: block;
    position: relative;
    top: 50%;
    /* padding-top: 50%; */
    padding-right: 20%;
    /* z-index: -10; */
} 

#allergyQuestion{
    position: relative;
    top: 90%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 30px;
    padding: 10px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0px 15px 20px #7E6D5766;
}

#meatQuestion{
    position: relative;
    top: 100%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 30px;
    padding: 10px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0px 15px 40px #7E6D5766;
}

#spiceQuestion{
    position: relative;
    top: 110%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 30px;
    padding: 10px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0px 15px 40px #7E6D5766;
}

#starchQuestion{
    position: relative;
    top: 130%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 30px;
    padding: 10px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0px 15px 40px #7E6D5766;
}

#sweetQuestion{
    position: relative;
    top: 130%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 30px;
    padding: 10px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0px 15px 40px #7E6D5766;
}

#meat{
    font-size: small;
}

#allergyInput{
    width:300px
}

.invisible{
    visibility: hidden;
}

.submit-parent {
    display:flex;
    justify-content: center !important;
}

.content-parent {
    display: flex;
    justify-content: space-between;
}

#submitFlavors{
    position: absolute;
    top: 300%;
    left: 30%;
    transform: translate(-30%,-30%);
    width: 500px;
    height: 30px;
    padding: 10px;
    padding-left: 10px;
    background: #fcfcfc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0px 15px 40px #7E6D5766;
}

#submitFlavors:hover{
    cursor:grab
}

#submitbutton:hover{
    cursor:grab
}
</style>