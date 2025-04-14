# Blagues Carambar - Frontend

Ce repository contient l'application web pour afficher des blagues Carambar, développée dans le cadre d'un projet de sélection CDA.

##  Description

Cette application web simple propose aux utilisateurs de découvrir des blagues Carambar aléatoires en cliquant sur un bouton. Les blagues sont récupérées depuis notre API dédiée.

##  Fonctionnalités

- Interface utilisateur conviviale et responsive
- Affichage de blagues aléatoires
- Design aux couleurs de la marque Carambar
- Support des appareils mobiles et desktop

##  Technologies utilisées

- HTML5
- CSS3 (avec variables CSS)
- JavaScript (ES6+)
- API Fetch pour les requêtes HTTP


##  Installation et utilisation locale

1. Clonez le repository :
```bash
git clone https://github.com/Coco29dev/CDA-Front.git
cd CDA-Front
```

2. Ouvrez le fichier `index.html` dans votre navigateur ou utilisez un serveur local comme Live Server pour VSCode.

##  Application déployée

L'application est déployée sur GitHub Pages et est accessible à l'adresse suivante :
[https://coco29dev.github.io/CDA-Front/](https://coco29dev.github.io/CDA-Front/)

##  Compatibilité

L'application est compatible avec les navigateurs modernes :
- Chrome
- Firefox
- Safari
- Edge

Et s'adapte aux différentes tailles d'écran grâce à son design responsive.

##  Structure du projet

```
CDA-Front/
├── index.html          # Page HTML principale
├── css/
│   └── style.css       # Styles CSS
├── js/
│   └── script.js       # JavaScript pour l'interaction avec l'API
└── images/
    ├── favicon.ico     # Favicon
    └── caramdrole-logo.png  # Logo Carambar 
```

##  Connexion avec l'API

L'application se connecte à l'API de blagues Carambar pour récupérer des blagues aléatoires. L'API est hébergée sur Render.com :
- Endpoint utilisé : `https://api-carambar.onrender.com/api/v1/blagues/random`

##  Licence

Ce projet est sous licence ISC. Voir le fichier `package.json` pour plus d'informations.

##  Liens utiles

- [Repository Backend](https://github.com/Coco29dev/CDA-Back)
- [Documentation API](https://api-carambar.onrender.com/api-docs)
