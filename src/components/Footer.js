//styles
import '../stylesSheets/Footer.scss';

//FUNCTIONAL COMPONENT
const Footer = () => {
  return (
    <section className="Footer">
      <a
        className=""
        href="https://github.com/Sagramielgo"
        target="_blank"
        rel="noreferrer"
      >
        <h5 className="copy animate__animated animate__headShake animate__infinite">
          By #gitFuntastic&nbsp;
          <span>
            <i className="fas fa-paw "></i>
          </span>
          &nbsp;2021
        </h5>
      </a>
    </section>
  );
};
export default Footer;
