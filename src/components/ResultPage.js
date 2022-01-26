import { connect } from 'react-redux'
import { Fragment } from 'react';
import logo from './sound-logo.png';

function ResultPage(props) {
  const meaningsList = props.meanings.map((meaning,  meaningIndex) => {
    const definitionsList = meaning.definitions.map((definition, definitionIndex) => {
      const synonymsList =  definition.synonyms.map((synonym, index) => {
        return (<Fragment key={index}>{synonym}, </Fragment>)
      })
      return (
        <li key={definitionIndex}>
          <p>{definition.definition}</p>
          {definition.example &&
            <p>"{definition.example}"</p>
          }
          {synonymsList.length !== 0 &&
            <div>
              <p>Synonyms:</p>
              <ul>{synonymsList}</ul>
            </div>
          }
        </li>
      )
    })
    return (
      <li key={meaningIndex}>
        <p>{meaning.partOfSpeech}</p>
        <ol>
          {definitionsList}
        </ol>
      </li>
    )
  })
  return(
    <div>
      <div>
        <div>
          <h1>{props.word}</h1>
          <div>
            <img src={logo}/>
            <audio src={props.phonetics[0].audio}></audio>
          </div>
        </div>
        <p>{props.origin}</p>
      </div>
      <ul>
        {meaningsList}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  const wordInfo = state.word.wordInfo;
  const {word, phonetics, origin, meanings} = wordInfo;

  return {
    word,
    phonetics,
    origin,
    meanings
  }
}

export default connect (mapStateToProps)(ResultPage)
