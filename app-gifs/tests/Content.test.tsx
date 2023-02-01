import { screen, render } from "@testing-library/react";
import React from "react";
import { Content } from '../src/components/content/Content';


describe('Pruebas en <Content/>', () => { 

    test('', () => {
        render(<Content />);
        screen.debug()
    });

 });