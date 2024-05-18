import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return <section id="experience" className={styles.container}>
        <h2 className={styles.title}><u>Experience</u></h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImgContainer}><img className={styles.skillImage} src={getImageUrl(skill.imageSrc)}/></div>
                        <p>{skill.title}</p>
                    </div>
})
                }</div>
            <ul className={styles.history}>
                {
                    history.map((historyItem,id) => {
                        return <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)}/>
                        <div className={styles.historyItemDetails} >
                            <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                            <h5>{`${historyItem.startDate} - ${historyItem.endDate}`}</h5>
                            <p>{`${historyItem.description}`}</p>
                        </div>
                        </li>
                    })
                }

            </ul>
        </div>
    </section>;
}