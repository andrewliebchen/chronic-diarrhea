import React, { useState } from "react";
import styled from "styled-components";
import { Box, Flex } from "rebass";

const initialLines = [
  "I was a theater kid",
  "and now I'm a",
  "designer",
  "who's older than my",
  "coworkers",
  "and they don't totally get my",
  "jokes",
  "but people like my",
  "cat pictures on",
  "Instagram"
];

const Wrapper = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const Text = styled.div`
  text-align: center;
`;

const Odd = styled(Text)`
  font-family: "Vast Shadow", cursive;
  font-size: 2em;
`;

const Even = styled(Text)`
  font-family: "Bangers", cursive;
  font-size: 4em;
`;

function App() {
  const [lines, setLines] = useState(initialLines);

  return (
    <Wrapper p={3} width="75vw">
      {lines.map((line, i) => (
        <Flex key={i}>
          <Box width={3 / 4} pr={3}>
            {i % 2 === 0 ? <Even>{line}</Even> : <Odd>{line}</Odd>}
          </Box>
          <Box width={1 / 4}>
            <input
              type="text"
              defaultValue={line}
              onChange={event => {
                let newLines = lines;
                newLines.splice(i, 1, event.target.value);
                setLines([...newLines]);
              }}
            />
          </Box>
        </Flex>
      ))}
    </Wrapper>
  );
}

export default App;
