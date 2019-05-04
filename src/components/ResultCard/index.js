import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { CardContainer, Code } from "./ResultCard.styles";

export default function ResultCard({ children }) {
  function handleCopyClick() {
    navigator.clipboard.writeText(children);
  }

  function handleOpenClick() {
    window.open(children);
  }

  return (
    <CardContainer>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Result
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Copy this to your clipboard and add to the href of an anchor tag
          </Typography>
          <Code>{children}</Code>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={handleCopyClick}>
            Copy to Clipboard
          </Button>
          <Button onClick={handleOpenClick}>Open</Button>
        </CardActions>
      </Card>
    </CardContainer>
  );
}
