import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type DojoShinobuProps = {
    logoImage?: string
    brand: string
    discipline: string
    sensei: string
    rank: string
    location: string
    email: string
    navCta: string
    primaryCta: string
    secondaryCta: string
    heroEyebrow: string
    heroTitle: string
    heroText: string
    trustOneTitle: string
    trustOneText: string
    trustTwoTitle: string
    trustTwoText: string
    trustThreeTitle: string
    trustThreeText: string
    introLabel: string
    introTitle: string
    introText: string
    valuesText: string
    flagTitle: string
    flagText: string
    valuesLabel: string
    valuesTitle: string
    pillarOneTitle: string
    pillarOneText: string
    pillarTwoTitle: string
    pillarTwoText: string
    pillarThreeTitle: string
    pillarThreeText: string
    senseiLabel: string
    senseiText: string
    senseiCta: string
    galleryLabel: string
    galleryTitle: string
    galleryText: string
    galleryOneTitle: string
    galleryOneTag: string
    galleryTwoTitle: string
    galleryTwoTag: string
    galleryThreeTitle: string
    galleryThreeTag: string
    contactLabel: string
    contactTitle: string
    contactText: string
    footerCredit: string
    instagramUrl: string
    youtubeUrl: string
    tiktokUrl: string
    heroImage: string
    senseiImage: string
    kidsImage: string
    familyImage: string
    flagImage: string
    backgroundColor: string
    surfaceColor: string
    textColor: string
    mutedTextColor: string
    primaryColor: string
    accentColor: string
    goldColor: string
}

const DEFAULTS: DojoShinobuProps = {
    logoImage: "https://i.imgur.com/NppIw9o.jpeg",
    brand: "Dojo Shinobu Durazno",
    discipline: "Kyokushin-Kan Karate",
    sensei: "Sensei Roberto Pereira Agosti",
    rank: "3er Dan",
    location: "Durazno, Uruguay",
    email: "dojoshinobudurazno@gmail.com",
    navCta: "Consultar",
    primaryCta: "Escribir por correo",
    secondaryCta: "Ver Instagram",
    heroEyebrow: "Durazno, Uruguay",
    heroTitle: "Dojo Shinobu Durazno",
    heroText:
        "Karate Kyokushin-Kan para formar cuerpo, caracter y confianza en un dojo familiar dirigido por Sensei Roberto Pereira Agosti.",
    trustOneTitle: "Kyokushin-Kan Karate",
    trustOneText: "Linea Kyokushin-Kan",
    trustTwoTitle: "Sensei Roberto Pereira Agosti",
    trustTwoText: "Director en Durazno",
    trustThreeTitle: "Durazno, Uruguay",
    trustThreeText: "Comunidad local",
    introLabel: "Un lugar para crecer",
    introTitle: "Entrenar karate tambien es aprender a estar mejor.",
    introText:
        "Dojo Shinobu Durazno propone una practica seria, cercana y humana. La clase acompana el proceso de cada alumno, con exigencia progresiva, cuidado en la tecnica y un ambiente donde las familias se sienten tranquilas.",
    valuesText:
        "Confianza, Respeto, Constancia, Autocontrol, Comunidad, Espiritu fuerte",
    flagTitle: "Orgullo local",
    flagText: "Karate Kyokushin-Kan en Durazno",
    valuesLabel: "Valores del dojo",
    valuesTitle: "Firmeza, respeto y companerismo.",
    pillarOneTitle: "Disciplina con respeto",
    pillarOneText:
        "Cada entrenamiento cuida la tecnica, el caracter y el trato entre companeros.",
    pillarTwoTitle: "Ambiente familiar",
    pillarTwoText:
        "Un espacio cercano para ninos, jovenes y adultos que buscan aprender con confianza.",
    pillarThreeTitle: "Karate tradicional",
    pillarThreeText:
        "Kyokushin-Kan con foco en perseverancia, autocontrol, humildad y superacion.",
    senseiLabel: "Direccion tecnica",
    senseiText:
        "Una guia clara y respetuosa cambia la forma en que una persona se anima a aprender. El dojo transmite seguridad porque combina experiencia, cercania y una estructura de entrenamiento pensada para progresar paso a paso.",
    senseiCta: "Consultar horarios y clases",
    galleryLabel: "Galeria",
    galleryTitle: "Imagenes que transmiten practica, cuidado y familia.",
    galleryText:
        "La landing usa fotografia calida de karate y artes marciales para reforzar confianza desde el primer vistazo.",
    galleryOneTitle: "Clase guiada",
    galleryOneTag: "Tecnica y seguimiento",
    galleryTwoTitle: "Entrenamiento infantil",
    galleryTwoTag: "Disciplina desde pequenos",
    galleryThreeTitle: "Aprendizaje cercano",
    galleryThreeTag: "Confianza alumno-sensei",
    contactLabel: "Contacto",
    contactTitle: "Sumate al dojo o consulta por clases.",
    contactText:
        "Escribi por correo o visita las redes para conocer mas de la actividad de Dojo Shinobu Durazno.",
    footerCredit: "Hecho por Gonzalo DevTeam",
    instagramUrl:
        "https://www.instagram.com/dojoshinobu_durazno?brid=YWdncwG1AWDoNlnyQ6R3QqDAqcBZ",
    youtubeUrl: "https://www.youtube.com/@DOJOSHINOBUDURAZNO",
    tiktokUrl:
        "https://www.tiktok.com/@dojoshinobu5?brid=YWdncwEuwAvkyOrwZa2R_Ey1AnoY",
    heroImage:
        "https://images.pexels.com/photos/8042007/pexels-photo-8042007.jpeg?auto=compress&cs=tinysrgb&w=1900",
    senseiImage:
        "https://i.imgur.com/PFhC3kr.jpeg?auto=compress&cs=tinysrgb&w=1200",
    kidsImage:
        "https://i.imgur.com/9ITpUv5.jpeg?auto=compress&cs=tinysrgb&w=1300",
    familyImage:
        "https://i.imgur.com/BsqHPlz.jpeg?auto=compress&cs=tinysrgb&w=1300",
    flagImage:
        "https://images.pexels.com/photos/21404692/pexels-photo-21404692.jpeg?auto=compress&cs=tinysrgb&w=1200",
    backgroundColor: "#fffaf4",
    surfaceColor: "#f4f8fb",
    textColor: "#111111",
    mutedTextColor: "#424242",
    primaryColor: "#b11226",
    accentColor: "#0f5f96",
    goldColor: "#f2c94c",
}

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
}

const staggerGroup = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
}

const cardReveal = {
    hidden: { opacity: 0, y: 34, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.68,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Valores", href: "#valores" },
    { label: "Sensei", href: "#sensei" },
    { label: "Contacto", href: "#contacto" },
]

const socialIcons = {
    instagram: "https://cdn.simpleicons.org/instagram/E4405F",
    youtube: "https://cdn.simpleicons.org/youtube/FF0000",
    tiktok: "https://cdn.simpleicons.org/tiktok/000000",
}

function splitValues(valuesText: string) {
    return valuesText
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
}

function makeMailLink(email: string, brand: string) {
    return `mailto:${email}?subject=${encodeURIComponent(`Consulta para ${brand}`)}`
}

function LogoMark({
    src,
    brand,
}: {
    src?: string
    brand: string
}) {
    if (src) {
        return <img className="shinobu-logo" src={src} alt={`Logo de ${brand}`} />
    }

    return (
        <div className="shinobu-logo shinobu-logo--fallback" aria-label={brand}>
            <span>Dojo</span>
            <strong>Shinobu</strong>
        </div>
    )
}

export default function DojoShinobuDuraznoLanding(
    props: Partial<DojoShinobuProps>
) {
    const heroRef = React.useRef<HTMLElement>(null)
    const data = { ...DEFAULTS, ...props } as DojoShinobuProps
    const contactLink = makeMailLink(data.email, data.brand)
    const values = splitValues(data.valuesText)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"])
    const heroImageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.16])

    const pillars = [
        { title: data.pillarOneTitle, text: data.pillarOneText },
        { title: data.pillarTwoTitle, text: data.pillarTwoText },
        { title: data.pillarThreeTitle, text: data.pillarThreeText },
    ]

    const gallery = [
        {
            title: data.galleryOneTitle,
            tag: data.galleryOneTag,
            image: data.senseiImage,
        },
        {
            title: data.galleryTwoTitle,
            tag: data.galleryTwoTag,
            image: data.kidsImage,
        },
        {
            title: data.galleryThreeTitle,
            tag: data.galleryThreeTag,
            image: data.familyImage,
        },
    ]

    return (
        <main
            className="shinobu-page"
            id="inicio"
            style={
                {
                    "--page-bg": data.backgroundColor,
                    "--surface": data.surfaceColor,
                    "--ink": data.textColor,
                    "--muted": data.mutedTextColor,
                    "--primary": data.primaryColor,
                    "--accent": data.accentColor,
                    "--gold": data.goldColor,
                } as React.CSSProperties
            }
        >
            <header className="shinobu-nav">
                <a className="shinobu-brand" href="#inicio">
                    <LogoMark src={data.logoImage} brand={data.brand} />
                    <span>
                        <strong>{data.brand}</strong>
                        <small>{data.discipline}</small>
                    </span>
                </a>

                <nav className="shinobu-nav-links" aria-label="Navegacion">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a className="shinobu-nav-action" href={contactLink}>
                    {data.navCta}
                </a>
            </header>

            <section className="shinobu-hero" ref={heroRef}>
                <motion.img
                    className="shinobu-hero-image"
                    src={data.heroImage}
                    alt="Clase de karate entre instructor y alumno"
                    style={{ y: heroImageY, scale: heroImageScale }}
                />
                <div className="shinobu-hero-shade" />

                <motion.div
                    className="shinobu-hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <div className="shinobu-kicker">
                        <span>{data.heroEyebrow}</span>
                    </div>
                    <LogoMark src={data.logoImage} brand={data.brand} />
                    <h1>{data.heroTitle}</h1>
                    <p>{data.heroText}</p>
                    <div className="shinobu-hero-actions">
                        <a className="shinobu-button-primary" href={contactLink}>
                            {data.primaryCta}
                        </a>
                        <a
                            className="shinobu-button-secondary"
                            href={data.instagramUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {data.secondaryCta}
                        </a>
                    </div>
                </motion.div>
            </section>

            <motion.section
                className="shinobu-trust"
                aria-label="Datos principales"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerGroup}
            >
                <motion.article variants={cardReveal}>
                    <strong>{data.trustOneTitle}</strong>
                    <span>{data.trustOneText}</span>
                </motion.article>
                <motion.article variants={cardReveal}>
                    <strong>{data.trustTwoTitle}</strong>
                    <span>{data.trustTwoText}</span>
                </motion.article>
                <motion.article variants={cardReveal}>
                    <strong>{data.trustThreeTitle}</strong>
                    <span>{data.trustThreeText}</span>
                </motion.article>
            </motion.section>

            <section className="shinobu-intro">
                <motion.div
                    className="shinobu-intro-copy"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <span className="shinobu-section-label">{data.introLabel}</span>
                    <h2>{data.introTitle}</h2>
                    <p>{data.introText}</p>
                    <div className="shinobu-value-row">
                        {values.map((value) => (
                            <span key={value}>{value}</span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="shinobu-flag-panel"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    custom={0.12}
                >
                    <img src={data.flagImage} alt="Bandera de Uruguay" />
                    <div>
                        <strong>{data.flagTitle}</strong>
                        <span>{data.flagText}</span>
                    </div>
                </motion.div>
            </section>

            <section className="shinobu-section" id="valores">
                <motion.div
                    className="shinobu-section-head"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <span className="shinobu-section-label">{data.valuesLabel}</span>
                    <h2>{data.valuesTitle}</h2>
                </motion.div>

                <motion.div
                    className="shinobu-pillar-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerGroup}
                >
                    {pillars.map((item, index) => (
                        <motion.article
                            className="shinobu-pillar"
                            key={item.title}
                            variants={cardReveal}
                            whileHover={{ y: -8, scale: 1.015 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <span>0{index + 1}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </section>

            <section className="shinobu-sensei" id="sensei">
                <motion.div
                    className="shinobu-sensei-media"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={cardReveal}
                >
                    <img
                        src={data.senseiImage}
                        alt="Sensei acompanando a una alumna durante una clase"
                    />
                </motion.div>

                <motion.div
                    className="shinobu-sensei-copy"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <span className="shinobu-section-label">{data.senseiLabel}</span>
                    <h2>{data.sensei}</h2>
                    <p className="shinobu-rank">
                        {data.rank} | Director de Kyokushin-Kan en Durazno
                    </p>
                    <p>{data.senseiText}</p>
                    <a className="shinobu-text-link" href={contactLink}>
                        {data.senseiCta}
                    </a>
                </motion.div>
            </section>

            <section className="shinobu-section">
                <motion.div
                    className="shinobu-section-head shinobu-section-head--wide"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <span className="shinobu-section-label">{data.galleryLabel}</span>
                    <h2>{data.galleryTitle}</h2>
                    <p>{data.galleryText}</p>
                </motion.div>

                <motion.div
                    className="shinobu-gallery"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.18 }}
                    variants={staggerGroup}
                >
                    {gallery.map((item) => (
                        <motion.article
                            className="shinobu-photo-card"
                            key={item.title}
                            variants={cardReveal}
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <img src={item.image} alt={item.title} />
                            <div>
                                <span>{item.tag}</span>
                                <strong>{item.title}</strong>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </section>

            <section className="shinobu-contact" id="contacto">
                <motion.div
                    className="shinobu-contact-copy"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <span className="shinobu-section-label">{data.contactLabel}</span>
                    <h2>{data.contactTitle}</h2>
                    <p>{data.contactText}</p>
                    <a className="shinobu-button-primary" href={contactLink}>
                        {data.email}
                    </a>
                </motion.div>

                <motion.div
                    className="shinobu-socials"
                    aria-label="Redes sociales"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerGroup}
                >
                    <motion.a
                        href={data.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        variants={cardReveal}
                        whileHover={{ x: 6 }}
                    >
                        <span>
                            <img src={socialIcons.instagram} alt="" />
                        </span>
                        Instagram
                    </motion.a>
                    <motion.a
                        href={data.youtubeUrl}
                        target="_blank"
                        rel="noreferrer"
                        variants={cardReveal}
                        whileHover={{ x: 6 }}
                    >
                        <span>
                            <img src={socialIcons.youtube} alt="" />
                        </span>
                        YouTube
                    </motion.a>
                    <motion.a
                        href={data.tiktokUrl}
                        target="_blank"
                        rel="noreferrer"
                        variants={cardReveal}
                        whileHover={{ x: 6 }}
                    >
                        <span>
                            <img src={socialIcons.tiktok} alt="" />
                        </span>
                        TikTok
                    </motion.a>
                </motion.div>
            </section>

            <footer className="shinobu-footer">
                <span>
                    {data.brand} | {data.discipline}
                </span>
                <strong>{data.footerCredit}</strong>
            </footer>

            <style>{`
                :root {
                    color-scheme: light;
                }

                .shinobu-page {
                    --line: rgba(17, 17, 17, 0.12);
                    --dark-panel: #0b0b0d;
                    background: var(--page-bg);
                    color: var(--ink);
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                    min-height: 100vh;
                    min-width: 0;
                    overflow-x: hidden;
                    width: 100%;
                }

                .shinobu-page * {
                    box-sizing: border-box;
                }

                .shinobu-page a {
                    color: inherit;
                    text-decoration: none;
                }

                .shinobu-page h1,
                .shinobu-page h2,
                .shinobu-page h3,
                .shinobu-page p,
                .shinobu-page a,
                .shinobu-page span,
                .shinobu-page strong {
                    overflow-wrap: anywhere;
                }

                .shinobu-nav {
                    align-items: center;
                    backdrop-filter: blur(18px);
                    background: rgba(255, 255, 255, 0.94);
                    border-bottom: 1px solid rgba(17, 17, 17, 0.11);
                    display: grid;
                    gap: 24px;
                    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
                    left: 0;
                    padding: 12px clamp(18px, 5vw, 64px);
                    position: fixed;
                    right: 0;
                    top: 0;
                    z-index: 50;
                }

                .shinobu-brand {
                    align-items: center;
                    display: inline-flex;
                    gap: 12px;
                    max-width: 100%;
                    min-width: 0;
                }

                .shinobu-brand > span {
                    display: grid;
                    gap: 3px;
                    min-width: 0;
                }

                .shinobu-brand strong {
                    color: #050505;
                    font-size: 14px;
                    font-weight: 900;
                    line-height: 1.1;
                    max-width: 260px;
                    text-transform: uppercase;
                }

                .shinobu-brand small {
                    color: #404040;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.06em;
                    max-width: 260px;
                    text-transform: uppercase;
                }

                .shinobu-logo {
                    aspect-ratio: 1;
                    background: #050505;
                    border: 2px solid rgba(255, 255, 255, 0.86);
                    border-radius: 999px;
                    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);
                    display: block;
                    flex: 0 0 auto;
                    height: 52px;
                    object-fit: cover;
                    width: 52px;
                }

                .shinobu-logo--fallback {
                    align-items: center;
                    color: #ffffff;
                    display: grid;
                    justify-items: center;
                    line-height: 0.92;
                    padding: 9px;
                    text-align: center;
                    text-transform: uppercase;
                }

                .shinobu-logo--fallback span {
                    color: #ff4054;
                    font-size: 8px;
                    font-weight: 950;
                }

                .shinobu-logo--fallback strong {
                    color: #ffffff;
                    font-size: 9px;
                    font-weight: 950;
                }

                .shinobu-nav-links {
                    align-items: center;
                    display: flex;
                    gap: 6px;
                    justify-content: center;
                }

                .shinobu-nav-links a {
                    border-radius: 999px;
                    color: #242424;
                    font-size: 13px;
                    font-weight: 820;
                    padding: 10px 13px;
                    transition: background 180ms ease, color 180ms ease;
                }

                .shinobu-nav-links a:hover {
                    background: rgba(177, 18, 38, 0.1);
                    color: var(--primary);
                }

                .shinobu-nav-action,
                .shinobu-button-primary,
                .shinobu-button-secondary {
                    align-items: center;
                    border-radius: 999px;
                    display: inline-flex;
                    font-size: 14px;
                    font-weight: 900;
                    justify-content: center;
                    line-height: 1.15;
                    max-width: 100%;
                    min-height: 48px;
                    padding: 0 22px;
                    text-align: center;
                    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
                    white-space: normal;
                }

                .shinobu-nav-action {
                    background: #080808;
                    color: #ffffff !important;
                    justify-self: end;
                    min-width: 112px;
                }

                .shinobu-button-primary {
                    background: var(--primary);
                    border: 1px solid rgba(0, 0, 0, 0.12);
                    color: #ffffff !important;
                    box-shadow: 0 18px 38px rgba(177, 18, 38, 0.26);
                }

                .shinobu-button-secondary {
                    background: #ffffff;
                    border: 2px solid rgba(255, 255, 255, 0.95);
                    color: #080808 !important;
                    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
                }

                .shinobu-nav-action:hover,
                .shinobu-button-primary:hover,
                .shinobu-button-secondary:hover {
                    transform: translateY(-2px);
                }

                .shinobu-hero {
                    align-items: end;
                    display: grid;
                    min-height: 92svh;
                    overflow: hidden;
                    padding: 142px clamp(20px, 7vw, 96px) 70px;
                    position: relative;
                }

                .shinobu-hero-image,
                .shinobu-hero-shade {
                    inset: 0;
                    position: absolute;
                }

                .shinobu-hero-image {
                    height: 116%;
                    bottom: auto;
                    object-fit: cover;
                    object-position: center;
                    top: -8%;
                    transform-origin: center;
                    width: 100%;
                    z-index: 0;
                }

                .shinobu-hero-shade {
                    background:
                        linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.74) 44%, rgba(0, 0, 0, 0.34) 100%),
                        linear-gradient(0deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.08) 54%);
                    z-index: 1;
                }

                .shinobu-hero-content {
                    color: #ffffff;
                    max-width: 840px;
                    min-width: 0;
                    position: relative;
                    z-index: 2;
                }

                .shinobu-hero-content .shinobu-logo {
                    height: clamp(88px, 11vw, 130px);
                    margin-bottom: 22px;
                    width: clamp(88px, 11vw, 130px);
                }

                .shinobu-kicker {
                    align-items: center;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 18px;
                }

                .shinobu-kicker span {
                    background: rgba(255, 255, 255, 0.18);
                    border: 1px solid rgba(255, 255, 255, 0.42);
                    border-radius: 999px;
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: 950;
                    padding: 9px 12px;
                    text-transform: uppercase;
                }

                .shinobu-hero h1 {
                    color: #ffffff;
                    font-size: clamp(46px, 7.5vw, 96px);
                    font-weight: 950;
                    letter-spacing: 0;
                    line-height: 0.96;
                    margin: 0;
                    max-width: 940px;
                    text-transform: uppercase;
                    text-wrap: balance;
                }

                .shinobu-hero p {
                    color: rgba(255, 255, 255, 0.96);
                    font-size: clamp(18px, 1.8vw, 22px);
                    font-weight: 650;
                    line-height: 1.5;
                    margin: 24px 0 0;
                    max-width: 720px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.32);
                }

                .shinobu-hero-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-top: 34px;
                }

                .shinobu-trust {
                    background: var(--dark-panel);
                    color: #ffffff;
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                }

                .shinobu-trust article {
                    border-right: 1px solid rgba(255, 255, 255, 0.16);
                    display: grid;
                    gap: 8px;
                    min-height: 124px;
                    min-width: 0;
                    padding: 28px clamp(20px, 4vw, 52px);
                }

                .shinobu-trust article:last-child {
                    border-right: 0;
                }

                .shinobu-trust strong {
                    color: #ffffff;
                    font-size: clamp(19px, 1.8vw, 26px);
                    font-weight: 920;
                    line-height: 1.15;
                }

                .shinobu-trust span {
                    color: rgba(255, 255, 255, 0.84);
                    font-size: 14px;
                    font-weight: 760;
                }

                .shinobu-intro,
                .shinobu-section,
                .shinobu-sensei,
                .shinobu-contact {
                    padding: clamp(70px, 8vw, 118px) clamp(20px, 6vw, 86px);
                }

                .shinobu-intro {
                    align-items: stretch;
                    display: grid;
                    gap: 28px;
                    grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.72fr);
                }

                .shinobu-intro-copy {
                    align-content: center;
                    background: #ffffff;
                    border: 1px solid var(--line);
                    border-radius: 8px;
                    display: grid;
                    min-height: 430px;
                    min-width: 0;
                    padding: clamp(28px, 4.4vw, 56px);
                }

                .shinobu-section-label {
                    color: var(--primary);
                    font-size: 12px;
                    font-weight: 950;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }

                .shinobu-intro h2,
                .shinobu-section-head h2,
                .shinobu-sensei h2,
                .shinobu-contact h2 {
                    color: var(--ink);
                    font-size: clamp(32px, 4.4vw, 62px);
                    font-weight: 950;
                    letter-spacing: 0;
                    line-height: 1.02;
                    margin: 14px 0 0;
                    text-wrap: balance;
                }

                .shinobu-intro p,
                .shinobu-section-head p,
                .shinobu-sensei p,
                .shinobu-contact p {
                    color: var(--muted);
                    font-size: 17px;
                    font-weight: 540;
                    line-height: 1.68;
                    margin: 20px 0 0;
                    max-width: 720px;
                }

                .shinobu-value-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 30px;
                }

                .shinobu-value-row span {
                    background: #ffffff;
                    border: 1px solid rgba(15, 95, 150, 0.34);
                    border-radius: 999px;
                    color: #0b4a73;
                    font-size: 13px;
                    font-weight: 900;
                    padding: 10px 13px;
                }

                .shinobu-flag-panel {
                    aspect-ratio: 4 / 3;
                    border-radius: 8px;
                    min-height: 430px;
                    min-width: 0;
                    overflow: hidden;
                    position: relative;
                }

                .shinobu-flag-panel img {
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                }

                .shinobu-flag-panel div {
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.86) 100%);
                    bottom: 0;
                    color: #ffffff;
                    display: grid;
                    gap: 6px;
                    left: 0;
                    padding: 86px 28px 28px;
                    position: absolute;
                    right: 0;
                }

                .shinobu-flag-panel strong {
                    color: #ffffff;
                    font-size: 26px;
                    font-weight: 940;
                }

                .shinobu-flag-panel span {
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 760;
                }

                .shinobu-section {
                    background: var(--surface);
                }

                .shinobu-section-head {
                    max-width: 900px;
                }

                .shinobu-section-head--wide {
                    align-items: end;
                    display: grid;
                    gap: 24px;
                    grid-template-columns: minmax(0, 0.9fr) minmax(280px, 0.5fr);
                    max-width: none;
                }

                .shinobu-section-head--wide .shinobu-section-label,
                .shinobu-section-head--wide h2 {
                    grid-column: 1;
                }

                .shinobu-section-head--wide p {
                    grid-column: 2;
                    grid-row: 1 / span 2;
                    margin: 0;
                }

                .shinobu-pillar-grid {
                    display: grid;
                    gap: 18px;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    margin-top: 38px;
                }

                .shinobu-pillar {
                    background: #ffffff;
                    border: 1px solid rgba(17, 17, 17, 0.12);
                    border-radius: 8px;
                    min-height: 238px;
                    min-width: 0;
                    padding: 28px;
                    transition: border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
                    will-change: transform;
                }

                .shinobu-pillar:hover {
                    background: #ffffff;
                    border-color: rgba(177, 18, 38, 0.34);
                    box-shadow: 0 24px 58px rgba(17, 17, 17, 0.12);
                }

                .shinobu-pillar span {
                    color: var(--accent);
                    font-size: 13px;
                    font-weight: 950;
                }

                .shinobu-pillar h3 {
                    color: var(--ink);
                    font-size: clamp(22px, 2.1vw, 28px);
                    font-weight: 930;
                    line-height: 1.1;
                    margin: 42px 0 0;
                    text-wrap: balance;
                }

                .shinobu-pillar p {
                    color: var(--muted);
                    font-size: 15px;
                    font-weight: 540;
                    line-height: 1.62;
                    margin: 14px 0 0;
                }

                .shinobu-sensei {
                    align-items: center;
                    background: var(--page-bg);
                    display: grid;
                    gap: clamp(28px, 5vw, 70px);
                    grid-template-columns: minmax(320px, 0.76fr) minmax(0, 0.95fr);
                }

                .shinobu-sensei-media {
                    aspect-ratio: 4 / 4.8;
                    border-radius: 8px;
                    min-width: 0;
                    overflow: hidden;
                }

                .shinobu-sensei-copy,
                .shinobu-contact-copy {
                    min-width: 0;
                }

                .shinobu-sensei-media img {
                    height: 100%;
                    object-fit: cover;
                    transition: transform 650ms ease;
                    width: 100%;
                }

                .shinobu-sensei-media:hover img {
                    transform: scale(1.04);
                }

                .shinobu-rank {
                    color: var(--primary) !important;
                    font-weight: 900 !important;
                }

                .shinobu-text-link {
                    border-bottom: 2px solid var(--primary);
                    color: var(--primary);
                    display: inline-flex;
                    font-weight: 930;
                    margin-top: 28px;
                    padding-bottom: 6px;
                }

                .shinobu-gallery {
                    display: grid;
                    gap: 18px;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    margin-top: 42px;
                }

                .shinobu-photo-card {
                    aspect-ratio: 4 / 4.6;
                    border-radius: 8px;
                    min-width: 0;
                    overflow: hidden;
                    position: relative;
                    box-shadow: 0 12px 28px rgba(17, 17, 17, 0.1);
                    transition: box-shadow 220ms ease;
                    will-change: transform;
                }

                .shinobu-photo-card:hover {
                    box-shadow: 0 28px 70px rgba(17, 17, 17, 0.18);
                }

                .shinobu-photo-card:first-child {
                    aspect-ratio: 4 / 4.6;
                }

                .shinobu-photo-card img {
                    height: 100%;
                    object-fit: cover;
                    transition: transform 700ms ease;
                    width: 100%;
                }

                .shinobu-photo-card:hover img {
                    transform: scale(1.06);
                }

                .shinobu-photo-card div {
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.9) 100%);
                    bottom: 0;
                    color: #ffffff;
                    display: grid;
                    gap: 6px;
                    left: 0;
                    padding: 84px 22px 22px;
                    position: absolute;
                    right: 0;
                }

                .shinobu-photo-card span {
                    color: rgba(255, 255, 255, 0.86);
                    font-size: 12px;
                    font-weight: 900;
                    text-transform: uppercase;
                }

                .shinobu-photo-card strong {
                    color: #ffffff;
                    font-size: clamp(20px, 2vw, 25px);
                    font-weight: 940;
                    line-height: 1.12;
                }

                .shinobu-contact {
                    align-items: center;
                    background: var(--dark-panel);
                    color: #ffffff;
                    display: grid;
                    gap: 30px;
                    grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.55fr);
                }

                .shinobu-contact h2 {
                    color: #ffffff;
                }

                .shinobu-contact p {
                    color: rgba(255, 255, 255, 0.88);
                }

                .shinobu-contact .shinobu-section-label {
                    color: var(--gold);
                }

                .shinobu-contact .shinobu-button-primary {
                    margin-top: 30px;
                    max-width: 100%;
                }

                .shinobu-socials {
                    display: grid;
                    gap: 12px;
                }

                .shinobu-socials a {
                    align-items: center;
                    background: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.88);
                    border-radius: 8px;
                    color: #090909 !important;
                    display: flex;
                    font-size: 18px;
                    font-weight: 900;
                    gap: 14px;
                    min-height: 76px;
                    min-width: 0;
                    padding: 17px;
                    transition: background 180ms ease, transform 180ms ease;
                }

                .shinobu-socials a:hover {
                    background: #f5f5f5;
                    box-shadow: 0 14px 30px rgba(255, 255, 255, 0.08);
                }

                .shinobu-socials span {
                    align-items: center;
                    background: #ffffff;
                    border: 1px solid rgba(9, 9, 9, 0.12);
                    border-radius: 999px;
                    display: inline-flex;
                    height: 42px;
                    justify-content: center;
                    width: 42px;
                }

                .shinobu-socials img {
                    display: block;
                    height: 22px;
                    width: 22px;
                }

                .shinobu-footer {
                    align-items: center;
                    background: #060606;
                    color: rgba(255, 255, 255, 0.88);
                    display: flex;
                    gap: 18px;
                    justify-content: space-between;
                    padding: 24px clamp(20px, 6vw, 86px);
                }

                .shinobu-footer strong {
                    color: #ffffff;
                    font-weight: 900;
                }

                @media (max-width: 1040px) {
                    .shinobu-nav {
                        grid-template-columns: minmax(0, 1fr) auto;
                    }

                    .shinobu-nav-links {
                        display: none;
                    }

                    .shinobu-trust,
                    .shinobu-intro,
                    .shinobu-sensei,
                    .shinobu-contact,
                    .shinobu-section-head--wide {
                        grid-template-columns: 1fr;
                    }

                    .shinobu-section-head--wide .shinobu-section-label,
                    .shinobu-section-head--wide h2,
                    .shinobu-section-head--wide p {
                        grid-column: auto;
                        grid-row: auto;
                    }

                    .shinobu-pillar-grid {
                        grid-template-columns: 1fr;
                    }

                    .shinobu-pillar {
                        min-height: 0;
                    }

                    .shinobu-gallery {
                        grid-template-columns: 1fr 1fr;
                    }

                    .shinobu-hero {
                        min-height: 86svh;
                    }

                    .shinobu-intro-copy,
                    .shinobu-flag-panel {
                        min-height: 360px;
                    }
                }

                @media (max-width: 720px) {
                    .shinobu-nav {
                        gap: 12px;
                        grid-template-columns: minmax(0, 1fr) auto;
                        padding: 10px 14px;
                    }

                    .shinobu-brand small {
                        display: none;
                    }

                    .shinobu-brand strong {
                        font-size: 12px;
                        max-width: 160px;
                    }

                    .shinobu-logo {
                        height: 44px;
                        width: 44px;
                    }

                    .shinobu-nav-action {
                        font-size: 13px;
                        min-height: 40px;
                        min-width: 0;
                        padding: 0 13px;
                    }

                    .shinobu-hero {
                        min-height: 88svh;
                        padding: 116px 18px 46px;
                    }

                    .shinobu-hero-shade {
                        background:
                            linear-gradient(90deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.76) 72%, rgba(0, 0, 0, 0.48) 100%),
                            linear-gradient(0deg, rgba(0, 0, 0, 0.74) 0%, rgba(0, 0, 0, 0.1) 48%);
                    }

                    .shinobu-hero h1 {
                        font-size: clamp(39px, 14.5vw, 64px);
                    }

                    .shinobu-hero p {
                        font-size: 17px;
                    }

                    .shinobu-hero-actions,
                    .shinobu-footer {
                        align-items: stretch;
                        flex-direction: column;
                    }

                    .shinobu-button-primary,
                    .shinobu-button-secondary {
                        width: 100%;
                    }

                    .shinobu-trust {
                        grid-template-columns: 1fr;
                    }

                    .shinobu-trust article {
                        border-bottom: 1px solid rgba(255, 255, 255, 0.16);
                        border-right: 0;
                        min-height: 104px;
                    }

                    .shinobu-intro,
                    .shinobu-section,
                    .shinobu-sensei,
                    .shinobu-contact {
                        padding: 60px 18px;
                    }

                    .shinobu-intro-copy,
                    .shinobu-flag-panel {
                        min-height: 0;
                    }

                    .shinobu-flag-panel {
                        aspect-ratio: 1 / 1.05;
                    }

                    .shinobu-gallery {
                        grid-template-columns: 1fr;
                    }

                    .shinobu-photo-card,
                    .shinobu-photo-card:first-child {
                        aspect-ratio: 1 / 1.05;
                    }

                    .shinobu-contact .shinobu-button-primary {
                        font-size: 13px;
                        white-space: normal;
                    }
                }

                @media (max-width: 520px) {
                    .shinobu-brand {
                        gap: 9px;
                    }

                    .shinobu-brand strong {
                        max-width: 118px;
                    }

                    .shinobu-logo {
                        height: 40px;
                        width: 40px;
                    }

                    .shinobu-nav-action {
                        font-size: 12px;
                        min-height: 38px;
                        padding: 0 11px;
                    }

                    .shinobu-hero-content .shinobu-logo {
                        height: 76px;
                        width: 76px;
                    }

                    .shinobu-kicker span {
                        font-size: 11px;
                        padding: 8px 10px;
                    }

                    .shinobu-hero h1 {
                        font-size: clamp(36px, 13.5vw, 56px);
                    }

                    .shinobu-intro h2,
                    .shinobu-section-head h2,
                    .shinobu-sensei h2,
                    .shinobu-contact h2 {
                        font-size: clamp(30px, 10vw, 44px);
                    }

                    .shinobu-intro p,
                    .shinobu-section-head p,
                    .shinobu-sensei p,
                    .shinobu-contact p {
                        font-size: 16px;
                    }

                    .shinobu-intro-copy,
                    .shinobu-pillar {
                        padding: 24px;
                    }

                    .shinobu-pillar h3 {
                        margin-top: 30px;
                    }

                    .shinobu-socials a {
                        min-height: 66px;
                        padding: 14px;
                    }

                    .shinobu-socials span {
                        height: 38px;
                        width: 38px;
                    }

                    .shinobu-socials img {
                        height: 20px;
                        width: 20px;
                    }
                }

                @media (max-width: 380px) {
                    .shinobu-nav {
                        padding: 8px 10px;
                    }

                    .shinobu-brand > span {
                        display: none;
                    }

                    .shinobu-nav-action {
                        font-size: 12px;
                        min-height: 36px;
                    }

                    .shinobu-hero {
                        padding-left: 14px;
                        padding-right: 14px;
                    }

                    .shinobu-hero h1 {
                        font-size: clamp(34px, 13vw, 46px);
                    }

                    .shinobu-intro,
                    .shinobu-section,
                    .shinobu-sensei,
                    .shinobu-contact {
                        padding-left: 14px;
                        padding-right: 14px;
                    }

                    .shinobu-button-primary,
                    .shinobu-button-secondary {
                        padding-left: 14px;
                        padding-right: 14px;
                    }
                }
            `}</style>
        </main>
    )
}

