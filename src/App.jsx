import { useState, useEffect } from "react";
import ElementFrise from "./components/ElementFrise";
import Modal from "./components/Modal";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // bloquer le scroll quand modal ouverte
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);


    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    const motsASupprimer = ["gare", "de", "la", "place"];

    const cleanString = (texte) => {
        const pattern = new RegExp(
            `\\b(${motsASupprimer
                .map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                .join("|")})\\b`,
            "gi"
        );
        return texte.replace(pattern, "").replace(/\s+/g, " ").trim();
    };

    // Tableau des monuments
    const monuments = [
        {
            img: null,
            imgAlt: "",
            titre: "Wettolsheim",
            annee: "1952",
            desc: "Description du monument de Stèle du souvenir",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Wintzenheim",
            annee: "1953",
            desc: "Description du monument de Chapelle des Bois avec mémorial ADEIF au pied du calvaire",
        },
        {
            img: "Soultz-Haut-Rhin1955",
            imgAlt: "",
            titre: "Soultz",
            annee: "1955",
            desc: "Description du monument de Mémorial du Rote Rain, Croix et autel en grès rose des Vosges",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Obernai",
            annee: "1956",
            desc: "Description du monument de Calvaire monumental au mont national",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Turckheim",
            annee: "1956",
            desc: "Description du monument de Mémorial érigé sur une colline à 383 mètres d'altitude",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Wasselonne",
            annee: "1959",
            desc: "Description du monument de Monument, place du château",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Schlierbach",
            annee: "1970",
            desc: "Description du monument de Chapelle au pied des premières collines du Sundgau",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Mulhouse",
            annee: "1983",
            desc: "Description du monument de Mémorial à côté de la rue Belvédère",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Heimsbrunn",
            annee: "1990",
            desc: "Description du monument de Ex-voto",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Marlenheim",
            annee: "1991",
            desc: "Description du monument de Plaque Tambov de bronze sur la partie basse avant du monument aux morts",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Molsheim",
            annee: "1991",
            desc: "Description du monument de Plaque Tambov de bronze",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Rosheim",
            annee: "1991",
            desc: "Description du monument de Plaque Tambov de bronze",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Nordheim",
            annee: "1993",
            desc: "Description du monument de Plaque de bronze",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Soufflenheim",
            annee: "1993",
            desc: "Description du monument de Plaque de bronze",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Waldolwisheim",
            annee: "1993",
            desc: "Description du monument de Arbre, cimetière",
        },
        {
            img: "default",
            imgAlt: "",
            titre: "Durrenbach",
            annee: "1994",
            desc: "Description du monument de Ex-voto",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Gare de Saint-Louis",
            annee: "1996",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: "Colmar0000",
            imgAlt: "",
            titre: "Gare de Colmar",
            annee: "0000",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Ingersheim",
            annee: "1997",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Sainte-Marie-aux-Mines",
            annee: "1997",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Wintzenheim",
            annee: "1997",
            desc: "Description du monument de Plaque apposée sur l'autel-mémorial en grès rouge",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Strasbourg",
            annee: "1999",
            desc: "Description du monument de Square des Malgré-Nous",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Cernay",
            annee: "2000",
            desc: "Description du monument de Statue Tambov, à côté du Musée de la Porte de Thann",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Gare de Molsheim",
            annee: "2000",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Haguenau",
            annee: "2000",
            desc: "Description du monument de Statue Tambov, Cimetière",
        },
        {
            img: "default",
            imgAlt: "",
            titre: "Place de la Gare de Truchtersheim",
            annee: "2000",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Ribeauvillé",
            annee: "2000",
            desc: "Description du monument de Statue Tambov, Espace vert",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Riedisheim",
            annee: "2000",
            desc: "Description du monument de Statue Tambov",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Altkirch",
            annee: "2001",
            desc: "Description du monument de Statue Tambov, à côté d'une voie de circulation importante",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Kientzheim",
            annee: "2002",
            desc: "Description du monument de Plaque incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Sélestat",
            annee: "2002",
            desc: "Description du monument de Statue Tambov, Parvis de l'église",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Wittenheim",
            annee: "2002",
            desc: "Description du monument de Place des Malgré-Nous",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Colmar",
            annee: "2003",
            desc: "Description du monument de Square des Malgré-Nous, ancien hôpital Baur",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Jebsheim",
            annee: "2003",
            desc: "Description du monument de Mur du souvenir, Parc du Souvenir",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Bischwiller",
            annee: "2005",
            desc: "Description du monument de Arbre",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Hatten",
            annee: "2005",
            desc: "Description du monument de Arbre, enceinte extérieure du musée de l'Abri",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Schirmeck",
            annee: "2005",
            desc: "Description du monument de Mémorial à proximité du camp de Struthof",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Ammerschwihr",
            annee: "2006",
            desc: "Description du monument de Plaque (remplace celle de 1993)",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Bouxwiller",
            annee: "2006",
            desc: "Description du monument de Plaque incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Gare de Saverne",
            annee: "0000",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Friesenheim",
            annee: "2024",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Gries",
            annee: "2006",
            desc: "Description du monument de Place des Incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Pfaffenhoffen",
            annee: "2006",
            desc: "Description du monument de Plaque incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Holtzwihr",
            annee: "2007",
            desc: "Description du monument de Fontaine, mairie",
        },
        {
            img: "default",
            imgAlt: "",
            titre: "Molsheim",
            annee: "2007",
            desc: "Description du monument de Arbre",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Ribeauvillé",
            annee: "2007",
            desc: "Description du monument de Rocher apposée d'une plaque",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Riquewihr",
            annee: "2007",
            desc: "Description du monument de Plaque commémorative sur le monument aux morts",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Sainte-Croix-aux-Mines",
            annee: "2007",
            desc: "Description du monument de Plaque commémorative à droite du monument aux morts",
        },
        {
            img: "default",
            imgAlt: "",
            titre: "Schirmeck",
            annee: "2007",
            desc: "Description du monument de Arbre",
        },
        {
            img: "Soultz-les-Bains2007MN",
            imgAlt: "",
            titre: "Soultz-les-Bains",
            annee: "2007",
            desc: "Description du monument de Deux plaques commémoratives (incorporés de force et rescapés de Tambov)",
        },
        {
            img: "Soultz-les-Bains2007Tambov",
            imgAlt: "",
            titre: "Soultz-les-Bains",
            annee: "2007",
            desc: "Description du monument de Deux plaques commémoratives (incorporés de force et rescapés de Tambov)",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Colmar",
            annee: "2008",
            desc: "Description du monument de Arbre",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Hatten",
            annee: "2008",
            desc: "Description du monument de Rocher apposée d'une plaque",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Kunheim",
            annee: "2008",
            desc: "Description du monument de Plaque à proximité du monument aux morts",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Munster",
            annee: "2008",
            desc: "Description du monument de Rocher apposée d'une plaque",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Saverne",
            annee: "2008",
            desc: "Description du monument de Square des Malgré-Nous",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Guebwiller",
            annee: "2009",
            desc: "Description du monument de Rocher apposée d'une plaque commémorative",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Richwiller",
            annee: "2009",
            desc: "Description du monument de Place en l'honneur des Malgré-Nous",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Schiltigheim",
            annee: "2009",
            desc: "Description du monument de Monument « Pétales tombantes », espace vert",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Houssen",
            annee: "2010",
            desc: "Description du monument de Plaque apposée sur un rocher",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Turckheim",
            annee: "2010",
            desc: "Description du monument de Stèle à proximité du monument aux morts",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Kaysersberg",
            annee: "2011",
            desc: "Description du monument de Rocher + stèle, rue 18 novembre, place Malgré-Nous",
        },
        {
            img: "Lebonhomme2011",
            imgAlt: "",
            titre: "Le Bonhomme",
            annee: "2011",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Wittisheim",
            annee: "2011",
            desc: "Description du monument de Plaque, retrace l'histoire du chêne",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Baldersheim",
            annee: "2012",
            desc: "Description du monument de Plaque",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Baltzenheim",
            annee: "2013",
            desc: "Description du monument de Stèle avec trois plaques",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Dorlisheim",
            annee: "2012",
            desc: "Description du monument de Arbre souvenir",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Witternheim",
            annee: "2012",
            desc: "Description du monument de Plaque incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Grussenheim",
            annee: "2015",
            desc: "Description du monument de Plaque Malgré Nous",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Mommenheim",
            annee: "2015",
            desc: "Description du monument de Arbre",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Wintzenheim",
            annee: "2015",
            desc: "Description du monument de Parvis des Incorporés de force avec monument",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Ammerschwihr",
            annee: "2016",
            desc: "Description du monument de Place des Incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Sundhoffen",
            annee: "2016",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Zimmerbach",
            annee: "2016",
            desc: "Description du monument de Plaque apposée près du monument aux morts, près de l'église Saint-Georges",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Andolsheim",
            annee: "2017",
            desc: "Description du monument de Plaque + rocher",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Bennwihr",
            annee: "2017",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Erstein",
            annee: "2017",
            desc: "Description du monument de Arbre",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Mulhouse",
            annee: "2017",
            desc: "Description du monument de Stèle, square Malgré-Nous",
        },
        {
            img: "Dambach-la-Ville2019",
            imgAlt: "",
            titre: "Dambach-la-Ville",
            annee: "2019",
            desc: "Description du monument de Place des Incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Zillisheim",
            annee: "2019",
            desc: "Description du monument de Stèle, place de la Mairie",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Saint-Hippolyte",
            annee: "2022",
            desc: "Description du monument de Plaque au pied du monument aux morts communal",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Lampertsloch",
            annee: "2022",
            desc: "Description du monument de Place des Malgré-Nous",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Richwiller",
            annee: "2022",
            desc: "Description du monument de Verger mémoriel",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Steinbourg",
            annee: "2022",
            desc: "Description du monument de Stèle, parvis de l'église",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Wintzenheim",
            annee: "2022",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Leimbach",
            annee: "2023",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Niederschaeffolsheim",
            annee: "2023",
            desc: "Description du monument de Arbre, stèle et place des Incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Saint-Hippolyte",
            annee: "2023",
            desc: "Description du monument de Verger mémoriel",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Wattwiller",
            annee: "2023",
            desc: "Description du monument de Pommier",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Plaine",
            annee: "0000",
            desc: "Description du monument de Plaque",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Tagolsheim",
            annee: "0000",
            desc: "Description du monument de Plaque",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Gare de Thann",
            annee: "0000",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Gare de Sélestat",
            annee: "0000",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Gare de Mulhouse",
            annee: "0000",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Biesheim",
            annee: "0000",
            desc: "Description du monument de inscription sur le momunent aux morts communal",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Oberhergheim",
            annee: "0000",
            desc: "Description du monument de inscription sur le momunent aux morts communal",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Carspach",
            annee: "0000",
            desc: "Description du monument de inscription sur le momunent aux morts communal",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Kaysersberg",
            annee: "0000",
            desc: "Description du monument de inscription sur le momunent aux morts communal",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Bergheim",
            annee: "0000",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Lapoutroie",
            annee: "0000",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Raedersheim",
            annee: "0000",
            desc: "Description du monument de Stèle",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Mulhouse",
            annee: "0000",
            desc: "Description du monument de Square des MN",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Kaysersberg",
            annee: "0000",
            desc: "Description du monument de Place des Malgré-Nous",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Nordheim",
            annee: "0000",
            desc: "Description du monument de Place des Incorporés de force",
        },
        {
            img: null,
            imgAlt: "",
            titre: "Dorlisheim",
            annee: "0000",
            desc: "Description du monument de Plaque ADEIF",
        },
        
        {
            img: null,
            imgAlt: "",
            titre: "Châtenois",
            annee: "0000",
            desc: "Description du monument de Plaque ADEIF",
        },
        {
            img: "Hohatzenheim0000",
            imgAlt: "",
            titre: "Hohatzenheim",
            annee: "Ex-voto",
            desc: "Description du monument de Plus de 1200 ex-voto",
        },
        {
            img: "Blodelsheim0000",
            imgAlt: "",
            titre: "Blodelsheim",
            annee: "Ex-voto",
            desc: "Description du monument de Ernest Sauter et ses camarades Blodelsheimois : Xavier Decker, Albert Fricker, Xavier Haas, Albert Hueber et Ernest Winckler (Père Pius) ont apposé cette dalle en marbre dans la chapelle de l'Allmenfeld à Blodelsheim après 1945. (En 2019 cette a été restaurée par Louis Ehry)",
        },
        {
            img: "Thierenbach0000",
            imgAlt: "",
            titre: "Thierenbach",
            annee: "Ex-voto",
            desc: "Description du monument de Plaque ADEIF",
        },
    ];

    return (
        <>
            <section className="p-4 h-screen">
                <h1 className="text-3xl mb-10 text-slate-800 font-semibold text-center">
                    Frise chronologique
                </h1>

                <div className="min-h-full w-full max-w-lg mx-auto relative">
                    <div className="w-1 h-full z-0 rounded bg-slate-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                    <div className="elementsFrise w-full h-full flex flex-col gap-8 pb-96">
                        {monuments.sort((a, b) => b.annee - a.annee).map((monument, index) => {
                            return (
                                <ElementFrise
                                    key={index}
                                    img={
                                        monument.img ??
                                        cleanString(
                                            monument.titre + monument.annee
                                        )
                                    }
                                    imgAlt={monument.imgAlt}
                                    titre={monument.titre}
                                    annee={monument.annee}
                                    onClick={() => openModal(monument)}
                                    dataAos={
                                        index % 2 === 0
                                            ? "fade-right"
                                            : "fade-left"
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                img={
                    modalContent.img ??
                    cleanString(
                        modalContent.titre + (modalContent.annee ?? "")
                    )
                }
                imgAlt={modalContent.imgAlt}
                titre={modalContent.titre}
                annee={modalContent.annee}
                desc={modalContent.desc}
            />
        </>
    );
}

export default App;
