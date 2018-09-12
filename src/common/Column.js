import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

import Heading from './Heading'
import Todo from './Todo'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  borderradius: 2px;
  width: 220px;
  background-color: white;
  display: flex;
  flex-direction: column;
`

const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
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
