import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SellerOfProd } from '../sellers/SellerOfProd' 
import { UserReactions } from './UserReactions' 
import { selectProductById } from './productsSlice' 

export const ProductPage = () => {
	let params = useParams()
	const { productId } = params

    const product = useSelector((state) => selectProductById(state, productId)) 

	if (!product) {
		return <p>No such product</p>
	}

    return (
        <div>
            <h2>{product.name}</h2>
            <SellerOfProd sellerId={product.seller} /> 
            <p>Description: {product.desc}</p>
            <p>Price: {product.price}</p>
            <p>Amount:{product.amount}</p>
            <UserReactions product={product} /> 
            <Link to={`/editProduct/${product.id}`} className="link-btn">edit</Link>
        </div>
    )
}

