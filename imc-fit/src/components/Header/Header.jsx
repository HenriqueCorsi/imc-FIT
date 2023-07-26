import '../../assets/css/header-style.css'
import logoIcon from '../../assets/img/logo-icon.png'

function Header(){
    return(
        <>
           <div className='header-container'>
                <div className='logo-box'>
                    <img className='logo-icon' src={logoIcon} alt="" />
                    <h1>IMC FIT</h1>
                </div>
                <div className='header-desc'>
                    <a href="#">
                        CONTATO
                    </a>
                </div>
           </div>
        </>
    )
}

export default Header;