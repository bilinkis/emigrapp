const Buy = ({ setPaid }) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => setPaid(true)}>
            Comprar ahora
        </button>
    )
}
export default Buy;