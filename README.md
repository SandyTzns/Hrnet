HRnet

Ce projet est une application de gestion des employés créée avec React, Redux et React Table. Elle permet de créer de nouveaux employés et d'afficher la liste des employés actuels.

Installation
Pour installer et exécuter ce projet localement, suivez les étapes ci-dessous :

Clonez le dépôt :
git clone <URL_DU_DEPOT>
cd hrnet

Installez les dépendances :
npm install

Démarrez l'application :
npm start

Composants Principaux

Form Component
Le composant Form permet de créer un nouvel employé. Les données du formulaire sont gérées avec le hook useState et l'action Redux createNewEmployee est dispatchée lors de la soumission du formulaire.

Utilisation du Plugin ModalBasicReact
Le plugin ModalBasicReact est utilisé pour afficher une modale de confirmation après la soumission du formulaire. Pour l'utiliser, suivez les étapes ci-dessous :

Installer le plugin :
npm install sandy-super-plugin

Importer le dans le composant FORM :
import ModalBasicReact from "";

BasicTable Component
Le composant BasicTable affiche une liste des employés actuels en utilisant react-table. Les données sont obtenues depuis le store Redux avec useSelector.

Columns Configuration
Le fichier columns.js définit les colonnes de la table utilisées par react-table.

Nav Component
Le composant Nav affiche la barre de navigation avec des liens vers l'accueil et la page des employés.

Configuration de Redux
Store
Le fichier store/index.js configure le store Redux avec le slice des employés.
Le fichier index.js configure le rendu de l'application React et intègre le store Redux.
Le composant principal (App.js) définit les routes principales de l'application.
