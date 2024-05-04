<script lang="ts">
    import type { PageData } from './$types'
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";
    import prism from "prismjs";
    import Highlight from "highlight.js";
  
    export let data: PageData

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
      <div class="py-2 space-y-4">
        {#each data.feed as post (post.id)}
          <div class="post w-3/5 mx-auto bg-stone-200 rounded-xl pb-1" >
            <button class="text-2xl font-medium rounded-t-xl ml-4 mt-2 p-2 text-left" on:click={() => goto(`/p/${post.id}`)}>{post.title}<span><small class="opacity-60 font-normal text-sm pl-4"
              >{post.author?.name ? `By ${post.author.name}` : "Unknown author"}</small
              ></span></button>
            <p class="pl-4 text-xs font-light w-28 h-9 overflow-clip">Created on: {post.createdAt}</p>
            <p class="pl-4">{post.description}</p>
            <h3 class="pl-4 text-sm font-medium">Language: {post.language}</h3>
            <div class="border-2 bg-stone-700 text-white border-stone-600 rounded-xl mx-3 my-2 p-3 overflow-scroll max-h-96">
              <pre><code bind:this={contentRef}>{post.content}</code></pre>
            </div>
          </div>
        {/each}
      </div>
    </main>
  </div>