import "./Order.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link ,useLocation} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts} from "../../redux/apiCalls";

export default function Order() {
    const location = useLocation();
    const orderId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    const order = useSelector(
        state => state.order.orders.find((order) => order._id === orderId));
    const products = order.products;


    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch])


    const handleDelete = (id) => {
        // deleteProduct(id, dispatch)
    };

    const columns = [
        { field: "_id", headerName: "productId", width: 220 },
        {
            field: "quantity",
            headerName: "Quantity",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="orderListItem">
                        
                        {params.row.quantity}
                    </div>
                );
            },
        },
        

       
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row._id}>
                            <button className="orderListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="orderListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="orderList">
            <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
