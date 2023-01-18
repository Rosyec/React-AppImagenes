import React, { useEffect, useState } from 'react'
import { getImages } from '../services/gif.service';

export const useFetchImage = (category: string, page?:number) => {

    const [images, setImages] = useState<Data[]>([]);
    const [isLoading, setIsLoading] = useState( true );

    const loadImages = async () => {
        const data = await getImages(category, page);
        setImages(data);
        setIsLoading( false );
    }
    /** Para que funcione el paginador ese necesario sacar el loadImages del useEffect para que se ejeute a cada cambio.  */
        loadImages();

    // useEffect(() => {
    //     loadImages();
    // }, []);

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
