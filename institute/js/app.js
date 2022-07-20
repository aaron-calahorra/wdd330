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

$("#btnSaveSignature").click(function(e){
  html2canvas([document.getElementById('signaturePad')], {
      onrendered: function (canvas) {
          var canvas_img_data = canvas.toDataURL('image/png');
          var img_data = canvas_img_data.replace(/^data:image\/(png|jpg);base64,/, "");
          console.log(img_data);
          document.getElementById("canvasImage").src="data:image/gif;base64,"+img_data;
      }
  });
});




//Select class fetch

const select1 = document.querySelector('.selectClasses1');
const select2 = document.querySelector('.selectClasses2');
const select3 = document.querySelector('.selectClasses3');



const url = 'https://opensheet.elk.sh/1jn2iHoSJ62w7bjoVOSbroRXGghcIH0Aart51taVN8b4/Classes';

fetch(url, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(classesList => {
    for (let classItem of classesList) {
      let newClass = document.createElement("option");
      newClass.value = classItem.Class + " - " + classItem.Teacher;
      newClass.text = classItem.Class + " - " + classItem.Teacher + " - " + classItem.Time;
      select1.add(newClass.cloneNode(true));
      select2.add(newClass.cloneNode(true));
      select3.add(newClass.cloneNode(true));

    }
  })
  .catch(function(error) {
    console.error("Error!", error);
  }
)

