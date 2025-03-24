import { elementsNames } from '../../shared/config'

export function taskItemActions(element: HTMLElement | null) {
  const { taskItem } = elementsNames

  const deleteButton = element?.querySelector('.delete-button-selector')
  const editButton = element?.querySelector('.edit-button-selector')
  const taskContainer = element?.querySelector(`.${taskItem}-container-selector`)
  const taskForm = element?.querySelector(`.${taskItem}-edit-selector`)
  const taskInput: HTMLInputElement | undefined | null = taskForm?.querySelector(`.${taskItem}-edit-input-selector`)
  const taskTitle: HTMLElement | undefined | null = taskContainer?.querySelector(`.${taskItem}-title-selector`)

  function toggleTaskComplete() {
    const isCompleted = element?.classList.contains(`${taskItem}--completed`)

    if (isCompleted)
      element?.classList.remove(`${taskItem}--completed`)
    else
      element?.classList.add(`${taskItem}--completed`)
  }

  function editModeStart() {
    element?.classList.add(`${taskItem}--edit`)

    if (taskInput) {
      taskTitle?.getHTML
      taskInput.focus()
      taskInput.value = taskTitle?.textContent || ''
    }

    deleteButton?.setAttribute('disabled', 'true')

    element?.classList.remove(`${taskItem}--completed`)
  }

  function editModeComplete(e: any) {
    e.preventDefault()

    const newTitle = taskInput?.value

    if (newTitle?.length === 0)
      return

    if (taskTitle) {
      taskTitle.innerText = ''
      taskTitle?.append(newTitle || '')
    }

    element?.classList.remove(`${taskItem}--edit`)
    deleteButton?.removeAttribute('disabled')
  } 

  deleteButton?.addEventListener('click', () => element?.remove())
  editButton?.addEventListener('click', editModeStart)
  taskContainer?.addEventListener('click', toggleTaskComplete)
  taskForm?.addEventListener('submit', editModeComplete)
}
