import styles from '../style';

const Hero = () => (
	<section id='home' className={`flex md: flex-row flex-col ${styles.paddingY}`}>
    <div className='flex flex-row justify-between items-center w-full'>
    <h1 className='flex-1 font-poppins font-semibold text-center s:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
      Your closet. 
    </h1>
    </div>
  </section>
)

export default Hero