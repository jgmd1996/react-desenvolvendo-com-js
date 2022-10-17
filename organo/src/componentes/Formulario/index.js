import Botao from '../Botao/index.js';
import CampoTexto from '../CampoTexto/index.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import './Formulario.css'

const Formulario = () => {

    const times =[
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'ux e Design',
        'Mobile',
        'Inovaçao e Gestão',

    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("form doi submetido")
    }
    
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do coloborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
            <Botao >Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;