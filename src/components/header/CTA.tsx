import CV from "../../assets/Gursikh_Hajra_Resume.pdf";

const CTA = () => {
  function openCV() {
    window.open(CV, "_blank");
  }

  return (
    <div className="cta">
      <a onClick={openCV} className="btn">
        CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default CTA;
