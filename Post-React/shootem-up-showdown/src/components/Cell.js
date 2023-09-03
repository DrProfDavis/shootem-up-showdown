import { Hexagon, Text } from 'react-hexgrid'

const Cell = ({ q, r }) => {
    return (
        <Hexagon key={`${q}:${r}`} q={q} r={r}>
            <Text>
                {`${q}:${r}`}
            </Text>
        </Hexagon>
    )
}
export default Cell