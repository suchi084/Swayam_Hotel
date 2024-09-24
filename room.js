document.querySelectorAll('.category-box').forEach(box => {
    box.addEventListener('click', () => {
        const category = box.getAttribute('data-category');
        showRoomDetails(category);
    });
});

document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('room-details').style.display = 'none';
    document.getElementById('room-categories').style.display = 'block';

    document.querySelectorAll('.room-images').forEach(imageDiv => {
        imageDiv.style.display = 'none';
    });
});

function showRoomDetails(category) {
    document.getElementById('room-categories').style.display = 'none';
    document.getElementById('room-details').style.display = 'block';

    const selectedImages = document.getElementById('category-' + category);
    selectedImages.style.display = 'flex';
}
