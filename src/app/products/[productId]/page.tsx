export default function ProductDetails({ params }: {
    params: { productId: string }
}) {

    return (
        <>
            <h1> Prodcut1 {params.productId}</h1>

        </>
    )
}


//params can be passed as a prop 

//params means route parameters 

