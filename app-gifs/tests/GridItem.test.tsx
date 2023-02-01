import { render, screen } from "@testing-library/react";
import React from "react";
import { GridItem } from "../src/components/content/GridItem/GridItem";


describe('Pruebas <GridItem/>', () => {

    const url: string = 'http://www.dragon/dragon.jpg';
    const alt: string = 'Dragon'

    test('Las props url y alt_description sean obligatorias.', () => {
        const { container } = render(<GridItem url={url} alt_description={alt}></GridItem>);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar una imagen', () => {
        render(<GridItem url={url} alt_description={alt}></GridItem>);
        expect(screen.getByRole('img')).toBeTruthy();
    });

    test('Debe de mostrar una imagen con el url y el alt_description indicado', () => {
        render(<GridItem url={url} alt_description={alt}></GridItem>);
        expect(screen.getByRole('img').getAttribute('src')).toBe(url);
        expect(screen.getByRole('img').getAttribute('alt')).toBe(alt);
    });


});


export { }