import '../../assets/css/footer-style.css'
import logoIcon from '../../assets/img/logo-icon.png'
import iconLinkedin from '../../assets/img/linkedin.png'
import iconWhatsApp from '../../assets/img/whatsapp.png'
import iconEmail from '../../assets/img/email.png'

function Footer(){
    return(
        <>
            <footer>
                <div className='footer-box' id='box01'>
                    <div className='footer-logo'>
                        <img src={logoIcon} alt="" />
                        <h3>IMC FIT</h3>
                    </div>
                    <div className='footer-copyright'>
                        <p>Copyright © 2023</p>
                        <p>Website by <a href="#" target='_blank'>Paulo Henrique</a></p>
                    </div>
                </div>
                <div className='footer-box'>
                    <h3>CONTATO</h3>
                    <div className='footer-icon'>
                        <a href="#"><img src={iconLinkedin} alt="icon Linkedin" /></a>
                        <a href="#"><img src={iconWhatsApp} alt="icon WhatsApp" /></a>
                        <a href="#"><img src={iconEmail} alt="icon Email" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;