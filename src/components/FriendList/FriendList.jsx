import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import { Box } from "components/Box";

export const FriendList = ({friends}) => {
    return (
        <Box as='ul' display='inline-block'>
            {friends.map(({id, avatar, name, isOnline}) => {
                return (
                    <FriendListItem 
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}    
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