import Faqs from "../../components/Faqs/Faqs";
import Header from "../../components/Header/Header";
import Programs from "../../components/Programs/Programs";
import Testimonials from "../../components/Testimonials/Testimonials";
import Values from "../../components/Values/Values";
import "./homepage.css";

export default function HomePage() {
  return (
    <>
      <Header/>
      <Programs/>
      <Values/>
      <Faqs/>
      <Testimonials/>
    </>
  )
}
