import PropTypes from "prop-types";
import { useRef } from "react";

export default function Modal({ isOpen, onClose, img, imgAlt, titre, annee }) {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    const images = import.meta.glob(
        "../assets/img/monuments/**/*.{png,jpg,jpeg,webp}",
        {
            eager: true,
        }
    );

    const getImageUrl = (nomFichierSansExtension) => {
        const cle = Object.keys(images).find((path) =>
            path.includes(`/${nomFichierSansExtension}`)
        );
        return cle ? images[cle].default : "";
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full"
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="bg-white overflow-y-hidden p-4 rounded shadow-lg"
            >
                <img
                    src={getImageUrl(img)}
                    alt={imgAlt}
                    className="w-full max-h-[75svh] rounded mb-4"
                />

                <h2 className="text-3xl">{titre}</h2>
                <p className="text-lg text-gray-600">{annee}</p>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    imgAlt: PropTypes.string,
    img: PropTypes.string,
    titre: PropTypes.string,
    annee: PropTypes.string,
    desc: PropTypes.string,
};
