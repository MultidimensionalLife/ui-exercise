// @flow

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faEdit,
  faRefresh,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "./components/organisms/Navbar/Navbar";

library.add(faPlus, faEdit, faRefresh, faTrash);

function App(): React$Node {
  return <NavBar />;
}

export default App;
