import React from 'react'

const Show = (props) => {
    const {tasks,settasks} = props;
    const completeTaskToggle = (i) => {
        const copyTask = [...tasks];
        copyTask[i].completed = !tasks[i].completed;
        settasks(copyTask);
      };
    
      const deleteHandler = (i) => {
        let copyTask = [...tasks];
        let isValid = false;
        if (!copyTask[i].completed) {
          isValid = confirm("do you really want to delete this task ?.");
        }
    
        if (isValid || copyTask[i].completed) {
          copyTask.splice(i, 1);
          settasks(copyTask);
        }
      };
    
      let taskRender = (
        <h1 className=" text-center text-orange-500 font-extrabold text-2xl">
          No Pending Tasks...
        </h1>
      );
    
      if (tasks.length > 0) {
        taskRender = tasks.map((task, index) => {
          return (
            <li
              key={index}
              className=" mb-5 flex justify-between items-center border rounded-xl p-5 "
            >
              <div className="flex items-center">
                <div
                  onClick={() => completeTaskToggle(index)}
                  className={`${
                    task.completed ? "bg-green-500" : "border"
                  } mr-4 rounded-full w-[30px] h-[30px] border-orange-500`}
                ></div>
                <h1
                  className={`${
                    task.completed && "line-through"
                  } text-2xl font-extrabold text-yellow-100 capitalize`}
                >
                  {task.title}
                </h1>
              </div>
              <div className="flex gap-3 text-2xl text-yellow-100 pl-[100px]">
                <i className="ri-file-edit-line"></i>
                <i
                  onClick={() => deleteHandler(index)}
                  className="ri-delete-bin-3-line"
                ></i>
              </div>
            </li>
          );
        });
      }
  return (
    <ul>{taskRender}</ul>
  )
}

export default Show