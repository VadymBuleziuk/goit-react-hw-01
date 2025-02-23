import FriendListItem from "../FrienListItem/FriendListItem";
import friends from "../friends.json";
import css from "./FriendLIst.module.css";

export default function FriendList() {
  return (
    <>
      <p>Task 2</p>
      <ul className={css.container}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem allFriends={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
