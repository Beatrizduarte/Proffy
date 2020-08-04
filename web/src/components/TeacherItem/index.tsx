import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
      <article className="teacher-item">
        <header>
          <img src="https://avatars1.githubusercontent.com/u/28421430?s=460&u=1236347862e6ca4f2631207e428c312d16ee7d16&v=4" alt="Beatriz Duarte" />
          <div>
            <strong>Beatriz Duarte</strong>
            <span>Ciência</span>
          </div>
        </header>

        <p>
          Lord Sith ensinando sobre o caminho do lado negro da força,
          pilotando naves dahora e explodindo planetas.
            <br /> <br />
            Adoro caçar rebeldes nas horas vagas e viajar por ai com um exército
            de Stormtrooper e usando uma armadura com capa preta.
            <br /> <br />
            Alerto que não serei morta por nenhum aprendiz e que a força esteja sempre
            com você.
          </p>

        <footer>
          <p>
            Preço/hora
              <strong>R$90,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
              Entra em contato
            </button>
        </footer>
      </article>
    );
}

export default TeacherItem;