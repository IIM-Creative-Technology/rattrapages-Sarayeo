# Intégration avec Tailwind CSS

Bienvenue dans ce dossier d'intégration d'une maquette Mangoo en utilisant **Tailwind CSS**. Ce README vous expliquera le projet, depuis l'installation jusqu'à la construction et la stylisation. À la fin, vous trouverez une vidéo qui présentera le projet, et tous les liens vers les sources utilisées seront également fournis.

## Initialisation du projet

Tout d'abord, il est important de savoir que vous avez la possibilité d'intégrer la maquette avec ou sans Vite, ou bien de partir de zéro avec du HTML/CSS classique. Dans ce projet, j'ai choisi de partir de zéro en utilisant la documentation de Tailwind pour l'installation.

[Voici le lien vers la documentation que j'ai utilisée](https://tailwindcss.com/docs/installation)

Voici les étapes que j'ai suivies :

```bash
# Installer Tailwind CSS
npm install -D tailwindcss

# Initialiser Tailwind CSS
npx tailwindcss init
```
Configurer le fichier tailwind.config.js avec les lignes suivantes :
lignes :
  ``` module.exports = {
        content: ["./src/**/*.{html,js}"],
            theme: {
            extend: {},
         },
        plugins: [],
    }```
Configurer le fichier postcss.config.js avec les lignes suivantes :
  ``` module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```   
Créer un dossier src et y ajouter un fichier style.css contenant les lignes suivantes pour importer Tailwind CSS :
  ``` @tailwind base;
      @tailwind components;
      @tailwind utilities;

  ```
Enfin, lancer la commande suivante pour générer le bon fichier CSS dans mon cas, qui sera ensuite lié à mon HTML :
  ``` npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
  ```



Cette commande permet également de compiler le style sans utiliser de serveur.

### Intégration
Après avoir créé mon fichier .gitignore et ajouté le dossier node_modules, je suis retourné à la maquette qui nous a été envoyée. J'ai préparé deux versions : une copie de la maquette originale et une version responsive réalisée avant l'initialisation du projet.Voici le nouveau lien de la maquette.
` https://xd.adobe.com/view/5c98cc17-873b-43de-95a9-28a926085a5d-09cb/`. 

J'ai récupéré certains éléments et dimensions de cette maquette et les ai ajoutés au dossier assets au fur et à mesure. Pour intégrer la maquette, j'ai opté pour une approche consistant à diviser la page en six grandes sections, chacune contenant une, deux ou trois grandes divs en fonction du positionnement des éléments.

Une explication détaillée de l'intégration de la vidéo complète est disponible dans la vidéo ci-jointe. Bon visionnage !

 **lien-video** . 
