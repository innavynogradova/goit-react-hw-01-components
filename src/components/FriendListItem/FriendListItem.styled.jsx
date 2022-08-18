import styled from "styled-components";

export const Friend = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: ${p => `${p.theme.space[2]}px`};
    margin-bottom: ${p => `${p.theme.space[2]}px`};
    padding: ${p => `${p.theme.space[4]}px`} ${p => `${p.theme.space[6]}px`};
    gap: ${p => `${p.theme.space[5]}px`};
    background-color: ${p => p.theme.colors.bgAvatar};
    border-radius:  ${p => p.theme.radii.sm};
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .25);
`;

export const Status = styled.span`
    width: ${p => `${p.theme.space[4]}px`};
    height: ${p => `${p.theme.space[4]}px`};
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => (p.isOnline? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
    width: 48px;
`;

export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.text};
`;