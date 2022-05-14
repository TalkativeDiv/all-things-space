// 	Variables
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const BASE_URL = "http://api.open-notify.org/iss-now.json";
const astrosURL = "http://api.open-notify.org/astros.json";
const mapURL =
  "https://api.mapbox.com/styles/v1/talkativediv/cl2xp846t003c14mxg639tkec.html?title=false&access_token=pk.eyJ1IjoidGFsa2F0aXZlZGl2IiwiYSI6ImNsMnhwMjc3ejAxb2wzaW1odHV5b2FzYmkifQ.FIv60aJfQGwZeTMhQvtTpg&amp;zoomwheel=false#9//";
const mapISS = document.getElementById("mapISS");
//functions
let getISSLocation = async () => {
  // Storing response
  const response = await fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      mapISS.src = getEmbedURL(
        data.iss_position.latitude,
        data.iss_position.longitude
      );
    });
};

let getIntOfAstros = async () => {
  const response = await fetch(astrosURL)
  .then((response) => response.json())
  .then((data) => {
     document.getElementById("lblAstrosInSpace").innerHTML = data.number;
  });
}

let getEmbedURL = (lat, long) => {
  return `https://api.mapbox.com/styles/v1/talkativediv/cl2xp846t003c14mxg639tkec.html?title=false&access_token=pk.eyJ1IjoidGFsa2F0aXZlZGl2IiwiYSI6ImNsMnhwMjc3ejAxb2wzaW1odHV5b2FzYmkifQ.FIv60aJfQGwZeTMhQvtTpg&amp;zoomwheel=false#9/${lat}/${long}`;
};

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

