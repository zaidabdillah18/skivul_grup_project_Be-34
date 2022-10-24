// const form = document.getElementById('form');

// // let login = async (email,password) => {

// // }

// form.addEventListener('submit', function(e) {
//     // Prevent default behavior:
//     e.preventDefault();
//     // Create new FormData object:
//     const formData = new FormData(form);
//     // Convert formData object to URL-encoded string:
//     const payload = new URLSearchParams(formData);
//     // Post the payload using Fetch:
//     fetch('https://634cc344f5d2cc648e940bb2.mockapi.io/datapenyandang', {
//     method: 'POST',
//     body: payload,
//     })
//     .catch(error => console.log(error.status))
// })

const form = document.getElementById('form');
let nik = document.getElementById('nik')
let nama = document.getElementById('nama')
let tempatlahir = document.getElementById('tempatlahir')
let tanggallahir = document.getElementById('tanggallahir')
let jeniskelamin = document.getElementById('jeniskelamin')
let agama = document.getElementById('agama')
let nohp = document.getElementById('nohp')
let alamat = document.getElementById('alamat')
let provinsi = document.getElementById('provinsi')
let kota = document.getElementById('kota')
let kecamatan = document.getElementById('kecamatan')
let desa = document.getElementById('desa')
let kodepos = document.getElementById('kodepos')


let postDataElement = async () => {

    const ambilID = localStorage.getItem("ID");
    const ambildata = JSON.parse(ambilID)
    const nik_value = nik.value
    const nama_value = nama.value
    const tempatlahir_value = tempatlahir.value
    const tanggallahir_value = tanggallahir.value
    const jeniskelamin_value = jeniskelamin.value
    const agama_value = agama.value
    const nohp_value = nohp.value
    const alamat_value = alamat.value
    const provinsi_value = provinsi.value
    const kota_value = kota.value
    const kecamatan_value = kecamatan.value
    const desa_value = desa.value
    const kodepos_value = kodepos.value
   const tampung = await fetch('https://634cc344f5d2cc648e940bb2.mockapi.io/datapenyandang', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id : ambildata,
            nama: nama_value,
            tempatlahir: tempatlahir_value,
            tanggallahir: tanggallahir_value,
            jeniskelamin: jeniskelamin_value,
            nohp: nohp_value,
            agama: agama_value,
            alamat: alamat_value,
            provinsi : provinsi_value,
            kota : kota_value,
            kecamatan : kecamatan_value,
            desa : desa_value,
            kodepos : kodepos_value,
            nik : nik_value,
           
        })
    })
    if(tampung){
        console.log("input data berhasil")
    }else{
        console.log("input tidak berhasil")
    }
    // window.location.reload(true)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    postDataElement()
})