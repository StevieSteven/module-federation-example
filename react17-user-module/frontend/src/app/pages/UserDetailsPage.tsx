import * as React from "react";
import {Link, useRouteMatch} from "react-router-dom";

import {useQuery} from "react-query";
import {User} from "../model";
import {BasePathContext} from "../basePathContext";
import {useContext} from "react";

export const UserDetailsPage = () => {

    let id = (useRouteMatch( "/users/:id")?.params as any)?.id; // FIXME: test if path is necessary

    const {data} = useUser(id);
    if (!id) {
        return <div>no id exists</div>
    }


    if (!data) {
        return (
            <div>
                User was not found
                <Link to={"/"}>go to overview page</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>{data.firstName} {data.surname}</h1>
            E-Mail: {data.email}
            <Link to={"/"}>go to overview page</Link>
        </div>
    );
};


export function useUser(id: string) {
    const path = useContext(BasePathContext).apiBasePath + "/users/" + id
    return useQuery<User, Error>("view-user", () =>
        fetch(path).then((res) => res.json())
    );
}

