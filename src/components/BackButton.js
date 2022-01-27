import { useNavigate } from 'react-router-dom';
import arrowLogo from './arrow-logo.png'
import { connect } from 'react-redux'
import {fetchWord} from '../actions.js'

function BackButton(props) {
  const navigate = useNavigate();

  function handleClick() {
    props.dispatch(fetchWord(true));
    navigate('/');
  }

  return (
      <button onClick={handleClick} className="back_button">
        <img src={arrowLogo}/>
      </button>
  );
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect (mapStateToProps)(BackButton)
