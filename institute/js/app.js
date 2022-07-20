//Collapse agreement
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


let canvas = document.getElementById("signature-pad");

function resizeCanvas() {
    // let ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
}
window.onresize = resizeCanvas;
// resizeCanvas();

let signaturePad = new SignaturePad(canvas, {
backgroundColor: 'rgb(250,250,250)'
});

document.getElementById("clear").addEventListener('click', function(){
signaturePad.clear();
})




//select fetch

const select1 = document.querySelector('.selectClasses1');
const select2 = document.querySelector('.selectClasses2');
const select3 = document.querySelector('.selectClasses3');



const url = 'https://opensheet.elk.sh/1jn2iHoSJ62w7bjoVOSbroRXGghcIH0Aart51taVN8b4/Classes';

fetch(url, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(lista_de_categorias => {
    //console.log("Las categorías son:", lista_de_categorias);
    // alert('HAY ' + lista_de_categorias.length) Puedes poner este alert para ver si la llamada POST te devuelve algo

    for (let categoria of lista_de_categorias) {
      let nuevaOpcion = document.createElement("option");
      nuevaOpcion.value = categoria.Class + " - " + categoria.Teacher;
      nuevaOpcion.text = categoria.Class + " - " + categoria.Teacher + " - " + categoria.Time;
      select1.add(nuevaOpcion.cloneNode(true));
      select2.add(nuevaOpcion.cloneNode(true));
      select3.add(nuevaOpcion.cloneNode(true));

    }
  })
  .catch(function(error) {
    console.error("¡Error!", error);
  })



  //save to google sheets
