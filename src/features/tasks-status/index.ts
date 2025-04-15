import './styles.css';

export function setupTasksStatus(element: HTMLElement) {
  const template = `
   <div class="tasks-status">
    <div class="tasks-status__item">
      All: 0
    </div>
    <div class="tasks-status__item">
      Completed: 0
    </div>
    <div class="tasks-status__item">
      Remained: 0
    </div>
   </div> 
  `

  element.insertAdjacentHTML('afterbegin', template)

  
}

