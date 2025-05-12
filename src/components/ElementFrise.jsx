import PropTypes from 'prop-types';

export default function ElementFrise({ 
    img, 
    imgAlt = "Monument Malgré-nous", 
    titre, 
    annee, 
    onClick,
    dataAos
}) {

    const images = import.meta.glob(
        '../assets/img/monuments/**/*.{png,jpg,jpeg,webp}',
        {
            eager: true
        }
    );

    const getImageUrl = (nomFichierSansExtension) => {
        const cle = Object.keys(images).find((path) =>
            path.includes(`/${nomFichierSansExtension}`)
        );
        return cle ? images[cle].default : "";
    };

    return (
        <div className="elementFrise" onClick={onClick} data-aos={dataAos}>
            <div className='point'></div>

            <img src={getImageUrl(img)} alt={imgAlt} />

            <div className='contenu'>
                <h3>{annee == "0000" ? "" : annee}</h3>
                <h2>{titre}</h2>
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
