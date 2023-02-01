import { getImages } from "../src/services/gif.service";
import 'jest-extended';

describe('Pruebas en gif.service.ts', () => {

    const category: string = 'Love';
    const imgs: Imagen[] = [
        { 
            id: expect.any(String), 
            url: expect.any(String),
            description:  expect.toBeOneOf([null, expect.any(String)]),
            alt_description:  expect.toBeOneOf([null, expect.any(String)])
        }
    ];
    
    jest.setTimeout(10000);
    test('Debe retornar un arreglo de imagenes', async () => {
        const imagenes: Imagen[] = await getImages( category );
        expect( imagenes.length ).toBeGreaterThan(0);
        expect( imagenes[0] ).toEqual( imgs[0] );
    });

});

interface Imagen {
    id: string;
    url: string;
    description: string | null;
    alt_description: string | null;
}

export {}