
// document.querySelectorAll('.about-widget .tab').forEach(tab => {
//     tab.addEventListener('click', function() {
//         // Remove active class from all tabs and content
//         document.querySelectorAll('.about-widget .tab').forEach(t => t.classList.remove('active'));
//         document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

//         // Add active class to clicked tab and corresponding content
//         this.classList.add('active');
//         document.getElementById(this.dataset.tab).classList.add('active');
//     });
// });

// // Handle image upload and display
// document.querySelector('.add-image').addEventListener('click', function() {
//     document.getElementById('imageUpload').click();
// });

// document.getElementById('imageUpload').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             img.alt = 'New Image';
//             img.className = 'image_size';  // Apply the same class for consistent styling

//             // Add the image to the gallery
//             document.querySelector('.images').appendChild(img);
//         };
//         reader.readAsDataURL(file);
//     }
// });

document.querySelectorAll('.about-widget .tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs and content
        document.querySelectorAll('.about-widget .tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});

// Handle image upload and display
document.querySelector('.add-image').addEventListener('click', function() {
    document.getElementById('imageUpload').click();
});

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'New Image';
            img.className = 'image_size';  // Apply the same class for consistent styling

            // Add the image to the images container
            document.querySelector('.images').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Slider functionality
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', function() {
    const images = document.querySelectorAll('.images .image_size');
    const totalImages = images.length;
    const maxIndex = totalImages - 3; // Maximum index for 3 images visible

    if (currentIndex < maxIndex) {
        currentIndex++;
        document.querySelector('.images-container').style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
});

document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        document.querySelector('.images-container').style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
});
