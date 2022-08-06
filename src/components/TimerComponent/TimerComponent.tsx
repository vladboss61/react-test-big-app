import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Alert } from 'react-bootstrap';
import { myTimer } from '../../AppComponent';

const TimerComponent: FC = observer(() => {

    console.log("TimerComponent is executed.");

    return (<Alert className='m-1'>
            Time: {myTimer.seconds}
        </Alert>)
});


export default TimerComponent;