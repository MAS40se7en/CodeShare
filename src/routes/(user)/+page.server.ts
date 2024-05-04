import prisma from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'
import type { Actions } from './$types';

export const load = (async () => {

    const response = await prisma.post.findMany({
        where: { published: true },
        include: { author: true },
    })

// 2.
    return { feed: response };
}) satisfies PageServerLoad;

export const actions: Actions = {
    logout: async (event) => {
		event.cookies.delete('AuthorizationToken', {path: '/'});

		throw redirect(303, '/');
	}
}