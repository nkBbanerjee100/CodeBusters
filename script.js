
const cardsData = [
    { title: 'book 1', content: "this is a referential book to web developement" },
    { title: 'book 2', content: "this is a referential book to app developement" },
    { title: 'book 3', content: "this is a referential book to peronality developement" },
    { title: 'book 4', content: "this is a referential book to humanity developement" },
    { title: 'book 5', content: "this is a referential book to economics " },
    { title: 'book 6', content: "this is a referential book to history" },
    { title: 'book 7', content: "this is a referential book to  geography" },
    { title: 'book 8', content: "this is a referential book to  biology" },
    { title: 'book 9', content: "this is a referential book to  psychology" },
    { title: 'book 10', content: "this is a referential book to  physical awarness" }
];
function createCard(title, content) {
    console.log("emetring0");

    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2')
    cardTitle.textContent = title;

    const cardsContent = document.createElement('p')
    cardsContent.textContent = content;

    card.appendChild(cardTitle)
    card.appendChild(cardsContent)

    return card;

}

function renderCard() {
    console.log("emetring1");
    const cardContainer = document.getElementById('containerBooks')
    // cardContainer.innerHTML = ' ';
    console.log(cardContainer);
    cardsData.forEach(data => {
        const card = createCard(data.title, data.content);
        cardContainer.appendChild(card);
        // console.log("cards are", card);
    });
    // console.log("ejkkjedjuhedku");
}

function filterBooks() {
    let filteredBooks = [];
    const searchInput = document.querySelector('.searchContainer').value.toLowerCase();
    if (searchInput === '') {
        filteredBooks = cardsData;
    } else {
        filteredBooks = cardsData.filter((book) => book.title.toLowerCase().includes(searchInput));
    }
    // renderCard(filteredBooks);
}

renderCard();

document.getElementById('searchContainer').addEventListener('input', filterBooks);
