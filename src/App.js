import React, { useState } from "react";
import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import TShirt from "./TShirt";

const initialLines = [
  "I'm not just a",
  "father",
  "to an amazing",
  "daughter",
  "I'm also a",
  "Veteran",
  "who did four tours",
  "in Iraq",
  "and I have",
  "Chronic Diarrhea"
];

const Wrapper = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const Even = styled(Text)`
  font-family: "Rye", cursive;
  font-size: 2em;
  text-transform: uppercase;
`;

const Odd = styled(Text)`
  font-family: "Lilita One", cursive;
  font-size: 5em;
  text-transform: uppercase;
`;

function App() {
  const [lines, setLines] = useState(initialLines);

  return (
    <Wrapper p={3} width="75vw">
      <Flex>
        <Box width={1 / 4} mr={6}>
          {lines.map((line, i) => (
            <input
              key={i}
              type="text"
              defaultValue={line}
              onChange={event => {
                let newLines = lines;
                newLines.splice(i, 1, event.target.value);
                setLines([...newLines]);
              }}
            />
          ))}
        </Box>
        <TShirt width={1 / 2} p={5} pt={6}>
          {lines.map((line, i) => (
            <Box>
              {i % 2 === 0 ? (
                <Even textAlign="center">{line}</Even>
              ) : (
                <Odd textAlign="center">{line}</Odd>
              )}
            </Box>
          ))}
        </TShirt>
      </Flex>
    </Wrapper>
  );
}

export default App;
