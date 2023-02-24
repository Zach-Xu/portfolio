import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    selectedImgNumber: number
}

const initialState: AppState = {
    selectedImgNumber: -1
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        selectImage: (state, action: PayloadAction<number>) => ({
            ...state,
            selectedImgNumber: action.payload
        }),
        unSelectImage: (state) => ({
            ...state,
            selectedImgNumber: -1
        })
    }
})

export const { selectImage, unSelectImage } = appSlice.actions
export default appSlice.reducer