import * as React from "react";
import {useContext} from "react";
import {Link} from "react-router-dom";

import {useQuery} from "react-query";
import {User} from "../model";
import {BasePathContext} from "../basePathContext";
import {Card} from "antd";

export const OverviewPage = () => {
    const {data} = useUsers();
    return (
        <div>
            <h1>Nutzerübersicht</h1>
            {
                data?.map((u, i) => <UserCard user={u} key={i}/>)
            }
        </div>
    );
};

export function useUsers() {
    const path = useContext(BasePathContext).apiBasePath + "/users"
    return useQuery<User[], Error>("list-users", () =>
        fetch(path).then((res) => res.json())
    );
}


export const UserCard = (props: {user:User}) => {
    const {user} = props;
    const path = "/users/" + user.id
    return (
        <Card title={user.firstName + " " + user.surname}>
            E-Mail: {user.email} <br/>
            <Link to={path}>öffnen</Link>
        </Card>
    );
}
