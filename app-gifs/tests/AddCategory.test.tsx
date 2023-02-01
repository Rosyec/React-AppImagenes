import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { AddCategory } from '../src/components/content/AddCategory/AddCategory';



describe('Pruebas en <AddCategory/>', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory emitCategory={ () => {} }/>);

        const input: HTMLElement = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Water' } } );
        expect( input.getAttribute('value') ).toEqual( 'Water' );
    });

    test('Debe de llamar emitCategory si el input tiene un valor', () => {

        const value: string = 'Car';
        const emitCategory = jest.fn();

        render(<AddCategory emitCategory={ emitCategory }/>);

        const input: HTMLElement = screen.getByRole('textbox');
        const form: HTMLElement = screen.getByRole('form');

        fireEvent.input( input, { target: { value } } );
        fireEvent.submit( form );

        expect( input.getAttribute('value') ).toBe('');
        expect( emitCategory ).toHaveBeenCalled();
        expect( emitCategory ).toHaveBeenCalledTimes(1);
        expect( emitCategory ).toHaveBeenCalledWith( value );

    });

    test('No debe de llamar emitCategory si el input está vacío', () => {

        const emitCategory = jest.fn();

        render(<AddCategory emitCategory={ emitCategory }/>);
        
        const form: HTMLElement = screen.getByRole('form');

        fireEvent.submit( form );
        expect( emitCategory ).toHaveBeenCalledTimes(0);
    });

});

export{}