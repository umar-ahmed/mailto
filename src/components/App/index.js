import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

export default function App({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      {children}
    </React.Fragment>
  );
}
