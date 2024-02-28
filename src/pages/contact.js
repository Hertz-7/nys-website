
import './contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import Background from '../components/background/bgimg';
import Backimg from './banner.jpg'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import IconButton from '@mui/material/IconButton';
function App() {
  return (
    <div className="App">
        <Background bg={Backimg}/>
        <Grid container spacing={2} margin={0} className='raabtabody'>
            <Grid item xs={9} md={5} marginTop={0}  className='text'>    
                <p className='msgtext'>Send a Message</p>
                <p className='msgtag'>We Are Always Ready to Hear From You</p>
            </Grid>
            <Grid item xs={9} md={6} className='form'>    
                
                   <input type="text" class="form-control mb-3 w-45" id="exampleFormControlInput1" placeholder="Your Name"/>
                   <input type="number" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Phone Number"/>
                
                
                    <input type="email" class="form-control mb-3 w-45" id="exampleFormControlInput1" placeholder="name@example.com"/>
                
                
                    <input type="text" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Subject"/>
                
                
                    <textarea className="emailbody"class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder='Write a Message'></textarea>
                    <button type="button" class="submitbtn" >Submit</button>
              </Grid>
        </Grid>
        <hr className='follow-us-divider' />

      <div className="social-section">
      <div className="social-header">
        <h2>SOCIALS</h2>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com" className="social-link">INSTAGRAM</a>
        <a href="https://www.facebook.com" className="social-link">FACEBOOK</a>
        <a href="https://www.linkedin.com" className="social-link">LINKEDIN</a>
      </div>
    </div>

    </div>
  );
}

export default App;
