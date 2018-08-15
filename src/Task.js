import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
        ? "lightgreen"
        : "white"};
  border-radius: 2px;
  display: flex;
`;

class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === "task-1";
    return (
      <Draggable
        isDragDisabled={isDragDisabled}
        draggableId={this.props.task.id}
        index={this.props.index}
      >
        {(provided, snapshot) => (
          <Container
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
