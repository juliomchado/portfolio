/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import styles from './styles.module.scss';
import Linkedin from '../../public/images/contacts/linkedin.svg';
import Github from '../../public/images/contacts/github.svg';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header_container}>
        <h1>Fullstack Developer</h1>
        <p>Júlio C. Alves Machado</p>
      </header>
      <main className={styles.main_container}>
        <hr className={styles.separator} />
        <p className={styles.description}>Sou apaixonado pela tecnologia, desde criança estudando e resolvendo os problemas das pessoas, todos os dias estudando para entregar o melhor produto e resultado para as pessoas usando o poder e o conforto que só a tecnologia pode trazer para a vida das pessoas.</p>
        <span className={styles.contacts_container}>
          <Link href="/">
            <a>
              <Github />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Linkedin />
            </a>
          </Link>
        </span>
      </main>
    </>
  )
}

export default Home
