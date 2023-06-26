export const Square = ({ children, updateBoard, index, isSelected }) => {
  const classeName = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={classeName}>
      {children}
    </div>
  );
};
