const $searchResults = $(".results");
// console.log($searchResults[0]);
const $from = $('#from[type ="text"]');
const $to = $('#to[type ="text"]');
const $depart = $('#depart[type ="text"]');
const $return = $('#return[type ="text"]');
console.log($from)
let flightData, userInput;

$("form").on("submit", handleGetData);

function handleGetData(event) {
    event.preventDefault();
    fromInput = $from.val();
    toInput = $to.val();
    departInput = $depart.val();
    returnInput = $from.val();
    $.ajax({ //this object is from rapidAPI - this was inserted in order to make my requests. I changed the url to a template literal in order to utilize user inputs from my form
        "async": true,
        "crossDomain": true,
        "url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${fromInput}-sky/${toInput}-sky/${departInput}?inboundpartialdate=${returnInput}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9f296441ffmshcb119ed2fce7445p18c778jsn306eba6172bb",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    }).then(
        (data) => {
            flightData = data;
            console.log(flightData)
            render();
        },
        (error) =>{
            console.log("bad request", error)
        }
        );
    }
    
    function render() {
        console.log(flightData.Carriers[0].Name)
        console.log(flightData.Places[1].Name)
        console.log(`${flightData.Currencies[0].Symbol}` + `${flightData.Quotes[0].MinPrice}`)
    
        // $weatherFor.text(userInput);
        // $temp.text(weatherData.main.temp);
        // $feelsLike.text(weatherData.main.feels_like);
        // $weather.text(weatherData.weather[0].description);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // const settings = {
    // 	"async": true,
    // 	"crossDomain": true,
    // 	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-09-01?inboundpartialdate=2019-12-01",
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-key": "9f296441ffmshcb119ed2fce7445p18c778jsn306eba6172bb",
    // 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    // 	}
    // };
    
    // $.ajax({
    //     "async": true,
    // 	"crossDomain": true,
    // 	"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-09-01?inboundpartialdate=2019-12-01",
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-key": "9f296441ffmshcb119ed2fce7445p18c778jsn306eba6172bb",
    // 		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    // }).done(function (response) {
    //     console.log(response);
    // });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////