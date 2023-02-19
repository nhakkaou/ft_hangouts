import styled from "styled-components";

export const Select = styled.Text`
  font-weight: ${(props) => (props.enabled ? "bold" : 400)};
  color: ${(props) => (props.color ? props.color : "#000")};
  text-decoration: ${(props) => (props.enabled ? "underline" : "none")};
  font-size: ${(props) => (props.enabled ? "15px" : "12px")};
`;
