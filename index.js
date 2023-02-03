const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const results = document.querySelector("#results");

searchButton.addEventListener("click", function() {
  const query = searchInput.value;
  search(query).then(displayResults);
});

async function search(query) {
  const response = await fetch(
    `https://api.example.com/search?q=${query}&type=video`
  );
  return response.json();
}

function displayResults(data) {
  results.innerHTML = "";
  data.forEach(video => {
    const title = video.title;
    const thumbnail = video.thumbnail;
    const videoId = video.id;
    results.innerHTML += `
      <div>
        <img src="${thumbnail}" alt="${title}">
        <h2>${title}</h2>
        <a href="https://www.example.com/watch?v=${videoId}">Watch</a>
      </div>
    `;
  });
}
