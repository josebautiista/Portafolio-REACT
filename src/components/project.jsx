import PropTypes from "prop-types";
import { styled } from "styled-components";
import { DiGithubBadge } from "react-icons/di";
import { Fab, Tooltip } from "@mui/material";

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
`;

export const Img = styled.img`
  width: 90%;
  ${({ isMobile }) =>
    isMobile &&
    `
    width:80%;
  `}
`;

export const FabContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 70px;
  ${({ isMobile }) =>
    isMobile &&
    `
    right:35px;
    bottom:-8px;
  `}
`;

export default function Project(props) {
  const { src, alt, link, repo } = props.datos;
  const { isMobile } = props;

  const handleImgClick = () => {
    window.open(link, "_blank");
  };

  const handleFabClick = (event) => {
    event.stopPropagation();
    window.open(repo, "_blank");
  };

  return (
    <ImgContainer onClick={handleImgClick}>
      <Img src={src} alt={alt} isMobile={isMobile} />
      <FabContainer isMobile={isMobile}>
        <Tooltip title="Repositorio" arrow={true} placement="top">
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleFabClick}
            target="_blank"
          >
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
