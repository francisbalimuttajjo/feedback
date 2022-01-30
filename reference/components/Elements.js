import { styled } from "@mui/material/styles";
import { Typography, Box, Button } from "@mui/material";
export const StyledButton = styled(Button)`
  background-color: pink;
  //background-color: #f5f4f2;
  color: #6696de;
  margin-top: 4px;
  // margin-left: 1rem;
  border-radius: 7px;
  // margin-bottom: 3px;
  text-transform: lowercase;
  //   color: white;
  //   width: 100%;
  // padding: 0px 1px;
  &:hover {
    background-color: blue;
    color: white;
  }
  &:focus {
    background-color: blue;
    color: white;
  }
`;
