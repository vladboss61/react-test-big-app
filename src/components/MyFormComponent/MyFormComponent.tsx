import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';

type MyFormControl = {
    formBasicEmail: { value: string };
    formBasicPassword: { value: string };
    formBasicCheckbox: { checked: boolean };
}

const MyFormComponent: FC = observer(() => {

    console.log("MyFormComponent is executed.");
    <form>

    </form>
    return <>
          <Form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e);
                    const target = e.target as typeof e.target & MyFormControl

                    const email = target.formBasicEmail.value; // typechecks!
                    const password = target.formBasicPassword.value; // typechecks!
                    const checkbox = target.formBasicCheckbox.checked; // typechecks!

                    console.log(email);
                    console.log(password);
                    console.log(checkbox);
                    
                    // for react-forms
                    // e.preventDefault();
                    // console.log(e);
                    // const target = e.target as typeof e.target & {
                    //     femail: { value: string };
                    //     fpassword: { value: string };
                    //   };
                    // debugger
                    // const email = target.femail.value; // typechecks!
                    // const password = target.fpassword.value; // typechecks!

                    // console.log(email);
                    // console.log(password);
                
                }
            }>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='femail'/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='fpassword' onChange={(ev) =>  {
                    console.log(ev);
                    const input: any = ev.target as any;
                    console.log(input.value);
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
    </Form>

        <form
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                    email: { value: string };
                    password: { value: string };
                    isApprove: { checked: boolean };
                };
                const email = target.email.value; // typechecks!
                const password = target.password.value; // typechecks!
                const isApprove = target.isApprove.checked; // typechecks!

                console.log(email);
                console.log(password);
                console.log(isApprove);
            // etc...
            }}
            >
            <div>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            </div>
            <div>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            </div>
            <div>
            <label>
                Approve:
                <input type="checkbox" name="isApprove" />
            </label>
            </div>
            <div>
            <input type="submit" value="Log in" />
            </div>
    </form>
    </>
});

export default MyFormComponent;