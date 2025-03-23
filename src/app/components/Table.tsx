import React from "react";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: {
    map: any;
    header: string;
    accessor: string;
        className?: string;
        renderRow: (item: any) => React.ReactNode;
    data:any[]
  };
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr>
          {columns.map((col) => (
            <th className={`${col.className} py-2 px-4 text-left text-gray-500 text-sm`} key={col.accessor}>
              {col.header}
            </th>
          ))}
        </tr>
          </thead>
          <tbody>{data.map((item:any)=>renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
