var stringOriginal = "Job Rotation";
var stringInvertida = "";

for(var i = stringOriginal.length - 1; i >= 0; i--){
  console.log(stringOriginal[i])
  stringInvertida+= stringOriginal[i]
}

console.log("String original: " + stringOriginal)
console.log("String invertida: " + stringInvertida)