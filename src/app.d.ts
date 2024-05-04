// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type {PrismaClient} from "@prisma/client";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: {
				id: number;
				name: string;
				email: string;
			}
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	let prisma: PrismaClient
}

export {};
