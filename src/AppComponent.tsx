import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './AppComponent.css';
import CountResultComponent from './components/CountResultComponent';
import getUser from './Http/fetches';

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

      <button className='my-btn' onClick={
        (ev: React.MouseEvent<HTMLButtonElement>) => {

          console.log('Inside button handler');

          setCount(prevValue => prevValue + 1);
          setCounts(prevValueArray => {

            console.log('Inside setCounts: prevValueArray.');

            return [...prevValueArray, count]; // copy is needed
          });
        }}>Add One</button>

      {/* <CountResultComponent index={99} xProperty={1} deleteHandler={(ev, index) => { console.log("No Effect. 1") }}></CountResultComponent>
      <CountResultComponent index={99} xProperty={1} deleteHandler={(ev, index) => { console.log("No Effect. 2") }}></CountResultComponent> */}

        {counts.length !== 0 &&
          (<div id='id-counts' className='counts'>
            {counts.map((x, index) => (<CountResultComponent
                key={index} // key is special react attribute.
                index={index}
                xProperty={x}
                deleteHandler={deleteHandler}></CountResultComponent>))}
          </div>)}
    </div>
  );
}

export default AppComponent;
