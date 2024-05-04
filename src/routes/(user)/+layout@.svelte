<script lang="ts">
    import "$lib/styles/style.css";
    import { page } from '$app/stores';
    import type { LayoutData } from "../$types";

    export let data: LayoutData;

    const { user } = data
  </script>
  
  <div class="layout">
    
    <nav class="flex justify-between text-stone-600 border-2 p-2 bg-stone-100">
      <div class="left text-left space-x-6 ml-10">
        <a class:active={$page.url.pathname === '/'} class="text-2xl font-medium text-stone-600" href="/">Home</a>
        <a class:active={$page.url.pathname === '/drafts'} class="text-lg font-medium" href="/drafts">Drafts</a>
      </div>
      <div class="right text-right flex right-0 mt-2 space-x-2 mr-10">
        {#if user}
            <h2 class="py-1 px-2 font-medium">{user.name}</h2>
          <a href="/create" class="hover:bg-stone-400 py-1 px-2 rounded-lg hover:text-stone-800">Create</a>
          <form method="POST" action="?/logout">
            <button class="hover:bg-stone-400 py-1 px-2 rounded-lg hover:text-stone-800" type="submit" name="logout" value="true">Logout</button>
          </form>
        {:else}
          <a href="/signin" class="hover:bg-stone-400 py-1 px-2 rounded-lg hover:text-stone-800">Login</a>
          <a href="/signup" class="hover:bg-stone-400 py-1 px-2 rounded-lg hover:text-stone-800">Register</a>
        {/if}
      </div>
    </nav>
    
    <slot />
  </div>