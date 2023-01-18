import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { Menu } from './components/menu/Menu'
import '../src/MyApp.css'

export const MyApp = () => {
  return (
    <div>
        <Menu></Menu>
          <Content></Content>
        <Footer></Footer>
    </div>
  )
}
