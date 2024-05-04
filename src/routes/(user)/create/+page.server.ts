import prisma from "$lib/server/prisma";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from "./$types";
import type { PageServerLoad } from "../$types";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        let title = data.get("title");
        let description = data.get("description");
        let content = data.get("content");
        let language = data.get("language");
        let authorEmail = data.get("authorEmail");

        if (!title || !description ||!content || !authorEmail || !language) {
            return fail(400, { content, description, language, authorEmail, title, missing: true });
        }

        if (typeof title != "string" || typeof description != "string" || typeof content != "string" || typeof authorEmail != "string" || typeof language != "string") {
            return fail(400, { incorrect: true })
        }

        await prisma.post.create({
            data: {
                title,
                description,
                language,
                content,
                author: { connect: { email: authorEmail } }
            },
        });

        throw redirect(303, `/`)
    },
    logout: async (event) => {
        event.cookies.delete('AuthorizationToken', {path: '/'});

        throw redirect(303, '/');
    }
} satisfies Actions;

export const load: PageServerLoad = (event) => {
    const user = event.locals.user;

    if (!user){
        throw redirect(303, '/signup')
    }

    return {
        user
    };
};