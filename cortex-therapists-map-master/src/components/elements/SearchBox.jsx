import InputBase from "@material-ui/core/InputBase";

const SearchBox = ({ onChange }) => {
  return (
    <div className="search-box elevation">
      <InputBase
        onChange={({ target: { value } }) => onChange(value)}
        spellCheck={false}
        placeholder="Procurar hipnoterapeuta"
        className="search-box-input"
      />
    </div>
  );
};

export default SearchBox;
