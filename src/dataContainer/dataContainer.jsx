
import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import Search from "../Search/Search";

const DataContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = "https://randomuser.me/api/";
      const response = await fetch(apiUrl);
      const agents = await response.json();
      console.log(agents);
      setData(agents.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <><div class="centerize">
      <div class="flex-container">
        <span className="title">Users List</span>
        <Search dataToSearch={data} searchKey={'name'}></Search>
      </div>

      <Table data={data} />
    </div>
    </>
  );

}

export default DataContainer;
