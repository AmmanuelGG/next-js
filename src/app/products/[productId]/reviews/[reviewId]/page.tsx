export default function ReviewDetails({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {

    // console.log(params.productId, "productID", params.re)

    return (
        <>
            <h1> Prodcut {params.productId} Reivew {params.reviewId}</h1>
        </>
    )
}


//what we want is this url => product /1/reivew/1

