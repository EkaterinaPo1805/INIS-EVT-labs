import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { selectSellerById } from './sellersSlice' 
import { selectAllProducts } from '../products/productsSlice' 

export const SellerPage = () => { 
	const { sellerId } = useParams()

	const seller = useSelector((state) => selectSellerById(state, sellerId)) 

	const productsOfSeller = useSelector((state) => { 
		const allProducts = selectAllProducts(state) 
		return allProducts.filter((product) => product.seller === sellerId) 
	})

	const productNames = productsOfSeller.map((product) => (
    	<li key={product.id}>
			<Link to={`/products/${product.id}`}>{product.name}</Link>
		</li>
	))

	return (
		<div>
			<h2>Seller: {seller?.name || 'Unknown Seller'}</h2>
			<ul>{productNames}</ul>
		</div>
	)
}
