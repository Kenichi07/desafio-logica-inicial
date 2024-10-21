let nome = "Kenichi";
let xp = 2001;

if (xp <= 1000) {
  nivel = "Ferro";
} else if (xp > 1000 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp > 2000 && xp <= 5000) {
  nivel = "Prata";
} else if (xp > 5000 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp > 7000 && xp <= 8000) {
  nivel = "Platina";
} else if (xp > 8000 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

nome = "Miyuki";
xp = 90000;

switch (true) {
  case xp <= 1000:
    nivel = "Ferro";
    break;
  case (xp > 1000 && xp <= 2000):
    nivel = "Bronze";
    break;
  case (xp > 2000 && xp <= 5000):
    nivel = "Prata";
    break;
  case (xp > 5000 && xp <= 7000):
    nivel = "Ouro";
    break;
  case (xp > 7000 && xp <= 8000):
    nivel = "Platina";
    break;
  case (xp > 8000 && xp <= 9000):
    nivel = "Ascendente";
    break;
  case (xp > 9000 && xp <= 10000):
    nivel = "Imortal";
    break;
  default:
    nivel = "Radiante"; 
    break; 
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
// teste git 
