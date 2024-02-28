import Footer from "../components/footer/footer";
import HomeCarousel from "../components/homeCarousel/homeCarousel";
import HomeCarouselLeft from "../components/homeCarouselLeft/homeCarouselLeft";
import HomeCarouselRight from "../components/homeCarouselRight/homeCarouselRight";
import HomeMenu from "../components/homeMenu/homeMenu";
function Home() {
  return (
    <div className="App">
      <HomeCarousel />
      <HomeMenu/>
      <HomeCarouselLeft />
      <HomeCarouselRight />
      <Footer />
    </div>
  );
}

export default Home;
