import PropTypes from "prop-types";
import { styled } from "styled-components";
import { DiGithubBadge } from "react-icons/di";
import { Fab, Tooltip } from "@mui/material";

export const ImgContainer = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 90%;
`;

export const FabContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 70px;
`;

export default function Project(props) {
  const { src, alt, link, repo } = props.datos;

  return (
    <ImgContainer href={link} target="_blank">
      <Img src={src} alt={alt} />
      <FabContainer>
        <Tooltip title="Repositorio" arrow={true} placement="top">
          <Fab color="primary" aria-label="add" href={repo} target="_blank">
            <DiGithubBadge size={"50px"} />
          </Fab>
        </Tooltip>
      </FabContainer>
    </ImgContainer>
  );
}

Project.propTypes = {
  datos: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
  }).isRequired,
};
