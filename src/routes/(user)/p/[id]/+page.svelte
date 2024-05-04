<script lang="ts">
import type { PageData } from "./$types";
import {onMount} from "svelte";
import Highlight from "highlight.js";

  export let data: PageData;
  const { post } = data;
  const { user } = data;

  let contentRef: HTMLElement | undefined;

  onMount(() => {
    if (!contentRef) {
      return;
    }

    Highlight.highlightElement(contentRef);
  })
</script>

<div>
  <main>
    <div class="py-2 space-y-7">
        <div class="post w-3/5 mx-auto bg-stone-200 rounded-xl" >
          <h2 class="text-2xl font-medium rounded-t-xl ml-4 p-2 text-left">{post.title}<span><small class="opacity-60 font-normal text-sm pl-4"
            >{post.author?.name ? `By ${post.author.name}` : "Unknown author"}</small
            ></span></h2>
          <p class="pl-4 text-xs font-light w-28 h-9 overflow-clip">Created on: {post.createdAt}</p>
          <p class="pl-4">{post.description}</p>
          <h3 class="pl-4">Language: {post.language}</h3>
          <div class="border-2 bg-stone-700 text-white border-stone-600 rounded-xl mx-3 my-2 p-3 overflow-scroll max-h-96"><pre><code bind:this={contentRef}>{post.content}</code></pre>
          </div>
          <form method="post" class="actions text-center">
            {#if !post.published && user}
              <button formaction="?/publishPost" class="bg-stone-600 p-3 m-4 rounded-lg text-stone-300 font-medium">Publish</button>
            {/if}
            {#if user}
              <button formaction="?/deletePost" class="bg-stone-600 p-3 m-4 rounded-lg text-stone-400 font-medium">Delete</button>
            {/if}
          </form>
        </div>
    </div>
  </main>
</div>


