import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'  

const initialState = {
	products: [],
	status: 'idle',
	error: null,
}

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await 
			client.get('/fakeServer/products') 
		return response.data
	}) 

	export const addProduct = createAsyncThunk( 
	'products/addProduct',
	async (newProduct) => {
		const response = await client.post('/fakeServer/products', newProduct) 
		return response.data
	}
)

const productsSlice = createSlice({ 
	name: 'products',
	initialState,
	reducers:  {
		reactionClicked(state, action) {
			const { productId, reaction } = action.payload 
			const currentProduct = state.products.find(product => product.id === productId)
			if (currentProduct) {
				currentProduct.reactions[reaction]++
			}
		}, 
        productUpdated(state, action) {
            const { id, name, desc, price, amount } = action.payload
            const desiredProduct = state.products.find(product => product.id === id)
            if (desiredProduct) {
                desiredProduct.name = name
                desiredProduct.desc = desc
                desiredProduct.price = price
                desiredProduct.amount = amount
            }
        },
    },
	extraReducers(builder) {
		builder
		.addCase(fetchProducts.pending, 
			(state) => { 
			state.status = 'in progress' 
		})
		.addCase(fetchProducts.fulfilled, 
			(state, action) => { 
			state.status = 'success'
			state.products = state.products.concat(action.payload) 
		})
		.addCase(fetchProducts.rejected, 
			(state, action) => { 
			state.status = 'fail'
			state.error = action.error.message
		})
		.addCase(addProduct.fulfilled, 
			(state, action) => { 
			state.products.push(action.payload)
		})
	},
})



export default productsSlice.reducer
export const {
	reactionClicked,
	productUpdated
} = productsSlice.actions
export const selectAllProducts = (state) => state.products.products 
export const selectProductById = (state, productId) => 
	state.products.products.find((product) => product.id === productId) 