import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { taskData } from "@/Prop_test";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import  CheckBox from "../../../components/Resuable/CheckBox.jsx"

import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";

const Tasks = () => {
  const [tasks, setTasks] = useState(taskData);
  const handleOnChange = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="flex flex-col flex-1">
        {/* // TASKS LIST */}
        <ul>
          {tasks.map((task) => (
            // Each task item
            <li
              key={task.id}
              className="min-h-[3.5rem] mb-2 rounded flex flex-row items-center justify-between px-[.5rem] p-[.5rem] gap-[1rem]"
              style={{ backgroundColor: "var(--primary-white-color)" }}
            >
              {/* LEFT SIDE - Check box, tasks */}
              <div className="flex flex-row items-center gap-[.5rem]">
                <label className="cursor-pointer rounded p-1 flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="accent-blue-500"
                    onChange={() => handleOnChange(task.id)}
                  />
                </label>
                <span className="ml-2">{task.title}</span>
              </div>

              {/* RIGHT SIDE - Time */}
              <div className="flex flex-row items-center gap-[.5rem]">
                <div
                  className="flex flex-row items-center gap-[.5rem] p-2 rounded"
                  style={{ backgroundColor: "var(--primary-silver-color)" }}
                >
                  <label>
                    <FontAwesomeIcon icon={faClock} />
                  </label>

                  {task.allday ? (
                    <span>All day</span>
                  ) : (
                    <span>{`${task.start} - ${task.end}`}</span>
                  )}
                </div>

                <button
                  className="min-w-10 min-h-10 p-2 cursor-pointer rounded"
                  style={{ backgroundColor: "var(--primary-silver-color)" }}
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tasks;
