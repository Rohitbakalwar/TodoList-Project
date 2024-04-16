import React from 'react'

const Header = ({tasks}) => {
    // const tasks = props
  return (
    <div className="w-[35%] h-[30vh] border rounded-3xl mt-[3%] flex justify-around items-center">
          <div className="text-yellow-100">
            <h1 className="text-3xl font-bold capitalize">todo done </h1>
            <p className="text-2xl capitalize font-light">keep it up</p>
          </div>
          <div className="w-[10vmax] h-[10vmax] rounded-full bg-orange-600 flex justify-center items-center font-bold text-4xl ">
            {tasks.filter((task) => task.completed === true).length}/
            {tasks.length}
          </div>
        </div>
  )
}

export default Header;