import './styles.css'

import { elementsNames } from '../../shared/config'

interface ITaskItem {
  title: string
}

export function taskItem(options: ITaskItem) {
  const { taskItem } = elementsNames

  const template = `
    <div class="${taskItem} ${taskItem}-selector">
      <div class="${taskItem}__container">
        <p class="${taskItem}__title">${options.title}</p>
      </div>
      <div class="${taskItem}__actions">
        <button class="button button--md button--red"></button>
        <button class="button button--md button--primary"></button>
      </div>
    </div>
  `

  return template
}
