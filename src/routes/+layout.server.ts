import {type Actions, error, redirect} from "@sveltejs/kit";
import type {LayoutServerLoad} from "./$types";

export const load: LayoutServerLoad = (event) => {
    const user = event.locals.user;

    return {
        user
    };
};