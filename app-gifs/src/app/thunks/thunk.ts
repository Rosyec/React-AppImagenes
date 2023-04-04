import { createAsyncThunk } from "@reduxjs/toolkit";
import { Image, Result } from "../../interfaces/image.interface";
import { imagesApi, API_KEY } from "../../services/gif.service";


export const getImagesThunk = createAsyncThunk<ImageState, Props, { rejectValue: RejectWithError }>('image/getImages',
    async ( props, thunkApi ) => {
        try {
            return await getImagesFromApi(props);
        } catch (error) {
            return thunkApi.rejectWithValue({msg: 'Error connection!'});
        }
});

async function getImagesFromApi({ category, pagination }: Props) {
    const response = await imagesApi(`?query=${ category }&client_id=${ API_KEY }&per_page=10&orientation=portrait&page=${ pagination }`);
            const { results }: Image = response.data;
            const imagesResponse = results.map( ( { id, urls, description, alt_description }:Result ) => ({ 
                id, 
                url: urls.raw + "&w=500", 
                description, 
                alt_description 
            }) );

            return {
                data: imagesResponse
            };
}

interface Props {
    category: string,
    pagination?: number | undefined
}

interface ImageState {
    data: Data[]
}

interface Data {
        id: string;
        url: string;
        description: string | null;
        alt_description: string;
}

interface RejectWithError {
    msg: string
}
