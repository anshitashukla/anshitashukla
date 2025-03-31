// src/components/Snowflakes.tsx
import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const snowfall = keyframes`
  0% { transform: translateY(-10vh); opacity: 1; }
  100% { transform: translateY(110vh); opacity: 0.5; }
`;

const Snowflake = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: ${snowfall} 10s linear infinite;
`;

const Snowflakes: React.FC = () => {
  useEffect(() => {
    const snowflakes: JSX.Element[] = [];
    for (let i = 0; i < 50; i++) {
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      snowflakes.push(<Snowflake key={i} style={style} />);
    }
    setSnowflakes(snowflakes);
  }, []);

  const [snowflakes, setSnowflakes] = React.useState<JSX.Element[]>([]);

  return <div>{snowflakes}</div>;
};

export default Snowflakes;
