import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 8px 32px 8px;
`;
const Heading = styled.h1`
  font-size: 18px;
`;
const Kbd = styled.span`
  font-family: "Menlo", "Monaco", "Consolas", monospace;
  border: 1px solid rgba(0, 0, 0, 0.25);
  line-height: 18px;
  border-radius: 3px;
  padding: 2px 3px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  font-weight: 400;
  font-size: 90%;
`;

class Instructions extends React.PureComponent {
  render() {
    return (
      <Container>
        <Heading>Keyboard Instructions</Heading>
        <ul>
          <li>
            Cycle through individual to do items by pressing <Kbd>Tab</Kbd>
          </li>
          <li>
            Go back through individual items by pressing <Kbd>Alt + Tab</Kbd>
          </li>
          <li>
            Press <Kbd>Space</Kbd> to select a to do
          </li>
          <li>
            Use the <Kbd>Arrow</Kbd> keys to move the todo
          </li>
          <li>
            Complete the move by pressing <Kbd>Space</Kbd> again
          </li>
          <li>
            Cancel the move by pressing <Kbd>Esc</Kbd>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Instructions;
