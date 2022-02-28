/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import { formatDateForCardUtils } from '../../utils/formatDateForCardsUtils';
import styles from './styles.module.scss';

interface CardProps {
    date: string;
    enterpriseName: string;
    enterpriseLogo: string;
    position: string;
    description: string;
    technologies: string;
}

export function CardExperience({
    date,
    enterpriseName,
    enterpriseLogo,
    position,
    description,
    technologies
}: CardProps) {
    const [initialProjectYear, setInitialProjectYear] = useState('');
    const [finalProjectYear, setFinalProjectYear] = useState('');
    const [months, setMonths] = useState('');

    useEffect(() => {
        const {
            finalProjectYear,
            initialProjectYear,
            months
        } = formatDateForCardUtils(date);


        setInitialProjectYear(initialProjectYear);
        setFinalProjectYear(finalProjectYear);
        setMonths(months)
    }, [date]);

    return (
        <div className={styles.container}>
            <p className={styles.card_years}>{initialProjectYear} <span>{months}</span> {finalProjectYear && finalProjectYear}</p>
            <figure>
                <img src={enterpriseLogo} alt={enterpriseName} />
            </figure>
            <b>{enterpriseName}</b>
            <p className={styles.card_position}>{position}</p>
            <p className={styles.card_descrition}>{description}</p>
            <p className={styles.card_technologies}><strong>Tecnologias:</strong> {technologies}</p>
        </div>
    );
}