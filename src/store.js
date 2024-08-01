import {configureStore} from '@reduxjs/toolkit'

import postsSlice from './ShopReducer';


export default configureStore({
    reducer: {
        cart: postsSlice,
    },
})
