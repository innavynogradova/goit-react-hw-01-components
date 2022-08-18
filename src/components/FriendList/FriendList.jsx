import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import { Box } from "components/Box";

export const FriendList = ({friends}) => {
    return (
        <Box as='ul' display='inline-block'>
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
        </Box>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}