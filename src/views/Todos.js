import React from 'react'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

import Column from '../common/Column'

import initialData from '../data/todos'

const Container = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
`

const Scrolling = styled.div`
  padding: 12px;
  display: flex;
`

class Todos extends React.Component {
  state = initialData

  onDragEnd = result => {
    const { destination, source, draggableId } = result
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return
    }
    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState)
      return
    }
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }
    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState)
  }

  render() {
    const { columns, tasks } = this.state
    const columnOrder = Object.keys(columns)
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          <Scrolling>
            {columnOrder.map((columnId, index) => {
              const column = columns[columnId]
              const columnTasks = column.taskIds.map(taskId => tasks[taskId])
              return (
                <Column
                  key={columnId}
                  column={column}
                  tasks={columnTasks}
                  index={index}
                />
              )
            })}
          </Scrolling>
        </Container>
      </DragDropContext>
    )
  }
}

export default Todos
