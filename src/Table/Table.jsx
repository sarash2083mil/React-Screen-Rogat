import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import "./Table.css";
import Button from "@mui/material/Button";
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import { CiFilter } from "react-icons/ci";



const Table = ({ data }) => {
    const DEFAULT_RECORDS = 5;
    const resultsNum = data.length;
    let numOfRecords = resultsNum >= DEFAULT_RECORDS ? DEFAULT_RECORDS : resultsNum;

    const openFilterInput=()=>{
        return 'filtered open';
    }
    const columns = useMemo(
        () => [
            { Header: "Meter Id", accessor: "meterId" },
            { Header: "Consumer Name", accessor: "consumerName" },
            { Header: "Address", accessor: "address" },
            { Header: "Consumer Type", accessor: "consumerType" },
            { Header: "F1 List", accessor: "f1List" },
            { Header: "F2 List", accessor: "f2List" },
            { Header: "F3 List", accessor: "f3List" },
            { Header: "F4 List", accessor: "f4List" },
            { Header: "Actions", accessor: "actions.action" }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data }, useSortBy);

    return (
        <div className="table-container">
            <Button variant="contained" >Add Meter</Button>
            <h3>Meters</h3>
            <div class="table-filters">
               <span><CiFilter onClick={openFilterInput}/></span> 
                <span>Filter</span>+
                <p>showing {numOfRecords} from {resultsNum} results</p>
            </div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    cell?.column?.Header == 'Actions' ? (
                                        <td>
                                            <span ><MdOutlineDeleteOutline /></span>
                                            <span><MdOutlineModeEditOutline /></span>


                                        </td>
                                    ) : (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    )
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;