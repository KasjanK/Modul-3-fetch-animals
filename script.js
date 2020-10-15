// get the html element that displays an image
const getImage = document.querySelector(".image");
// get the html element for the button
const fetchButton = document.querySelector(".btn");

// a button that runs the function to generate a picture
fetchButton.addEventListener("click", fetchImage);

// tests the value in the dropdown and fetches a pic based on the value
function fetchImage() {
  let animal = document.querySelector(".animal-selector").value;
  if (animal == "Cat") {
    fetchCatImage();
  } else if (animal == "Dog") {
    fetchDogImage();
  } else if (animal == "Fox") {
    fetchFoxImage();
  }
}

// function to fetch cat images
function fetchCatImage() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
      getImage.innerHTML = `<img src="${data.file}"/>`;
    });
}

// function to fetch dog images
function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      getImage.innerHTML = `<img src="${data.message}"/>`;
    });
}

// function to fetch fox images
function fetchFoxImage() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((data) => {
      getImage.innerHTML = `<img src="${data.image}"/>`;
    });
}
