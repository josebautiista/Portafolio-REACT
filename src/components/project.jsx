import { PropTypes } from "prop-types";
import { styled } from "styled-components";

export const ImgContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 90%;
`;

export default function Project(props) {
  const { src, alt, link } = props.datos;
  return (
    <ImgContainer href={link} target="_blank">
      <Img src={src} alt={alt} />
    </ImgContainer>
  );
}

Project.propTypes = {
  datos: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
