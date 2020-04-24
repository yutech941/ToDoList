import React from "react";
import SimpleList from "../material-ui/listUi";
import BasicTextFields from "../material-ui/inputUi";
import SimpleContainer from "../material-ui/centerUi";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SimpleContainer />
        <BasicTextFields />
        <SimpleList />
      </div>
    );
  }
}
