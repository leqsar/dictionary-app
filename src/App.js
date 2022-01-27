import './App.css';
import {fetchWord,  inputWord} from './actions.js'
import { connect } from 'react-redux'
import {Routes, Route, Navigate, useParams} from 'react-router-dom'
import SearchField from './components/SearchField.js'

function App(props) {
  const params = useParams();
  if(params.word && !props.isFetching) {
    props.dispatch(fetchWord(params.word));
  }

  function handleChange(event) {
    props.dispatch(inputWord(event.target.value));
  }

  function handleClick() {
    props.dispatch(fetchWord(props.choosenWord));
  }

  function selectCurrentComponent(){
    if(props.isFetching) {
      return (
        <div className='loader'></div>
      )
    } else if ((props.wordInfo === null) || (Object.keys(props.wordInfo).length !== 0)) {
      return (
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/result-page" />}
          />
        </Routes>
      )
    } else {
      return (
        <SearchField
          handleChange={handleChange}
          handleClick={handleClick}
        />
      )
    }
  }

  return (
    <div className="App">
        {selectCurrentComponent()}
    </div>
  );
}

function mapStateToProps(state) {
  const {choosenWord, word} = state;
  const {isFetching, wordInfo} = word;

  return {
    choosenWord,
    isFetching,
    wordInfo
  }
}

export default connect (mapStateToProps)(App)
