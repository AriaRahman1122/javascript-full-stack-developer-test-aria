import styles from '../styles/navbar.module.scss';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function Navbar () {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.wrapper}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search Movies Total ..." />
                        <SearchOutlinedIcon className={styles.icon}/>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <LanguageOutlinedIcon className={styles.icon} />
                            English
                        </div>
                        <div className={styles.item}>
                            <DarkModeOutlinedIcon
                            className={styles.icon}
                            />
                        </div>
                        <div className={styles.item}>
                            <NotificationsNoneOutlinedIcon className={styles.icon}/>
                            <div className={styles.counter}>1</div>
                        </div>
                        <div className={styles.item}>
                            <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
                            <div className="counter">2</div>
                        </div>
                        <div className={styles.item}>
                            <ListOutlinedIcon className={styles.icon} />
                        </div>
                        <div className={styles.item}>
                            <img
                            src="../assets/gallery/5.png"
                            alt=""
                            className={styles.avatar}
                            />
                        </div>
                        </div>
                        
                </div>
            </div>
        </div>
    );
}

export default Navbar;