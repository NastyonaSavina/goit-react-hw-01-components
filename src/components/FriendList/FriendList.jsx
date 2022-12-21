import PropTypes from 'prop-types';
import classNames from 'classnames';


import styles from "../FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {


    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li className={styles.item} key={id}>
                <span className={classNames(styles.status,isOnline ? styles.statusOn :styles.statusOff)}>  </span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{name}</p>
                </li>
            ))}
        </ul>
    )


};

FriendList.protoTypes = {
    friends:PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,

        }).isRequired,
}