import React, { useMemo } from "react";
import "./CSS/styles.css"
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";


const Table = props => {
  const columns = [
    {
      name: "Title",
      selector: "name",
      sortable: true,
      grow: 2
    },
  
 
    {
      name: "Difficulty",
      selector: "level",
      sortable: true,
      hide: "md"
    },
   
  ];
  

 
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable 
      title="Questions :"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
     
    />
   
  );
};

export default Table;
