/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace("Ce", "C ");
}
var concatString = function (texte1, texte2) {
    return 'Le javascript est '+ 'super';
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return texte.startsWith("E",0);
}
var AfficherExtensionString = function (texte) {
    return texte.substring(texte.lastIndexOf("j"));
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(2, 3);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(-5);
}
var valeurAbsolueArray = function (array) {
//    return array.map(m=> m*-1);
    return = array.map(Math.abs);
//    var result =(array.map(Math.abs));
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI*(Math.pow(rayon,2)));
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab,ac);
}
var calculIMC = function (poids, taille) {
    return Math.round((poids/(Math.pow(taille,2))*100)/100);
}
