import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <>
      <form className="input" onSubmit={handleAdd}>
        <input
          type="text"
          className="input__box"
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input__submit" type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default InputField;
