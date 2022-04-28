import styled from "styled-components";
const AvatarUser = styled.View`
  width: ${(props) => (props.width ? props.width : 70)};
  height: ${(props) => (props.height ? props.height : 70)};
  border-radius: 50px;
  margin: 5px;
  border: none;
`;
const Color = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50;
  margin: 5px;
  background-color: ${(props) => props.color};
  border: ${(props) =>
    props.selected === true ? "2px solid #00d084" : "none"};
`;
export { AvatarUser, Color };
