import React from 'react';
import './App.css';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import InboxIcon from '@mui/icons-material/Inbox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  return (

    <div className='heading'>

          <div className='side'>
              <div className='icon'>
                <EditLocationAltIcon/>
              </div>

              <div className='icon'>
                <InboxIcon/>
              </div>

              <div className='icon'>
                <BookmarkIcon/>
              </div>

              <div className='icon'>
                <ShareIcon/>
              </div>

              <div className='icon'>
                <DownloadIcon/>
              </div>

              <div className='icon'>
                <PrintIcon/>
              </div>

              <div className='icon'>
                <SettingsIcon/>
              </div>
          </div>
      

      <div className='body'>
        <div className='title'>
          <h1>Welcome John!</h1>
          <h2>May 28,2020</h2>
        </div>

        <div className='box1'>
            <div className='second'>
              <div className='stat'>
                <p>Application Statistics</p>
                
              </div>
              <div className='boxy'>
                  
                  <div className='box'>
                    <h2>6</h2>
                    <h5>Contract Roles</h5>
                  </div>

                  <div className='box'>
                    <h2>12</h2>
                    <h5>Full-Time Roles</h5>
                  </div>

                  <div className='box'>
                    <h2>18</h2>
                    <h5>Total Applications</h5>
                  </div>
              </div>
              <div className='tableClass'>
                    <div className='status'>
                        <h2>Status Board</h2>
                    </div>
                    <table>
                      <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Duration</th>
                        <th>Job ID</th>
                        <th>Status</th>
                      </tr>
                    
                      <tr>
                        <td>Apple</td>
                        <td>Visual Designer</td>
                        <td>Full time</td>
                        <td>123456789</td>
                        <td>Phone Interview</td>
                      </tr>
                      <tr>
                        <td>Booster</td>
                        <td>Product Designer</td>
                        <td>Full time</td>
                        <td>123456788</td>
                        <td>Applied</td>
                      </tr>
                      <tr>
                        <td>Google</td>
                        <td>Interactive Designer</td>
                        <td>Full time</td>
                        <td>123456787</td>
                        <td>Zoom call</td>
                      </tr>
                      <tr>
                        <td>Instagram</td>
                        <td>Product Designer</td>
                        <td>12 months</td>
                        <td>123456786</td>
                        <td>Round 2 Interview</td>
                      </tr>
                      <tr>
                        <td>Omada Health</td>
                        <td>UX/UI Designer</td>
                        <td>Full time</td>
                        <td>123456785</td>
                        <td>Phone Interview</td>
                      </tr>
                      
                    </table>
                </div>
            </div> 
            <div className='third'>
              <div>
                  <div>
                      <p>Interviews</p>
                  </div>

                  <div className='boxBlue'>
                    <h5>Figma | Product Designer</h5>
                    <h6>Interview | Chud Lee</h6>
                    <h6>May 4,2020 @ 12:30pm-1:00pm</h6>
                  </div>
              </div>

              <div className='bluecolor'>
                  <div className='role'>
                    <h3>Roles</h3>
                  </div>

                  <div className='blue'>
                    <h4>6</h4>
                    <h5>Visual Designer</h5>
                  </div>

                  <div className='blue'>
                    <h4>4</h4>
                    <h5>Product Designer</h5>
                  </div>

                  <div className='blue'>
                    <h4>6</h4>
                    <h5>Interactive Designer</h5>
                  </div>

                  <div className='blue'>
                    <h4>2</h4>
                    <h5>UX/UI Designer</h5>
                  </div>
              </div>
                  
            </div>
          </div>    
        </div>
    </div>


   
    );
 };

export default App;