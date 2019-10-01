import React from 'react'


const Pessoas = ({pessoas}) => {
    return(
        <div>
            <center><h1>Lista de Personagens</h1></center>
            {pessoas.map((item) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{item.gender}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">{item.eye_color}</h6>

                    </div>
                </div>
            ))}
        </div>
    )
};
export default Pessoas;