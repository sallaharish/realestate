import './index.css';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';    
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col company">
          <h2>M V V Builders</h2>
          <p>
            At AI Trading Software, we specialize in AI-driven trading software designed to optimize trading performance with cutting-edge technology.
          </p>
          <h3>Join a Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter Your Email Here" />
            <button><ArrowForwardIcon/></button>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>FAQ</li>
            <li>Refund Policy</li>
            <li>Live Support</li>
            <li>Coaching</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Affiliate Program</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p className='footer-contact'><LocationOnIcon sx={{color:" #8e7cf7"}}/> M1-269, Al Gurg Building Karama, Dubai, UAE.</p>
          <p  className='footer-contact'><EmailIcon sx={{color:" #8e7cf7"}} /> support@MVV Builders.com</p>
          <p  className='footer-contact'><PhoneIcon sx={{color:" #8e7cf7"}}/>  +971 508200684</p>
        </div>
      </div>

      <div className="footer-disclaimer">
        <strong>DISCLAIMER:</strong> <br />
        M V V Builderse and its employees are not officially qualified to provide financial advice... (shortened for demo)
      </div>

      <div className="footer-risk">
        <strong>Risk Warning:</strong> <br />
        Trading carries a high level of risk and may not be suitable for all investors...
      </div>

      {/* <a href="https://wa.me/971508200684" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon/>
        <span>Need Assistance?<br />WhatsApp</span>
      </a>

      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        up
      </button> */}
      <div className="footer-bottom">
  <hr />
  <div className="footer-bottom-content">
    <p className="footer-left">© 2024 M V V Builders</p>
    <p className="footer-right">Designed and developed by M V V Builders</p>
  </div>
</div>

    </footer>
  );
};

export default Footer;