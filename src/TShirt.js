import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

const size = 160;

const Root = styled(Box)`
  position: relative;
  background-color: black;
  color: white;
`;

const Neck = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: white;
  border-radius: ${size}px;
  height: ${size}px;
  width: ${size}px;
`;

const Arm = styled.div`
  position: absolute;
  top: 0;
  background-color: black;
  height: ${size}px;
  width: ${size}px;
`;

const LeftArm = styled(Arm)`
  left: 0;
  transform: translateX(-100%);
`;

const RightArm = styled(Arm)`
  right: 0;
  transform: translateX(100%);
`;

const TShirt = props => (
  <Root {...props}>
    {props.children}
    <Neck />
    <LeftArm />
    <RightArm />
  </Root>
);

export default TShirt;
