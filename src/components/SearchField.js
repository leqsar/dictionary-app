
function SearchField(props) {
  return(
    <form>
        <input type="text" onChange={props.handleChange}></input>
        <button type="button" onClick={props.handleClick}>Find</button>
    </form>
  )
}

export default SearchField
