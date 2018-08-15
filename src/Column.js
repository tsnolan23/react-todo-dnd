import React from "react";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";

import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  borderradius: 2px;
  width: 220px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "inherit")};
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tests === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
    return this.props.tasks.map((task, index) => {
      return <Task key={task.id} index={index} task={task} />;
    });
  }
}

class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} innerRef={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>
            <Droppable type="task" droppableId={this.props.column.id}>
              {(provided, snapshot) => (
                <TaskList
                  isDraggingOver={snapshot.isDraggingOver}
                  innerRef={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Column;
