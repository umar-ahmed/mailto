import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Container from "@material-ui/core/Container";

import App from "./components/App";
import AppHeader from "./components/AppHeader";
import MailToForm from "./components/MailToForm";
import ResultCard from "./components/ResultCard";
import * as serviceWorker from "./serviceWorker";

function Root() {
  const [result, setResult] = useState("");
  const values = {
    email: "",
    subject: "",
    body: ""
  };

  function handleSubmit(values) {
    const mailTo = encodeURI(
      `mailto:${values.email}?subject=${values.subject}&body=${values.body}`
    );
    setResult(mailTo);
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    subject: Yup.string(),
    body: Yup.string()
  });

  return (
    <App>
      <AppHeader />
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

serviceWorker.register();
