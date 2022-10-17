import React, { useRef } from "react";
import { useAppSelector } from "../../redux/hooks";
import { TObj } from "./types";
import { formatDate } from "./utils";
import { useFetch, useInfiniteScroll } from "../../components/CustomHooks";

const TableInfo = ({
  headers,
  data
}: TObj) => {
    const {loading} = useAppSelector((state) => state.books)
    const bottomBoundaryRef = useRef(null);
    useFetch();
    useInfiniteScroll(bottomBoundaryRef);

  const tableContentHandler = (row: any, col: any) => {
    let template: any;
    switch (col.key) {
      case "publisher":
      case "name":
      case "isbn":
        template = row[col.key];
        break;
      case "authors": template = row[col.key].map((item: any, index:number) => item)
      break;
      case "released": 
        template = `${formatDate(row[col.key])}`;
        break;
      default:
        template = row[col.key];
        break;
    }
    return template;
  };

  return (
    <>
      <table className={``}>
        <thead>
          <tr>
            {headers.map((itm) => {
              return (
                <th key={itm.title} className={``}>
                  {itm.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data?.map((row, idx) => {
              return (
                <tr key={idx}>
                  {headers.map((col, id) => (
                    <td key={id} className="">
                      {tableContentHandler(row, col)}{" "}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6}>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
      {loading && (
        <div id='page-bottom-boundary'>
          <p className="m-0 text-white">Loading More Books</p>
        </div>
      )}

<div ref={bottomBoundaryRef}></div>
    </>
  );
};

export default TableInfo;
