var chm = document.getElementById("chm");
var mode="w";
chm.addEventListener("click",()=>{
  if(mode=="w"){
    mode="b";
    document.querySelector(".all").style.backgroundColor="#000";
    
    var aa =document.querySelectorAll("li");
    for(var i=0;i<aa.length;i++){
      aa[i].style.color="#fff"
    }
    document.querySelector(".qus").style.color="#FFFF00";
    
    chm.innerHTML="Dark"
  }else{
    mode="w";
    document.querySelector(".all").style.backgroundColor="#fff";
    var aa =document.querySelectorAll("li");
    for(var i=0;i<aa.length;i++){
      aa[i].style.color="#000"
    }
    
    document.querySelector(".qus").style.color="#EE4B2B";
    
    chm.innerHTML="light"
  }
  
});
function downloadDivAsImage(divId, fileName) {
  // Use html2canvas to capture the content of the specified div
  html2canvas(document.getElementById(divId)).then(function (canvas) {
    // Create a link element
    var link = document.createElement('a');
    // Set the download attribute and convert the canvas to a data URL
    link.download = fileName + '.png';
    link.href = canvas.toDataURL();
    // Trigger a click on the link to initiate the download
    link.click();
  });
}





document.getElementById("do").addEventListener("click",()=>{
  var fnm = document.getElementById("fname").value || "default";
  downloadDivAsImage('question', fnm);
})

var ig = document.getElementById("selimg")
var dn = document.getElementById("dn")
ig.addEventListener("click",()=>{
  dn.click();
  dn.addEventListener("change",()=>{
    const file = dn.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      ig.src = e.target.result;
    };

    reader.readAsDataURL(file);
    
  })
})
