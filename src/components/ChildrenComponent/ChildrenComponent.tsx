import { FC, useContext } from "react";
import classes from './ChildrenComponent.module.css';
import { GlobalContext } from '../../index';
import { Alert } from "react-bootstrap";

type ChildrenProps = {
    children?: JSX.Element, // React Feature.
    title: string
}

const ChildrenComponent: FC<ChildrenProps> = (props: ChildrenProps): JSX.Element => {

    const globalContextValue = useContext(GlobalContext);

    const ifDefault: JSX.Element = props.children ?? (<div>Default Value from ChildrenComponent.</div>)

    return (<>
        <div className={classes.flex + ' m-3'}>
            {props.children}
            <Alert variant="primary">{ifDefault}</Alert>
            <Alert variant="secondary"><div>ChildrenComponent title: {props.title}</div></Alert>
            <Alert variant="success"><div>{globalContextValue}</div></Alert>
        </div>
    </>)
}

export default ChildrenComponent; 