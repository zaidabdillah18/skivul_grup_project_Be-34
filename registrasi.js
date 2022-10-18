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
    .then(res => {
        if(res.ok){
            console.log(`post berhasil : ${res.status}`);
        }else{
            console.log(`post tidak berhasil :  ${res.status}`);
        }
        return res
    })
   
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})