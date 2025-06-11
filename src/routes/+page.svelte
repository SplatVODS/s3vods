<script lang="ts">
    import "$lib/styles/global.css";
    import Hero from "$lib/components/Hero.svelte";
    import Search from "$lib/components/Search.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
	import InfoCard from "$lib/components/InfoCard.svelte";
</script>

<Hero/>

<Search/>

<SocialLinks/>

<div style="margin-bottom: 50px;"></div>

<InfoCard
main_message='Want to keep this project'
highlight='✨ alive ✨'
button_link='https://paypal.me/typos1?country.x=US&locale.x=en_US'
button_text='💖 Support Me! 💖'
sub_message='My Paypal'
/>

<p class="about" id="about">Hello, this web app was created to access Splatoon 3 VODS</p>

<RedirectButton/>

<style> 
    .about {
        padding: 500px 0 500px 0;
    }
</style>
