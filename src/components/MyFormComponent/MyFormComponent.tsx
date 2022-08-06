import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';

const MyFormComponent: FC = observer(() => {

    console.log("MyFormComponent is executed.");
    <form>

    </form>
    return <>
          <Form onSubmit={(ev) => {
                    ev.preventDefault();
                    const all: any = ev.target as any;
                    console.log(all[0].value);
                    console.log(all[1].value);
                }
            }>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(ev) =>  {
                    console.log(ev);
                    const input: any = ev.target as any;
                    console.log(input.value);
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
    </Form>
    </>
});

export default MyFormComponent;