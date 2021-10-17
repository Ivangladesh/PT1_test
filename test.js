let textArea = document.getElementById('respuesta');

function getJson(){
  textArea.innerHTML = "Llamada tipo GET";
  call.get("https://jsonplaceholder.typicode.com/posts", "", testApp, true);
}

function postJson(){
  textArea.append("Llamada tipo POST");
  call.post("https://httpbin.org/post", "", testApp, true);
}

function testApp(x){
  textArea.append("Respuesta obtenida y manejada por testApp " + x);
}

function handleError(x){
  textArea.append(x);
}

let botones = document.querySelectorAll('.btn-test');

botones.forEach(el => el.addEventListener('click', event => {
  if(event.target.getAttribute("data-id") === "btnGet"){
    getJson();
  } else{
    postJson();
  }
}));

let btnValidaciones = document.querySelectorAll('.btn-validar');

btnValidaciones.forEach(el => el.addEventListener('click', event => {
  let response = valid.decimal("10.00", 4);
  console.log(JSON.stringify(response));
}));