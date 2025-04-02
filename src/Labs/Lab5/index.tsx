const REMOTE_SERVER =
  import.meta.env.VITE_REMOTE_SERVER;
import EnvironmentVariables from './EnvironmentVariables';
import HttpClient from './HttpClient';
import PathParameters from './PathParameters';
import QueryParameters from './QueryParameters.tsx';
import WorkingWithArrays from './WorkingWithArrays.tsx';
import WorkingWithArraysAsynchronously from './WorkingWithArraysAsynchronously';
import WorkingWithObjectsAsynchronously from './WorkingWithObjectAscyhronously';
import WorkingWithObjects from './WorkingWithObjects';
export default function Lab5() {
    return (
      <div id="wd-lab5">
        <h2>Lab 5</h2>
        <div className="list-group">
          <a href={`${REMOTE_SERVER}/lab5/welcome`}          
             className="list-group-item">
             Welcome
            
          </a>
           
        </div><hr/>
        <EnvironmentVariables/>
        <HttpClient/>
        <PathParameters/>
        <QueryParameters/>
        <WorkingWithArrays/>
        <WorkingWithObjects/>
        <WorkingWithArraysAsynchronously/>
        <WorkingWithObjectsAsynchronously/>
      </div>
  );}
  