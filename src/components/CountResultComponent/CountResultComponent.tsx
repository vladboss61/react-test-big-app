import React, { FC, useEffect } from "react"
import classes from './CountResultComponent.module.css';

type CountResultProps = {
    index: number,
    xProperty: number,
    deleteHandler: ((ev: React.MouseEvent<HTMLButtonElement>, key: number) => void)
}

const CountResultComponent: FC<CountResultProps> = (props: CountResultProps): JSX.Element => {

    useEffect(() => {
      console.log("%c CountResultComponent: first render of component.", 'background: #222; color: yellow');
      return () => {
        console.log("%c CountResultComponent: is executed when component is destroyed.", 'background: #222; color: red');
      }
    }, []);

    return (<>
        <div className={classes.flex}>
            <div className={classes.count}>CountResultComponent: {props.xProperty}</div>
            <div>
                <button className={classes.delete} onClick={ev => props.deleteHandler(ev, props.index)}>Delete</button>
            </div>
        </div>
    </>)
}


export default CountResultComponent