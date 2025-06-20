import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo,toggle  }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={()=>{toggle(id)}} className="flex fles-1 items-center cursor-pointer">
        <img src={tick} alt="tick " className="w-7" />
        <p className="tex-slate-700 ml-4 text-[17px]">{text}</p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt="delete"
        className="w-3.5"
      />
    </div>
  );
};

export default TodoItems;
