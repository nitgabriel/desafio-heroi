let nomeHeroi = "Gabriel Machado"; 

let expHeroi = 8680; //numero de dias que estou vivo 

let nivelHeroi;

if (expHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (expHeroi >= 1001 && expHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (expHeroi >= 2001 && expHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (expHeroi >= 6001 && expHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (expHeroi >= 7001 && expHeroi <= 8000) {
    nivelHeroi = "Platina Diamante";
} else if (expHeroi >= 8001 && expHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (expHeroi >= 9001 && expHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (expHeroi >= 10001) {
    nivelHeroi = "Radiante";
}

// Exibição da mensagem final
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);