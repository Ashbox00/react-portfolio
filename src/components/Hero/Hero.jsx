import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Gage!</h1>
            <p className={styles.description}>I'm a software engineer studying computer science at <b>Cal State Fullerton</b>. I enjoy learning something new about the world.</p>
            <div className={styles.buttons}>
                <a href="mailto:gageashbaughg@gmail.com" className={styles.contactBtn}>Email</a>
                <a href='//www.linkedin.com/in/gage-ashbaugh-64469b204' className={styles.contactBtn}>LinkedIn</a>
                <a href="//github.com/Ashbox00" className={styles.contactBtn}>Github</a>
            </div>
        </div>
        <img src={getImageUrl("m2.jpg")} alt="A picture of me" className={styles.heroImg}></img>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>



    </section>
       

}