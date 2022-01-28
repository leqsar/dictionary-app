import { connect } from 'react-redux'
import BackButton from './BackButton.js'

function NotFound(props) {
  return (
    <div className='not_found_page'>
      <p>There is no such word as {props.choosenWord}</p>
      <BackButton />
    </div>
  )
}

function mapStateToProps(state) {
  const choosenWord = state.choosenWord;
  return {
    choosenWord
  }
}

export default  connect(mapStateToProps)(NotFound)
