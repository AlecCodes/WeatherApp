const baseURL = "https://api.openweathermap.org/data/2.5/weather?q="

const apiKey = '45ac4a50c3ae018192f8abe6fa883836'

const lat = '32.7162'
const lon = '-117.1324'



function locator(city){
    const url = `${baseURL}${city}&appid=${apiKey}&units=imperial`

    const promise = $.ajax(url)

    promise.then(data => {

        $main = $('main')
        $main.empty()

        $main.append($("<div>").html("Weather for: " + data.name))
        $main.append($("<div>").html("Temperature: " + data.main["temp"] + '°F' ))
        $main.append($("<div>").html("Feels like: " + data.main["feels_like"]+'°F'))
        console.log(data)
        $main.append($("<div>").html("Weather: " + data.weather[0].main))
        console.log(data)        
        }
    )    
}

$('form').on('submit', (event) => {
    event.preventDefault()
    const inputText = $('input[type = text]').val()

    locator(inputText)
    $('input[type = text]').val("")
})


