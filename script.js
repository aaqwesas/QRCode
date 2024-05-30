function generate_QRcode(){
    let QRDiv = document.getElementById("QRDiv")
    let qrimage = document.getElementById("QRimage")
    let qrText = document.getElementById("QRText")
    if(qrText.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        QRDiv.classList.add("show-img")
    }else{
        alert("Please enter Your link!")
    }
}


