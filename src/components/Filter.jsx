export const Filter = (props) => {
  const filter = props.filter;
  const setFilter = props.setFilter;

  return(<div>
    <input value={filter} onChange={function(e) {
      setFilter(e.target.value);
    }}/>
  </div>)
}
