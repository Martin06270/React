
import { useState } from 'react';

const App = () => {
    useState(); //  c'est l'état locale d'un composant hook c'est une fonction qui execute une tache bien précise .

    let count = 0;

    const handleIncrement = () => {
        count++;
        console.log(count);

    }
}