import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import DisplayComponent from './components/displayComponent/displayComponent';
import BodyText from './components/bodyText/bodyText';
import HomePageAccordion from './components/homePageAccordion/homePageAccordion';
import Footer from './components/footer/footer';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
function App() {
  return (
    <div className="App">
      <Navbar />
      <DisplayComponent />
      <BodyText />
    
      <div className="accordion_div">
      <HomePageAccordion title="Architecture" bodytext="LUV Studio’s understanding of architecture resides in the creation of the fine art and methodical science of designing buildings and spaces that will have a profound improvement on people’s lifestyles. Our architecture is uniquely matched to each project, but always seeks to combine beauty and meaning by placing people at the center of each design." />
      <HomePageAccordion title="Interior Design" bodytext="LUV Studio’s interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space."/>
      <HomePageAccordion title="Landscape Design" bodytext="LUV Studio’s landscape design is the art of arranging or modifying the features of a yard, an urban area, etc., for aesthetic or practical reasons."/>
      <HomePageAccordion title="Construction" bodytext="LUV Studio’s construction is the process of constructing a building or infrastructure. Construction differs from manufacturing in that manufacturing typically involves mass production of similar items without a designated purchaser, while construction typically takes place on location for a known client."/>
      <HomePageAccordion title="Project Management" bodytext="LUV Studio’s project management is the process of leading the work of a team to achieve goals and meet success criteria at a specified time. The primary challenge of project management is to achieve all of the project goals within the given constraints."/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
