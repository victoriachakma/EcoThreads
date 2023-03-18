import styles from '../style';
import { logo } from "../assets";
/*import { footerLinks } from "../constants";*/

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-[1] flex flex-col justify-start mr-10'>
        <img src={logo} alt="EcoThreads" className='w-[266px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make fashion more sustainable than ever
        </p>
      </div>

    </div>
  </section>
);

export default Footer;