import styles from '../style';
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div>
        <img src={logo} alt="EcoThreads" className='w-[266px] object-contain' />
        <p>A new way to make fashion more sustainable than ever</p>
      </div>
    </div>
  </section>
);

export default Footer;