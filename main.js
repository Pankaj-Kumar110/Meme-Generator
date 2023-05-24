memeButton = document.querySelector(".meme-button")
memeTitle = document.querySelector(".meme-title")
memeImg = document.querySelector(".meme-generator img")
memeAuthor = document.querySelector(".meme-author")

const updateMeme = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Made by: ${author}`

}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json()).then(data => {
            updateMeme(data.url, data.title, data.author)
        })
}



memeButton.addEventListener("click", generateMeme)
generateMeme()