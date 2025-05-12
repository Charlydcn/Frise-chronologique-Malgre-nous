import PropTypes from "prop-types";

export default function ElementFrise({
    img,
    imgAlt = "Monument Malgré-nous",
    titre,
    annee,
    onClick,
    dataAos,
}) {
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

    return (
        <div
            className="elementFrise relative text-slate-950 w-1/2 flex items-center justify-between cursor-pointer transition-all"
            onClick={onClick}
            data-aos={dataAos}
        >
            <div className="point absolute w-4 h-4 bg-slate-950 rounded-full top-1/2 z-20"></div>

            <img
                className="transition-transform duration-300 h-16 w-16 rounded-full aspect-square object-cover"
                src={getImageUrl(img)}
                alt={imgAlt}
            />

            <div className="contenu transition-transform duration-300 flex flex-col uppercase">
                {annee === "0000" ? (
                    <h3 className="text-xl italic break-all">{titre}</h3>
                ) : (
                    <>
                        <h3 className="text-xl">{annee}</h3>
                        <h2 className="text-xs italic break-all">{titre}</h2>
                    </>
                )}
            </div>
        </div>
    );
}

ElementFrise.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    titre: PropTypes.string.isRequired,
    annee: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    dataAos: PropTypes.string,
};
