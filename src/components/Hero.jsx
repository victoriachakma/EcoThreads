import styles from '../style';
import { result } from '../assets';

const Hero = () => (
	<section id='home' className={`flex md: flex-col ${styles.paddingY}`}>
    <div className='justify-between items-center w-full'>
      <h1 className='flex-1 font-poppins font-semibold text-olive text-center text-[72px]'>
        Sustainable fashion made easy.
      </h1>
      <h2 className='flex-1 font-poppins font-light text-olive text-center text-[36px] px-60 pt-5'>
        EcoThreads is the go to app for outfit inspiration while reducing your global carbon footprint. 
      </h2>
      <img src={result} alt="skyline" className='object-center pt-4 w-full'/>
    </div>
  </section>
)

export default Hero