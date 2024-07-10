HRnet

Ce projet est une application de gestion des employés créée avec React, Redux et React Table. Elle permet de créer de nouveaux employés et d'afficher la liste des employés actuels.

Installation
Pour installer et exécuter ce projet localement, suivez les étapes ci-dessous :

Clonez le dépôt :
git clone <URL_DU_DEPOT>
cd hrnet

Installez les dépendances :

- ```sh
  npm install
  ```

Démarrez l'application :

- ```sh
  npm start
  ```

Composants Principaux

/\*\*

- Le composant Form permet de créer un nouvel employé.
- Les données du formulaire sont gérées avec le hook useState et l'action Redux createNewEmployee est dispatchée lors de la soumission du formulaire.
  \*/
  import Form from './components/Form';

Utilisation du Plugin oc-modal-react
/\*\*

- Le plugin oc-modal-react est utilisé pour afficher une modale de confirmation après la soumission du formulaire.
-
- Pour l'utiliser, suivez les étapes ci-dessous :
-
- Installer le plugin :
- ```sh
    npm i oc-modal-react
  ```
-
- Importer le dans le composant FORM :
- ```js
  import Modal from "oc-modal-react/dist/index";
  ```

- ```
  */
  ```

BasicTable Component
/\*\*

- Le composant BasicTable affiche une liste des employés actuels en utilisant react-table.
- Les données sont obtenues depuis le store Redux avec useSelector.
  \*/
  import BasicTable from './components/BasicTable';

Columns Configuration
/\*\*

- Le fichier columns.js définit les colonnes de la table utilisées par react-table.
  \*/
  import { COLUMNS } from './components/columns';

Nav Component
/\*\*

- Le composant Nav affiche la barre de navigation avec des liens vers l'accueil et la page des employés.
  \*/
  import Nav from './components/Nav';

Configuration de Redux
Store
/\*\*

- Le fichier store/index.js configure le store Redux avec le slice des employés.
  \*/
  import store from './store';

/\*\*

- Le fichier index.js configure le rendu de l'application React et intègre le store Redux.
  \*/
  import { Provider } from 'react-redux';
  import { store } from './store';
  import App from './App';
  import ReactDOM from 'react-dom';

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);

/\*\*

- Le composant principal (App.js) définit les routes principales de l'application.
  \*/
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import Form from './components/Form';
  import BasicTable from './components/BasicTable';
  import Nav from './components/Nav';

function App() {
return (
<Router>

<Nav />
<Switch>
<Route path="/" exact component={Form} />
<Route path="/employees" component={BasicTable} />
</Switch>
</Router>
);
}

export default App;
