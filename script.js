let searchengine = document.getElementById("searchengine");
let search = document.getElementById("search");
let searchbtn = document.getElementById("searchbtn");
let smallImage = document.getElementById("images");
let showmore = document.getElementById("showmore")
let accesskey = "sQo9zPEFrqjHyvGJygpKQFtts5WVJKXOV4JhZB5jWLA";

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = search.value;
    let url = `https://api.unsplash.com/search/photos?&page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();

    if (page === 1) {
        images.innerHTML = "";
    }

    let results = data.results;
    results.map(function (result) {
        let images = document.createElement("img");
        images.src = result.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(images);
        smallImage.appendChild(imageLink);
    })
    showmore.style.display = "block";

}

searchengine.addEventListener("submit", function (e) {
    e.preventDefault();
    page = 1;
    searchImage();
})

showmore.addEventListener("click", function () {
    page++;
    searchImage();
})
