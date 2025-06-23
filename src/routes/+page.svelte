<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Search from "$lib/components/Search.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
	import InfoCard from "$lib/components/InfoCard.svelte";
	import Arrow from "$lib/components/Arrow.svelte";
	import InfoSection from "$lib/components/InfoSection.svelte";
    let spacerAmount = 50;
</script>

<Hero/>

<Search/>

<SocialLinks/>
<div style="margin-bottom: {spacerAmount}px;"></div>

<InfoCard
    main_message='Want to keep this project'
    highlight='✨ alive ✨'
    button_link='https://paypal.me/typos1?country.x=US&locale.x=en_US'
    button_text='💖 Support Me! 💖'
    sub_message='My Paypal'
/>

<Arrow/>

<InfoSection/>

<RedirectButton/>

<style>

</style>
