import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSize } from '../../redux/actions';
import Button from '../StyledCompontents/Button';
import { StyledSizeControl } from './styledComponents';
import config from '../../config';
import { getSize, getPlayDimensions } from '../../redux/selectors';

const { cellSize } = config;

export const SizeControl = (props) => {
    const { size, setSize, playDimensions } = props;
    const enableIncrease = checkEnableIncrease(size, playDimensions);
    return (
        <StyledSizeControl data-cy="SizeControl">
            <Button
                onClick={() => setSize(size - 1)}
                disabled={size < 2}
            >-</Button>
            <p>{size}</p>
            <Button
                onClick={() => setSize(size + 1)}
                disabled={!enableIncrease}
            >+</Button>
        </StyledSizeControl>
    )
}

const checkEnableIncrease = (size, dimensions) => {
    const nextDimensionUp = (size + 1) * cellSize;
    return dimensions.width > nextDimensionUp && dimensions.height > nextDimensionUp;
}

SizeControl.defaultProps = {
    size: 10,
    setSize: () => { }
}

SizeControl.propTypes = {
    size: PropTypes.number,
    setSize: PropTypes.func
}

const mapStateToProps = (state) => ({
    size: getSize(state),
    playDimensions: getPlayDimensions(state)
})

const mapDispatchToProps = (dispatch) => ({
    setSize: (size) => dispatch(setSize(size))
})

export default connect(mapStateToProps, mapDispatchToProps)(SizeControl);