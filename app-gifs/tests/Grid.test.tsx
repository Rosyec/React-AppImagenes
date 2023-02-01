import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import React from "react";
import { Grid } from '../src/components/content/Grid/Grid';
import { useFetchImage } from '../src/hooks/useFetchImage';

jest.mock('../src/hooks/useFetchImage');


describe('Pruebas en <Grid/>', () => {

    const category: string = 'Animal';

    test('Debe de mostrar el loading inicialmente', () => {
        const myUseFetchImage = useFetchImage as jest.MockedFunction<typeof useFetchImage>;
        
        myUseFetchImage.mockReturnValue({ imgs: [], isLoading: true });

        render( <Grid category={ category }></Grid> );
        const textLoading = screen.getByRole('heading', { level: 1 });
        expect( textLoading.innerHTML ).toEqual( 'Cargando' );
    });

    test('Debe de mostrar items cuando se cargan las imagenes de useFetchImage', () => {
        const typeData: Data[] = [
            {
                id: 'ABC123',
                url: 'http://www.unsplash.org/lobos_machos',
                alt_description: 'Lobos',
                description: 'Lobos Machos'
            },
            {
                id: 'ABC578',
                url: 'http://www.unsplash.org/lobos_hembras',
                alt_description: 'Lobos Hembras',
                description: 'Lobos Hembras'
            }
        ]; 
        const myUseFetchImage = useFetchImage as jest.MockedFunction<typeof useFetchImage>;
        myUseFetchImage.mockReturnValue({imgs: typeData, isLoading: false});
        
        render( <Grid category={ category }></Grid> );
        expect( screen.getAllByRole('img').length ).toBe(2);
    });


});

interface Data {
    id: string;
    url: string;
    description: string | null;
    alt_description: string;
}



export{}