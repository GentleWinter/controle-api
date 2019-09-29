import React from 'react'

const Pessoas = ({pessoas}) => {
    return(
        <div>
            <center><h1>Lista de Personagens</h1></center>
            {pessoas.map((pessoas) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{pessoas.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{pessoas.gender}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default Pessoas;