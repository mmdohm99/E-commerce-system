export const variantColumns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'variantName', headerName: 'variantName', width: 300 },
];
export const variantOptionColumns = [
  { field: 'id', headerName: 'ID', width: 400 },
  { field: 'name', headerName: 'Name', width: 400 },
];

export const ContactColumns = [
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'subject',
    headerName: 'Subject',
    width: 200,
  },
  {
    field: 'message',
    headerName: 'Message',
    width: 500,
  },
];
export const userColumns = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'name',
    headerName: 'Photo&UserName',
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },

  {
    field: 'phone',
    headerName: 'phone',
    width: 120,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 80,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 80,
  },
  {
    field: 'city',
    headerName: 'City',
    flex: 1,
    width: 80,
  },
  {
    field: 'street',
    headerName: 'Street',
    width: 80,
    flex: 1,
  },
  {
    field: 'zip',
    headerName: 'Zip Code',
    width: 60,
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Baned',
    width: 40,
    flex: 1,
  },
];

export const orderColumns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'user',
    headerName: 'User',
    width: 190,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 190,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 190,
  },
  {
    field: 'street',
    headerName: 'Street',
    width: 190,
  },
  {
    field: 'totalPrice',
    headerName: 'Total Price',
    width: 190,
  },
];
export const heroColumns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'title',
    headerName: 'Title',
    width: 350,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 360,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="" />
        </div>
      );
    },
  },
];
export const categoryColumns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'name',
    width: 350,
  },
  {
    field: 'photo',
    headerName: 'photo',
    width: 360,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="" />
        </div>
      );
    },
  },
];
export const subCategoryColumns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'name',
    width: 250,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 250,
  },
  {
    field: 'photo',
    headerName: 'photo',
    width: 260,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="" />
        </div>
      );
    },
  },
];

export const productColumns = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'name',
    headerName: 'Product Name',
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: 'listPrice',
    headerName: 'Price',
    width: 130,
  },

  {
    field: 'category',
    headerName: ' Category',
    width: 180,
  },
  {
    field: 'subCategory',
    headerName: 'Sub Category',
    width: 170,
  },
  {
    field: 'ratingsAverage',
    headerName: 'Ratings',
    width: 140,
  },

  // {
  //   field: "description",
  //   headerName: "Description",
  //   width: 100,
  //   flex: 1,
  // },
  // {
  //   field: "ratingsAverage",
  //   headerName: "Ratings",
  //   width: 100,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
