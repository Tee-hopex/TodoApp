// import {useState} from "react"

// import todoList from "./todoList.js"

//notice

// function Todo() {
//     const [toggleTodo, setToggleTodo] = useState(false);
//     const [formData, setFormData] = useState({})

//     function handleToggle() {
//         setToggleTodo(!toggleTodo)
//     }

//     function handleInputChange(event) {
//         const name = event.target.name;
//         const value = event.target.value;
        
//         formData[name] = value
//         formData["isCompleted"] = false

//         // console.log(formData)
//     }

//     function handleFormSubmit(event){
//         event.preventDefault()
//         todoList.push(formData)
//         console.log("form submitted")
//         setToggleTodo(!toggleTodo)
//         // console.log(formData)
//         setFormData({})
//     }
    

//     return (
//         <>
//         <section>
//             <h1>WELCOME TO THE TODO</h1>
//         </section>

//         <section>
//             <h1>Todo-List</h1>
//             <button onClick={handleToggle}>Add todo</button>
//             <div>
//                 {(todoList.length == 0)? 
//                 <h1>Nothing on your todo</h1> : 
//                 todoList.map((item, index) => (
//                     <div key={index}>
//                         <h3>{item.title}</h3>
//                         <p>{item.time}</p>
//                         <div style={{height: "30px", width: "30px", backgroundColor: "green"}}>
//                             {item.isCompleted ? "✓" : "X"} 
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>

//         {
//             toggleTodo? 
//             <section>
//                 <form onSubmit={handleFormSubmit}>
//                     <fieldset>
//                         <legend>todo info</legend>
//                         <label htmlFor="title">Title</label>
//                         <input onChange={handleInputChange} type="text" id="title" name= "title" />
//                         <label htmlFor="time">time</label>
//                         <input onChange={handleInputChange} type="text" id="time" name="time" />

//                         <input type="submit" />
//                     </fieldset>
//                 </form>
//             </section>
//             : 
//             null 
//         }


//         </>
//     )
// }

// export default Todo


import {useState} from "react"

import todoList from "./todoList.js"

import './Todo.css'

function Todo() {
    const [toggleTodo, setToggleTodo] = useState(false);
    const [formData, setFormData] = useState({})
    const [completed, setCompleted] = useState(false)

    function handleToggle() {
        setToggleTodo(!toggleTodo)
    }

    function handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        
        formData[name] = value
        formData["isCompleted"] = false

        // console.log(formData)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        todoList.push(formData)
        console.log("form submitted")
        setToggleTodo(!toggleTodo)
        // console.log(formData)
        setFormData({})
    }
    

    return (
        <>
        <section className="header-section">
            <h1 className="main-title">WELCOME TO THE TODO</h1>
        </section>

        <section className="todo-section">
            <h1 className="section-title">Todo-List</h1>
            <button className="add-todo-btn" onClick={handleToggle}>Add todo</button>
            <div className="todo-list-container">
                {(todoList.length == 0)? 
                <h1 className="empty-message">Nothing on your todo</h1> : 
                
                todoList.map((item, index) => (
                    <div className="todo-item" key={index}>
                        <h3 className="todo-title">{item.title}</h3>
                        <p className="todo-time">{item.time}</p>
                        <div onClick={() => {
                            console.log(index)
                            // console.log(item.isCompleted)
                            if (todoList[index].isCompleted == true) {
                                todoList[index].isCompleted=false
                            } else{
                                todoList[index].isCompleted=true
                            }
                            console.log(todoList[index].isCompleted)

                            
                        }} className="todo-status" style={{height: "30px", width: "30px", backgroundColor: item.isCompleted? "green": "red"}}>
                            {item.isCompleted ? "✓" : "X"} 
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {
            toggleTodo? 
            <section className="form-section">
                <form className="todo-form" onSubmit={handleFormSubmit}>
                    <fieldset className="form-fieldset">
                        <legend className="form-legend">todo info</legend>
                        <label className="form-label" htmlFor="title">Title</label>
                        <input className="form-input" onChange={handleInputChange} type="text" id="title" name= "title" />
                        <label className="form-label" htmlFor="time">time</label>
                        <input className="form-input" onChange={handleInputChange} type="text" id="time" name="time" />

                        <input className="form-submit" type="submit" />
                    </fieldset>
                </form>
            </section>
            : 
            null 
        }


        </>
    )
}

export default Todo
