var request = new XMLHttpRequest()
const p = document.createElement('p')
const app = document.getElementById('root')


function getRandom() {
    request.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            //console.log(data.meals[0]);

            //image from receipe
            var image = data.meals[0].strMealThumb;

            //new line after point end phrase.
            var res = data.meals[0].strInstructions.replaceAll(".", ".<br>");
            console.log(res);


            document.getElementById("country").innerHTML = '<i class="fa fa-flag" aria-hidden="true"></i> : ' + data.meals[0].strArea;
            document.getElementById("meals").innerHTML = '<i class="fas fa-book"></i> : ' + data.meals[0].strMeal + '<br> <br>';
            document.getElementById("cats").innerHTML = '<i class="fas fa-utensils"></i> : ' + data.meals[0].strCategory;
            document.getElementById("recettes").innerHTML = res;
            document.getElementById("image-thumb").src = data.meals[0].strMealThumb;

            //background style
            document.getElementById("ban").style.background = 'url(' + image + ')';
            document.getElementById("ban").style.backgroundRepeat = "no-repeat";
            document.getElementById("ban").style.backgroundPosition = "center top";
            document.getElementById("ban").style.backgroundSize = "cover";
            //ingredients + mesures


            //

            var ingredients = [
                data.meals[0].strMeasure1 + " " + data.meals[0].strIngredient1,
                data.meals[0].strMeasure2 + " " + data.meals[0].strIngredient2,
                data.meals[0].strMeasure3 + " " + data.meals[0].strIngredient3,
                data.meals[0].strMeasure4 + " " + data.meals[0].strIngredient4,
                data.meals[0].strMeasure5 + " " + data.meals[0].strIngredient5,
                data.meals[0].strMeasure6 + " " + data.meals[0].strIngredient6,
                data.meals[0].strMeasure7 + " " + data.meals[0].strIngredient7,
                data.meals[0].strMeasure8 + " " + data.meals[0].strIngredient8,
                data.meals[0].strMeasure9 + " " + data.meals[0].strIngredient9,
                data.meals[0].strMeasure10 + " " + data.meals[0].strIngredient10,
                data.meals[0].strMeasure11 + " " + data.meals[0].strIngredient11,
                data.meals[0].strMeasure12 + " " + data.meals[0].strIngredient12,
                data.meals[0].strMeasure13 + " " + data.meals[0].strIngredient13,
                data.meals[0].strMeasure14 + " " + data.meals[0].strIngredient14,
                data.meals[0].strMeasure15 + " " + data.meals[0].strIngredient15,
                data.meals[0].strMeasure16 + " " + data.meals[0].strIngredient16,
                data.meals[0].strMeasure17 + " " + data.meals[0].strIngredient17,
                data.meals[0].strMeasure18 + " " + data.meals[0].strIngredient18,
                data.meals[0].strMeasure19 + " " + data.meals[0].strIngredient19,
                data.meals[0].strMeasure20 + " " + data.meals[0].strIngredient20,
            ];
            var ul = document.getElementById("ingredients");
            ul.innerHTML = "";

            for (var i = 0; i < ingredients.length; i++) {

                var ingredient = ingredients[i];
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(ingredient));
                ul.appendChild(li);
            }

            //document.body.style.backgroundImage = "url(" + data.meals[0].strMealThumb + ")";
            //document.getElementById('image-thumb').style.backgroundImage = data.meals[0].strMealThumb;

            //document.getElementById('image-thumb').style.background - image = 'imageX.gif';
            //var el = document.getElementById('image-thumb');
            //el.style.backgroundImage = "url(" + data.meals[0].strMealThumb + ")";
            //document.getElementById("image-thumb").style.backgroundImage = "url(" + data.meals[0].strMealThumb + ")";



        } else {
            console.log('error')
        }
    }

    request.send()
}

window.onload = getRandom();