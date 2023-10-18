import "./contactPage.css";
import Header from "../../components/Header/Header";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import BgImgae from "../../assets/gallery7.jpg";

export default function ContactPage() {
  return (
    <>
      <Header img={BgImgae} title={"Contact us "} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      </Header>
      <section>
        <div className="container contactContainer">
          <a href="mailto:Robin.Palatas@gmail.com" className="btn btn-em"><FaEnvelope/></a>
          <a href="" className="btn btn-em"><FaPhone/></a>
        </div>
      </section>
    </>
  );
}
