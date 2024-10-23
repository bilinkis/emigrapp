import { redirect } from "next/dist/server/api-utils";

const Buy = ({ setPaid }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
      onClick={() => {
        if (setPaid !== undefined) {
          setPaid(true);
        } else {
          window.location.replace("/diagnostico");
        }
      }}
    >
      Iniciar el proceso
    </button>
  );
};
export default Buy;
