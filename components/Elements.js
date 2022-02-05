import { styled } from "@mui/material/styles";
import {  Button } from "@mui/material";
export const StyledButton = styled(Button)`
  background-color: #edeff2;
  color:#6696de;
  margin-top: 10px;
  margin-left: 1rem;
  border-radius: 7px;
  margin-bottom: 3px;
  text-transform:lowercase;
//   color: white;
  //   width: 100%;
  padding: 1px 1px;
  &:hover {
    background-color: blue;
    color:white;
  }
  &:focus {
    background-color: blue;
    color:white;
  }
`;
