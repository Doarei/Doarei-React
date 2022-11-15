import { Link } from 'react-router-dom'
import face from '../img/face.png'
import zap from '../img/zap.png'
import insta from '../img/insta.png'


function Footer() {

  const styles = {
    width: '35px',
    
  }

  return (
    <>
      <div className='container'>
        <br /><br />
        <footer className="d-flex align-items-center justify-content-center">
          <div className=''>
            <Link className="nav-link" to="http://www.facebook.com"><img style={styles} src={face} /> </Link>
          </div>
          <div>
            <Link className="nav-link" to="https://www.instagram.com/"><img style={styles} src={insta} /></Link>
          </div>
          <div>
            <Link className="nav-link" to="https://web.whatsapp.com/"><img style={styles} src={zap} /></Link>
          </div> 
          <p className="margin-top 2em">&copy; by Squad 23</p>
        </footer>
      </div>
    </>
  )
}

export default Footer;