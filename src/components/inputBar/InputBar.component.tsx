import { TextField } from "@material-ui/core";
import React from "react";

import "./InputBar.style.scss";
  // @ts-ignore
function InputBar({ changeHandler, inputText }) {
  return (
    <div className="inputForm">
      <form noValidate autoComplete="off" className="inputForm inputForm__form">
        {/* // @ts-ignore */}
        <TextField
          className="textField"
          id="filled-basic"
          label="Your Word"
          variant="filled"
          color="secondary"
          value={inputText}
          required
          onChange={(e) => changeHandler(e.target.value)}
        />
      </form>
    </div>
  );
}

export default InputBar;
