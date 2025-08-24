<script lang="ts">
    let {
        button_txt,
        button_url
    } = $props()
    
</script>

<a class="redirect-button-style" href="{button_url}">{button_txt}</a>

<style>
    .redirect-button-style {
        text-decoration: none;
        color: #f4f5f6;
        border-radius: 25px;
        font-size: 25px;
        font-weight: bold;
        font-family: monospace;
        background-color: var(--main-purple);
        padding: 10px 20px;
        transition: all 0.3s ease-in-out;
    }

    .redirect-button-style:hover {
        background-color: var(--redirect-button-hover);
        scale: 1.1;
    }
</style>
