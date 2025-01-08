
function effetMachineAEcrire(selecteur, texte, vitesse = 100) {
  const element = document.querySelector(selecteur);
  if (!element) return;

  element.textContent = ''; 
  let index = 0;

  function ecrire() {
    if (index < texte.length) {
      element.textContent += texte.charAt(index);
      index++;
      setTimeout(ecrire, vitesse);
    }
  }

  ecrire();
}

document.addEventListener('DOMContentLoaded', () => {
  const elementTitre = document.querySelector('.titre');
  if (elementTitre) {
    const titresPage = {
      "titre-accueil": "Bienvenue!",
      "titre-apropos": "Qui suis-je ?",
      "titre-competences": "Mes compétences",
      "titre-hobbies": "Mes loisirs",
      "conc":"Contactez-moi"
    };

    const idTitre = elementTitre.id;
    const texteTitre = titresPage[idTitre] || "Mon Portfolio";

    effetMachineAEcrire(`#${idTitre}`, texteTitre, 100);
  }
});
/*animation pour accueil*/
const spanElement = document.getElementById('metier');

const textes = [
    'développeur web',
    'développeur app',
    'technicien de maintenance informatique'
];

let index = 0;

function changerTexte() {
    spanElement.textContent = textes[index];

    index = (index + 1) % textes.length;
}

setInterval(changerTexte, 2000);

changerTexte();

