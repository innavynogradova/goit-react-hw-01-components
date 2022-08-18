import styled from "styled-components";

export const TableHead = styled.thead`
    background-color: ${p => p.theme.colors.bgDescription};
    color: ${p => p.theme.colors.white};
    height: ${p => `${p.theme.sizes[1]}px`};
`;

export const TableRow = styled.tr`
    background-color: ${p => p.theme.colors.bgAvatar};
    color: ${p => p.theme.colors.text};
    height: ${p => `${p.theme.sizes[1]}px`};
`;