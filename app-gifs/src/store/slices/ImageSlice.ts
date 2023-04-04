import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getImagesThunk } from "../../app/thunks/thunk";
export interface ImageSliceState {
  data: Data[];
}
interface Data {
  id: string;
  url: string;
  description: string | null;
  alt_description: string;
}

const initialState: ImageSliceState = {
  data: [
    {
      id: "",
      url: "",
      description: "",
      alt_description: "",
    },
  ],
};

export const ImageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImageSliceState>) => {
      state.data = action.payload.data;
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(getImagesThunk.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    Builder.addCase(getImagesThunk.rejected, (state, action) => {
      console.log("Rechazado");
    });
  },
});

export const { setImages } = ImageSlice.actions;