function generateToDoObject(id, toDo, deadline, isCompleted) {
  return {
    id,
    toDo,
    deadline,
    isCompleted
  }
}

module.exports = generateToDoObject;