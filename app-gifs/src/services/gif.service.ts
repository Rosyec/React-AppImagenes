import { Image, Result } from "../interfaces/image.interface";

const API_KEY: string = 'C_9AXZHwVEwr8nZE27HJ5B50wGT5_2Zs2fzwaplksSU'
const URL_BASE: string = 'https://api.unsplash.com/search/photos';

const getImages = async ( category: string, pagination?: number  ) => {
    const URL: string = `${ URL_BASE }?query=${ category }&client_id=${ API_KEY }&per_page=10&orientation=portrait&page=${ pagination }`;
    const response = await fetch( URL );
    const { results }: Image = await response.json();

    const data_images = results.map( ( { id, urls, description, alt_description }:Result ) => ({ 
        id, 
        url: urls.raw + "&w=500", 
        description, 
        alt_description 
    }) );
    
    return data_images;
}

export {
    getImages,
}