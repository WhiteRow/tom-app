import { elementsNames } from '../../shared/config'
import { taskItem } from '../task-item'
import { taskItemActions } from '../../entities/task-item-actions'

import './styles.css'

export function setupTaskCreate(element: HTMLElement) {
  const template = `
    <div class="task-create">
      <div class="task-create__container">
        <h1 class="task-create__title">My Tasks List</h1>
        <form class="task-create__form task-create-form-selector">
          <input class="input task-create__input task-create-input-selector" />
          <button class="button button--md button--primary task-create__button task-create-button-selector"></button>
        </form>
      </div>

    </div>
  `

  element.insertAdjacentHTML('afterbegin', template)
  
  const { tasksList } = elementsNames

  const tasksListElement: HTMLElement | null = document.querySelector(`.${tasksList}`)
  const taskFormElement: HTMLElement | null = document.querySelector(`.task-create-form-selector`)
  const buttonCreateElement: HTMLButtonElement | null = document.querySelector('.task-create-button-selector')
  const taskInputElement: HTMLInputElement | null = document.querySelector('.task-create-input-selector')

  function createTask() {
    const taskTitle = taskInputElement?.value || 'Задача'
    
    tasksListElement?.insertAdjacentHTML('afterbegin', taskItem({title: taskTitle}))

    taskItemActions(document.querySelector('.task-item-selector'))
    
    if (taskInputElement?.value)
      taskInputElement.value = ''

  }
  
  taskFormElement?.addEventListener('submit', (e) => {
    e.preventDefault()
    taskInputElement?.value && createTask()
  })
  buttonCreateElement?.addEventListener('click', () => taskInputElement?.value && createTask())
}
