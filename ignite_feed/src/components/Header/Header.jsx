import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img className="ignite-logo" src={igniteLogo} alt="logo" />
        </header>
    );
}

