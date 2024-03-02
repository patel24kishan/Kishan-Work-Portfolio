import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Icon, Tooltip } from "@mui/material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Kishan Kahodariya</Logo>
        <Nav>
                <NavLink href="#about">About</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#experience'>Experience</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#education'>Education</NavLink>
                <NavLink href={Bio.blog} target="_Blank">Blog</NavLink>
        </Nav>
       
        <SocialMediaIcons>
            <Tooltip title="Itch-io">
             <SocialMediaIcon href={Bio.itchio} target="display">
                <Icon>
                <img src="https://image.pngaaa.com/170/5125170-small.png" height={50} width={50}/>
                </Icon>
                </SocialMediaIcon>

             </Tooltip>

             <Tooltip title="Facebook">
                <SocialMediaIcon href={Bio.facebook} target="display">
                <FacebookIcon />
            </SocialMediaIcon>
            </Tooltip>

            <Tooltip title="Linkedin">
                <SocialMediaIcon href={Bio.linkedin} target="display">
                <LinkedInIcon />
            </SocialMediaIcon>
            </Tooltip>

            <Tooltip title="Discord">
            <SocialMediaIcon href={Bio.discord} target="display">
            <Icon>
            <img src="https://www.svgrepo.com/show/452188/discord.svg" height={35} width={35}/>
             </Icon>
          </SocialMediaIcon>

            </Tooltip>

          
        </SocialMediaIcons>
        <Copyright> Developed by Kishan Kahodariya.<br/>&copy; All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;