import { elementsNames } from '../../shared/config'

interface ITaskItem {
  title: string
}

export function taskItem(options: ITaskItem) {
  const { taskItem } = elementsNames

  const template = `
    <div class="${taskItem}">${options.title}</div>
  `

  return template
}
