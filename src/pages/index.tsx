/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'

import styles from './styles.module.scss';
import Linkedin from '../../public/images/contacts/linkedin.svg';
import Github from '../../public/images/contacts/github.svg';
import Link from 'next/link';

import { ExperienceCardSection } from '../Cards/ExperienceCardSection';
import { CardsSection } from '../Cards/CardsSection';
import { CardExperience } from '../Cards/CardExperience';
import { CardUniversity } from '../Cards/CardUniversity';

const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header_container}>
        <h1>Fullstack Developer</h1>
        <p>Júlio C. Alves Machado</p>
      </header>
      <main className={styles.main_container}>
        <hr className={styles.separator} />
        <p className={styles.description}>
          Sou apaixonado pela tecnologia,
          desde criança estudando e resolvendo os problemas das pessoas,
          todos os dias estudando para entregar o melhor produto e
          resultado para as pessoas usando o poder e o conforto que só
          a tecnologia pode trazer para a vida das pessoas.
        </p>
        <nav className={styles.contacts_container}>
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
        </nav>
        <hr className={styles.separator} />
        <CardsSection title="Experiências">
          <CardExperience
            date="2020 Dez - Agora"
            enterpriseName="Adx3"
            position='Fullstack Developer'
            enterpriseLogo='/images/enterprises/adx3.png'
            description="Na x3 faço diversas funções e acabei colocando em prova alguns outros conhecimentos como Web Design, Marketing Digital com tráfego pago entre outros, e claro o desenvolvimento web em sua maioria React, Nextjs e Node, usei também CMS como Prismic, Firebase Firestore db, Firebase Cloud Storage entre outros, desenvolvi alguns sites estáticos e até mesmo um supermercado, utilizando a tecnologia e a versão lts mais recente das tecnologias utilizadas."
            technologies='Nextjs, Sass, SQL, PostgresSQL Styled-Components Firebase Storage, Firebase Firestore'
          />
          <ExperienceCardSection
            date="2021 Set - Mai 2021"
            enterpriseName="Aubay"
            position='Desenvolvedor Fullstack'
            enterpriseLogo='/images/enterprises/aubay.png'

          >
            <CardExperience
              date="2020 Dez - Mai 2021"
              enterpriseName="Oracle Retail"
              position='Fullstack Developer'
              enterpriseLogo='/images/enterprises/oracle.png'
              description="Não tive todo o acesso ao escopo do projeto, porque a Oracle tem uma grande preocupação com a segurança, mas o projeto é para o painel de controle das empresas, como um grande mercado. Neste projeto, eu tive como função criar novas páginas de frontend, fazer páginas de manutenção e fazer testes unitários para todas as páginas."
              technologies='Javascript, JET, QUnit, Knockout'
            />
            <CardExperience
              date="2020 Set - Dez 2020"
              enterpriseName="Oracle Retail"
              position='Frontend Developer'
              enterpriseLogo='/images/enterprises/oracle.png'
              description="Não tive todo o acesso ao escopo do projeto, porque a Oracle tem uma grande preocupação com a segurança, mas o projeto é para backoffice empresarial, como um backoffice de mercado. Neste projeto eu tive como função criar novas páginas de front-end, fazer páginas de manutenção, criar novos pontos finais e melhorar o desempenho do backend"
              technologies='Javascript, JET, Java with Springboot, QUnit, Knockout'
            />
          </ExperienceCardSection>
        </CardsSection>
        <CardsSection
          title="Estudos e Conquistas"
          subtitle="Faculdade"
        >
          <CardUniversity 
            initialProjectYear='2019'
            finalProjectYear='2020'
            title='Bacharelado Ciências da Computação'
            universityName='Faculdade Pitágoras'          
          />
          <CardUniversity 
            initialProjectYear='2019'
            finalProjectYear='2020'
            title='2 º lugar olimpíada de programação (C/C++) '
            universityName='Faculdade Pitágoras'          
          />
        </CardsSection>
        <CardsSection isCertificateSection title='Certificados/Certificações'>

        </CardsSection>
      </main>
    </>
  )
}

export default Home
