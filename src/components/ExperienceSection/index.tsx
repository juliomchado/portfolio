/* eslint-disable @next/next/no-img-element */

import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface ExperienceProps {
    date: string;
    enterpriseName: string;
    enterpriseLogo: string;
    position: string;
    description: string;
    technologies: string;
}


interface CardProps {
    children: ReactNode;
    initialDate: string;
    finalDate: string;
    enterpriseName: string;
    enterpriseLogo: string;
    position: string;
    experiences: ExperienceProps[];
}


export function ExperienceSection({
    children,
    initialDate,
    finalDate,
    enterpriseName,
    enterpriseLogo,
    // position,
    // experiences
}: CardProps) {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <p className={styles.card_years}>2021 <span>Jun - Agora</span></p>
                <figure>
                    <img src="/images/enterprises/adx3.png" alt="Nome da empresa" />
                </figure>
                <b>Adx3</b>
                <p className={styles.card_position}>Fullstack Developer</p>
            </div>
            <div className={styles.separator_container}>
                <hr className={styles.separator} />
            </div>
            <div className={styles.experiences}>
                {children}
            </div>
        </section>
    );
}