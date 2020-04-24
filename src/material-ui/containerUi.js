import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "../material-ui/appBarUi"; //appbar
import BasicTextFields from "../material-ui/inputUi"; //input
import SimpleList from "../material-ui/listUi"; //list

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <ButtonAppBar />
        <BasicTextFields />
        <SimpleList />
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "80vh" }}
        />
      </Container>
    </React.Fragment>
  );
}
