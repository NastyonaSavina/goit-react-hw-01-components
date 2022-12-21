import PropTypes from 'prop-types';

import styles from "../TransactionHistory/TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    
    
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr className={styles.table}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={styles.item}>
                {items.map(item => (
                    <tr key={item.id} className={styles.tbody}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
        ))}
            </tbody>
           
        </table>
    );
            
};


TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
