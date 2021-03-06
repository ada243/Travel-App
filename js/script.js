const results = document.querySelectorAll(".result");
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
        (error) => {
            console.log("bad request", error)
        });
    }
    ////////////////////ajax request to bing image search api in order to get thumbnail for each search result///////////////////////////////////////
        function render() {
        console.log(flightData.Carriers[0].Name)
        console.log(flightData.Places[1].Name)
        console.log(`${flightData.Currencies[0].Symbol}` + `${flightData.Quotes[0].MinPrice}`)
        let date = flightData.Quotes[0].OutboundLeg.DepartureDate
        let newDate = date.split("").splice(0, (date.length-9)).join("");
        
        for (let i = 0; i < results.length ; i++){
                $(results[i]).append(`<p>${flightData.Carriers[i].Name}`)
                $(results[i]).append(`<p>${flightData.Places[1].Name}<p>`)
                $(results[i]).append(`<p>${flightData.Currencies[0].Symbol}` + `${flightData.Quotes[i].MinPrice}`)
                $(results[i]).append(`<p>${newDate}<p>`)
                if(flightData.Quotes[i].Direct){
                    $(results[i]).append(`<p>Direct Flight!<p>`)
                } else {
                    $(results[i]).append(`<p>This flight has stops<p>`)
                }
        }
    }
    
    console.log($(results[0]))
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    