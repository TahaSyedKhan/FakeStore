
import { fetchProducts } from "../../services/fetchProducts";
import { useQuery } from "react-query";

function ProductCard() {
    const {data, isLoading, isError, error} = useQuery(['product'], () =>  fetchProducts(), {
        retry: 2,
        retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });
    if(isLoading) {
        return <div>Loading...</div>
    } 
    if(isError) {
        return <div>Error: {error.message}</div>
    }
    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {data && data.length > 0 ? (
        data.map((product) => (
            <div key={product.id} className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img src={product.image} alt={product.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        ))
    ) : (
        <p>No products available</p>
    )}
</div>


    )
}

export default ProductCard;