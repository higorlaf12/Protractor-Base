function NameRandom() {

      function capFirst (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function getRandomInt (min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    this.generateNameFemile = function(){
        var name = ["Maria","Isabel","Izabela","Marcia","Adriana","Carla","Andressa"];
        var lasname = ["Freitas","Oliveira","Carvalho","Araujo","Sousa","Costa"];

        var  nameComplet = capFirst(name[getRandomInt(0,name.length)])+ ' '+ (lasname[getRandomInt(0,lasname.length)]);
        return nameComplet;
    }

    this.generateNameMale = function () {
        var name = ["Joao","Adriano","Marcos","Eduardo","Afonso","Guilherme","Joaquim","Pedro","Marcelo"];
        var lasname = ["Freitas","Oliveira","Carvalho","Araujo","Sousa","Costa"];

        var  nameComplet = capFirst(name[getRandomInt(0,name.length)])+ ' '+ (lasname[getRandomInt(0,lasname.length)]);
        return nameComplet;
    }

    this.generateNameMother = function () {
        var name =["Maria","Francisca","Antonia","Adriana","Juliana","Marcia"];
        var lasname = ["Sousa","Costa","Carvalho","Araujo","Freitas","Oliveira"];
        var  nameComplet = capFirst(name[getRandomInt(0,name.length)])+ ' '+ (lasname[getRandomInt(0,lasname.length)]);
        return nameComplet;
    }
}
module.exports = NameRandom;
var n = new NameRandom();

console.log(n.generateNameMother());
