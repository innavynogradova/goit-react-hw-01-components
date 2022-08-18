import styled from "styled-components";

export const UploadStatistics = styled.section`
    margin-top: ${p => `${p.theme.space[4]}px`};
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    background-color: ${p => p.theme.colors.bgDescription};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .25);
`;

export const Stat = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: ${p => `${p.theme.space[4]}px`} ${p => `${p.theme.space[2]}px`};
    background-color: ${p => p.theme.colors.bgStats};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
    border-radius:  ${p => p.theme.radii.none};
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .25);

`;

export const Title = styled.h2`
    padding: ${p => `${p.theme.space[4]}px`};
`;

export const Label = styled.span`
    color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
`;

export const Percentages = styled.span`
    color: ${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
`;
