const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    ///The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string
    if(!qrValue || preValue === qrValue){
        modal.style.display = "block";
        modalText.innerHTML = `Please Enter a Text or URL in the QR Input`;  
    }else{

    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active"); // to increase wrapper size 
        generateBtn.innerText = "Generate QR Code";
    });
}});

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}