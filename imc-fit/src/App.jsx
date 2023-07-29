import Form from './components/Form/Form'
import Header from './components/Header/Header'
import img from './assets/img/main-img.jpg'
import ImcTable from './components/ImcTable/ImcTable';

function App() {
  return (
    <>
      <Header/>
      <div className='main-box'>
        <img src={img} alt="" />
        <Form/>
      </div>
      <ImcTable/>
    </>
  )
}

export default App;
