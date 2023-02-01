
import { waitFor } from '@testing-library/dom';
import { renderHook } from '@testing-library/react';
import { useFetchImage } from '../src/hooks/useFetchImage';

describe('Pruebas en el hook useFetchImage', () => {

    test('Debe de retornar el estado incial', () => {
        const { result } = renderHook( () => useFetchImage('Dragon') );
        const { imgs, isLoading } = result.current;

        expect( imgs.length ).toBe(0);
        expect( isLoading ).toBe(true);

        console.log(result)
    });

    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async () => {

        const { result } = renderHook( () => useFetchImage('Dragon') );

        await waitFor( () => expect( result.current.imgs.length ).toBeGreaterThan(0) );

        const { imgs, isLoading } = result.current;

        expect( imgs.length ).toBeGreaterThan(0);
        expect( isLoading ).toBe(false);

    });

});

export{}