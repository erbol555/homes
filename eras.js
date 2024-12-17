// JavaScript to make the carousel infinite
const carouselTrack = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel img");

// Clone the images for infinite effect
images.forEach((img) => {
    const clone = img.cloneNode(true);
    carouselTrack.appendChild(clone);
});

let currentIndex = 0;

function moveCarousel() {
    const imageWidth = images[0].clientWidth;
    currentIndex++;

    if (currentIndex >= images.length) {
        // Reset position to create infinite loop
        carouselTrack.style.transition = "none";
        currentIndex = 0;
        carouselTrack.style.transform = `translateX(0px)`;
    } else {
        carouselTrack.style.transition = "transform 0.5s ease-in-out";
        carouselTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }
}

// Start the carousel
setInterval(moveCarousel, 2000); // Adjust the timing (e.g., 2000ms = 2s)



    const cart = []; // Shopping cart array to store added products

  // Add event listener to all "Add to Cart" buttons
  document.querySelectorAll(".collection_korzina").forEach(button => {
        button.addEventListener("click", (event) => {
            // Retrieve product details from button dataset
            const productName = event.target.getAttribute("data-product");
            const productPrice = event.target.getAttribute("data-price");

            // Add product to cart
            cart.push({ name: productName, price: productPrice });

            // Show confirmation
            alert(`${productName} has been added to your cart!`);

            // Optional: Display cart contents in the console
            console.log(cart);
        });
  });




const container = document.querySelector('.collection_container');
const blogs = document.querySelectorAll('.coolection_blog');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let curentIndex = 0;
const visibleCount = 3; // Количество видимых элементов одновременно
const totalItems = blogs.length;

// Функция для обновления положения контейнера
function updateCarousel() {
    const offset = curentIndex * (100 / visibleCount);
    container.style.transform = `translateX(-${offset}%)`;
}

// Обработчик кнопки "вперед"
nextBtn.addEventListener('click', () => {
    curentIndex++;
    if (curentIndex > totalItems - visibleCount) {
        curentIndex = 0; // Возвращаемся в начало
    }
    updateCarousel();
});

// Обработчик кнопки "назад"
prevBtn.addEventListener('click', () => {
    curentIndex--;
    if (curentIndex < 0) {
        curentIndex = totalItems - visibleCount; // Переходим в конец
    }
    updateCarousel();
});



// const carousel = document.querySelector('.collection_container');
// const blogset = document.querySelectorAll('.coolection_blog');
// let index = 0;

// // Общее количество шагов (длина контейнера делим на 3)
// const maxIndex = Math.ceil(blogset.length / 3);

// function startCarousel() {
//     index++;
//     if (index >= maxIndex) {
//         index = 0; // Возвращаемся к первому набору элементов
//     }
//     // Сдвигаем контейнер на ширину трех элементов
//     carousel.style.transform = `translateX(-${index * 100}%)`;
// }

// // Запуск карусели каждые 3 секунды
// setInterval(startCarousel, 3000);
