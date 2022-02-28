/* eslint-disable @next/next/no-img-element */

import { ReactNode, useEffect, useState } from 'react';
import { formatDateForCardUtils } from '../../utils/formatDateForCardsUtils';
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
    date: string;
    enterpriseName: string;
    enterpriseLogo: string;
    position: string;
}


export function ExperienceCardSection({
    children,
    date,
    enterpriseName,
    enterpriseLogo,
    position
}: CardProps) {

    const [initialProjectYear, setInitialProjectYear] = useState('');
    const [finalProjectYear, setFinalProjectYear] = useState('');
    const [months, setMonths] = useState('');


    useEffect(() => {

        const { finalProjectYear, initialProjectYear, months } = formatDateForCardUtils(date);

        setFinalProjectYear(finalProjectYear);
        setInitialProjectYear(initialProjectYear);
        setMonths(months)
    }, [date]);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <p className={styles.card_years}>
                    {initialProjectYear} <span>{months}</span> {finalProjectYear && finalProjectYear}
                    </p>
                <figure>
                    <img src={enterpriseLogo} alt={enterpriseName} />
                </figure>
                <b>{enterpriseName}</b>
                <p className={styles.card_position}>{position}</p>
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