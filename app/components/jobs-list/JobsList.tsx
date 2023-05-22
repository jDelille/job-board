'use client'

import { fetcher } from "@/app/libs/fetcher";
import useSWR from 'swr'
import JobCard from "../job-card/JobCard";
import { Job } from "@/app/types/Job";
import styles from './JobsList.module.scss';

const JobsList = () => {

 const appId = process.env.NEXT_PUBLIC_APP_ID
 const appKey = process.env.NEXT_PUBLIC_APP_KEY

 const url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=20&what=react%20developer&where=arizona&content-type=application/json`

 const { data, error, isLoading } = useSWR(
  url, fetcher
 )

 console.log(data?.results)

 const resultCount = data?.count
 const results = data?.results

 return (
  <div className={styles.jobsList}>
   <h1>Results: {resultCount} </h1>
   {isLoading ? (
    <p>Loading...</p>
   ) : (
    results?.map((result: Job) => (
     <JobCard key={result.id} job={result} />
    ))
   )
   }

  </div >

 );
}

export default JobsList;