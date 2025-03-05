import './styles/app.css';

// import { setupCounter } from '../features/counter'
import { elementsNames } from '../shared/config'
import { header } from '../features/header'
import { setupTaskCreate } from '../features/task-create'

function createApp(root: string) {
  const { tasksList } = elementsNames

  const app = `
    <div class="tom">
      ${header()}
      <main id="main"class="main">
        <div class="${tasksList}"></div>
      </main>
    </div>
  `

  document.getElementById(root)!.innerHTML = app

  setupTaskCreate(document.querySelector<HTMLButtonElement>('#main')!)
  // setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
}

export default createApp