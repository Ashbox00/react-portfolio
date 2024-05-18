import React from 'react'
import { getImageUrl } from '../../utils'
import * as styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}><u>About</u></h2>
            <div className={styles.content}>
                
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("csuf.png")}className={styles.listImg} ></img>
                        <div className={styles.aboutItemText}>
                        <h3>Full Time Student</h3>
                        <p>I'm currently finishing up my bachelors of Computer Science at California State University of Fullerton</p>
                        </div>
                    </li>
                    <li  className={styles.aboutItem}>
                        <img src={getImageUrl("fullstack.png")} className={styles.listImg}></img>
                        <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer</h3>
                        <p>I have professional experience developing functional and dynamic websites using Full Stack</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("c++.png")} className={styles.listImg}></img>
                        <div className={styles.aboutItemText}>
                        <h3>Software Engineer</h3>
                        <p>I have built tons of engaging and challenging projects in <u>C++</u> and <u>Python</u> many of which are listed below</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}