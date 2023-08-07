import Image from 'next/image'
import styles from './page.module.css'

const links = [{
  href: "mailto:ruthwolf@protonmail.com",
  title: "✉️ Email",
  desc: "ruthwolf@protonmail.com",
  img: null,
},{
  href: "tel:+542923699363",
  title: "📱Teléfono",
  desc: "+54 2923 699363",
  img: null,
},{
  href: "https://portfolio.rodolfo.website",
  title: "💼 Portfolio",
  desc: "Demostraciones",
  img: null,
},{
  href: "/cv.pdf",
  title: "📄 CV",
  desc: "Hoja de vida",
  img: null,
},{
  href: "https://github.com/agora-informatica",
  title: "🔥 Ágora Informática",
  desc: "@agora-informatica",
  img: null,
},{
  href: "https://github.com/rody7val",
  title: " Github",
  desc: "@rody7val",
  img: {
    src: "/_github.png",
    alt: "gh",
    width: 28,
    height: 28,
  },
},{
  href: "https://instagram.com/r.valguarnera",
  title: " Instagram",
  desc: "@r.valguarnera",
  img: {
    src: "/instagram.png",
    alt: "ig",
    width: 25,
    height: 25,
  },
},{
  href: "https://linkedin.com/in/rvalguarnera",
  title: " Linkedin",
  desc: "@rvalguarnera",
  img: {
    src: "/Linkedin.png",
    alt: "in",
    width: 25,
    height: 25,
  },
},]

const ARS = "0000139300000000426879"
const BTC = "bc1quwg7nkawp5w4fem0pxeqyy4msurqvn5mmcunvat7yxzdqgjxhfesp7ld4v"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          🇦🇷 Rodolfo Valguarnera
        </p>
        <div>
            <Image
              src="/mi.jpg"
              alt="Mi Logo"
              className={styles.miLogo}
              width={70}
              height={70}
              priority
            />
        </div>
      </div>

      <div className={styles.center}>
        <p>Estamos en contacto</p>
      </div> 

      <div className={styles.grid}>
        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {item.img && <Image
                src={item.img.src}
                alt={item.img.alt}
                width={item.img.width}
                height={item.img.height}
                priority
              />}
              {item.title} <span>-&gt;</span>
            </h2>
            <p>{item.desc}</p>
          </a>
        ))}

      </div>

      <div className={styles.center}>
        <h2>💳 Wallets</h2>
      </div> 

      <div className={styles.grid}>
        <a
          className={styles.card}
        >
          <p>
            CVU (ARS): <br/>
            <code>{ARS}</code>
          </p>
        </a>
        <br/>
        <a
          className={styles.card}
        >
          <p>
            Bitcoin (BTC): <br/>
            <code>{BTC}</code>
          </p>
        </a>
      </div>
    </main>
  )
}
