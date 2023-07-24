import { addProduct, getAll, removeProduct, updateProduct } from "@/actions/products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux";
import Button from "./Button";


const ListProducts = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products } = useSelector((state: any) => state.products);
    useEffect(() => {
        dispatch(getAll())
    }, [])
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product: any, index: any) => {
                        return <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    })}

                </tbody>
            </table>
            <Button onHandleClick={() => dispatch(addProduct({ name: 'Sản phẩm 4', price: 400 }))}>Thêm</Button>
            <Button onHandleClick={() => dispatch(updateProduct({ name: 'Sản phẩm 4 update', price: 500, id: 4 }))}>Cập nhật</Button>
            <Button onHandleClick={() => dispatch(removeProduct(4))}>Xoá</Button>

        </div>
    )
}

export default ListProducts