import React, { useState } from 'react';
import Re3vr from './Re3vr';
import Switch from 'react-switch';
import icon from './g-retriever.png'
import sidebarIcon from './sidebarIcon.png'
import footerImage from './waitingre3vr2.png'
import './styles.css'


const App = () => {
  const [darkmode, setdarkmode] = useState(false)
  const HandleDarkmodeChange = (checked) => {
    setdarkmode(checked)
  }
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }
  console.log("isSideBarOpen:", isSideBarOpen)


  return (
    <div className={`app-container ${darkmode ? 'darkmode' : 'lightmode'}`}>
      <header className='header'>
        <div className='appName'>
          <img className={`icon ${darkmode ? 'darkIcon' : ''}`} src={icon} alt="Icon" />
          <h1>RE3VR</h1>
        </div>
        <img className={`sidebarIcon ${darkmode ? 'darkIcon' : ''}`} src={sidebarIcon} alt='sbIcon' />
      </header>
      <div className="toggleswitch">
        <Switch
          className="toggleswitch"
          checked={darkmode}
          onChange={HandleDarkmodeChange}
          onColor="#007bff"
          offColor="#cccccc"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
      <div>
        <p className='herotext'>
          RE3VR, pronounced 'Retriever', helps you sniff out data from any public API endpoint, processes and returns the data in a list view, all in less than 10seconds, depending on the size and type of data being fetched. <br /> Try it out!.
        </p>
        <Re3vr darkmode={darkmode} />
        <div className='ftimg'>
          <img className={`footerImage ${darkmode ? 'darkIcon' : ''}`} src={footerImage} alt="FooterImg" />
          <p className='fttxt'>
            <b>RE3VR v0.1.0 @2024</b>
          </p>
        </div>

      </div>
    </div>
  );
};
export default App;