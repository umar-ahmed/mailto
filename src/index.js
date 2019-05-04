import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import App from "./components/App";
import MailToForm from "./components/MailToForm";
import ResultCard from "./components/ResultCard";

function Root() {
  const [result, setResult] = useState("");
  const values = {
    to: "",
    subject: "",
    body: ""
  };

  function handleSubmit(values) {
    const mailTo = encodeURI(
      `mailto:${values.to}?subject=${values.subject}&body=${values.body}`
    );
    setResult(mailTo);
  }

  const schema = Yup.object().shape({
    to: Yup.string()
      .email()
      .required(),
    subject: Yup.string(),
    body: Yup.string()
  });

  return (
    <App>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Mailto Link Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Formik
          initialValues={values}
          onSubmit={handleSubmit}
          render={props => <MailToForm {...props} />}
          validationSchema={schema}
        />
        {result && <ResultCard>{result}</ResultCard>}
      </Container>
    </App>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
