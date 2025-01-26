/* eslint-disable react/no-unescaped-entities */
import ContactForm from '../ContactForm/ContactForm'
import SocialMedia from '../SocialMedia/SocialMedia'

function Contact() {
  return (
    <section
      className=" w-full flex px-4 flex-col items-center gap-20 mt-10 relative"
      id="contact"
    >
      <div className="container-app py-10 sm:py-24 px-4 relative">
        <h2 className="inter-font inter-font font-extrabold text-[30px] sm:text-5xl text-center sm:text-start">
          CONTACT
        </h2>
        <div className="flex flex-col min-[769px]:flex-row w-full justify-between gap-14 sm:gap-40 mt-14">
          <ContactForm />
          <div className="w-full min-[769px]:w-1/2 flex flex-col gap-5">
            <p className="text-base sm:text-xl poppins-regular text-center sm:text-starttext-center sm:text-start">
              I'm constantly looking for opportunities that allow me to grow
              both personally and professionally, and also to connect with
              people who have similar or divergent views. <br />
              <br />
              Whether you have an opportunity to discuss, advice to share,
              questions to ask, or just want to exchange ideas, I'm always
              available in my inbox!
            </p>
            <SocialMedia className="flex scale-[.75] justify-center sm:justify-start sm:scale-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
