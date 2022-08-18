import styled from "styled-components";

export const UserProfile = styled.div`
    margin-top: ${p => `${p.theme.space[4]}px`};
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .25);
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${p => `${p.theme.space[4]}px`};
    padding-top: ${p => `${p.theme.space[5]}px`};
    padding-bottom: ${p => `${p.theme.space[5]}px`};
    background-color: ${p => p.theme.colors.bgDescription};
    
`;

export const Avatar = styled.img`
    width: ${p => `${p.theme.sizes[4]}px`};
    background-color: ${p => p.theme.colors.bgAvatar};
    border-radius: ${p => p.theme.radii.round};
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .25);
`;

export const Name = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};

`;

export const Tag = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
`;

export const Location = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: ${p => `${p.theme.space[3]}px`};
    border: 1px solid ${p => p.theme.colors.black};
    border-radius:  ${p => p.theme.radii.none};
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .25);
`;

export const Label = styled.span`
    color: ${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
`;

export const Quantity = styled.span`
    color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
`;