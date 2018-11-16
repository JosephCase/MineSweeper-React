import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPlayDimensions } from '../../redux/actions';
import StyledGameSpace from './StyledGameSpace';
import PropTypes from 'prop-types';

// export class GameSpace extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.elementRef = React.createRef();
//     }

//     setPlayDimensions = () => {
//         const { setPlayDimensions } = this.props;
//         const width = this.elementRef.current.offsetWidth;
//         const height = this.elementRef.current.offsetHeight;
//         setPlayDimensions({width, height});
//     }

//     componentDidMount() {
//         window.onresize = this.setPlayDimensions;
//         this.setPlayDimensions();
//     }
//     componentWillUnmount() {
//         window.onresize = null;
//     }

//     render() {
//         return (
//             <StyledGameSpace ref={this.elementRef} >
//                 {this.props.children}
//             </StyledGameSpace>
//         )
//     }
// }

const GameSpace = ({ setPlayDimensions, children }) => {
    
    const elemRef = React.createRef();

    useSetPlayDimensions(elemRef, setPlayDimensions);

    return (
        <StyledGameSpace ref={elemRef} >
            {children}
        </StyledGameSpace>
    )

}

const useSetPlayDimensions = (elemRef, setPlayDimensions) => {
    const handleResize = () => {
        const width = elemRef.current.offsetWidth;
        const height = elemRef.current.offsetHeight;
        setPlayDimensions({ width, height });
    }

    useEffect(() => {
        window.onresize = handleResize;
        handleResize();
        return () => {
            window.onresize = null;
        }
    }, [elemRef, setPlayDimensions])
}

GameSpace.defaultProps = {
    setPlayDimensions: () => { }
}

GameSpace.propTypes = {
    setPlayDimensions: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
    setPlayDimensions: dimensions => dispatch(setPlayDimensions(dimensions))
})

export default connect(null, mapDispatchToProps)(GameSpace);