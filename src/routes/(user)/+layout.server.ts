import {redirect} from "@sveltejs/kit";
import type {Actions, LayoutServerLoad} from "./$types";

export const load: LayoutServerLoad = (event) => {
    const user = event.locals.user;

    return {
        user
    };
};