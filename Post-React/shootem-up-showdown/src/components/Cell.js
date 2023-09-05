import { Hexagon, Text } from 'react-hexgrid'

const Cell = ({ q, r, i }) => {

    return (
        <Hexagon key={i} q={q} r={r}>
            <Text>
                {i}
            </Text>
        </Hexagon>
    )
}
export default Cell;