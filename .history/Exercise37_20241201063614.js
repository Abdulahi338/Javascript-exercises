const titleText = document.querySelector('.title'); // Hal element si toos ah
const imgInput = document.querySelector('.img'); // Input-ka img
const textarea = document.querySelector('textarea');
const form = document.querySelector('#blog');
const addBtn = document.querySelector('.add');

form.addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault(); // Ka hortag behavior-ka default ah (reload)
    
    // Hel xogta laga soo qaatay inputs-ka
    const title = titleText.value.trim();
    const message = textarea.value.trim();
    const img = imgInput.value.trim();

    // Hubi haddii xogtu ay buuxdo
    if (title && message && img) {
        addToDom(title, message, img);

        // Nadiifi inputs-ka kadib marka xogta la diro
        titleText.value = '';
        textarea.value = '';
        imgInput.value = '';
    } else {
        alert('Fadlan buuxi dhammaan xogta!');
    }
}

function addToDom(task, message, img) {
    const blog = {
        id: Date.now(),
        title: task,
        message: message,
        img: img,
    };

    console.log(blog);

    // Ku dar DOM-ka sawir iyo xog
    const blogContainer = document.createElement('div');
    blogContainer.style.border = '1px solid #ddd';
    blogContainer.style.margin = '10px 0';
    blogContainer.style.padding = '10px';

    blogContainer.innerHTML = `
        <h2>${blog.title}</h2>
        <img src="${blog.img}" alt="${blog.title}" style="width: 100%; max-width: 300px; border-radius: 5px;">
        <p>${blog.message}</p>
    `;

    document.body.appendChild(blogContainer); // Ku dar xogta bogga
}
