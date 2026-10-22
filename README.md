# CV numérique — Anas Barkallah

Site web statique présentant le CV numérique d'**Anas Barkallah**, étudiant en troisième année en **Systèmes embarqués & développement mobile** à l'**ISET Radès**.

Projet réalisé dans le cadre de l'atelier **Déploiement Web** (enseignante : Mme Mariem Nasri) : conception d'un site statique, versionnement avec Git et mise en ligne avec GitHub Pages.

| Lien | Adresse |
|---|---|
| Dépôt GitHub | `[Lien du dépôt à compléter]` |
| Site en ligne | `[Lien du site publié à compléter]` |

> Les deux liens ci-dessus seront complétés une fois le dépôt créé et le site publié.

---

## Aperçu

Le site est une page unique, bilingue (français par défaut, anglais disponible), organisée en sections accessibles depuis un menu de navigation :

- **Accueil** — photo, nom, formation, courte présentation, accès aux projets et à GitHub ;
- **À propos** — profil, objectif professionnel, centres d'intérêt ;
- **Compétences** — compétences techniques, domaines explorés, compétences transversales ;
- **Expériences** — Sama Consulting, Somacs, Robotica ;
- **Projets** — WiFi-Channel-Monitor, jeux mobiles 2D & robotique de base ;
- **Formation** — ISET Radès, baccalauréat, certifications ;
- **Contact** — GitHub, Discord, e-mail.

Fonctionnalités :

- design sombre et responsive (ordinateur, tablette, téléphone) ;
- sélecteur de langue FR / EN sans rechargement de la page (l'attribut `lang` du document est mis à jour) ;
- menu mobile accessible (bouton, touche Échap, fermeture automatique après un clic) ;
- mise en évidence de la section active dans le menu ;
- année du pied de page générée automatiquement ;
- liens externes ouverts dans un nouvel onglet avec `rel="noopener noreferrer"` ;
- navigation au clavier, focus visible, prise en charge de `prefers-reduced-motion`.

Les informations encore inconnues (dates, e-mail, baccalauréat, lien du dépôt WiFi-Channel-Monitor…) sont affichées comme **« à compléter »** et sont faciles à repérer dans `index.html` et `script.js`.

## Technologies

- **HTML5** — structure sémantique ;
- **CSS3** — mise en forme, variables CSS, Grid et Flexbox, media queries ;
- **JavaScript (vanilla)** — langue, menu mobile, année dynamique.

Aucun framework, aucune bibliothèque, aucune étape de compilation. Les polices proviennent de Google Fonts ; si elles ne se chargent pas, le site utilise les polices du système.

## Structure des fichiers

```text
anas-barkallah-portfolio/
├── index.html            ← page d'entrée (doit rester à la racine)
├── style.css             ← styles
├── script.js             ← traductions FR/EN et interactions
├── README.md             ← ce fichier
├── rapport-technique.md  ← rapport du projet
└── assets/
    └── my_photo.jpg      ← photo de profil
```

## Lancer le site en local

Aucune installation n'est nécessaire.

- **Méthode simple :** double-cliquer sur `index.html` pour l'ouvrir dans le navigateur.
- **Avec VS Code :** installer l'extension *Live Server*, faire un clic droit sur `index.html` → *Open with Live Server*.
- **Avec Python (facultatif) :** depuis le dossier du projet :

```bash
python -m http.server 8000
```

puis ouvrir `http://localhost:8000`.

## Publication avec GitHub Pages

1. Créer un dépôt **public** sur GitHub (par exemple `anas-barkallah-portfolio`).
2. Envoyer tous les fichiers du projet, **y compris `assets/my_photo.jpg`**, en gardant `index.html` à la racine.
3. Dans le dépôt : **Settings → Pages**.
4. Sous **Build and deployment**, choisir **Source : Deploy from a branch**.
5. Choisir la branche **`main`** et le dossier **`/ (root)`**, puis **Save**.
6. Attendre une à quelques minutes, puis ouvrir l'adresse affichée, de la forme :
   `https://anas-barkallah.github.io/NOM-DU-DEPOT/`

Le détail des trois méthodes (interface GitHub, VS Code, terminal) se trouve dans [`rapport-technique.md`](rapport-technique.md).

### Commandes Git (premier envoi)

```bash
git init
git status
git add .
git commit -m "Initial commit: digital CV"
git branch -M main
git remote add origin https://github.com/anas-barkallah/NOM-DU-DEPOT.git
git push -u origin main
```

Remplacer `NOM-DU-DEPOT` par le nom réel du dépôt. Si un `remote` existe déjà :

```bash
git remote -v
git remote set-url origin https://github.com/anas-barkallah/NOM-DU-DEPOT.git
```

## Mettre à jour le site

Après chaque modification :

```bash
git status
git add .
git commit -m "Update digital CV"
git push
```

GitHub Pages republie automatiquement le site ; la mise à jour apparaît en général en une à quelques minutes (actualiser avec `Ctrl + F5` si l'ancienne version reste affichée).

**Modifier un texte :** le texte français est à la fois dans `index.html` et dans l'objet `translations.fr` de `script.js` ; le texte anglais est dans `translations.en`. Modifier les deux versions pour garder le site cohérent.

## Liste de vérification

- [ ] `index.html` est à la racine du dépôt.
- [ ] `assets/my_photo.jpg` est présent dans le dépôt et la photo s'affiche en ligne.
- [ ] Le site s'affiche correctement sur ordinateur et sur téléphone.
- [ ] Les boutons FR / EN traduisent toutes les sections.
- [ ] Le menu mobile s'ouvre et se ferme.
- [ ] Les liens GitHub et Discord s'ouvrent dans un nouvel onglet.
- [ ] Les éléments « à compléter » ont été remplis ou laissés volontairement.
- [ ] Les liens du dépôt et du site ont été ajoutés dans ce README et dans le rapport.

## Auteur

**Anas Barkallah** — [github.com/anas-barkallah](https://github.com/anas-barkallah)
