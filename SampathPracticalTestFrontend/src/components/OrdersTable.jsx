import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
// import AlertIcon from '../assets/images/icons/alert.svg';


const OrdersTable = () => {
    const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setProductToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      // dispatch(deleteProduct(productToDelete._id));
    }
    handleClose();
  };


  const columns = [
    { id: "sku", label: "SKU", minWidth: 170 },
    { id: "image", label: "Image", minWidth: 100 },
    { id: "name", label: "Product Name", minWidth: 100, align: "left" },
    { id: "price", label: "Price", minWidth: 50, align: "left" },
    { id: "actions", label: "Actions", minWidth: 100, align: "center" },
  ];

  const rows = [
    {
      sku: "12345",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 1",
      price: "10.00",
    },
    {
      sku: "67890",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 2",
      price: "20.00",
    },
    {
      sku: "11223",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 3",
      price: "30.00",
    },
    {
      sku: "44556",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 4",
      price: "40.00",
    },
    {
      sku: "77889",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 5",
      price: "50.00",
    },
    {
      sku: "22334",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 6",
      price: "60.00",
    },
    {
      sku: "55667",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 7",
      price: "70.00",
    },
    {
      sku: "88990",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 8",
      price: "80.00",
    },
    {
      sku: "33445",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 9",
      price: "90.00",
    },
    {
      sku: "66778",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 10",
      price: "100.00",
    },
    {
      sku: "99001",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 11",
      price: "110.00",
    },
    {
      sku: "11234",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 12",
      price: "120.00",
    },
    {
      sku: "44567",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 13",
      price: "130.00",
    },
    {
      sku: "77890",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 14",
      price: "140.00",
    },
    {
      sku: "22345",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 15",
      price: "150.00",
    },
    {
      sku: "55678",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 16",
      price: "160.00",
    },
    {
      sku: "88901",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 17",
      price: "170.00",
    },
    {
      sku: "33456",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 18",
      price: "180.00",
    },
    {
      sku: "66789",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 19",
      price: "190.00",
    },
    {
      sku: "99012",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      name: "Product 20",
      price: "200.00",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ p: 8 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: "#001EB9" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.sku}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={column.id === "sku" ? { color: "#969191" } : {}}
                      >
                        {column.id === "image" ? (
                          <img
                            src={value}
                            alt={row.name}
                            style={{ height: "50px" }}
                          />
                        ) : column.id === "sku" ? (
                          value ? (
                            `#${value}`
                          ) : (
                            ""
                          )
                        ) : column.id === "price" ? (
                          value ? (
                            `$${value}`
                          ) : (
                            ""
                          )
                        ) : column.id === "actions" ? (
                          <div>
                            <Button
                              variant="contained"
                              size="small"
                              style={{
                                marginRight: "8px",
                                backgroundColor: "primary",
                                "&:hover": { backgroundColor: "darkred" },
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="contained"
                              size="small"
                              onClick={() => handleDeleteClick(row)}
                              sx={{
                                marginRight: "8px",
                                backgroundColor: theme.palette.error.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.error.dark,
                                },
                              }}
                            >
                              Delete
                            </Button>{" "}
                          </div>
                        ) : (
                          value || ""
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
          {/* <img src={AlertIcon} alt="Alert" style={{ cursor: 'pointer', height: '50px', width: '50px' }} /> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ textAlign: 'center', fontSize: '18px', fontWeight: '800', color: '#162427', letterSpacing: '0.1em' }}
          >
            ARE YOU SURE?
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description"
            style={{ textAlign: 'center', fontSize: '14px', marginTop: 10, color: '#162427', fontWeight: '700' }}
          >
            You will not be able to undo this action if you proceed!
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center', marginBottom: 15 }}>
          <Button onClick={handleClose} style={{ color: 'black', border: '2px solid #001EB9', marginRight: 10 }}>
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} style={{ backgroundColor: theme.palette.error.main, color: 'white' }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrdersTable;
