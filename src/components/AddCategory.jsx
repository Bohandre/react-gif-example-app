import { useState } from "react"

export const AddCategory = ({ placeholder="Buscar gifs", onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange = ( event ) => {

        setInputValue( event.target.value );

        // setInputValue( 'Hola Mundo' );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 2 ) return;
        
        // setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim() );
        setInputValue( '' );
    }


  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder={ placeholder }
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
