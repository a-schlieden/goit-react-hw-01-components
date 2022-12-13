import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={style.FriendList}>
      <ul className={style.itemList}>
        {friends.map(friend => (
          <li key={friend.id} className={style.item}>
            <span
              className={`${style.status} ${
                friend.isOnline ? style.online : style.offline
              }`}
            ></span>
            <img
              className={style.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
