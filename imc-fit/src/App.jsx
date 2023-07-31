import Form from './components/Form/Form'
import Header from './components/Header/Header'
import img from './assets/img/main-img.jpg'
import ImcTable from './components/ImcTable/ImcTable';

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
      <div className='border-test'>oi</div>
      <ImcTable/>
    </>
  )
}

export default App;
