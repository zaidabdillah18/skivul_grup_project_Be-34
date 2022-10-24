async function tampilProfile(){
  let ambilID = localStorage.getItem("ID");
  let ambildata = JSON.parse(ambilID)
  let response = await  fetch('https://634cc344f5d2cc648e940bb2.mockapi.io/user', {
    method: 'GET',
})
if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
// let ambilemail = localStorage.getItem("Email");
// let dataemail = JSON.parse(ambilemail)
data.forEach(element => {
    //  let idprofile =  element.id ===  ambildata;
    //  console.log(idprofile)
     if( element.id ===  ambilID){
       const tampung =  document.getElementById("home")
        tampung.innerHTML = ` 
            <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>${element.username}</h4>
                      <p class="text-secondary mb-1">${element.email}</p>
                      <small class="text-muted font-size-sm">${element.posisi}</small>
                    </div>
                  </div>
                </div>
        </div>
    </div>
        `;
     }
});

    let response1 = await  fetch('https://634cc344f5d2cc648e940bb2.mockapi.io/datapenyandang', {
        method: 'GET',
    })
    if (!response1.ok) {
		throw new Error(`HTTP error! status: ${response1.status}`);
	}
    const datapribadi = await response1.json();

    datapribadi.forEach(element => {
      
      if( element.user_id ===  ambildata){
      const tampung =  document.getElementById("home1")
        tampung.innerHTML = ` 
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
            <h5 class="d-flex align-items-center mb-3">Data Pribadi</h5>
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                ${element.nama}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">NIK</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                  ${element.nik}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Tempat Lahir</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                ${element.tempatlahir}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Tanggal Lahir</h6>
              </div>
              <div class="col-sm-9 text-secondary">
              ${element.tanggallahir}
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Jenis Kelamin</h6>
              </div>
              <div class="col-sm-9 text-secondary">
             ${element.jeniskelamin}
              </div>
            </div>
            <hr>
            <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Agama</h6>
            </div>
            <div class="col-sm-9 text-secondary">
           ${element.agama}
            </div>
          </div>
          <hr>
           
          </div>
        </div>
        <div class="row">
        <div class="col-md-12">
        <div class="card h-100">
                    <div class="card-body">
                    <h5 class="d-flex align-items-center mb-3">Kontak Pribadi</h5>
                    <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">No HP</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                   ${element.nohp}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Alamat</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                 ${element.alamat}
                  </div>
                </div>
                <hr>
                <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Provinsi</h6>
                </div>
                <div class="col-sm-9 text-secondary">
               ${element.provinsi}
                </div>
              </div>
              <hr>
              <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Kota</h6>
              </div>
              <div class="col-sm-9 text-secondary">
             ${element.kota}
              </div>
            </div>
            <hr>
            <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Kecamatan</h6>
            </div>
            <div class="col-sm-9 text-secondary">
           ${element.kecamatan}
            </div>
          </div>
          <hr>
          <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Kode Pos</h6>
          </div>
          <div class="col-sm-9 text-secondary">
         ${element.kodepos}
          </div>
        </div>
        <hr>
                    </div>
                  </div>
                  </div>
                  </div>
        `;
      }
    });
   

}



tampilProfile()