<script lang="ts">
	import promoters from '$lib/data/promoters';
    import supporters from '$lib/data/supporters';
</script>

<div class="display">
    <ul>
        {#each supporters as s_name}
            <li>{s_name}</li>
        {/each}
    </ul>

    <ul>
        {#each promoters as p_name}
            <li>{p_name}</li>
        {/each}
    </ul>

</div>

<style>
    .display {
        display: flex;
        flex-wrap: wrap;
        gap: 30dvw;
    }

</style>