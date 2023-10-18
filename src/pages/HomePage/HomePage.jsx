import Faqs from "../../components/Faqs/Faqs";
import HeadingText from "../../components/HeadingText/HeadingText";
import Programs from "../../components/Programs/Programs";
import Testimonials from "../../components/Testimonials/Testimonials";
import Values from "../../components/Values/Values";
import "./homepage.css";

export default function HomePage() {
  return (
    <>
      <HeadingText/>
      <Programs/>
      <Values/>
      <Faqs/>
      <Testimonials/>
    </>
  )
}
