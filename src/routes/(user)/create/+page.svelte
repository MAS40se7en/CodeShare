<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="page bg-stone-200 mx-auto w-3/4 mt-10 rounded-xl p-3">
  <form method="post" action="?/create" class="flex flex-col">
    <h1 class="text-2xl m-auto font-medium my-5">Share Your Code</h1>
    {#if form?.missing}<p class="error text-red-600">Missing field required!</p>{/if}
    <input
    class="rounded-lg px-2 py-1 text-black focus:outline-stone-500 mb-3"
      name="title"
      placeholder="Title"
      type="text"
      value={form?.title ?? ""}
    />
    <input
    class="rounded-lg mb-3 px-2 py-1 text-black focus:outline-stone-500"
      name="authorEmail"
      placeholder="Author email address"
      type="email"
      value={form?.authorEmail ?? ""}
    />
      <textarea
              class="rounded-lg px-2 py-1 text-black focus:outline-stone-500"
              name="description"
              placeholder="Provide some description"
              rows="3"
      />
    <h2 class="mt-6">Select the language:</h2>
    <select class="mb-3 rounded-lg" name="language" id="" value={form?.language ?? ""}>
        <option value="C#">C#</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="Dart">Dart</option>
        <option value="Go">Go</option>
        <option value="Java">Java</option>
        <option value="JS">JavaScript</option>
        <option value="TS">TypeScript</option>
        <option value="Python">Python</option>
        <option value="Rust">Rust</option>
    </select>
    <textarea
    class="rounded-lg px-2 py-1 bg-stone-500 text-white focus:outline-stone-700 h-72"
      name="content"
      placeholder="Enter your code"
      rows="8"
    />
    <button type="submit" class=" mt-5 rounded-xl bg-stone-600 text-stone-300 text-lg font-medium py-1">Post Code Snippet</button>
    <a class="back m-auto mt-2 w-1/2 text-center rounded-xl bg-stone-100 font-medium" href="/">Cancel </a>
  </form>
</div>
