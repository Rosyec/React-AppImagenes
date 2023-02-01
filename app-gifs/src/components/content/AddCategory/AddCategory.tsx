import React, { SyntheticEvent, useState } from 'react'

export const AddCategory = ( { setCategories, categories, emitCategory }:Propiedades ) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = ( { target }:React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event: SyntheticEvent ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        // setCategories( (data) => [ ...data ,inputValue ] );
        // setCategories( [ ...categories ,inputValue ] );
        emitCategory( inputValue.trim() );
        setInputValue( '' );
    }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input 
            type="text" 
            className='form-control' 
            name="" 
            id="myInput" 
            value={ inputValue } 
            onChange={ onChangeInput } 
            placeholder='Escribe...' />
    </form>
  )
}

interface Propiedades {
    setCategories?: React.Dispatch<React.SetStateAction<string[]>>,
    categories?: string[],
    emitCategory: ( value:string ) => void,
}


