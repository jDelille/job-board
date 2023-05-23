'use client'

import { Job } from "@/app/types/Job";
import styles from './JobCard.module.scss';
import Image from "next/image";
import Tag from "../tag/Tag";
import { useState } from "react";
import Map from "../map/Map";
import dynamic from "next/dynamic";

type JobCardProps = {
 job: Job
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {

 const [openMap, setOpenMap] = useState(false)
 const title = job.title.toLocaleLowerCase();

 const DynamicMap = dynamic(() => import('../map/Map'), {
  loading: () => <>
   <div className={styles.loading}>Loading map...</div>
  </>
 })


 return (
  <div className={styles.jobCard}>
   <div className={styles.tags}>
    <Tag value={job.category.label} />
   </div>
   <h1 className={styles.company}>{job.company.display_name}</h1>
   <p className={styles.title}>{title}</p>
   <p className={styles.location}>{job.location.display_name}</p>
   <p className={styles.description}>{job.description}</p>
   <div className={styles.salaries}>
    <p>Salary - <span>Estimated salary</span></p>
    <p className={styles.salary}>${job.salary_min}</p>

   </div>
   <div className={styles.externalButton}>
    <button onClick={() => setOpenMap(!openMap)}>

     {openMap ? "Close Map" : "Open Map"}

    </button>
    <a href={job.redirect_url} target="_blank">Learn More</a>
   </div>
   {openMap && (
    <div className={styles.map}>
     <DynamicMap lat={job.latitude} lng={job.longitude} />
    </div>
   )
   }
  </div >
 );
}

export default JobCard;