import { useEffect, useRef } from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import { NewProductForm } from './NewProductForm'
import { SellerOfProd } from '../sellers/SellerOfProd'
import { Link } from 'react-router-dom'
import { UserReactions } from './UserReactions' 
import { selectAllProducts, fetchProducts } from './productsSlice' 

const ProductCard = 
	({ product }) => { 
	return (
        <div key={product.id} 
			className="product-excerpt"> 
			<h3>{product.name}</h3>
			<SellerOfProd sellerId={product.seller} 
				/> 
			<p>{product.desc.substring(0, 
				100)}</p> 
			<UserReactions 
				product={product} /> 
			<Link to={`/products/${product.id}`} class
				Name="link-btn">
				 view
			</Link>
		</div>
    )
}

export const ProductsList = () => {
    const dispatch = useDispatch() 
	const products = useSelector(selectAllProducts)
const productStatus = useSelector((state) => state.products.status) 

const error = useSelector((state) => state.products.error) 
let content

const dataFetch = useRef(false)

useEffect(() => {
    if (dataFetch.current) return
	dataFetch.current = true
	if (productStatus === 'idle') { 
		dispatch(fetchProducts())
	}
}, [productStatus, dispatch])

if (productStatus === 'in progress') { 
	content = <p>Products 
		list loading ...</p> 
} else if (productStatus === 'success') { 
	content = products.map((product) => ( 
		<ProductCard key={product.id} 
			product={product} /> 
	))
} else if (productStatus === 'fail') { 
	content = <div>{error}</div>
}

    return (
        <div>
		<NewProductForm />
		<div>
			<h2>Products</h2>
			{content}
		</div>
	</div>
)
}
