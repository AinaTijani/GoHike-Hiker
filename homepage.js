//displaying API at HTML page
function buttonClicked(){
    var city=document.getElementById("city_input").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    
        .then((response) => response.json())
        .then((data) => {
            var info=data
            console.log("Country : ",info.sys.country)
            console.log("City : ",info.name)
            //console.log("Icon Code : ",info.weather[0].icon)
            console.log("The Weather : ",info.weather[0].description)
            console.log("The Humidity :",info.main.humidity)
            console.log("The Wind Speed :",info.wind.speed)
            console.log("The Degree :",info.wind.deg)
            console.log("The Temp Celcius :",info.main.temp)

           // var iconcode = info.weather[0].icon;
            //var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png"; 

                console.log(data)
                document.getElementById("country").append(info.sys.country)
                document.getElementById("name").append(info.name)
                //document.getElementById("icon").append(iconurl)
                document.getElementById("description").append(info.weather[0].description)
                document.getElementById("humidity").append("The Humidity : ",info.main.humidity," %")
                document.getElementById("degree").append("The Degree : ",info.wind.deg," °")
                document.getElementById("speed").append("The Wind Speed : ",info.wind.speed," ff")
                document.getElementById("temp").append("The Temp : ",info.main.temp," °C" )
        })
        .catch(() => {
            console.log("Please search for a valid city 😩")
            document.getElementById("invalid").append("Please search for a valid city 😩")
        });
    }
    




