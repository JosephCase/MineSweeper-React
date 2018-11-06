import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSize } from '../../actions';
import Button from '../StyledCompontents/Button';
import { StyledSizeControl } from './styledComponents';

const SizeControl = (props) => {
    const { size, setSize } = props;
    return (
        <StyledSizeControl>
            <Button onClick={() => setSize(size - 1)}>-</Button>
            <p>{size}</p>
            <Button onClick={() => setSize(size + 1)}>+</Button>
        </StyledSizeControl>
    )
}

SizeControl.defaultProps = {
    size: 10,
    setSize: () => {}
}

SizeControl.propTypes = {
    size: PropTypes.number,
    setSize: PropTypes.func
}

const mapStateToProps = ({ settings }) => ({
    size: settings.size
})

const mapDispatchToProps = (dispatch) => ({
    setSize: (size) => dispatch(setSize(size))
})

export default connect(mapStateToProps, mapDispatchToProps)(SizeControl);