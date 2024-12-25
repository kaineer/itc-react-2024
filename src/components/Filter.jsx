export const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  }

  return(<div>
    <input value={filter} onChange={handleChange} />
  </div>)
}
