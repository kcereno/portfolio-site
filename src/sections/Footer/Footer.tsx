import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      <hr className="footer-divider" />
      <p className="text-center my-lg">{`${currentYear} Karl Cereno`}</p>
    </div>
  );
}

export default Footer;
