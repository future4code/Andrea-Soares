import React from 'react';

export function useInput() {
    const [ input, setInput ] = React.useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };
    const clear = ( ) => {
        setInput('');
    }
    
    return [ input, handleInput, clear ];
}
