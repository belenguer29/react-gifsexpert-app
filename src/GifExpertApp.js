import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch ', 'SamuraiX ', 'Dragon Ball'];

    const personaje = 'Naruto';

    const [categories, setCategories] = useState(['Kimetsu no Yaiba']);

    const handleAdd = () => {
        setCategories([personaje, ...categories]); //Colocar en primera posicion
        // setCategories([...categories, personaje]);
        //setCategories(cats => [personaje,...cats]);
    }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp