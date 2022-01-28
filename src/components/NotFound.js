import { connect } from 'react-redux'

function NotFound(props) {
  return (
    <div>
      <p>There is no such word as {props.choosenWord}</p>
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
