import prisma from "$lib/server/prisma";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: {id} }) => {
    const post = await prisma.post.findUnique({
        where: { id: Number(id) },
        include: { author: true },
    });


    return { post };
}

export const actions = {
    publishPost: async ({ params: { id } }) => {
        await prisma.post.update({
            where: { id: Number(id) },
            data: {
                published: true,
            },
        });

        throw redirect(303, `/p/${id}`);
    },
    deletePost: async ({ params: { id } }) => {
        await prisma.post.delete({
            where: { id: Number(id) },
        });

        throw redirect(303, `/`);
    },
    logout: async (event) => {
        event.cookies.delete('AuthorizationToken', {path: '/'});

        throw redirect(303, '/');
    }
}satisfies Actions;