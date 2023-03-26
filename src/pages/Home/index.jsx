import { useEffect, useState } from "react";
import { ListCharacters } from "../../components/cardCharacter";
import { Footer } from "../../components/footer";
import { SectionHero } from "../../components/sectionHero/index";
import { api } from "../../services/api";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    /*  api.get().then((data) => {
      console.log(data)
    }) */
    api.get("/v1/public/comics").then((response) => {
      setData(response.data.data.results);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <SectionHero />
      <ListCharacters data={data} />
      <Footer />
    </>
  );
};
