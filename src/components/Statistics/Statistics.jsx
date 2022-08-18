import PropTypes from "prop-types";
import { Box } from "components/Box";
import { UploadStatistics, Stat, Title, Label, Percentages } from "./Statistics.styled";

export const Statistics = ({title, stats}) => {
    return (
        <UploadStatistics>
            {title && <Title>{title}</Title>}
            <Box as='ul' display='flex' align-items='center'>
                {stats.map(stat => {
                    return (
                    <Stat key={stat.id}>
                        <Label>{stat.label}</Label>
                        <Percentages>{stat.percentage}%</Percentages>
                    </Stat>
                    );
                })}
            </Box>
        </UploadStatistics>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ) 
}