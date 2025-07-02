<script lang="ts">
    let {
        header,
        description,
        svg_path
    } = $props();

</script>

<div class="card">
    <!-- https://fonts.google.com/icons -->
    <img src="{svg_path}" alt="Card Icon">
    <h1>{header}</h1>
    <p>{description}</p>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        margin-bottom: 30px;
        border-radius: 25px;
        box-shadow:
			-5px 5px 0 var(--main-purple);
    }

    img {
        margin: 25px 0;
    }

    h1 {
        color: var(--dull-black);
        margin: 0;
    }

    p {
        margin: 25px;
    }

</style>