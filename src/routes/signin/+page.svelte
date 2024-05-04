<script lang="ts">
    import type { ActionData } from "./$types";
    import { enhance} from "$app/forms";

    export let form: ActionData;
</script>



<div class="h-screen bg-stone-300 flex flex-col space-y-6">
    <a href="/" class="mx-auto text-4xl font-bold">CodeShare</a>

    <div class="bg-stone-200 shadow-2xl rounded-2xl w-fit mx-auto p-5 flex flex-col space-y-6">
    <h1 class="text-3xl font-bold text-center">Login</h1>

    <section>
        <form method="post" use:enhance>
            <div class="group flex flex-col">
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" class="w-64 rounded-md bg-stone-100 text-black px-2 py-0.5 focus:outline-stone-400" required />
            </div>

            <div class="group flex flex-col">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" class="w-64 rounded-md bg-stone-100 text-black px-2 py-0.5 focus:outline-stone-400" required />
            </div>

            <div class="text-center">
                <button type="submit" class="mx-auto mt-2 text-white font-medium bg-stone-600 py-2 px-4 rounded-xl">Login</button>
            </div>

            {#if form?.error}
                <div class="notice error">
                    {form.error}
                </div>
            {/if}
        </form>

        <div class="text-center mt-4">
            <a href="/signup" class="mx-auto text-white font-medium bg-stone-400 py-2 px-4 rounded-xl">Sign Up</a>
        </div>
        <a href="/">Back</a>
    </section>
    </div>
</div>
