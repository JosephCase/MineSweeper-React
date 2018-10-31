import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSize } from '../../actions';

const SizeControl = (props) => {
    const { size, setSize } = props;
    return (
        <div>
            <p>{size}</p>
            <button onClick={() => setSize(size - 1)}>-</button>
            <button onClick={() => setSize(size + 1)}>+</button>
        </div>
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