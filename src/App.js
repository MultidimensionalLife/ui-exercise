// @flow
import React from "react";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faEdit,
  faRefresh,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import Dashboard from "./components/pages/Dashboard";

library.add(faPlus, faEdit, faRefresh, faTrash);

function App(): React$Node {
  return <Dashboard />;
}

export default App;
