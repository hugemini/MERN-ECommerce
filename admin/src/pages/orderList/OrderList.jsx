import "./OrderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { format } from "timeago.js"
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, deleteOrder } from "../../redux/apiCalls";

export default function OrderList() {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
    

    useEffect(() => {
        getOrders(dispatch);
    }, [dispatch])


    const handleDelete = (id) => {
        deleteOrder(id, dispatch)
    };

    const columns = [
        { field: "_id", headerName: "OrderID", width: 90 },
        {
            field: "order",
            headerName: "UserID",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="orderListOrder">

                        {params.row.userId}
                    </div>
                );
            },
        },
        {
            field: "createdAt",
            headerName: "createdAt",
            width: 120,
            renderCell: (params) => {
                return (
                    <div className="orderListOrder">

                        {format(params.row.createdAt)}
                    </div>
                );
            },
        },
        {
            field: "amount",
            headerName: "Amount",
            width: 130,
        },
        {
            field: "address",
            headerName: "Adress",
            width: 160,
        },
        {
            field: "status",
            headerName: "Status",
            width: 140,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/order/" + params.row._id}>
                            <button className="orderListEdit">Detail</button>
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
                rows={orders}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}
