import styled from "styled-components";

import grey from "@material-ui/core/colors/grey";

export const CardContainer = styled.div`
  margin-bottom: 10px;
`;

export const Code = styled.code`
  margin-top: 24px;
  display: block;
  font-size: 16px;
  background-color: ${grey[100]};
  color: ${grey[900]};
  padding: 10px;
  width: 100%;
  overflow-wrap: break-word;
`;
