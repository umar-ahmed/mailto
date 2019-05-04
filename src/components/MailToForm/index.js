import { Form } from "formik";
import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { Container, FormActions } from "./MailToForm.styles";

export default function MailToForm({
  errors,
  handleChange,
  resetForm,
  values: { to, subject, body }
}) {
  const commonProps = {
    fullWidth: true,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined"
  };

  function handleFormClearClick() {
    resetForm();
  }

  return (
    <Container>
      <Form>
        <TextField
          error={errors.to}
          helperText={errors.to}
          label="Email"
          name="to"
          value={to}
          {...commonProps}
        />
        <TextField
          error={errors.subject}
          helperText={errors.subject}
          label="Subject"
          name="subject"
          value={subject}
          {...commonProps}
        />
        <TextField
          error={errors.body}
          helperText={errors.body}
          label="Body"
          multiline
          name="body"
          rows={4}
          value={body}
          {...commonProps}
        />
        <FormActions>
          <Button onClick={handleFormClearClick}>Clear Form</Button>
          <Button color="primary" type="submit" variant="contained">
            Generate Link
          </Button>
        </FormActions>
      </Form>
    </Container>
  );
}
