import { FaFacebook, FaInstagram, FaTwitter, FaVoicemail, FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/img/wheelss.jpg';
// import logo from '../../../assets/img/wheels.png';

const Footer = () => {
    return (
        <section className=' bg-primary text-white'>
        <footer className="font-CreteRound footer mt-12 p-10">
          <div>
            <img className='h-16 bg-red-500 rounded-lg' src={logo} alt="" />
            <p>WHEELS Ltd.<br/>Providing reliable and affordable toy since 1992</p>
            <section className='flex gap-4'>
              <a href="https://www.facebook.com/ashraful.hider/">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube></FaYoutube>
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram></FaInstagram>
              </a>
              <a href="https://twitter.com/">
                <FaTwitter></FaTwitter>
              </a>
              <a href="https://support.google.com/phoneapp/answer/2811844?hl=en">
                <FaVoicemail></FaVoicemail>
              </a>
              
              
              
              
              
            </section>
          </div> 
          <div>
            <span className="footer-title">Services</span> 
            <a className="link link-hover">Branding</a> 
            <a className="link link-hover">Design</a> 
            <a className="link link-hover">Marketing</a> 
            <a className="link link-hover">Advertisement</a>
          </div> 
          <div>
            <span className="footer-title">Company</span> 
            <a className="link link-hover">About us</a> 
            <a className="link link-hover">Contact</a> 
            <a className="link link-hover">Jobs</a> 
            <a className="link link-hover">Press kit</a>
          </div> 
          <div>
            <span className="footer-title">Legal</span> 
            <a className="link link-hover">Terms of use</a> 
            <a className="link link-hover">Privacy policy</a> 
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        <p className='text-center font-semibold p-4'>&copy; 2023 WHEELS, Inc. All rights reserved.</p>
        </section>
    );
};

export default Footer;