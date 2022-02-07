import React from 'react';
import styles from './footer.module.sass'

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
                <span className={styles.contactme}>
                </span>
                <span className={styles.contact_rights_wrapper}>
                    <span className={styles.contacts}>
                        <div>Company name</div>
                        <div>+7-123-345-67-89</div>
                        <div>example@mail.io</div>
                    </span>
                    <span className={styles.rights}>
                        <div className={styles.name}>© 2022 Lorem</div>
                        <div className={styles.reverved}>not all right reserved</div>
                    </span>
                </span>
        </div>
    );
}

export default Footer;