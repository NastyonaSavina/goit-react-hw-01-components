import PropTypes from 'prop-types';

import styles from "../Statistics/Statistics.module.css";


function GetRandomColor() {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

    }


export const Statistics = ({ title, stats }) => {

  
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            
            <ul className={styles.statlist}>
                {stats.map(({ id, label, percentage }) => (
                    <li
                        key={id}
                        style={{
                            backgroundColor: GetRandomColor(),
                        }}
                        className={styles.item}
                    >
                        <span className={styles.label}>{label}</span>
                        <span className="percentage">{percentage}</span>
                    </li>
                ))}
            </ul>
            
        </section>

    );   
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,

};