const CurrencyTable = ({ usdAmount, euroAmount }) => {
  return (
    <table
      style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th>Currency</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>USA Dollar</td>
          <td>{usdAmount && `$ ${usdAmount}`}</td>
        </tr>
        <tr>
          <td>Euro</td>
          <td>{euroAmount && `€ ${euroAmount}`}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default CurrencyTable;
