import './styles.css'

import { elementsNames } from '../../shared/config'

interface ITaskItem {
  title: string
}

export function taskItem(options: ITaskItem) {
  const { taskItem } = elementsNames

  const template = `
    <div class="${taskItem} ${taskItem}-selector">
      <div class="${taskItem}__container ${taskItem}-container-selector">
        <p class="${taskItem}__title ${taskItem}-title-selector">${options.title}</p>

        <form class="${taskItem}__edit ${taskItem}-edit-selector">
          <input class="${taskItem}__edit-input ${taskItem}-edit-input-selector" placeholder="my task" />
        </form>
      </div>
      <div class="${taskItem}__actions">
        <button class="${taskItem}__button-delete button button--md button--red delete-button-selector"></button>
        <button class="${taskItem}__button-edit button button--md button--primary edit-button-selector"></button>
      </div>
    </div>
  `

  return template
}
