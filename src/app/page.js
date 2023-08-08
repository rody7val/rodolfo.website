import Image from 'next/image'
import styles from './page.module.css'
// client module
import Wallet from './Wallet.js'
// "db"
import data from './data.js'

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
        {data.links.map((item, index) => (
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
        <div className={styles.card}>
          <Wallet type={data.ars}/>
        </div>

        <div className={styles.card}>
          <Wallet type={data.btc}/>
        </div>
      </div>
    </main>
  )
}
