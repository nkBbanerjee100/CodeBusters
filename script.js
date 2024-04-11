
// const cardsData = [
//     { title: 'book 1', content: "this is a referential book to web developement", imgUrl: "images.jpeg" },
//     { title: 'book 2', content: "this is a referential book to app developement", imgUrl: "great-books-to-read-normal-people-crop-0649ede28a2144808e96aed6a1600aed.jpg" },
//     { title: 'book 3', content: "this is a referential book to peronality developement", imgUrl: "9M-atomic-habits-dots.png" },
//     { title: 'book 4', content: "this is a referential book to humanity developement", imgUrl: "Good-Company-Book-Cover-448342647b744db79b6c31c061eef126.jpg" },
//     { title: 'book 5', content: "this is a referential book to economics ", imgUrl: "images (1).jpeg" },
//     { title: 'book 6', content: "this is a referential book to history", imgUrl: "images (2).jpeg" },
//     { title: 'book 7', content: "this is a referential book to  geography", imgUrl: "images (3).jpeg" },
//     { title: 'book 8', content: "this is a referential book to  biology", imgUrl: "images (4).jpeg" },
//     { title: 'book 9', content: "this is a referential book to  psychology", imgUrl: "images (5).jpeg" },
//     { title: 'book 10', content: "this is a referential book to  physical awarness", imgUrl: "images (6).jpeg" }
// ];
// function createCard(title, content, imgUrl) {
//     console.log("emetring0");

//     const card = document.createElement('div');
//     card.classList.add('card');
//     const image1 = document.createElement('img');

//     /**
//      * const img = document.createElement('img');
//     img.src = 'TECHFESTA/' + imgUrl;
//     img.alt = 'image of ' + content;
//      */
//     image1.src = 'images/' + imgUrl;
//     // Set the alt attribute for accessibility
//     image1.alt = 'image of ' + content;

//     // Append the image element to a container (e.g., a div)
//     // document.getElementById('cardContainer').appendChild(img);
//     const cardTitle = document.createElement('h2')
//     cardTitle.textContent = title;

//     const cardsContent = document.createElement('p')
//     cardsContent.textContent = content;
//     console.log("image is ", image1);

//     card.appendChild(cardTitle)
//     card.appendChild(cardsContent)
//     card.appendChild(image1)

//     return card;

// }

// function renderCard() {
//     console.log("emetring1");
//     const cardContainer = document.getElementById('containerBooks')
//     // cardContainer.innerHTML = ' ';
//     console.log(cardContainer);
//     cardsData.forEach(data => {
//         const card = createCard(data.title, data.content, data.imgUrl);
//         cardContainer.appendChild(card);
//         // console.log("cards are", card);
//     });
//     // console.log("ejkkjedjuhedku");
// }

// function filterBooks() {
//     let filteredBooks = [];
//     const searchInput = document.querySelector('.searchContainer').value.toLowerCase();
//     if (searchInput === '') {
//         filteredBooks = cardsData;
//     } else {
//         filteredBooks = cardsData.filter((book) => book.title.toLowerCase().includes(searchInput));
//     }
//     // renderCard(filteredBooks);
// }

// renderCard();

// // document.getElementById('searchContainer').addEventListener('input', filterBooks);
// Array of image URLs
/*
const imageUrls = [
    "images/images.jpeg",
    "images/9M-atomic-habits-dots.png",
    "images/Good-Company-Book-Cover-448342647b744db79b6c31c061eef126.jpg",
    "images/images (1).jpeg",
    "images/images (2).jpeg",
    "images/images (3).jpeg",
    "images/images (4).jpeg",
    "images/images (5).jpeg",
    "images/images (6).jpeg",
    "images/images (7).jpeg"
];

// Function to create and append <img> elements for each image
function createSlider() {
    const slider = document.getElementById('slider');
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.classList.add('slide');
        slider.appendChild(img);
    });
}

// Call the function to create the slider
createSlider();
*/
// console.log("into js");
// Function to display book details when hovering

// function showBookDetails(event) {
//     console.log("enetred 0000");
//     // Get the hovered slide element
//     const slide = document.querySelector('.slide');
//     if (slide) {
//         console.log("entered");
//         // Get book details from data attributes
//         const author = slide.dataset.author;
//         const ratings = slide.dataset.ratings;

//         console.log("author", author + " " + "ratings " + ratings);

//         // Create and show tooltip with book details
//         const tooltip = document.createElement('div');
//         tooltip.classList.add('tooltip');
//         tooltip.innerHTML = `
//             <p><strong>Author:</strong> ${author}</p>
//             <p><strong>Ratings:</strong> ${ratings}</p>
//         `;
//         // Position the tooltip relative to the mouse cursor
//         tooltip.style.top = `${event.clientY}px`;
//         tooltip.style.left = `${event.clientX}px`;
//         // Append tooltip to the body
//         document.body.appendChild(tooltip);

//         // Remove tooltip after a delay
//         setTimeout(() => {
//             tooltip.remove();
//         }, 3000); // Remove after 3 seconds (adjust as needed)
//     }
// }
// // showBookDetails({})
// // Event listener to trigger showBookDetails on hover
// document.addEventListener('click', function (event) {
//     // Check if the clicked element is an image within a slide
//     const existingDetails = document.querySelector('.book-details');
//     if (existingDetails) {
//         existingDetails.remove();
//     }

//     // Check if the clicked element is an image within a slide
//     const slideImage = event.target.closest('.slide img');
//     if (slideImage) {
//         // If the clicked element is an image within a slide, show book details
//         showBookDetails(event);
//     }
// });
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const slideImages = document.querySelectorAll('.slide img');

    slideImages.forEach(function (image) {
        image.addEventListener('mouseenter', function (event) {
            const parentSlide = event.target.closest('.slide');
            const author = parentSlide.dataset.author;
            const ratings = parentSlide.dataset.ratings;

            const bookDetails = document.createElement('div');
            bookDetails.classList.add('book-details');
            bookDetails.innerHTML = `<p>Author: ${author}</p><p>Ratings: ${ratings}</p>`;

            document.body.appendChild(bookDetails);
            positionBookDetails(bookDetails, event.pageX, event.pageY);
        });

        image.addEventListener('mouseleave', function () {
            const existingDetails = document.querySelector('.book-details');
            if (existingDetails) {
                existingDetails.remove();
            }
        });
    });
});

function positionBookDetails(detailsElement, mouseX, mouseY) {
    const offsetX = 10;
    const offsetY = 10;

    const maxWidth = window.innerWidth - detailsElement.offsetWidth - offsetX;
    const maxHeight = window.innerHeight - detailsElement.offsetHeight - offsetY;

    const x = Math.min(mouseX + offsetX, maxWidth);
    const y = Math.min(mouseY + offsetY, maxHeight);

    detailsElement.style.left = `${x}px`;
    detailsElement.style.top = `${y}px`;
}

