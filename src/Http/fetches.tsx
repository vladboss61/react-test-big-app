import { config } from "../api-constants";
import UserData from "../Models/UserData.model";

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

export default getUser;