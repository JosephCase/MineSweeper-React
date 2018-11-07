import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setPlayDimensions } from '../../actions';
import StyledGameSpace from './StyledGameSpace';
import PropTypes from 'prop-types';

class GameSpace extends PureComponent {
    constructor(props) {
        super(props);
        this.elementRef = React.createRef();
    }

    setPlayDimensions = () => {
        const { setPlayDimensions } = this.props;
        const width = this.elementRef.current.offsetWidth;
        const height = this.elementRef.current.offsetHeight;
        setPlayDimensions({width, height});
    }

    componentDidMount() {
        window.onresize = this.setPlayDimensions;
        this.setPlayDimensions();
    }
    componentWillUnmount() {
        window.onresize = null;
    }

    render() {
        return (
            <StyledGameSpace ref={this.elementRef} >
                {this.props.children}
            </StyledGameSpace>
        )
    }
}

GameSpace.defaultProps = {
    setPlayDimensions: () => {}
}

GameSpace.propTypes = {
    setPlayDimensions: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
    setPlayDimensions: dimensions => dispatch(setPlayDimensions(dimensions))
})

export default connect(null, mapDispatchToProps)(GameSpace);