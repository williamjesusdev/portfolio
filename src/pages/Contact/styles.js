import styled from "styled-components";

export const Container = styled.form`
  display: flex:
  flex-direction: column:
`;

export const Label = styled.label`
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  width: ${props => props.width || "46%"};
  height: 4em;
  margin: 2% 2%;
  border: 0;
  border-radius: 0.3em;
  background: #4d4d4e;
  padding: 0.25em 1em;
  color: #8d8d8d;
`;

export const Text = styled.textarea`
  flex: 1;
  width: 96%;
  margin: 2% 2%;
  border: 0;
  border-radius: 0.3em;
  background: #4d4d4e;
  padding: 0.25em 1em;
  color: #8d8d8d;
`;
