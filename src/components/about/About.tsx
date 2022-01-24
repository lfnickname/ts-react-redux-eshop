import React from 'react';
import styles from './about.module.sass'
import {ReactComponent as QualitySVG} from '../../svg/24h.svg'
import {ReactComponent as ProtectionSVG} from '../../svg/protection.svg'
import {ReactComponent as LikeSVG} from '../../svg/like.svg'

interface AboutProps {

}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <div className={styles.about}>
            <div className={styles.why}><span >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></div>
            <div className={styles.cardwrapper}>
                <div className={styles.quality}>
                    <div className={styles.cardFlex}>
                        <div className={styles.text}>Lorem ipsum dolor sit amet</div>
                        <div className={styles.logo}><QualitySVG className={styles.qualitylogo}/></div>
                    </div>
                </div>
                <div className={styles.protected}>
                    <div className={styles.cardFlex}>
                        <div className={styles.text}>Lorem ipsum dolor sit amet</div>
                        <div className={styles.logo}><ProtectionSVG className={styles.protectedlogo}/></div>
                    </div>
                </div>
                <div className={styles.like}>
                    <div className={styles.cardFlex}>
                        <div className={styles.text}>Lorem ipsum dolor sit amet</div>
                        <div className={styles.logo}><LikeSVG className={styles.likelogo}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;