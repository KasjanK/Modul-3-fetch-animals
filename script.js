const getImage = document.querySelector(".image");
const fetchButton = document.querySelector(".btn");

fetchButton.addEventListener("click", fetchImage);

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

function fetchCatImage() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
      getImage.innerHTML = `<img src="${data.file}"/>`;
    });
}

function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      getImage.innerHTML = `<img src="${data.message}"/>`;
    });
}

function fetchFoxImage() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((data) => {
      getImage.innerHTML = `<img src="${data.image}"/>`;
    });
}
