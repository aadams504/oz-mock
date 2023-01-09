import { Footer, NewsCardContainer, Title } from "./NewsCard.styles";

const NewsCard = ({ newsEntry }) => {
  const { name, imageUrl } = newsEntry;

  return (
    <NewsCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Title>{name}</Title>
      </Footer>
    </NewsCardContainer>
  );
};

export default NewsCard;
