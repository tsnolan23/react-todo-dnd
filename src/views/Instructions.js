import React from 'react'
import styled from 'styled-components'

import Heading from '../common/Heading'
import Kbd from '../common/Kbd'

const Container = styled.div`
  padding: 8px 8px 32px 8px;
`

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
    )
  }
}

export default Instructions
