const form = document.getElementById('form');

// let login = async (email,password) => {

// }

form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create new FormData object:
    const formData = new FormData(form);
    // Convert formData object to URL-encoded string:
    const payload = new URLSearchParams(formData);
    // Post the payload using Fetch:
    fetch('https://634cc344f5d2cc648e940bb2.mockapi.io/user', {
    method: 'POST',
    body: payload,
    })
    .catch(error => console.log(error.status))
})