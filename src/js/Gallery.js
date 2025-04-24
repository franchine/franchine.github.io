import "../css/Gallery.css";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export const Gallery = ({ galleryImgs }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null); // ref for the modal container

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((prev) => (prev === 0 ? galleryImgs.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideNumber((prev) => (prev + 1 === galleryImgs.length ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (!openModal) return; // only handle keydown when modal is open

    if (e.key === "Escape") {
      handleCloseModal();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  useEffect(() => {
    if (openModal && modalRef.current) {
      modalRef.current.focus(); // set focus to the modal when it opens
    }
  }, [openModal]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown); // add listener on mount
    return () => {
      document.removeEventListener("keydown", handleKeyDown); // remove listener on unmount
    };
  }, [openModal, prevSlide, nextSlide]); // re-run if these dependencies change

  return (
    <div>
      {openModal && (
        <div
          className="slideWrap"
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          tabIndex={0} // make the modal focusable
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
            aria-label="Close image gallery"
          />

          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
            aria-label="Previous image"
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
            aria-label="Next image"
          />
          <div className="fullScreenImage">
            <img
              src={galleryImgs[slideNumber].img}
              alt={`Image ${slideNumber + 1} of the gallery`}
            />
          </div>
        </div>
      )}
      <div className="galleryWrap">
        {galleryImgs?.map((slide, index) => (
          <div
            className="single"
            key={index}
            onClick={() => handleOpenModal(index)}
            tabIndex={0} // make individual images focusable
            aria-label={`view image ${index + 1} in full size`}
          >
            {/* <div className="image-overlay">
              <h3 className="image-title">{slide.title}</h3>
            </div> */}
            <img src={slide.img} alt={`small preview of image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
