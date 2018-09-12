import React from 'react'
import { number, shape, string } from 'prop-types'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  border-radius: 2px;
  display: flex;
`

class Todo extends React.Component {
  render() {
    const { index, task } = this.props
    const { id: taskId, content } = task
    return (
      <Draggable draggableId={taskId} index={index}>
        {(provided, snapshot) => (
          <Container
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            {content}
          </Container>
        )}
      </Draggable>
    )
  }
}

Todo.propTypes = {
  index: number.isRequired,
  task: shape({
    id: string,
    content: string
  })
}

export default Todo
