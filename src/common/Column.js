import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

import Heading from './Heading'
import Todo from './Todo'

const Container = styled.div`
  margin: 0 8px;
  border-radius: 5px;
  width: 300px;
  flex-shrink: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  min-height: 225px;
  overflow: hidden;
`

const TaskList = styled.div`
  padding: 16px;
  flex-grow: 1;
  min-height: 100px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? '#DAE7FE' : 'inherit')};
`

class Column extends React.Component {
  render() {
    const { column, tasks } = this.props
    const { id: columnId, title } = column
    return (
      <Container>
        <Heading>{title}</Heading>
        <Droppable droppableId={columnId}>
          {(provided, snapshot) => (
            <TaskList
              isDraggingOver={snapshot.isDraggingOver}
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => {
                return <Todo key={task.id} index={index} task={task} />
              })}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}

Column.propTypes = {
  column: shape({
    id: string,
    title: string
  }),
  tasks: arrayOf(
    shape({
      id: string,
      content: string
    })
  )
}

export default Column
