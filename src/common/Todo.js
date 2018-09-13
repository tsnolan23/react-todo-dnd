import React from 'react'
import { number, shape, string } from 'prop-types'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid #e9e9e9;
  color: #838689;
  font-weight: 500;
  padding: 8px;
  margin-bottom: 8px;
  background: ${props => (props.isDragging ? '#fff0db' : 'white')};
  border-color: ${props => (props.isDragging ? '#fff0db' : '#e9e9e9')};
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
