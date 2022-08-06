import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { myBucket } from '../../AppComponent';

const BucketComponent: FC = observer(() => {

    console.log("BucketComponent is executed.");
    // let result = [];
    
    // for (let item of myBucket.items) {
    //     result.push(<Alert>Name: {item.name}, Description: {item.description}</Alert>)
    // }

    return <>
        {myBucket.items && 
            myBucket.items.map((x, index) =>
                <Alert key={index}>
                    Id: {x.id} Name: {x.name}, Description: {x.description}
                    <Button onClick={() => myBucket.deleteItem(x.id)}>Delete</Button>
                </Alert>)}
        </>
});

export default BucketComponent;