function SearchField(props) {
  return(
    <form className="search_field">
        <input type="text" onChange={props.handleChange}></input>
        <button type="button" onClick={props.handleClick}>Find</button>
    </form>
  )
}

export default SearchField
