import './Colaborador.css'
//http://github.com/jonathancodev.png
//http://github.com/peas.png
//http://github.com/Doudement-max.png
//http://github.com/Lucas Doudement.png
//Lucas Doudement
const Colaborador = ({nome,imagem,cargo}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
            <img src={imagem} alt={nome}/>
            
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;