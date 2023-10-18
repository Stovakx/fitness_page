import "./galleryPage.css";
import fetchData from "../../utils/axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import GalleryBg from '../../assets/gallery4.jpg';
export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData("gallery")
      .then((galleryData) => {
        setImages(galleryData);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Problém při načtení fotek");
      });
  }, []);


  return (
    <>
      <Header title={"Our gallery"} img={GalleryBg}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Header>
      <section className="gallerySection">
        <div className="container galleryContainer">
          {images.length > 0 ?(
            images.map(({id, img})=>(
              <article key={id}>
                <img src={img}/>
              </article>
            ))
          ):(
            <p>{errorMessage || "Loading..."}</p>
          )}
        </div>
      </section>
    </>
  );
}
