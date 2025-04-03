// src/components/Intro.tsx
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Slide-up animation for text elements
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Pop-in animation for the profile image
const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Container that uses the theme's background color
const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
  background: var(--bg-color);
`;

// Profile image styling
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #ff00ff;
  animation: ${popIn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

// Title styling
const Title = styled.h1`
  font-size: 48px;
  margin: 0;
  color: var(--text-color);
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

// Container for the role line (static text + animated words)
const RoleContainer = styled.div`
  font-size: 24px;
  color: var(--text-color);
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: 0.7s;
  animation-fill-mode: backwards;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Animated text with blinking caret effect
const AnimatedText = styled.span`
  border-right: 2px solid var(--text-color);
  margin-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  animation: blink 0.7s steps(1) infinite;

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

// Subtitle styling (optional)
const Subtitle = styled.p`
  font-size: 24px;
  margin: 10px 0;
  color: #ff00ff;
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: 0.9s;
  animation-fill-mode: backwards;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Description styling
const Description = styled.p`
  font-size: 16px;
  max-width: 600px;
  margin: 20px 0;
  color: var(--text-color);
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: 1.1s;
  animation-fill-mode: backwards;

  a {
    color: #ff00ff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 10px;
  }
`;

// Button styling
const Button = styled.a`
  background: #ff00ff;
  color: white;
  padding: 10px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  animation: ${slideUp} 0.8s ease forwards;
  animation-delay: 1.3s;
  animation-fill-mode: backwards;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #e600e6;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

// Typewriter component to animate the text
interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  pauseTime?: number;
  deletingSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 150,
  pauseTime = 2000,
  deletingSpeed = 50,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing effect: add one letter at a time
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        // When word is complete, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting effect: remove one letter at a time
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    pauseTime,
    deletingSpeed,
  ]);

  return <AnimatedText>{text}</AnimatedText>;
};

const Intro: React.FC = () => {
  return (
    <IntroContainer id="about">
      <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
      <Title>Hi, I am Anshita Shukla</Title>
      <RoleContainer>
        I am a
        <Typewriter
          words={["Competitive Coder", "Programmer", "Software Engineer"]}
        />
      </RoleContainer>
      <Subtitle>Full Stack Developer &amp; Software Engineer</Subtitle>
      <Description>
        I am a skilled Full Stack Developer and Software Engineer with over 4
        years of experience in building scalable web and mobile applications. I
        specialize in JavaScript, React.js, Node.js, and cloud technologies like
        AWS, with a strong focus on performance optimization, microservices, and
        AI integration. I am passionate about creating seamless user experiences
        and solving complex technical challenges. Reach me at 571-579-0839,
        anshitashukla0102@gmail.com, or connect with me on{" "}
        <a href="https://linkedin.com/in/anshita-shukla">LinkedIn</a>. Check out
        my portfolio at{" "}
        <a href="https://anshitashukla.netlify.app">
          anshitashukla.netlify.app
        </a>
        .
      </Description>
      <Button href="#">Check Resume</Button>
    </IntroContainer>
  );
};

export default Intro;
