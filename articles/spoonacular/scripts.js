// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.spoonacular.com/recipes/random?apiKey=aeda4085000548d1aa40414a342ba05f&number=1&tags=vegetarian,dessert', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    document.getElementById("root").innerHTML = data['recipes']['0']["title"];
    document.getElementById("myImageId").src = data['recipes']['0']["image"];
    document.getElementById("instructions").innerHTML = data['recipes']['0']["instructions"];


    console.log(Object.keys(data['recipes']['0']))

}

// Send request
request.send()

