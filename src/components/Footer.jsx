

const Footer = () => {
  
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
  <p className="text-sm">
    © {new Date().getFullYear()} Dictionary App. All rights reserved.
  </p>
  <p className="text-sm">
    Improving pronunciation for a better learning experience.
  </p>
  <p className="text-sm">
    Built with ❤️ by{" "}
    <a
      href="https://ismaildevcode.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 font-semibold hover:underline"
    >
      Mohammed Ismail
    </a>{" "}
    using React and Tailwind CSS.
  </p>
</footer>
    )
}


export default Footer;