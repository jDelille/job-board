import Controls from './components/controls/Controls';
import JobsList from './components/jobs-list/JobsList';
import './scss/globals.scss';

export default function Home() {
  return (
    <div className='main'>
      <Controls />
      <JobsList />
    </div>
  )
}
