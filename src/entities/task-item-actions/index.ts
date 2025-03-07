import { elementsNames } from '../../shared/config'

export function taskItemActions(element: HTMLElement | null) {
  const { taskItem } = elementsNames

  element?.addEventListener('click', () => {
    console.log(element)
  })
}