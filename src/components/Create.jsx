import React, { useState } from 'react'

const Create = (props) => {
    const {tasks,settasks} = props
    const [addNewTask, setaddNewTask] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = { title: addNewTask, completed: false };
        settasks([...tasks, newTask]);
        setaddNewTask("");
        // console.log(newTask);
      };
  return (
    <form
          onSubmit={submitHandler}
          className=" w-[35%] flex items-center justify-between px-16 my-[2%]"
        >
          <input
            type="text"
            placeholder="write your next task"
            className="px-5 py-2 text-yellow-100 outline-none w-[80%] h-[60%] rounded-xl bg-zinc-700"
            onChange={(e) => setaddNewTask(e.target.value)}
            value={addNewTask}
          />
          <button
            type="submit"
            className="outline-none text-2xl font-extrabold flex justify-center items-center w-[3vmax] h-[3vmax] rounded-full bg-orange-600"
          >
            <i className="ri-add-fill"></i>
          </button>
        </form>
  )
}

export default Create