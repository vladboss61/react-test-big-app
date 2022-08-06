import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './AppComponent.css';

import CountResultComponent from './components/CountResultComponent/CountResultComponent';
import ChildrenComponent from './components/ChildrenComponent/ChildrenComponent';
import TimerComponent from './components/TimerComponent/TimerComponent';
import UserData from './Models/UserData.model';
import TimerNotObserverComponent from './components/TimerComponentNotObserber/TimerNotObserverComponent';

import { config } from './api-constants';
import { Button } from 'react-bootstrap';
import { TimerStore } from './store/Timer.store';
import { BucketStore, ItemBucket } from './store/Bucket.store';
import BucketComponent from './components/BucketComponent/BucketComponent';
import MyFormComponent from './components/MyFormComponent/MyFormComponent';

export const myTimer = new TimerStore();
export const myBucket = new BucketStore();

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function AppComponent(): JSX.Element {

  console.log("AppComponent: Function executed.");
  
  let [count, setCount] = useState<number>(0);
  let [counts, setCounts] = useState<number[]>([]);

  console.log("AppComponent Count: %d", count);

  useEffect(() => {
    console.log("AppComponent: executed Every Render and Rerender.");
  });

  useEffect(() => {
    console.log("AppComponent: executed First Render of component.");

    const getUser = async (): Promise<UserData> => {
      const result: Response = await fetch(`${config.reqresUrl}/api/users/2`);
      const body = await result.json();

      console.log("Body Response: ");
      console.log(body);

      const castedBody = body as UserData; // cast using as operator.

      console.log("CastedBody Response: ");
      console.log(castedBody);

      return castedBody;
    }

    getUser();
    return () => {
      console.log("AppComponent: executed when component is destroyed.");
    }
  }, []);

  useEffect(() => {
    console.log("%c AppComponent: Executed every time when either count or counts are changed.", 'background: green; color: yellow');
    // Pass an array of dependencies and the useEffect hook will only run if one of the dependencies changes.
  }, [count, counts]);

  //Definition of Delete Handler
  const deleteHandler: (ev: React.MouseEvent<HTMLButtonElement>, index: number) => void = (ev, index) => {
    setCounts(prevCounts => {
      prevCounts.splice(index, 1); // delete by index, second arg is count of deletion items
      return [...prevCounts]; // copy array is so needed.
    })
    console.log('%c Delete handler is executed.', 'color: green');
  }
  //End Delete Handler

  console.log("Just before return from AppComponent function component.")

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/AppComponent.tsx</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>

      
      <ChildrenComponent title='Hello from AppComponent 1.'>
          <div>Passed content from AppComponent.</div>
      </ChildrenComponent>

      <ChildrenComponent title='Hello from AppComponent 2.'></ChildrenComponent>

      <Button variant="primary" className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {

          console.log('Inside button handler');

          setCount(prevValue => prevValue + 1);
          setCounts(prevValueArray => {

            console.log('Inside setCounts: prevValueArray.');

            return [...prevValueArray, count]; // copy is needed
          });
          console.log("Add One btn is executed.")
        }}>Add One</Button>

        {counts.length !== 0 &&
          (<div id='id-counts' className='counts'>
            {counts.map((x, index) => (<CountResultComponent
                key={index} // key is special react attribute.
                index={index}
                xProperty={x}
                deleteHandler={deleteHandler}></CountResultComponent>))}
          </div>)}

          <div>
            <Button variant="primary" className='my-btn' onClick={() => myTimer.increaseTimer()}>Timer Click</Button>
          </div>

          <TimerComponent></TimerComponent>
          <TimerNotObserverComponent></TimerNotObserverComponent>

          <div>
            <Button variant="primary" className='my-btn' onClick={() => {
              myBucket.addItem(
                { id: getRandomInt(0, 10000000), name: "Cola", description: "Tasty product." } as ItemBucket)
            }}>Add To Bucket</Button>
          </div>

          <BucketComponent></BucketComponent>

          <MyFormComponent></MyFormComponent>
    </div>
  );
}

export default AppComponent;
