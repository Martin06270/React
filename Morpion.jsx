class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    };

    renderSquare(i) {
        return <Square value={i} />;
    };