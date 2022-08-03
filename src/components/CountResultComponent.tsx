import React, { useEffect } from "react"
import './CountResultComponent.css';

type CountResultProps = { 
    index: number,
    xProperty: number,
    deleteHandler: ((ev: React.MouseEvent<HTMLButtonElement>, key: number) => void)
}

const CountResultComponent = (pros: CountResultProps): JSX.Element => {

    useEffect(() => {
      console.log("%c CountResultComponent: first render of component.", 'background: #222; color: yellow');
      return () => {
        console.log("%c CountResultComponent: is executed when component is destroyed.", 'background: #222; color: red');
      }
    }, []);


    return (<>
        <div className="flex">
            <div className="count">CountResultComponent: {pros.xProperty}</div>
            <div>
                <button className="delete" onClick={ev => pros.deleteHandler(ev, pros.index)}>Delete</button>
            </div>
        </div>
    </>)
}


export default CountResultComponent