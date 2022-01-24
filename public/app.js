var baixar = document.querySelector(".botaobaixar")
var urll = document.querySelector(".url")

baixar.addEventListener("click", () => {
    console.log(`URL: ${urll.value}`);
    sendUrl(urll.value)
})

function sendUrl(URL) {
    window.location.href = `http://localhost:777/download?URL=${URL}`;
  //  fetch(`http://localhost:777/download?URL=${URL}`, {
  //  method: 'GET'
 //   }).then(res => res.json())
  //  .then(json => console.log(json));
}

