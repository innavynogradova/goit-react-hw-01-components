import { Box } from "components/Box";
import PropTypes from "prop-types";
import { UserProfile, Description, Avatar, Name, Tag, Location, StatsItem, Label, Quantity } from "./Profile.styled";

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
    <UserProfile>
        <Description>
            <Avatar
                src={avatar}
                alt="User avatar"
                class="avatar"
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        <Box as='ul' bg='bgStats' display='flex' width='100%' ml='auto' mr='auto'>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatsItem>
        </Box>
    </UserProfile>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}