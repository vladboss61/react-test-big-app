import { FC } from 'react';
import { Alert } from 'react-bootstrap';
import { myTimer } from '../../AppComponent';

const TimerNotObserverComponent: FC = () => {

    console.log("TimerNotObserverComponent is executed.");

    return (<Alert variant='warning' className='m-1'>
            Time: {myTimer.seconds}
        </Alert>)
}

export default TimerNotObserverComponent;