import { nanoid } from "nanoid";
import React, { useState, useEffect, useRef } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import TimePicker from "react-time-picker";
import TimePicker from "react-time-picker/dist/entry.nostyle";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState("");
  //   const [value, onChange] = useState("10:00");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (date == "") {
      alert("Please enter date");
      return;
    }

    props.onSubmit({
      id: nanoid(4),
      text: input,
      date: date,
    });

    setInput("");
  };

  const handleDate = (date) => {
    setStartDate(date);
    let tem = String(date).split(" ");

    let str = tem[0] + " " + tem[1] + " " + tem[2] + " " + tem[3];

    setDate(str);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        {props.edit ? (
          <>
            <table>
              <tr>
                <td>
                  <label className="labels" htmlFor="text">
                    Title
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="update todo"
                    value={input}
                    name="text"
                    className="todo-input edit"
                    onChange={handleChange}
                    ref={inputRef}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="labels">Date</label>
                </td>
                <td>
                  <DatePicker
                    className="date-picker"
                    selected={startDate}
                    name="date"
                    showTimeSelect
                    onChange={(date) => handleDate(date)}
                  />
                </td>
              </tr>
              {/* <tr>
                <td>
                  <label className="labels">Date</label>
                </td>
                <td>
                  <TimePicker />
                </td>
              </tr> */}
            </table>

            <button className="todo-button">Update</button>
          </>
        ) : (
          //   <>
          //     <input
          //       type="text"
          //       placeholder="Update todo"
          //       value={input}
          //       name="text"
          //       className="todo-input edit"
          //       onChange={handleChange}
          //       ref={inputRef}
          //     />

          //     <button className="todo-button">update</button>
          //   </>
          <>
            <table>
              <tr>
                <td>
                  <label className="labels" htmlFor="text">
                    Title
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add todo"
                    value={input}
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="labels">Date</label>
                </td>
                <td>
                  <DatePicker
                    className="date-picker"
                    selected={startDate}
                    name="date"
                    showTimeSelect
                    onChange={(date) => handleDate(date)}
                    required
                  />
                </td>
              </tr>
              {/* <tr>
                <td>
                  <label className="labels">Date</label>
                </td>
                <td>
                  <TimePicker />
                </td>
              </tr> */}
            </table>

            <button className="todo-button">Add</button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
