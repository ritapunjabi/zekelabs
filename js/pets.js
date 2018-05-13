var pets = [];
var breeds = [];
var petsDiv = document.getElementById('pets');
var category;
var breedName;

var filterDiv = document.getElementById('filter');

function getPets(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            var file = new File([this.response], 'temp');
            var fileReader = new FileReader();
            fileReader.addEventListener('load', function() {
                pets = JSON.parse(fileReader.result);
                if (!category) {
                    pets.map(function(pet) {

                        displayData(pet);

                    })
                } else {
                    while (petsDiv.firstChild) {
                        petsDiv.removeChild(petsDiv.firstChild);
                    }

                    pets.map(function(pet) {
                        if (pet.name == category) {
                            displayData(pet);
                        }
                    })
                }
            });
            fileReader.readAsText(file);
        }
    }
    xhr.send();
}

function getBreeds(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            var file = new File([this.response], 'temp');
            var fileReader = new FileReader();
            fileReader.addEventListener('load', function() {
                breeds = JSON.parse(fileReader.result);
                breeds.map(function(breed) {
                    displayFilter(breed.name, breed.breed);
                });
            });
            fileReader.readAsText(file);
        }
    }
    xhr.send();
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function displayData(pet) {
    var col = createNode('div');
    var card = createNode('div');
    var details = createNode('div');
    var div1 = createNode('div');
    var div2 = createNode('div');


    var imgdiv = createNode('div');
    var img = createNode('img');
    var description = createNode('p');

    var animalName = createNode('p');
    var age = createNode('p');
    var gender = createNode('p');
    var cost = createNode('p');
    var breed = createNode('p');


    col.setAttribute('class', 'col-md-4');
    card.setAttribute('class', 'pet-card');
    img.setAttribute('src', pet.url);
    img.setAttribute('class', 'pet-img');
    imgdiv.setAttribute('class', 'pet-img-div');
    animalName.setAttribute('class', 'animal-name');
    description.setAttribute('class', 'animal-description');
    age.setAttribute('class', 'animal-age');
    cost.setAttribute('class', 'animal-cost');
    gender.setAttribute('class', 'animal-gender');
    details.setAttribute('class', 'animal-details');
    breed.setAttribute('class', 'animal-breed');
    div1.setAttribute('class', 'detail-content');
    div2.setAttribute('class', 'detail-content');


    animalName.innerHTML = "<span>Animal:</span> " + pet['name'];
    breed.innerHTML = "<span>Breed:</span> " + pet['breed'];
    gender.innerHTML = "<span>Gender:</span> " + pet['gender'];
    cost.innerHTML = "<span>Cost:</span> ₹" + pet['cost'];
    age.innerHTML = "<span>Age:</span> " + pet['age'];

    append(div1, animalName);
    append(div1, breed);

    append(details, div1);
    append(div2, gender);
    append(div2, age);
    append(details, div2);

    append(details, cost);




    append(imgdiv, img);
    append(card, imgdiv);
    append(card, details);
    append(col, card);
    append(petsDiv, col);

}

function displayFilter(name, breeds) {
    console.log(name);
    var div = document.getElementById(name);
    breeds.map(function(breed) {
        var button = createNode('button');
        button.innerHTML = breed;
        button.setAttribute('class', 'breed-button');
        button.addEventListener('click', function() {
            while (petsDiv.firstChild) {
                petsDiv.removeChild(petsDiv.firstChild);
            }

            pets.map(function(pet) {
                if (pet.breed == breed) {
                    displayData(pet);
                }
            })
        });
        append(div, button);
    });

}

function getParam() {
    var value = window.location.search.substring(1).split('=');
    return value[1];
}



$(document).ready(function() {
    category = getParam();
    getPets('pets.json');
    getBreeds('breeds.json');

    $('#search').keyup(function() {
        // console.log('pressed');
        while (petsDiv.firstChild) {
            petsDiv.removeChild(petsDiv.firstChild);
        }
        var query = $(this).val();

        var expression = new RegExp(query, "i");

        pets.map(function(pet) {
            if ((pet.name.search(expression) != -1) || (pet.breed.search(expression) != -1)) {
                displayData(pet);
            }
        })

    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}