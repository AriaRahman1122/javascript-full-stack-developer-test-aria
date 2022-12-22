
import styles from '../styles/sidebar.module.scss';
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';

function Sidebar () {
    return (
        <div className={styles.sidebar}>
            <div className={styles.top}>
          <span className={styles.logo}>My Movie</span>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>Kategori</p>
            <li>
              <BabyChangingStationIcon className={styles.icon} />
              <span>Drama</span>
            </li>
            <li>
              <AlignHorizontalCenterIcon className={styles.icon} />
              <span>Horror</span>
            </li>
          <li>
            <TheaterComedyIcon className={styles.icon} />
            <span>Comedy</span>
          </li>
          <li>
            <SportsKabaddiIcon className={styles.icon} />
            <span>Action</span>
          </li>
          <p className={styles.title}>USEFUL</p>
          <li>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className={styles.icon} />
            <span>Notification</span>
          </li>
          <li>
            <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
            <span>Message</span>
          </li>
          <p className={styles.title}>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className={styles.icon} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={styles.icon} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div
          className={styles.colorOption}
        ></div>
        <div
          className={styles.colorOption}
        ></div>
      </div>
        </div>
    );
}

export default Sidebar;