const config = {
  books: {
    type: "list",
    worksheet: "Over_10_metres",
    columns: [
      {
        index: 4, // column index (1,2,3....n); `1` for column `A`
        key: "name", // output item's field
      },
    ],
    rowOffset: 5, // offset header row
  },
};
