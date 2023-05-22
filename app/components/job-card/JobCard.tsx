'use client'

import { Job } from "@/app/types/Job";
import styles from './JobCard.module.scss';
import Image from "next/image";

type JobCardProps = {
 job: Job
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {


 console.log(job)

 const title = job.title.toLocaleLowerCase();

 return (
  <div className={styles.jobCard}>
   <h1 className={styles.company}>{job.company.display_name}</h1>
   <p className={styles.title}>{title}</p>
   <p className={styles.location}>{job.location.display_name}</p>
  </div>
 );
}

export default JobCard;