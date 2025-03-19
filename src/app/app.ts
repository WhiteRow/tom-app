import './styles/app.css';

import { elementsNames } from '../shared/config'
import { setupTaskCreate } from '../features/task-create'

function createApp(root: string) {
  const { tasksList } = elementsNames

  const app = `
    <div class="tom">
      <main id="main"class="main">
        <div class="${tasksList}"></div>
      </main>
    </div>
  `

  document.getElementById(root)!.innerHTML = app

  setupTaskCreate(document.querySelector<HTMLButtonElement>('#main')!)
}

export default createApp