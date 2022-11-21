const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (i) => {
      all[i].completed = true
    }
  
    const overdue_sai = () => {

      return all.filter((item)=>item.dueDate<new Date().toLocaleDateString("en-CA"));
    }
  
    const dueToday_sai = () => {
 
      return all.filter((item)=>item.dueDate==new Date().toLocaleDateString("en-CA"));
    }
  
    const dueLater_sai = () => {

      return all.filter((item)=>item.dueDate>new Date().toLocaleDateString("en-CA"));
    }
  
    const toDisplayableList_sai = (list) => {
      let res = list
      .map(
        (item) => `${item.completed ? "[x] " : "[ ] "}${item.title} ${ item.dueDate === currDay ? " " : item.dueDate }`
      ).join("\n");
    return res;
    }
  
    return { all, add, markAsComplete, overdue_sai, dueToday_sai, dueLater_sai, toDisplayableList_sai };
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
