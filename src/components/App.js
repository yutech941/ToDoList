import React from "react";
import ButtonAppBar from "./material-ui/ButtonAppBar";
import BasicTextField from "./material-ui/BasicTextField";
import SimpleList from "./material-ui/SimpleList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonAppBar />

        <div
          style={{
            margin: "100px 500px 0 500px",
          }}
        >
          <BasicTextField />
          <SimpleList />
        </div>
      </div>
    );
  }
}
