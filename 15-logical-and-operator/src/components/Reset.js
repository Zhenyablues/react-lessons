function Reset({ onClick, count }) {
  return (
    count > 0 && (
      <div>
        <button style={{ backgroundColor: 'lightgreen' }} onClick={onClick}>
          Reset
        </button>
      </div>
    )
  );
}

export default Reset;
