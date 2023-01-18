import React from "react";

const OperadorBinario = ({ condition1, condition2, condition3 }) => {
    return (
        <>
            {condition1 && <button>Se da la condición 1!</button>}
            {condition2 && <button> Se da la condicion 2!</button>}
        </>
    );
};

export default OperadorBinario;
