// src/routes/drafts/+page.server.ts
import prisma from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type Page from '../+page.svelte';


/*export const load = (async () => {
    // 1.
    const response = await prisma.post.findMany({
        where: { published: false },
        include: { author: true },
    })

    return { drafts: response };
}) satisfies PageServerLoad;*/

export const load: PageServerLoad = async (event) => {
    const user = event.locals.user;

    if (!user) {
        throw redirect(303, '/signin');
    }

    const response = await prisma.post.findMany({
        where: { published: false },
        include: { author: true },
    })

    return { drafts: response, user };
}

export const actions: Actions = {
    logout: async (event) => {
        event.cookies.delete('AuthorizationToken', {path: '/'});

        throw redirect(303, '/');
    }
}