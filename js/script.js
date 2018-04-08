// Zadanie 9.3 Łańcuchy znaków

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops'.toUpperCase();
var dinoReplace = text.replace('Velociraptor', dinosaur);

console.log(dinoReplace.substr(0, dinoReplace.length/2));