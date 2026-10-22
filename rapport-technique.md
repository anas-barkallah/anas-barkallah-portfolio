| Information | Valeur |
|---|---|
| Nom et prénom | Anas Barkallah |
| Lien du dépôt GitHub | [Lien du dépôt à compléter] |
| Lien du site en ligne | [Lien du site publié à compléter] |

# Projet Déploiement Web — Mise en ligne d'un site statique : CV numérique de l'étudiant

**Établissement :** ISET Radès
**Module :** Atelier Déploiement Web
**Enseignante :** Mme Mariem Nasri
**Étudiant :** Anas Barkallah — 3ᵉ année, Systèmes embarqués & développement mobile
**Date :** [Date de remise à compléter]

---

## Sommaire

1. Introduction
2. Objectifs du projet
3. Description et sections du site
4. Outils et technologies
5. Structure des fichiers du projet
6. Création du dépôt GitHub
7. Déploiement via l'interface GitHub
8. Déploiement via Visual Studio Code
9. Déploiement via le terminal
10. Vérification du site en ligne
11. Mise à jour du site après publication
12. Problèmes fréquents et solutions
13. Conclusion

> **Insertion des captures d'écran.** Les emplacements prévus pour les captures sont signalés par le symbole 📷. Pour en ajouter une, enregistrer l'image dans un dossier `captures/` à la racine du dépôt (par exemple `captures/01-creation-depot.png`), puis remplacer la ligne 📷 par :
> `![Création du dépôt sur GitHub](captures/01-creation-depot.png)`
> Si le rapport est remis en Word ou en PDF, insérer simplement l'image à l'endroit indiqué.

---

## 1. Introduction

Dans le cadre de l'atelier Déploiement Web à l'ISET Radès, il m'a été demandé de concevoir un site web statique présentant mon CV numérique, puis de le mettre en ligne grâce à GitHub et au service gratuit GitHub Pages.

Un site statique est composé uniquement de fichiers HTML, CSS et, si nécessaire, JavaScript. Ces fichiers sont envoyés tels quels au navigateur : aucun serveur applicatif ni base de données n'est nécessaire. Ce type de site est donc simple à héberger, rapide à charger et facile à maintenir.

Ce rapport décrit le contenu du site, les outils utilisés, la structure du projet, les trois méthodes de mise en ligne (interface web de GitHub, Visual Studio Code et ligne de commande) ainsi que la procédure de mise à jour du site après sa publication.

## 2. Objectifs du projet

Les objectifs fixés par le sujet sont les suivants :

- créer un dépôt GitHub et y héberger les fichiers du site ;
- utiliser Git pour versionner le projet (`add`, `commit`, `push`) ;
- publier gratuitement le site avec GitHub Pages ;
- mettre à jour le site en ligne à partir de trois interfaces : GitHub, VS Code et le terminal ;
- rédiger un rapport technique décrivant la démarche suivie.

À titre personnel, j'ai également cherché à obtenir un site :

- lisible sur ordinateur comme sur téléphone (design responsive) ;
- disponible en français et en anglais ;
- accessible (navigation au clavier, textes alternatifs, contrastes suffisants) ;
- simple à maintenir, sans framework ni outil de compilation.

## 3. Description et sections du site

Le site est une page unique de présentation professionnelle. Un menu de navigation fixé en haut de l'écran permet d'accéder directement à chaque section. Sur téléphone, ce menu est remplacé par un bouton qui ouvre une liste déroulante.

| Section | Contenu |
|---|---|
| **Accueil** | Photo de profil, nom, intitulé de la formation, courte présentation, bouton vers les projets et lien vers GitHub. |
| **À propos** | Présentation : étudiant en 3ᵉ année qui explore plusieurs domaines techniques. Objectif professionnel (continuer à apprendre et gagner en expérience, orientation encore ouverte). Centres d'intérêt : manhua et anime. |
| **Compétences** | Compétences techniques (HTML, CSS, JavaScript, Python, Godot), domaines explorés (systèmes embarqués avec ESP32, robotique de base, jeux mobiles 2D, serveur de sauvegarde, maintenance technique) et compétences transversales. Aucun niveau ni pourcentage n'est affiché. |
| **Expériences** | Sama Consulting (stage — participation à la mise en place d'un serveur de sauvegarde des données de l'entreprise), Somacs (maintenance technique — réparation d'équipements et de machines de garage), Robotica (participation au développement de jeux mobiles 2D et à la construction d'un robot télécommandé et d'un robot suiveur de ligne). Les périodes sont indiquées « à compléter ». |
| **Projets** | WiFi-Channel-Monitor (projet basé sur un ESP32, lien du dépôt à compléter) et les travaux de jeux mobiles 2D et de robotique de base réalisés chez Robotica. |
| **Formation** | ISET Radès — Systèmes embarqués & développement mobile, 3ᵉ année. Baccalauréat et certifications : à compléter. |
| **Contact** | Lien vers le profil GitHub (lien principal), lien vers le profil Discord, adresse e-mail à compléter. Les liens externes s'ouvrent dans un nouvel onglet. |
| **Pied de page** | Nom et année courante, calculée automatiquement en JavaScript. |

**Fonctionnalités principales :**

- **Bilinguisme FR/EN :** deux boutons « FR » et « EN » changent la langue de tout le site sans recharger la page : textes, menu, boutons, expériences, projets, pied de page, texte alternatif de la photo et libellés d'accessibilité. L'attribut `lang` de la balise `<html>` est mis à jour et le choix est mémorisé dans le navigateur.
- **Menu mobile :** le bouton du menu indique son état (`aria-expanded`), se ferme après un clic sur un lien, avec la touche Échap ou en cliquant en dehors.
- **Section active :** le lien du menu correspondant à la section visible est mis en évidence.
- **Accessibilité :** lien d'évitement « Aller au contenu principal », focus visible, structure sémantique (`header`, `nav`, `main`, `section`, `footer`), respect de la préférence « réduire les animations ».

📷 *Capture d'écran à insérer : page d'accueil du site sur ordinateur.*

📷 *Capture d'écran à insérer : site affiché sur téléphone, menu mobile ouvert.*

## 4. Outils et technologies

| Outil | Rôle dans le projet |
|---|---|
| **HTML5** | Structure du site : sections, titres, listes, liens, image de profil. Utilisation de balises sémantiques pour l'accessibilité et le référencement. |
| **CSS3** | Mise en forme : variables CSS (couleurs, espacements), mise en page avec Grid et Flexbox, *media queries* pour l'adaptation aux écrans, recadrage de la photo avec `object-fit: cover`. |
| **JavaScript** | Interactions : changement de langue, menu mobile, lien actif, année du pied de page. Code « vanilla », sans bibliothèque. Les textes sont modifiés avec `textContent` (pas d'injection de HTML). |
| **Visual Studio Code** | Éditeur de code utilisé pour créer et modifier les fichiers, avec un terminal intégré et une interface Git (onglet *Source Control*). |
| **Git** | Système de gestion de versions installé en local : il enregistre l'historique des modifications (commits) et permet de les envoyer vers GitHub. |
| **GitHub** | Plateforme d'hébergement du dépôt distant ; offre une interface web pour gérer les fichiers, l'historique et les paramètres. |
| **GitHub Pages** | Service gratuit de GitHub qui publie un site statique directement à partir d'une branche du dépôt. |

## 5. Structure des fichiers du projet

```text
anas-barkallah-portfolio/
├── index.html            ← page d'entrée du site
├── style.css             ← feuille de style
├── script.js             ← traductions FR/EN et interactions
├── README.md             ← présentation du dépôt
├── rapport-technique.md  ← ce rapport
└── assets/
    └── my_photo.jpg      ← photo de profil
```

Points importants :

- Le fichier d'entrée s'appelle **`index.html`** et se trouve **à la racine** du dépôt : c'est la condition pour que GitHub Pages l'affiche automatiquement.
- La photo est un vrai fichier du dépôt, `assets/my_photo.jpg`, appelée dans `index.html` par un **chemin relatif** : `src="assets/my_photo.jpg"`. Le site fonctionne ainsi en local comme en ligne.
- Les noms de fichiers sont en minuscules et sans espaces. GitHub Pages distingue les majuscules des minuscules : `My_Photo.JPG` et `my_photo.jpg` sont deux fichiers différents.

## 6. Création du dépôt GitHub

1. Se connecter à son compte sur [github.com](https://github.com) (profil : `https://github.com/anas-barkallah`).
2. Cliquer sur le bouton **+** en haut à droite, puis **New repository**.
3. Renseigner le **Repository name**, par exemple `anas-barkallah-portfolio`.
4. Ajouter éventuellement une description : « CV numérique — projet Déploiement Web ».
5. Choisir la visibilité **Public** (GitHub Pages est gratuit pour les dépôts publics).
6. Pour la méthode par VS Code ou par le terminal, **ne pas** cocher *Add a README file* : le projet local contient déjà son README, ce qui évite un conflit lors du premier `push`.
7. Cliquer sur **Create repository**.

📷 *Capture d'écran à insérer : formulaire de création du dépôt.*

## 7. Déploiement via l'interface GitHub

Cette méthode n'utilise que le navigateur.

### 7.1 Envoi des fichiers

1. Ouvrir le dépôt nouvellement créé.
2. Cliquer sur **uploading an existing file** (ou **Add file → Upload files**).
3. Ouvrir le dossier du projet sur l'ordinateur et **glisser-déposer son contenu** dans la page : `index.html`, `style.css`, `script.js`, `README.md`, `rapport-technique.md` **et le dossier `assets`**.
   - Il faut déposer le *contenu* du dossier et non le dossier lui-même ; sinon `index.html` se retrouverait dans un sous-dossier et GitHub Pages ne le trouverait pas.
   - Glisser le dossier `assets` conserve son arborescence (`assets/my_photo.jpg`).
4. Saisir un message de commit, par exemple `Initial commit: digital CV`, puis cliquer sur **Commit changes**.
5. Vérifier dans la liste des fichiers que **`index.html` apparaît à la racine** et que le dossier `assets` contient bien `my_photo.jpg`.

📷 *Capture d'écran à insérer : liste des fichiers du dépôt après l'envoi.*

### 7.2 Activation de GitHub Pages

1. Dans le dépôt, ouvrir l'onglet **Settings**.
2. Dans le menu de gauche, cliquer sur **Pages**.
3. Dans **Build and deployment**, choisir **Source : Deploy from a branch**.
4. Dans **Branch**, sélectionner **`main`** et le dossier **`/ (root)`**, puis cliquer sur **Save**.
5. Patienter une à quelques minutes. L'adresse du site s'affiche en haut de la page **Pages**, sous la forme :
   `https://anas-barkallah.github.io/anas-barkallah-portfolio/`
6. L'avancement de la publication est visible dans l'onglet **Actions** (workflow *pages build and deployment*).

📷 *Capture d'écran à insérer : page Settings → Pages avec la branche `main` et le dossier `/ (root)`.*

📷 *Capture d'écran à insérer : message indiquant que le site est en ligne.*

## 8. Déploiement via Visual Studio Code

### 8.1 Préparation

1. Installer **Git** (https://git-scm.com) et **Visual Studio Code**.
2. Configurer une seule fois son identité Git dans un terminal :

```bash
git config --global user.name "Anas Barkallah"
git config --global user.email "ADRESSE-EMAIL-DU-COMPTE-GITHUB"
```

   (Remplacer `ADRESSE-EMAIL-DU-COMPTE-GITHUB` par l'adresse associée au compte GitHub.)

### 8.2 Création du projet

1. Créer un dossier `anas-barkallah-portfolio`.
2. Dans VS Code : **File → Open Folder…** et sélectionner ce dossier.
3. Créer les fichiers `index.html`, `style.css`, `script.js`, `README.md`, `rapport-technique.md`, puis le dossier `assets` contenant `my_photo.jpg`.
4. Enregistrer tous les fichiers (**File → Save All** ou `Ctrl + K` puis `S`).
5. Vérifier le rendu en ouvrant `index.html` dans le navigateur (ou avec l'extension *Live Server*).

### 8.3 Versionnement et envoi

1. Ouvrir le terminal intégré : **Terminal → New Terminal** (ou `` Ctrl + ` ``).
2. Initialiser Git si le dossier n'est pas encore un dépôt :

```bash
git init
git branch -M main
```

3. Relier le dossier local au dépôt GitHub :

```bash
git remote add origin https://github.com/anas-barkallah/anas-barkallah-portfolio.git
```

4. Ouvrir l'onglet **Source Control** (icône des branches, ou `Ctrl + Shift + G`) :
   - les fichiers modifiés apparaissent dans **Changes** ;
   - cliquer sur **+** (*Stage All Changes*) pour les indexer ;
   - saisir un message, par exemple `Initial commit: digital CV`, puis cliquer sur **Commit** ;
   - cliquer sur **Publish Branch** ou **Sync Changes** pour envoyer les commits vers GitHub.
5. Lors du premier envoi, VS Code propose de se connecter à GitHub dans le navigateur : accepter et autoriser l'accès.
6. Activer GitHub Pages comme décrit en **7.2** si ce n'est pas déjà fait.
7. Vérifier sur GitHub que les fichiers sont présents, puis ouvrir l'adresse du site.

📷 *Capture d'écran à insérer : onglet Source Control de VS Code avec le commit.*

## 9. Déploiement via le terminal

Toutes les commandes sont exécutées depuis le dossier du projet (`cd chemin/vers/anas-barkallah-portfolio`).

### 9.1 Premier envoi

```bash
git init
git status
git add .
git commit -m "Initial commit: digital CV"
git branch -M main
git remote add origin https://github.com/anas-barkallah/REPOSITORY-NAME.git
git push -u origin main
```

| Commande | Rôle |
|---|---|
| `git init` | Transforme le dossier en dépôt Git local (à faire une seule fois). |
| `git status` | Affiche l'état des fichiers : nouveaux, modifiés, indexés. |
| `git add .` | Indexe tous les fichiers du dossier pour le prochain commit. |
| `git commit -m "…"` | Enregistre un instantané des fichiers indexés avec un message. |
| `git branch -M main` | Nomme la branche principale `main`. |
| `git remote add origin URL` | Associe le dépôt local au dépôt GitHub sous le nom `origin`. |
| `git push -u origin main` | Envoie la branche `main` vers GitHub et mémorise la liaison pour les envois suivants. |

**Important :** `REPOSITORY-NAME` doit être remplacé par le nom réel du dépôt (par exemple `anas-barkallah-portfolio`).

### 9.2 Vérifier ou corriger le dépôt distant

La commande `git remote add origin` ne doit être exécutée **qu'une seule fois**. La relancer provoque l'erreur `remote origin already exists`. Pour vérifier ou corriger l'adresse :

```bash
git remote -v
git remote set-url origin https://github.com/anas-barkallah/REPOSITORY-NAME.git
```

### 9.3 Authentification

Depuis 2021, GitHub n'accepte plus le mot de passe du compte pour `git push` en HTTPS. Deux solutions :

- utiliser **Git Credential Manager** (installé avec Git pour Windows), qui ouvre une fenêtre de connexion GitHub dans le navigateur lors du premier `push` ;
- ou créer un **Personal Access Token** (GitHub → *Settings* → *Developer settings* → *Personal access tokens*) et le saisir à la place du mot de passe. Ce jeton est confidentiel et ne doit jamais être écrit dans un fichier du projet.

📷 *Capture d'écran à insérer : terminal après un `git push` réussi.*

## 10. Vérification du site en ligne

Une fois le site publié, vérifier les points suivants :

- [ ] l'adresse `https://anas-barkallah.github.io/REPOSITORY-NAME/` s'ouvre sans erreur 404 ;
- [ ] la photo de profil s'affiche (le fichier `assets/my_photo.jpg` est bien présent dans le dépôt) ;
- [ ] les styles sont appliqués (fond sombre, mise en page) : `style.css` est bien chargé ;
- [ ] les boutons **FR / EN** traduisent toutes les sections ;
- [ ] chaque lien du menu mène à la bonne section ;
- [ ] sur téléphone (ou en réduisant la fenêtre), le menu mobile s'ouvre et se ferme ;
- [ ] les liens GitHub et Discord s'ouvrent dans un nouvel onglet ;
- [ ] l'année du pied de page correspond à l'année en cours ;
- [ ] la console du navigateur (`F12` → *Console*) n'affiche aucune erreur.

Une fois ces vérifications faites, reporter les liens réels du dépôt et du site dans le tableau en tête de ce rapport et dans le `README.md`.

📷 *Capture d'écran à insérer : site en ligne avec l'adresse visible dans la barre du navigateur.*

## 11. Mise à jour du site après publication

À chaque nouveau commit sur la branche `main`, GitHub Pages republie automatiquement le site. La mise à jour est généralement visible au bout d'une à quelques minutes.

**Remarque sur les textes bilingues :** les textes français figurent dans `index.html` et dans l'objet `translations.fr` de `script.js` ; les textes anglais figurent dans `translations.en`. Pour modifier une information, mettre à jour ces emplacements afin que les deux langues restent cohérentes.

### 11.1 Depuis l'interface GitHub

1. Ouvrir le fichier à modifier dans le dépôt (par exemple `index.html`).
2. Cliquer sur l'icône **crayon** (*Edit this file*).
3. Effectuer la modification (par exemple remplacer « Période à compléter » par les dates réelles d'une expérience).
4. Cliquer sur **Commit changes…**, saisir un message explicite, puis valider.
5. Suivre la republication dans l'onglet **Actions**, puis actualiser le site en ligne.

Pour remplacer la photo : ouvrir le dossier `assets`, **Add file → Upload files**, déposer une nouvelle image portant **exactement** le nom `my_photo.jpg`, puis valider le commit.

📷 *Capture d'écran à insérer : modification d'un fichier dans l'éditeur web de GitHub.*

### 11.2 Depuis Visual Studio Code

1. Récupérer d'abord les éventuelles modifications faites sur GitHub : **Source Control → … → Pull** (ou `git pull` dans le terminal).
2. Modifier le fichier, puis l'enregistrer.
3. Dans **Source Control**, indexer (**+**), saisir un message, cliquer sur **Commit**, puis **Sync Changes**.
4. Vérifier le nouveau commit sur GitHub, puis le site en ligne.

### 11.3 Depuis le terminal

```bash
git pull
git status
git add .
git commit -m "Update digital CV"
git push
```

`git pull` récupère les modifications faites ailleurs (par exemple depuis l'interface GitHub) afin d'éviter un refus lors du `push`.

📷 *Capture d'écran à insérer : site en ligne après la mise à jour.*

## 12. Problèmes fréquents et solutions

| Problème | Cause probable | Solution |
|---|---|---|
| **Erreur 404** sur l'adresse GitHub Pages | `index.html` absent de la racine, mal nommé (`Index.html`, `index.htm`), ou Pages non activé | Vérifier que `index.html` est à la racine et en minuscules ; vérifier *Settings → Pages* (branche `main`, dossier `/ (root)`). |
| **Page affichée sans mise en forme** | Chemin vers `style.css` incorrect | Utiliser un chemin relatif `href="style.css"` (pas de `/` au début, pas de chemin du type `C:\…`). |
| **Photo absente** | Fichier non envoyé, mauvais dossier ou casse différente (`My_Photo.JPG`) | Vérifier la présence de `assets/my_photo.jpg` sur GitHub et la correspondance exacte avec `src="assets/my_photo.jpg"`. |
| **Site non mis à jour** | Publication en cours ou cache du navigateur | Attendre quelques minutes, consulter l'onglet *Actions*, actualiser avec `Ctrl + F5` ou ouvrir une fenêtre privée. |
| `remote origin already exists` | `git remote add` exécuté une deuxième fois | `git remote -v` pour vérifier, puis `git remote set-url origin URL` pour corriger. |
| `Authentication failed` / `Support for password authentication was removed` | Utilisation du mot de passe du compte | Se connecter via Git Credential Manager ou utiliser un *Personal Access Token*. |
| `failed to push some refs` / `rejected (fetch first)` | Le dépôt distant contient des commits absents en local (par exemple un README créé sur GitHub) | `git pull origin main`, résoudre les éventuels conflits, puis `git push`. Pour un premier envoi avec historiques distincts : `git pull origin main --allow-unrelated-histories`. |
| `src refspec main does not match any` | Aucun commit encore créé, ou branche nommée autrement | Faire `git add .` puis `git commit`, et vérifier le nom de la branche avec `git branch`. |
| `fatal: not a git repository` | Commande lancée hors du dossier du projet ou `git init` non effectué | Se placer dans le bon dossier (`cd …`) ou exécuter `git init`. |
| Option Pages indisponible | Dépôt privé sur un compte gratuit | Passer le dépôt en **Public** (*Settings → General → Danger Zone → Change visibility*). |

## 13. Conclusion

Ce projet m'a permis de réaliser un CV numérique sous forme de site statique, de le versionner avec Git et de le publier gratuitement avec GitHub Pages. J'ai pu comparer trois façons de travailler : l'interface web de GitHub, pratique pour des modifications rapides ; Visual Studio Code, qui réunit l'édition du code et la gestion de Git ; et le terminal, qui donne un contrôle précis sur chaque étape.

J'ai également appris l'importance de détails concrets du déploiement : position du fichier `index.html` à la racine, chemins relatifs, respect de la casse des noms de fichiers, authentification et délai de publication.

Le site reste facile à faire évoluer : il suffit de modifier un fichier et de publier un nouveau commit pour que la version en ligne soit mise à jour. Les informations marquées « à compléter » (dates, e-mail, baccalauréat, lien du projet WiFi-Channel-Monitor) pourront être ajoutées au fur et à mesure.
