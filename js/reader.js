

const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("form");
const fileInp = form.querySelector("input");
const infoText = form.querySelector("p");
const closeBtn =  document.querySelector(".closeForm");
const copyBtn = document.querySelector(".copy");

// API URL  
url_https = "https://api.qrserver.com/v1/read-qr-code/";
url_http = "https://api.qrserver.com/v1/read-qr-code/";

function fetchRequest(file, formData){
    infoText.innerText = "Scanning QR Code";

    fetch(url_https, {
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        console.log(result);
        result = result[0].symbol[0].data;

        infoText.innerText = result ? "Upload QR Code to Scan" : "Could not scan QR Code";

        if(!result) return;

        document.querySelector("textarea").innerText = result;
        form.querySelector("img").src = URL.createObjectURL(file);
        wrapper.classList.add("active");
    }).catch(() => {
        infoText.innerText = "Could not scan QR Code";
    });

}

fileInp.addEventListener("change", async e => {
    let file = e.target.files[0];
    if(!file) return;
    let formData = new FormData();
    formData.append('file', file);
    fetchRequest(file, formData);
});

copyBtn.addEventListener("click", () => {
    let text = document.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
    modal.style.display = "block";
    modalText.innerHTML = `Text is Copied!`;  

});


form.addEventListener("click", () => fileInp.click());
closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));




