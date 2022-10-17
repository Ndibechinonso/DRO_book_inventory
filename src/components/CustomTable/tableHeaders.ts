export const booksTable = {
  columns: [
    {
      title: "Publisher",
      dataIndex: "publisher",
      key: "publisher",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn",
    },
    {
      title: "Authors",
      dataIndex: "authors",
      key: "authors",
    },
    {
      title: "End Date",
      dataIndex: "released",
      key: "released",
    },
  ]
};


export const charactersTable = {
  columns: [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ]

};

export const filterOptions = [
  {
    name: "Select a search category",
    value: ""
  },
  {
    name: "PUBLISHER",
    value: "publisher"
  },
  {
    name: "NAME",
    value: "name"
  },
  {
    name: "ISBN",
    value: "isbn"
  },
  {
    name: "AUTHORS",
    value: "authors"
  },
  {
    name: "END DATE",
    value: "released"
  },
  {
    name: "CHARACTER'S NAME",
    value: "charactername"
  },
  {
    name: "CHARACTER'S CULTURE",
    value: "culture"
  },
];