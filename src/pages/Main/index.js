/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useCallback } from 'react';

import { Container, Content } from './styles';

function Main() {
  const dayGraduation = new Date("Nov 23 2020 00:00:00");
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const countDown = useCallback(() => {
    const currentTime = new Date();
    const difference = dayGraduation - currentTime;

    setDays(Math.floor(difference / 1000 / 60 / 60 / 24));
    setHours(Math.floor(difference / 1000 / 60 / 60 ) % 24);
    setMinutes(Math.floor(difference / 1000 / 60 ) % 60);
    setSeconds(Math.floor(difference / 1000) % 60);

    },[dayGraduation]
  );

  setInterval(countDown)

  return (
    <Container>
      <Content>
        <h1>Engenharia de Software 2020 💻</h1>
        <h1>🚀 Bora Formaaaaaa 🚀</h1>
        
        <div>
          <div>
            <span>{days < 10 ? '0' + days : days}</span>
            <span>Dias</span>
          </div>

          <div>
            <span>{hours < 10 ? '0' + hours : hours}</span>
            <span>Horas</span>
          </div>

          <div>
            <span>{minutes < 10 ? '0' + minutes : minutes}</span>
            <span>Minutos</span>
          </div>
          
          <div>
            <span>{seconds < 10 ? '0' + seconds : seconds}</span>
            <span>Segundos</span>
          </div>
       
        </div>
      </Content>
    </Container>
  );
}

export default Main;
