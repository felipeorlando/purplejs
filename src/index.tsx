import createElement from './dom/create-element/index'
import Component from './component/index'
import { render } from './render/index'

class Button extends Component {
  render() {
    return <h1 className="testeai">Hello world</h1>
  }
}

const coco = (
  <div>
    <Button />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cumque exercitationem quia officiis adipisci iste, soluta tempore, ut, cupiditate beatae repellat ullam fuga recusandae error sint tempora! Pariatur, eum sit!</p>
  </div>
)

render(coco, document.getElementById('root'))
