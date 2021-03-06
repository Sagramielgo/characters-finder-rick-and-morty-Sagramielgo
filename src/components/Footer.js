//styles
import '../stylesSheets/Footer.scss';

//FUNCTIONAL COMPONENT
const Footer = () => {
  return (
    <a
      className=""
      href="https://github.com/Sagramielgo"
      target="_blank"
      rel="noreferrer"
    >
      <h5 className="copy animate__animated animate__headShake animate__infinite">
        By #Git Funtastic &nbsp;
        <span>
          <i className="fas fa-paw "></i>
        </span>
        &nbsp;2021
      </h5>
    </a>
  );
};
export default Footer;
