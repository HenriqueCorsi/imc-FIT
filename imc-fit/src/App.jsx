import Form from './components/Form/Form'
import Header from './components/Header/Header'
import img from './assets/img/main-img.jpg'

function App() {
  return (
    <>
      <Header/>
      <div className='main-container'>
        <div className='main-img-box'>
          <img src={img} alt="" />
        </div>
        <div className='main-form-box'>
          <Form/>
        </div>
      </div>
    </>
  )
}

export default App;
