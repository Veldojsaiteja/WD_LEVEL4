const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (i) => {
      all[i].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return all.filter((item)=>item.dueDate<new Date().toLocaleDateString("en-CA"));
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return all.filter((item)=>item.dueDate==new Date().toLocaleDateString("en-CA"));
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return all.filter((item)=>item.dueDate>new Date().toLocaleDateString("en-CA"));
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      // return OUTPUT_STRING
      let res = list
      .map(
        (item) => `${item.completed ? "[x] " : "[ ] "}${item.title} ${ item.dueDate === currDay ? " " : item.dueDate }`
      ).join("\n");
    return res;
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  

  
  const todos = todoList();
  
  const formattedDate = date => {
    return date.toISOString().split("T")[0]
  }
  
  var todaysDate = new Date()
  const currDay = formattedDate(todaysDate)
  const previousDay = formattedDate(
    new Date(new Date().setDate(todaysDate.getDate() - 1))
  )
  const nextDay = formattedDate(
    new Date(new Date().setDate(todaysDate.getDate() + 1))
  )
  
 module.exports=todoList;
