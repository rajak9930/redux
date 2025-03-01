import axios from "axios";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { debounce } from "lodash";
const Index = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  console.log(search, "search");

  const getData = useCallback(async (query) => {
    if (!query) return;
    console.log("api call ", query);
    try {
      const res = await axios.get(
        `https://app.albia.in/wp-json/alb/v1/search-products?pro_offset=10&product_name=${query}`
      );
      console.log("data", res.data.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, []);
  const debounceFetchData = useCallback(debounce(getData, 500), [getData]);
  useEffect(() => {
    debounceFetchData(search);
    return () => debounceFetchData.cancel();
  }, [search, debounceFetchData]);

  return (
    <div className="p-5">
      <input
        type="text"
        className="border p-2 border-red-500"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id} className=" border-red-400 border m-2">
                <td>{item.title}</td>
                <td>
                  <img src={item.image} width={200} height={200} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
