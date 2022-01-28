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
    console.log(props.error);
    let wordInfoIsEmpty = false;
    if (props.wordInfo === undefined) {
      wordInfoIsEmpty = true;
    } else {
      if(Object.keys(props.wordInfo).length === 0) {
        wordInfoIsEmpty = true;
      }
    }
    if(props.isFetching) {
        return <div className='loader'></div>
    } else if (props.error === 404) {
      return <Routes>
              <Route path="*" element={<Navigate to="/not-found" />} />
             </Routes>
    } else if (!wordInfoIsEmpty) {
        return <Routes>
                <Route path="*" element={<Navigate to="/result-page" />} />
               </Routes>
    } else {
        return <SearchField
                handleChange={handleChange}
                handleClick={handleClick}
               />
    }
  }

  return (
    <div className="App">
        {selectCurrentComponent()}
    </div>
  );
}

function mapStateToProps(state) {
  const {choosenWord, word, backButtonState} = state;
  const {isFetching, wordInfo, error} = word;

  return {
    backButtonState,
    choosenWord,
    isFetching,
    wordInfo,
    error
  }
}

export default connect (mapStateToProps)(App)
