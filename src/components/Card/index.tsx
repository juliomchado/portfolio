/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.scss';

interface CardProps {
    date: string;
    enterpriseName: string;
    enterpriseLogo: string;
    position: string;
    description: string;
    technologies: string;
}

export function Card({
    // date,
    // enterpriseName,
    // enterpriseLogo,
    // position,
    // description,
    // technologies
}: CardProps) {
    return (
        <div className={styles.container}>
            <p className={styles.card_years}>2021 <span>Jun - Agora</span></p>
            <figure>
                <img src="/images/enterprises/adx3.png" alt="Nome da empresa" />
            </figure>
            <b>Adx3</b>
            <p className={styles.card_position}>Fullstack Developer</p>
            <p className={styles.card_descrition}>Na x3 faço diversas funções e acabei colocando em prova alguns outros conhecimentos como Web Design, Marketing Digital com tráfego pago entre outros, e claro o desenvolvimento web em sua maioria React, Nextjs e Node, usei também CMS como Prismic, Firebase Firestore db, Firebase Cloud Storage entre outros, desenvolvi alguns sites estáticos e até mesmo um supermercado, utilizando a tecnologia e a versão lts mais recente das tecnologias utilizadas.</p>
            <p className={styles.card_technologies}><strong>Tecnologias:</strong> Nextjs, Sass, SQL, PostgresSQL Styled-Components Firebase Storage, Firebase Firestore</p>
        </div>
    );
}