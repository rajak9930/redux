import React from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
function Table({userData,  handleDelete ,handleEdit}) {

  return (
    <div className="border py-5 mt-5">
      <div className=" overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left"># </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Phone
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Address
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, Index) => {
              return (
                <tr className="hover:bg-gray-100" key={Index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {Index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.fName + " " + item.lName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.phone}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.address}
                  </td>
                  <td className="border border-gray-300 px-4 py-2  space-x-2">
                    <button
                      onClick={() => handleDelete(item.phone)}
                      className="p-2 bg-red-700 rounded-md"
                    >
                      <MdDelete size={25} color="#ffff" />
                    </button>
                    <button
                      onClick={() => handleEdit(item.phone)}
                      className="p-2 bg-green-700 rounded-md"
                    >
                      <FaPen size={25} color="#ffff" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
