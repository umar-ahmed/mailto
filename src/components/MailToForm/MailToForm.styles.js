import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 24px 0;

  && > * + * {
    margin-left: 10px;
  }
`;
