import React from 'react'

import TaskController from './TaskController'

const data = [
    { 
      title : 'Todo' ,  status : 'open' ,   color: '#9710ff',  
      items : [
        {title: 'Task 1' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 2' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 3' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 4' , description : 'decription' , dedline: 'Date' , priority: ''},
    ]
    },
    { 
      title : 'In progress' ,  status : 'open' ,   color: '#1283ed',  
      items : [
        {title: 'Task 5' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 6' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 7' , description : 'decription' , dedline: 'Date' , priority: ''},
    ]
    },
    { 
      title : 'Review' ,  status : 'open' ,   color: '#d75d0b',  
      items : [
        {title: 'Task 543' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 43243' , description : 'decription' , dedline: 'Date' , priority: ''},
    ]
    },
    { 
      title : 'Complated' ,  status : 'open' ,   color: '#50e300',  
      items : [
        {title: 'Task 53243' , description : 'decription' , dedline: 'Date' , priority: ''},
        {title: 'Task 12332' , description : 'decription' , dedline: 'Date' , priority: ''},
    ]
    },
    
  
  ]

const Tasks = () => {
  return (
    <div>
        <header className="App-header text-[#000]">
      <TaskController data={data} />
      </header>
    </div>
  )
}

export default Tasks
