import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DataTable from "./components/dataTable/dataTable"
import "../css/tables.css";

const Table = ({ columns, rows, api }) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [datos, setData] = useState([{}]);

  useEffect(() => {
    const fechData = async () => {
      const response = await axios.get(api.url);
      const data = response.data.body;
      console.log(data);
      setData(data);
    };

    fechData();
  }, []);

  return (
    <div className="table">
    <DataTable rows={rows} columns={columns} data = {datos} />
</div>
  );
};

export default Table;