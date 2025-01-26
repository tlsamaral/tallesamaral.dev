import SocialMedia from '../SocialMedia/SocialMedia'

function Footer() {
  return (
    <footer className="w-full py-2">
      <div className="max-w-[1146px] mx-auto flex flex-col justify-center items-center">
        <div className="scale-50">
          <SocialMedia />
        </div>
        <span className="text-xs poppins-light">
          © 2024 | Designed & Developed by Talles Amaral
        </span>
      </div>
    </footer>
  )
}

export default Footer
