
import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {

    return (

        <article className="teacher-item">

        <header>

            <img src="https://avatars2.githubusercontent.com/u/53861778?s=460&u=c49f2afa7c364f4ffb49a99908f48f8d16fcc51b&v=4" alt="Geise Saunier" />

            <div>

                <strong>Geise Saunier</strong>
                <span>Matemática</span>
            </div>
        </header>

        <p>

            Iniciou a graduação em Engenharia de Software no Instituto de Ciências Exatas e Tecnologia - ICET-UFAM. Atualmente está em mobilidade acadêmica na Universidade de Brasília - UnB.

            Alguns dos trabalhos que apresento interesse:
            Levantamento de Requisitos, pois considero etapa crucial para o sucesso no desenvolvimento;
            Desenvolvedora back-end, nas linguagens Python e JavaScript;
            Pesquisas que busquem atrelar matemátia a computação, visto que considero as duas áreas de extrema relevânica;

            Área de interesse: computação forense, uma vez que pretendo atuar na área de defesa cibernética como perita criminal digital.

            Além dos conhecimentos em computação, possuo afinidade com os assuntos referentes a contabilidade, matemática financeira e licitações e contratos administrativos, em consequência de minha formação técnica em Serviços Públicos pelo Instituto Federal do Amazonas - IFAM.
       
        </p>

        <footer>

            <p>
                Preço/hora

            <strong>R$80,00</strong>

            </p>

            <button type="button">

                <img src={whatsappIcon} alt="whhatsapp" />

            Entrar em contato


        </button>


        </footer>


    </article>

    );
}

export default TeacherItem;