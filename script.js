let url = `https://restcountries.com/v2/all`


// let weather =`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c787dcfe61e384aefb7f7e7c75b911a9`

async function data_fetch(){


let url_fetch =await fetch(url)

let res = await url_fetch.json()

console.log(res);




//------------- Afghanistan------------------------//







let afgan_title =res[0].name;
let afgan_flag =res[0].flag;
let afgan_capital =res[0].capital;
let afgan_region =res[0].region;
let afgan_code =res[0].alpha3Code;


//------------- Åland Islands------------------------//

let island_title =res[1].name;
let island_flag =res[1].flag;
let island_capital =res[1].capital;
let island_region =res[1].region;
let island_code =res[1].alpha3Code;


//------------- Albania------------------------//


let albania_title =res[2].name;
let albania_flag =res[2].flag;
let albania_capital =res[2].capital;
let albania_region =res[2].region;
let albania_code =res[2].alpha3Code;

//------------- After decleration------------------------//

try{

let container =document.querySelector('#container')


container.innerHTML =`<div class="row">




<div class="col-lg-4 col-sm-12">

    <div class="card " id="hello_card" style="width: 18rem; height: 30.2rem;">
        <h5 class="card-title text-center bg-dark text-white p-2">${afgan_title}</h5>
        <img src="${afgan_flag}" class="card-img-top" alt="Afgan_Flag">
        <div class="card-body text-center mt-5 bag">
        <div class=" mt-1 py-2">
          <p class="card-text">Captial : ${afgan_capital} </p>
          <p class="card-text">Region : ${afgan_region} </p>
          <p class="card-text">Country Code :  ${afgan_code} </p>
          <button class="btn btn-outline-dark" onclick="check_weather()">Click For Weather</button>
          </div>
        </div>
      </div>

</div>
<div class="col-lg-4 col-sm-12">
    
    <div class="card bag"  style="width: 18rem;height: 30.2rem;">
        <h5 class="card-title text-center bg-dark text-white p-2">${island_title}</h5>
        <img src="${island_flag }" class="card-img-top" alt="Island_Flag">
        <div class="card-body text-center mt-3 ">
       
          <p class="card-text"> Captial : ${island_capital} </p>
          <p class="card-text">Region :  ${island_region}  </p>
          <p class="card-text"> Country Code :  ${island_code} </p>
          <button class="btn btn-outline-dark" onclick="check_weather1()">Click For Weather</button>
          
        </div>
      </div>

</div>
<div class="col-lg-4 col-sm-12">
    
    <div class="card bag" style="width: 18rem; heigth: 28rem; ">
        <h5 class="card-title text-center bg-dark text-white p-2">${albania_title}</h5>
        <img src="${albania_flag }" class="card-img-top" alt="Albania_Flag">
        <div class="card-body text-center ">
        <p class="card-text"> Captial : ${albania_capital} </p>
          <p class="card-text">Region :  ${albania_region}  </p>
          <p class="card-text"> Country Code :  ${albania_code} </p>
          <button class="btn btn-outline-dark" onclick="check_weather2()">Click For Weather</button>
        </div>
      </div>

</div>

</div>`



for (let index = 0; index < 3; index++) {
    const element = res[index];
    console.log(element);
}


}
catch(err){

console.log('oops',err);

}


}
function check_weather(){
 
  let weather = `https://api.openweathermap.org/data/2.5/weather?lat=33&lon=65&exclude=current&appid=c787dcfe61e384aefb7f7e7c75b911a9&units=metric`;

  weather_res(weather)
 
 }
 function check_weather1(){
 
  let weather = `https://api.openweathermap.org/data/2.5/weather?lat=60.116667&lon=19.9&exclude=current&appid=c787dcfe61e384aefb7f7e7c75b911a9&units=metric`;

  weather_res(weather)
 
 }
 function check_weather2(){
 
  let weather = `https://api.openweathermap.org/data/2.5/weather?lat=41&lon=20&exclude=current&appid=c787dcfe61e384aefb7f7e7c75b911a9&units=metric`;

  weather_res(weather)
 
 }





async function weather_res(weather){

  try{
    let weather_fetch =await fetch(weather)
 
  let weather_res = await weather_fetch.json()
 
 console.log(weather_res);

let {temp,humidity,pressure}=weather_res.main;

let weather_report =weather_res.weather[0].description;

let {country,sunrise,sunset}=weather_res.sys;

let {deg,speed}=weather_res.wind;

console.log(country);

console.log(weather_report);
//  var celcius=weather_res.main.temp
//  var celcius=weather_res.main.temp
//  var celcius=weather_res.main.temp





console.log("hello");


let body1=document.querySelector('#body1');

body1.classList.add('baground')


body1.innerHTML =`

<div class="blur"></div>

<div class="chy">

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" onclick="close_check_weather()" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>

<h1 class="py-1">

The weather report of ${country}

</h1>


<p class="temp">
<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-cloud-hail" viewBox="0 0 16 16">
  <path d="M13.405 4.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.5H13a3 3 0 0 0 .405-5.973zM8.5 1.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.5zM3.75 15.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zM7.75 15.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm3.592 3.724a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm.408-3.724a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316z"/>
</svg>
${temp}<span>&#176;</span>C

</p>

<p>

weather : ${weather_report}

</p>


<p>

temperature : ${temp}

</p>


<p>

pressure : ${pressure}

</p>


<p>

humidity : ${humidity}

</p>


<p>

sunrise : ${sunrise}

</p>


<p>

sunset : ${sunset}

</p>

</div>`

let chy =document.querySelector('.chy');
chy.classList.add('chy1');



}




catch(err){


 console.log(err);

}

}

function close_check_weather(){
  let weather = `https://api.openweathermap.org/data/2.5/weather?lat=33&lon=65&exclude=current&appid=c787dcfe61e384aefb7f7e7c75b911a9`;

  let chy =document.querySelector('.chy');
  chy.classList.remove('chy1');
  data_fetch()
  
  location.reload();




}







data_fetch()
