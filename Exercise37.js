const titleText = document.querySelector('.title');
const imgInput = document.querySelector('.img');
const textarea = document.querySelector('.textarea');
const form = document.querySelector('#blog');
const postsContainer = document.getElementById('posts-container');

// Load posts from localStorage on page load
document.addEventListener('DOMContentLoaded', loadPosts);

// Add new post
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = titleText.value.trim();
    const message = textarea.value.trim();
    const img = imgInput.value.trim();

    if (title && message && img) {
        const post = {
            id: Date.now(),
            title,
            message,
            img,
        };

        savePost(post);
        addToDom(post);

        // Clear inputs
        titleText.value = '';
        textarea.value = '';
        imgInput.value = '';
    } else {
        alert('Fadlan buuxi dhammaan xogta!');
    }
});

// Save post to localStorage
function savePost(post) {
    const posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Load posts from localStorage
function loadPosts() {
    const posts = getPosts();
    posts.forEach((post) => addToDom(post));
}

// Get all posts from localStorage
function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

// Add post to DOM
function addToDom(post) {
    const blogContainer = document.createElement('div');
    blogContainer.style.border = '1px solid #ddd';
    blogContainer.style.margin = '10px 0';
    blogContainer.style.padding = '10px';
    blogContainer.style.borderRadius = '5px';
    blogContainer.style.backgroundColor = '#f9f9f9';
    blogContainer.setAttribute('data-id', post.id);

    blogContainer.innerHTML = `
        <h2>${post.title}</h2>
        <img src="${post.img}" alt="${post.title}" style="width: 100%; max-width: 300px; border-radius: 5px;">
        <p>${post.message}</p>
    `;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn-delete';
    deleteBtn.addEventListener('click', function () {
        deletePost(post.id);
        postsContainer.removeChild(blogContainer);
    });

    // Update button
    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.className = 'btn-update';
    updateBtn.addEventListener('click', function () {
        updatePost(post.id, blogContainer);
    });

    // Append buttons
    blogContainer.appendChild(deleteBtn);
    blogContainer.appendChild(updateBtn);

    // Append to container
    postsContainer.appendChild(blogContainer);
}

// Delete post from localStorage
function deletePost(id) {
    const posts = getPosts().filter((post) => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Update post
function updatePost(id, blogContainer) {
    const posts = getPosts();
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex !== -1) {
        const updatedTitle = prompt('Update Title:', posts[postIndex].title);
        const updatedMessage = prompt('Update Message:', posts[postIndex].message);
        const updatedImg = prompt('Update Image URL:', posts[postIndex].img);

        if (updatedTitle && updatedMessage && updatedImg) {
            posts[postIndex] = {
                ...posts[postIndex],
                title: updatedTitle,
                message: updatedMessage,
                img: updatedImg,
            };

            localStorage.setItem('posts', JSON.stringify(posts));

            // Update the DOM
            blogContainer.querySelector('h2').textContent = updatedTitle;
            blogContainer.querySelector('p').textContent = updatedMessage;
            blogContainer.querySelector('img').src = updatedImg;
        } else {
            alert('Dhammaan xogta waa in la buuxiyaa!');
        }
    }
}
