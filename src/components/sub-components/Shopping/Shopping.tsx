import { useHistory } from "react-router";

const Shopping = () => {
  const history = useHistory();

  return (
    <>
      <button
        onClick={() => {
          window.location.href="http://localhost:4000/checkout"
        }}
      >
        Buy
      </button>
    </>
  );
};

export default Shopping;
