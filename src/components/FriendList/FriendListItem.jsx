import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from "../FriendList/FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline })=> {
    return <li className={styles.item}>
        <span className={classNames(styles.status, isOnline ? styles.statusOn : styles.statusOff)}>  </span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
};
   

FriendListItem.protoTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,

}

