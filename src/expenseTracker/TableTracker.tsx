export interface ExpenseList {
  id: number;
  Description: string;
  Amount: number;
  Category: string;
}
interface Props {
  AppObject: ExpenseList[];
  onDelete: (id: number) => void;
}

const TableTracker = ({ AppObject, onDelete }: Props) => {
  if (AppObject.length === 0) return null;
  return (
    <>
      <div className="p-4">
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Categories</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {AppObject.map((item) => (
              <tr key={item.id}>
                <td>{item.Description}</td>
                <td>{item.Amount}</td>
                <td>{item.Category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                {AppObject.reduce(
                  (acc, expense) => expense.Amount + acc,
                  0
                ).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default TableTracker;
