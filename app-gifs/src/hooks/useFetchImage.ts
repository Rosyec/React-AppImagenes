import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getImagesThunk } from '../app/thunks/thunk';
import { RootState } from '../store/store';

export const useFetchImage = (category: string, page?:number) => {

    const [images, setImages] = useState<Data[]>([]);
    const [isLoading, setIsLoading] = useState( true );
    const dispatch = useAppDispatch();
    const { data } = useAppSelector( (state: RootState) => state.images );

    const loadImages = async () => {
        setImages(data);
        setIsLoading( false );
    }

    useEffect(() => {
        dispatch( getImagesThunk({category, pagination: page}) );
        loadImages();
    }, [page, category]);

    useEffect(() => {
        setImages(data);
    }, [data]);

    return {
        imgs: images,
        isLoading
    }
}

interface Data {
    id: string;
    url: string;
    description: string | null;
    alt_description: string;
}
