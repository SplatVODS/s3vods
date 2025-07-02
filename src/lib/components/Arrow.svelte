<script lang="ts">
</script>

<div class="arrow">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M12 5v13M5 12l7 7 7-7" />
    </svg>
</div>

<style>
    .arrow {
        margin: 100px 0;
        color: var(--main-purple);
        animation: bounce 1.5s ease-in-out infinite;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
</style>
