import { elementsNames } from '../../shared/config'
import { taskItem } from '../task-item'

import './styles.css'

export function setupTaskCreate(element: HTMLElement) {
  const template = `
    <div class="task-create">
      <input class="task-create__input task-create-input-selector" />
      <button class="button button--icon task-create__button task-create-button-selector">
        <div class="i-meteor-icons:file-plus"/>
      </button>
    </div>
  `

  element.insertAdjacentHTML('afterend', template)
  
  const { tasksList } = elementsNames

  const tasksListElement: HTMLElement | null = document.querySelector(`.${tasksList}`)
  const buttonCreateElement: HTMLButtonElement | null = document.querySelector('.task-create-button-selector')
  const taskInputElement: HTMLInputElement | null = document.querySelector('.task-create-input-selector')

  function createTask() {
    const taskTitle = taskInputElement?.value || 'Задача'
    
    tasksListElement?.insertAdjacentHTML('afterbegin', taskItem({title: taskTitle}))
    
    if (taskInputElement?.value)
      taskInputElement.value = ''

  }
  
  buttonCreateElement?.addEventListener('click', () => taskInputElement?.value && createTask())
}
