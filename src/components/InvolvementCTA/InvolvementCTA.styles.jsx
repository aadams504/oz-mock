import styled from "styled-components";

export const CtaContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
`;

export const CtaImageContainer = styled.div`
  width: 25%;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  &:hover {
    img {
      opacity: 0.6;
    }
  }
`;
