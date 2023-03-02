// @flow
import React from "react";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faEdit,
  faRefresh,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { ToastContainer } from "react-toastify";

import Dashboard from "./components/pages/Dashboard";

library.add(faPlus, faEdit, faRefresh, faTrash);

function App(): React$Node {
  return (
    <>
      <Dashboard />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
