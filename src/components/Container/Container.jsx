import PropTypes from 'prop-types';
import styles from "../Container/Container.module.css"


function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.array,
};

export default Container;