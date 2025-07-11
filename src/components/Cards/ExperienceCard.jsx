import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 16px;
    background: rgba(30,32,44, 0.7); /* Glass look */
    backdrop-filter: blur(8px);
    box-shadow: 0 12px 32px 0 rgba(80,60,200,0.10), 0 2px 16px 0 rgba(24,22,45,0.16);
    padding: 24px 28px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: 0.25s all cubic-bezier(.4,2,.3,1);
    border: 1.5px solid #854CE6;
    box-shadow: 0 0 24px 0 #854CE6, 0 0 0 1px #854CE6, 0 8px 32px rgba(23, 92, 230, 0.15);

    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: box-shadow 0.3s, transform 0.3s;
    &:hover{
        box-shadow: 0 0 40px 2px #854CE6, 0 0 0 2px #854CE6, 0 16px 40px rgba(23, 92, 230, 0.2);
        transform: translateY(-6px) scale(1.012);
    }
    @media only screen and (max-width: 768px){
        width: 95vw;
        padding: 10px;
    }
    &:hover {
        box-shadow: 0 16px 44px 0 rgba(80,60,200,0.14), 0 2px 32px 0 rgba(24,22,45,0.24);
        transform: translateY(-8px) scale(1.025);
        border: 2px solid #A583FF;
    }
    @media only screen and (max-width: 768px){
        width: 92vw;
        padding: 12px 8px;
        gap: 8px;
    }
    &:hover ${Document} {
        display: flex;
    }
    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
`

const Image = styled.img`
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>
                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard
