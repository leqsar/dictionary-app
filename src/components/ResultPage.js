import { connect } from 'react-redux'
import { Fragment } from 'react';
import logo from './sound-logo.png';
import BackButton from './BackButton.js'

function ResultPage(props) {
  const audio = new Audio(props.phonetics[0].audio);
  const meaningsList = props.meanings.map((meaning,  meaningIndex) => {
    const definitionsList = meaning.definitions.map((definition, definitionIndex) => {
      const synonymsList =  definition.synonyms.map((synonym, index) => {
        return (<Fragment key={index}>{synonym}, </Fragment>)
      })
      return (
        <li key={definitionIndex} className='definition_container'>
          <p className='definition_container__definition'>{definition.definition}</p>
          {definition.example &&
            <p className='definition__example'>"{definition.example}"</p>
          }
          {synonymsList.length !== 0 &&
            <div className='synonyms_wrapper'>
              <p>Synonyms:</p>
              <ul className="synonyms">{synonymsList}</ul>
            </div>
          }
        </li>
      )
    })
    return (
      <li key={meaningIndex}>
        <p className='part_of_speech'>{meaning.partOfSpeech}</p>
        <ol>
          {definitionsList}
        </ol>
      </li>
    )
  })

  function handleClick(event) {
    audio.play();
  }

  return(
      <div className='result_page'>
        <BackButton/>
        <div className='main_info_container'>
          <div>
            <h1>{props.word}</h1>
            <div className='sound-icon' onClick={handleClick}>
              <p>{props.phonetics[0].text}</p>
              <img src={logo}/>
            </div>
          </div>
          <p>{props.origin}</p>
        </div>
        <ul className='meanings_container'>
          {meaningsList}
        </ul>
      </div>
  )
}

function mapStateToProps(state) {
  const wordInfo = state.word.wordInfo;
  if (wordInfo !== undefined) {
    const {word, phonetics, origin, meanings} = wordInfo;
    return {
      word,
      phonetics,
      origin,
      meanings
    }
  } else {
    return state
  }
}

export default connect (mapStateToProps)(ResultPage)
