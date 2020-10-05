window.tasks=[
    {
        description: 'This is first task',
        done: false,
        id:1,
    },{
        description: 'This is second task',
        done: false,
        id:2,
    },{
        description: 'This is third task',
        done: false,
        id:3,
    }
];

function displayTasksWithHTML(){
    const listElement = document.querySelector('.bottom-row ul');
    listElement.innerHTML='';

   window.tasks.forEach((item)=>{
       listElement.innerHTML+=`
       <li data-id="${item.id}" class="task-item ${item.done ? 'done' : ''}">
        <span>${item.description}</span>
        <button class="matter-button-contained">Mark as Done</button>
        <button class="matter-button-contained matter-secondary">Delete</button>
       </li>
       
       `;
   });

   bindTaskButtonActions();


}
function bindTaskButtonActions(){
    document.querySelectorAll('.task-item').forEach((taskElement)=>{
        const markAsDoneButton=taskElement.querySelectorAll('button')[0];
        const deleteButton=taskElement.querySelectorAll('button')[1];

        markAsDoneButton.addEventListener('click',()=>{
            console.log('mark as done button clicked');
        });
        deleteButton.addEventListener('click',()=>{
            console.log('delete button clicked');
        });
    });
}

displayTasksWithHTML();