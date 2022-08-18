import { Box } from "components/Box";
import { TableHead, TableRow } from "./TransactionHistory.styled";
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
    return (
        <Box as='table' mx='auto' width='50%' py={16}>
            <TableHead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
            </TableHead>
            <tbody>
                {items.map((item) => {
                    return (
                    <TableRow key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </TableRow>
                    )
                })}
            </tbody>
        </Box>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ),
}