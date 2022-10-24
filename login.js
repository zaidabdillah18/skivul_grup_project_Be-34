
const form = document.getElementById('form');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password')

async function GetLogin(email,password){
    let response = await  fetch('https://634cc344f5d2cc648e940bb2.mockapi.io/user', {
        method: 'GET',
    })
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
 
    const data = await response.json();
    // const user = await data.filter(item => item.email === email && item.password === password);
    const user = await data.find(d => d.email === email && d.password === password)
    if(user){
        localStorage.setItem("ID", user.id)
        localStorage.setItem("Email", user.email)
        localStorage.setItem("Username", user.username)
        alert("Berhasil Login");
        window.location.href = "home.html";
        // let ambilID = localStorage.getItem("ID");
        // let ambildata = JSON.parse(ambilID)
        // console.log(ambildata)
        
    }else{
          console.log("login gagal")
    }

// emailElement.value = ""
// passwordElement.value = ""
}
form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const email = emailElement.value
    const password = passwordElement.value
  
    GetLogin(email, password)
})