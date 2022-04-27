import styled from "styled-components";
const AvatarUser = styled.View`
  width: ${(props) => (props.width ? props.width : 70)};
  height: ${(props) => (props.height ? props.height : 70)};
  border-radius: 50px;
  margin: 5px;
  border: none;
`;
export { AvatarUser };
