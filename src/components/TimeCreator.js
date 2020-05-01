import React from "react";
import TextField from "@material-ui/core/TextField";
import moment from "moment/moment";

const styles = {
  timeInput: {
    width: "120px",
    marginLeft: "10px",
    marginRight: "10px",
  },
};

let mom = moment();

export default class TimeCreator extends React.Component {
  render() {
    return (
      <div>
        <TextField
          style={styles.timeInput}
          variant="outlined"
          value={mom.format("L")}
        />
      </div>
    );
  }
}
