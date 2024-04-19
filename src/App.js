
import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/themes/light.css'
import properties1 from './images/property-green.svg'
import properties2 from './images/property-orange.svg'
import properties3 from './images/Property-red.svg'
import orange from './images/Orange.svg'
import Insight from './images/Insight.svg'
import Green from './images/Green.svg'
import BTN from './images/BTN.svg'






function App() {
  return (
    
    <div className="my-container" style={{fontSize:"12px", display:"flex", width:"683px" , boxShadow: '0px 12px 42px -4px rgba(24, 39, 75, 0.12), 0px 8px 18px -6px rgba(24, 39, 75, 0.12)', alignContent:"center", alignItems:"center", justifyContent:"center", height:"118px", border:"1px solid rgba(229, 234, 239, 1)",marginTop:"400px",marginRight:"40%"}}>
      
<p  onMouseEnter={(e) => e.target.style.backgroundColor = 'green' }
        onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(160, 166, 177, 1)'} style={{fontWeight:"bolder", fontSize:"20px", alignItems:"center"}}></p> 
            <img src={BTN} alt='' className='clock'/><p style={{margin:"30px 0 30px 30px"}}>Avg in holding apart <br/><span style={{color: " rgba(22, 32, 91, 1)", fontWeight:"900", fontSize:"25px"}}> 3Years <img src={Insight} alt=''/></span></p> 
            <line className='meke' style={{fontWeight:"200", marginBottom:"10px",fontSize:"40px"}}>|</line>
             <p style={{margin:"0px 10px 0 0px"}}>Avg time for sale <br/> <span style={{fontSize:"25px", fontWeight:"900"}}>3.5Months <img src={orange} alt=''/></span></p> <line className='meke' style={{fontWeight:"200", fontSize:"40px",marginRight:"30px", marginBottom:"10px"}}>|</line>
<Tippy
     theme={'light'} interactive={true}  content={
          <div className='beri' style={{width:"299px", height:"88px"}}>
            <span style={{ color: 'green', fontSize: '20px', alignItems: 'end' }}>Positive</span> <br />
            <spann style={{color:" rgba(33, 35, 37, 1)"
}}>10%Avg flexibility means that you may end with much cheaper buying price</spann>
          </div>
        }
        className="abe"
      >
          <div > 
              <p style={{marginRight:"10px", cursor:"pointer", paddingLeft:"10px",marginLeft:"10px"}}>Avg flexibility in closing a deal <br/> <span style={{fontSize:"25px"}}>10%   <img src={Green} alt=''/> </span></p>
           </div>
      </Tippy>
      
    </div>
  );
}

export default App;
