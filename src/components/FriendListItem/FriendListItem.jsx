import PropTypes from "prop-types";
import { Friend, Status, FriendAvatar } from "./FriendListItem.styled";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <Friend>
            <Status isOnline={isOnline}></Status>
            <FriendAvatar src={avatar} alt="User avatar" />
            <p class="name">{name}</p>
        </Friend>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}