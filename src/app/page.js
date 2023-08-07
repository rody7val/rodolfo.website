import Image from 'next/image'
import styles from './page.module.css'

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
        <a
          href="mailto:ruthwolf@protonmail.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            ✉️ Email <span>-&gt;</span>
          </h2>
          <p>ruthwolf@protonmail.com</p>
        </a>

        <a
          href="tel:+542923699363"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            📱Teléfono <span>-&gt;</span>
          </h2>
          <p>2923699363</p>
        </a>

        <a
          href="https://instagram.com/r.valguarnera"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          <Image
              src="/instagram.png"
              alt="ig"
              width={25}
              height={25}
              priority
            /> Instagram <span>-&gt;</span>
          </h2>
          <p>
            @r.valguarnera
          </p>
        </a>

        <a
          href="https://linkedin.com/in/rvalguarnera"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          <Image
              src="/Linkedin.png"
              alt="in"
              width={25}
              height={25}
              priority
            /> Linkedin <span>-&gt;</span>
          </h2>
          <p>
            @rvalguarnera
          </p>
        </a>

        <a
          href="https://github.com/rody7val"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          <Image
              src="/github.webp"
              alt="gh"
              className={styles.imgCard}
              width={38}
              height={30}
              priority
            /> GitHub <span>-&gt;</span>
          </h2>
          <p>@rody7val</p>
        </a>

        <a
          href="https://github.com/agora-informatica"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            🔥 Ágora Informática <span>-&gt;</span>
          </h2>
          <p>
            @agora-informatica
          </p>
        </a>

        <a
          href="https://portfolio.rodolfo.website"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            💼 Portfolio <span>-&gt;</span>
          </h2>
          <p>
            Demostraciones
          </p>
        </a>

        <a
          href="/cv.pdf"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            📄 CV <span>-&gt;</span>
          </h2>
          <p>
            Hoja de vida
          </p>
        </a>
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
            <code>0000139300000000426879</code>
          </p>
        </a>
        <br/>
        <a
          className={styles.card}
        >
          <p>
            Bitcoin (BTC): <br/>
            <code>bc1quwg7nkawp5w4fem0pxeqyy4msurqvn5mmcunvat7yxzdqgjxhfesp7ld4v</code>
          </p>
        </a>
      </div>
    </main>
  )
}
