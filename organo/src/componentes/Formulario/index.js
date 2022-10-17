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
    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do coloborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label="Time" itens={times}/>
            <Botao >Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;