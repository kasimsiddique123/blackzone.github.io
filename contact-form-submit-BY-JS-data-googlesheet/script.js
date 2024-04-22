let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('#sub').value = "submitting.....";
    
    let data = new FormData(form);
    
    fetch('https://script.google.com/macros/s/AKfycbzECM9e9fq3253BJHDk5y5hLCC6VhLr_dWtxpPflFS3-qfUfffkNqL3K1oQWyWxFXSG/exec', {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(data => {
        document.querySelector('#msg').innerHTML = data;
        setTimeout(() => {
            document.querySelector('#msg').innerHTML = "";
        }, 4000);
        document.querySelector('#sub').value = "submit";
        form.reset();
        document.querySelector('#sub').value = "Submit";
    });
});



