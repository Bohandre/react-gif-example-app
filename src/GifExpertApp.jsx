import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'Kimetsu no Yaiba' ] );

    const onAddCategory = ( newCategory ) => {

        if( categories.includes( newCategory ) ) return;
        setCategories( [ newCategory , ...categories, ] );
    }

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

         {/* Input */}
         <AddCategory 
              // setCategories={ setCategories } 
              onNewCategory={ ( value ) => onAddCategory( value ) }
          />
       

         {/* Listado de Gif */}
         
            { categories.map( category => (
                  <GifGrid 
                      key={ category } 
                      category={ category } 
                  />
                ))
            }

         {/* Gif Item */}
    </>
  )
}
