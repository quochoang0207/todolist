let todoList = []

const addTodo = () =>{
  let todo = document.getElementById('todoInput').value;

  let itemTodo = {contents: todo, complete: false}
  
  todoList.push(itemTodo);
  render(todoList)
}

const toggleDone = (index) =>{
   
  todoList[index].complete = ! todoList[index].complete
  
  render(todoList) 
}

const remove = (index) =>{
  todoList.splice(index, 1)
  render(todoList)
}

const showDone = () =>{
  
  let filterList = todoList.filter(item => item.complete == true)
  render(filterList)
}


const render = (listAll) =>{
  let todoHTML = listAll
  .map(
    (item, index) =>  {
      if (item.complete == false){
        return `<div class='itemStyle'>to do: ${item.contents}
        <a onclick = "toggleDone(${index})" href='#'>Done </a>
        <a onclick = "remove(${index})" href='#'>X</a> 
        </div>`
      }else{
        return `<div class='itemStyle'>to do: ${item.contents} 
        <a onclick = "toggleDone(${index})" href='#'>Undone </a>
        <a onclick = "remove(${index})" href='#'>X</a> 
        </div>`.strike()
      }
    })
    .join('');
    document.getElementById('resultArea').innerHTML = `${todoHTML}`;

}


  















