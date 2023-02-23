import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    hoveredImgNumber: number
}

const initialState: AppState = {
    hoveredImgNumber: -1
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        hoverImage: (state, action: PayloadAction<number>) => ({
            ...state,
            hoveredImgNumber: action.payload
        }),
        unHoverImage: (state) => ({
            ...state,
            hoveredImgNumber: -1
        })
    }
})

export const { hoverImage, unHoverImage } = appSlice.actions
export default appSlice.reducer