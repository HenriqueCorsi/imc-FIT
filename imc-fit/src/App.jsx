import Form from './components/Form/Form'
import Header from './components/Header/Header'
import img from './assets/img/main-img.jpg'

function App() {
  return (
    <>
      <Header/>
      <main>
        <img src={img} alt="" />
        <Form/>
      </main>
    </>
  )
}

export default App
