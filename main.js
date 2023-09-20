//https://teachablemachine.withgoogle.com/models/z-hLIOSN9/
Webcam.attach("#camera")
camara=document.getElementById("camera")
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
})

function take_snapshot(){
    Webcam.snap(function(foto){
   document.getElementById("resultado").innerHTML="<img src='"+foto+"' id='imagen'>"     
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/enhBfe3Jf/model.json",modelo_cargado)

function modelo_cargado(){
    console.log("modelo_cargado")
}

function check(){
    img=document.getElementById("imagen")
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
if(error){
console.error(error);
}
else{
    console.log(results)
    document.getElementById("nombre").innerHTML=results[0].label
    document.getElementById("porcentaje").innerHTML=results[0].confidence
}

}