
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface CardSectionProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
}

export function CardsSection({ title, subtitle, children }: CardSectionProps) {
    return (
        <section className={styles.container}>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            {children}
        </section>
    );
}