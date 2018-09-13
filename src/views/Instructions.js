import React from 'react'
import styled from 'styled-components'

import Kbd from '../common/Kbd'

const Container = styled.div`
  padding: 8px 8px 16px 8px;
  text-align: center;
`

const Line = styled.div`
  line-height: 28px;
  color: #838689;
`

class Instructions extends React.PureComponent {
  render() {
    return (
      <Container>
        <Line>
          Move to next item with <Kbd>Tab</Kbd>
        </Line>
        <Line>
          Go back to previous item with <Kbd>Alt + Tab</Kbd>
        </Line>
        <Line>
          Press <Kbd>Space</Kbd> to select a to do
        </Line>
        <Line>
          Use the <Kbd>Arrow</Kbd> keys to move the todo
        </Line>
        <Line>
          Complete the move by pressing <Kbd>Space</Kbd>
        </Line>
        <Line>
          Cancel the move by pressing <Kbd>Esc</Kbd>
        </Line>
      </Container>
    )
  }
}

export default Instructions
