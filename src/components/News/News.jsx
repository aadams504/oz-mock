import NewsCard from "../Card/NewsCard";
import { NewsCardContainer } from "../Card/NewsCard.styles";

const News = () => {
  const newsEntries = [
    {
      id: 1,
      title: "News 1",
      img: "../../assets/news-1.png",
      text: "...",
    },
    {
      id: 2,
      title: "News 2",
      img: "../../assets/news-2.png",
      text: "...",
    },
    {
      id: 3,
      title: "News 3",
      img: "../../assets/news-3.png",
      text: "...",
    },
  ];
  return (
    <>
      <NewsCardContainer>
        {newsEntries &&
          newsEntries.map((newsEntry) => (
            <NewsCard key={newsEntry.id} newsEntry={newsEntry} />
          ))}
      </NewsCardContainer>
    </>
  );
};

export default News;
