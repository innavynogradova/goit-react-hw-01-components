import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from "prop-types";

export const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map((friend) => {
                return (
                    <FriendListItem 
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}    
                    />
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}