import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-xl">
      <div className="py-md border-t border-slate-700">
        <p className="text-center ">{`${currentYear} Karl Cereno`}</p>
      </div>
    </div>
  );
}

export default Footer;
