let tampungusername = document.getElementById("nama")
let ambilUsername = localStorage.getItem("Username");
tampungusername.innerText = ambilUsername;
async function tampilHome(){

    let response = await  fetch('https://634cc344f5d2cc648e940bb2.mockapi.io/program', {
      method: 'GET',
  })
  if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  
  data.forEach(element => {

         const tampung =  document.getElementById("coba1")
          tampung.innerHTML = `
          
          <div class="thumbnail">
          <img src="assets/img/gambar4.jpg">
        
        <div class="caption">
          <h3>${ element.nama}</h3>
          <h6>Kitabisa.com</h6>
          <p class="text-justify">${element.deskripsi}</p>
          <p>Kantor
            Jl. Raya Cilandak Kko No.31, RT.14/RW.8, Ragunan, Ps. Minggu</p>
            <span></span>
            <small>${element.tanggal_mulai} - ${element.tanggal_selesai}  (1 bulan)</small> <br>
          <a href="./programdetail.html" class="btn btn-primary">READ MORE</a>
        </div>
        </div>`;
  });
  let response1 = await  fetch('https://634cc344f5d2cc648e940bb2.mockapi.io/kategori_program', {
    method: 'GET',
})
if (!response1.ok) {
throw new Error(`HTTP error! status: ${response1.status}`);
}

const data1 = await response1.json();

data1.forEach(element => {

       const tampung1 =  document.getElementById("coba2")
        tampung1.innerHTML = `
        <img class="img-circle" src="assets/img/gambar1.jpg" width="200px">
        <h3>${element.nama}</h3>
        <p class="text-center">${element.deskripsi}</p>`;

});
  }
  
  
  
  tampilHome()