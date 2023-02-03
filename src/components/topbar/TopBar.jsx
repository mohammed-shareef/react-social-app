import './topbar.css'
import { Search,Person,Chat,Notifications } from '@mui/icons-material'  

export default function TopBar() {
  return (
    <div className='topBarContainer'>
       <div className="topBarLeft">
        <span className="topBarLogo">
          ReactSocial
        </span>
       </div>
       <div className="topBarCenter">
        <div className="searchBar">
            <Search className='searchIcon'/>
            <input placeholder="Search for friends or posts" className="searchInput" />
        </div>
       </div>
       <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Home</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person/>
            <span className="topBarIconBadge">10</span>
          </div>
          <div className="topBarIconItem">
            <Chat/>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Notifications/>
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topBarImage" />
       </div>
    </div>
  )
}
