import styles from "../style";
import { prototypeText } from "../constants";

const Prototype = () => (
  <section id='pt' className={`flex md: flex-row flex-col ${styles.paddingY}`}>
    <div className='flex flex-row justify-between items-center w-full'>
      <h1 className='flex-1 font-poppins font-semibold text-center s:text-[72px] text-[52px] text-olive ss:leading-[100px] leading-[75px]'>
        Interactive Prototype
      </h1>
    </div>

    <div className='flex flex-row items-center w-full'>
      <div className={`bg-dimWhite ${styles.paddingP}`}>
        <iframe 
          style={{
          width: "460px",
          height: "900px",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwWFkWVNMtbnDAaGo3Nx9Bi%2FEcoThreads%3Fpage-id%3D6%253A18%26node-id%3D6-21%26viewport%3D-122%252C469%252C0.45%26scaling%3Dscale-down%22%3E">
        </iframe>
      </div>
      <div className={`flex flex-col ss:my-0 my-4 min-w-[150px] mr-40`}>
      {prototypeText.map((text) => (
          <div key={text.title} className={`flex flex-col ss:my-0 my-0 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[36px] leading-[37px] text-olive mb-3">
              {text.title}
            </h4>
            <h4 className="font-poppins font-normal text-[26px] leading-[34px] text-olive mb-16">
              {text.desc}
            </h4>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Prototype;