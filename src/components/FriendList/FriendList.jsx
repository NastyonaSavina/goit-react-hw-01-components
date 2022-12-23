import PropTypes from 'prop-types';


import styles from "../FriendList/FriendList.module.css";
import {FriendListItem} from '../FriendList/FriendListItem';

export const FriendList = ({ friends }) => {


    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
               <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
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