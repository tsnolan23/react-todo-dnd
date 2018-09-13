import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

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
`

class App extends React.Component {
  componentDidMount = () => {
    document.getElementById('root').style.height = '100%'
  }

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
