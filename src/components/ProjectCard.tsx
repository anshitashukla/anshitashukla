import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 535px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #007bff;
  background-color: #e6f3ff;
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: #666666;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: #4d4d4d;
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid #ffffff;
`;

const Button = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
`;

const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

interface Project {
  image: string;
  tags?: string[];
  title: string;
  date: string;
  description: string;
  member?: { img: string }[];
  github: string;
  webapp?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const calculateDescriptionHeight = () => {
    const baseHeight = 75;
    const additionalHeightPerDescription = project.member ? 0 : 40;
    return baseHeight + additionalHeightPerDescription;
  };

  return (
    <Card>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={`tag-${index}`}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description
          style={{
            height: calculateDescriptionHeight() + "px",
            WebkitLineClamp: project.member ? 3 : 5,
          }}
        >
          {project.description}
        </Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={`member-${index}`} src={member.img} />
        ))}
      </Members>
      {project.webapp ? (
        <ButtonContainer>
          <Button href={project.github} target="_blank">
            View Code
          </Button>
          <Button href={project.webapp} target="_blank">
            Visit Site
          </Button>
        </ButtonContainer>
      ) : (
        <CenteredButtonContainer>
          <Button href={project.github} target="_blank">
            View Code
          </Button>
        </CenteredButtonContainer>
      )}
    </Card>
  );
};

export default ProjectCard;
