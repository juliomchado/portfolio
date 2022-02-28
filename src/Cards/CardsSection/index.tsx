
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface CardSectionProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    isCertificateSection?: boolean;
}
 
export function CardsSection({ isCertificateSection = false, title, subtitle, children }: CardSectionProps) {
    return (
        <section className={styles.container}>
            <h2 className={isCertificateSection ? styles.title_certificate : styles.title}>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            {children}
        </section>
    );
}