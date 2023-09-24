"use strict";
// Définition du tueur Jason
const jason = {
    nom: "Jason",
    pointsDeVie: 100,
  };
  const SurvivantDeceder =[];
  // Tableau de caractéristiques de survivants
  const caracteristiques = ["nerd", "sportif", "blonde", "courageux", "intelligent", "pretty", "huggly", "pouilleux", "addictif"];
  
  // Tableau de prénoms de survivants
  const prenoms = ["Alice", "Bob", "Charlie", "David", "Eve", "Steeve", "Romuald", "Harish"];
  
  // Fonction pour choisir aléatoirement un élément d'un tableau
  function choisirAleatoirement(tableau) {
    const index = Math.floor(Math.random() * tableau.length);
    return tableau[index];
  }
  
  // Création d'un survivant
  function creerSurvivant() {
    const prenom = choisirAleatoirement(prenoms);
    const caracteristique = choisirAleatoirement(caracteristiques);
    return {
      prenom,
      caracteristique,
      pointsDeVie: 100,
    };
  }
  
// Fonction pour effectuer une attaque de survivant
function attaquerSurvivant(survivant) {
    // Vérifier si le survivant est toujours en vie
    if (survivant.pointsDeVie === 0) {
      console.log(`${survivant.prenom} est déjà mort.`);
      SurvivantDeceder.push(survivant.prenom)
      return; // Quitter la fonction si le survivant est mort
    }
  
    const probabiliteEsquive = Math.random();
    const probabiliteDegats = Math.random();
    const probalitéDegatsJason = Math.random();
  
    if (probabiliteEsquive <= 0.5) {
      // Le survivant esquive et inflige 10 points de dégâts
      console.log(`${survivant.prenom} a esquivé et infligé 10 points de dégâts à Jason`);
      jason.pointsDeVie -= 10;
    } else if (probabiliteDegats <= 0.3) {
      // Le survivant inflige 15 points de dégâts mais meurt
      console.log(`${survivant.prenom} inflige 15 points de dégâts à Jason, mais meurt en le faisant`);
      jason.pointsDeVie -= 15;
      survivant.pointsDeVie = 0; // Marquer le survivant comme mort
    } else if (probalitéDegatsJason<=0.2) {
      // Le survivant attaque, mais ne fait rien de spécial et meurt
      console.log("Jason tue "+survivant.prenom);
      survivant.pointsDeVie=0;
    }
    else {
      console.log(`${survivant.prenom} attaque Jason, mais Jason résiste`);
    }
  }
  
  
  // Fonction pour simuler l'affrontement
  function simulerAffrontement() {
    const survivants = [];
    let nbfights = 0;
    //on cree 5 survivants
    for (let i = 0; i < 5; i++) {
      survivants.push(creerSurvivant());
      console.log(survivants[i].prenom+ " est le survivant " +i);
    }
  
    while (jason.pointsDeVie > 0 && survivants.length > 0) {
      const survivantAleatoire = choisirAleatoirement(survivants);
      attaquerSurvivant(survivantAleatoire);
      if (survivantAleatoire.pointsDeVie>0) {
        nbfights++;
      }
  
      //console.log("il y a " + survivants.length + "survivants");
      let ptsviesurv = 0;
      for (let j = 0; j < 5; j++) {
        //console.log("il a " + survivants[j].pointsDeVie + " pdv");
        ptsviesurv += survivants[j].pointsDeVie;
      }
      console.log("il reste " + ptsviesurv +" pts de vie aux survivants");
      
    if (jason.pointsDeVie <= 0) {
        console.log("Les survivants ont gagné apres " + nbfights + " combats! Jason est mort.");
      } else if (ptsviesurv === 0) {
        console.log("Jason a survécu apres " + nbfights + " combats, et tous les survivants sont morts.");
        for (let i = 0; i < 5; i++) {
          console.log("RIP à " + survivants[i].prenom + ", qui avait la caractéristique suivante:  " + survivants[i].caracteristique);
        }
        return;
      }
      }
    }
  
  
  // Appel de la fonction pour simuler l'affrontement
  simulerAffrontement();