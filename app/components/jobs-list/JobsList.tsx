'use client';

import { fetcher } from '@/app/libs/fetcher';
import useSWR from 'swr';
import JobCard from '../job-card/JobCard';
import { Job } from '@/app/types/Job';
import styles from './JobsList.module.scss';
import Store from '@/app/store/store';
import { observer } from 'mobx-react';
import { useState } from 'react';

const JobsList = observer(() => {
 const appId = process.env.NEXT_PUBLIC_APP_ID;
 const appKey = process.env.NEXT_PUBLIC_APP_KEY;

 const resultsPerPage = Store.resultsPerPage;
 const position = Store.position;
 const location = Store.location;

 const [page, setPage] = useState(1);

 const url = `https://api.adzuna.com/v1/api/jobs/us/search/${page}?app_id=${appId}&app_key=${appKey}&results_per_page=${resultsPerPage}&what=${position}&where=${location}&content-type=application/json`;

 const { data, error, isLoading } = useSWR(url, fetcher);

 const resultCount = data?.count;
 const results = data?.results;

 const nextPage = () => {
  const nextPage = page + 1;
  setPage(nextPage)
 }

 const previousPage = () => {
  const nextPage = page - 1;
  setPage(nextPage)
 }

 const hasPreviousPage = page > 1;
 const hasNextPage = resultsPerPage * page < resultCount



 return (
  <div className={styles.jobsList}>
   <h1>Results: {resultCount} </h1>
   {error && (
    <div className={styles.error}>Error: Something went wrong.</div>
   )}
   {isLoading && !error ? (
    <p>Loading...</p>
   ) : (
    results?.map((result: Job) => <JobCard key={result.id} job={result} />)
   )}
   <div>
    {hasPreviousPage && <button onClick={previousPage}>Previous page</button>
    }
    {hasNextPage && <button onClick={nextPage}>Next page</button>}

   </div>
  </div >
 );
});

export default JobsList;
