import { elementsNames } from '../../shared/config'

interface ITaskItem {
  title: string
}

export function taskItem(options: ITaskItem) {
  const { taskItem } = elementsNames

  const template = `
    <div class="${taskItem}">
      <div class="${taskItem}__check"></div>
      <p class="${taskItem}__title">${options.title}</p>
    </div>
  `

  return template
}
