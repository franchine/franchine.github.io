import { useEffect, useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Gallery.css";

export const Gallery = ({ galleryImgs }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null); // ref for the modal container

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideNumber((prev) => (prev === 0 ? galleryImgs.length - 1 : prev - 1));
  }, [galleryImgs]);

  const nextSlide = useCallback(() => {
    setSlideNumber((prev) => (prev + 1 === galleryImgs.length ? 0 : prev + 1));
  }, [galleryImgs]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!openModal) return; // only handle keydown when modal is open

      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    },
    [openModal, handleCloseModal, prevSlide, nextSlide]
  );

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
  }, [handleKeyDown]);

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
            aria-label="close image gallery"
          />

          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
            aria-label="previous image"
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
            aria-label="next image"
          />
          <div className="fullScreenImage">
            <img
              src={galleryImgs[slideNumber]?.img}
              alt={`${galleryImgs[slideNumber]?.alt}, 
              ${slideNumber + 1} of the gallery}`}
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
            aria-label={`view ${slide.alt} in full size`}
          >
            <img src={slide.img} alt={`small preview of ${slide.alt}`} />
            <div className="image-overlay">
              <div className="image-title">{slide.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
