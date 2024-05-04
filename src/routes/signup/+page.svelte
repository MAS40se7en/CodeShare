<script lang="ts">
  import type { ActionData } from "./$types";
  import { enhance} from "$app/forms";

  export let form: ActionData;
</script>

<div class="h-screen bg-stone-300 flex flex-col space-y-6">
  <a href="/" class="mx-auto text-4xl font-bold">CodeShare</a>
<div class="bg-stone-200 shadow-2xl rounded-2xl w-fit mx-auto p-5 flex flex-col space-y-6">
  <h1 class="text-3xl font-bold text-center">Sign up</h1>
  <form method="post" use:enhance>
      {#if form?.error}
        <div class="notice error"></div>
        {/if}
      <div class="flex flex-col">
      <label for="name">Name:</label>
      <input
              class="w-64 rounded-md bg-stone-100 text-black px-2 py-0.5 focus:outline-stone-400"
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              required
      />
      </div>
      <div class="flex flex-col">
      <label for="email">Email</label>
      <input
              class="w-64 rounded-md bg-stone-100 text-black px-2 py-0.5 focus:outline-stone-400"
              placeholder="Email address"
              type="email"
              name="userEmail"
              id="userEmail"
              required
      />
      </div>
      <div class="flex flex-col">
      <label for="password">Password</label>
      <input
              class="w-64 rounded-md bg-stone-100 text-black px-2 py-0.5 focus:outline-stone-400"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              required
      />
      </div>
    <div class="text-center">
      <button type="submit" class="mx-auto mt-2 text-white font-medium bg-stone-600 py-2 px-4 rounded-xl">Sign up</button>
    </div>
  </form>
  <div class="text-center mt-4">
    <a href="/signin" class="mx-auto text-white font-medium bg-stone-400 py-2 px-4 rounded-xl">Login</a>
  </div>
  <a href="/">Back</a>
</div>
</div>
