'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Page(props) {
  const [copied, setCopied] = useState(null);
  const handleCopied = (event) => {
    navigator
    .clipboard
    .writeText(props.type.code)
    .then(() => setCopied(props.type.code))
    .catch(err => alert(err))
    .finally(() =>
      setTimeout(() => { setCopied(null) }, 5000)
    );
  };

  return (
    <div>
      <b>{props.type.title}</b>

      <p className={styles.ellipsis}>
        <code>{props.type.code}</code>
      </p>

      {copied === null && (
        <button onClick={handleCopied}>copiar</button>
      )}

      {copied !== null && "✅ "}
    </div>
  );
}