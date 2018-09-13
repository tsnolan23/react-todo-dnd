import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import './index.css'

import GitHubLink from './common/GitHubLink'
import Instructions from './views/Instructions'
import Todos from './views/Todos'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  background: #f6f7fb;
  max-width: 100%;
`

class App extends React.Component {
  render() {
    return (
      <Container>
        <GitHubLink />
        <Todos />
        <Instructions />
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
