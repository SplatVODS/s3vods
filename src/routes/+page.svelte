<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Search from "$lib/components/Search.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";
	import Arrow from "$lib/components/Arrow.svelte";
	import InfoSection from "$lib/components/InfoSection.svelte";
	import SupportCard from "$lib/components/SupportCard.svelte";
	import RedirectButton from "$lib/components/RedirectButton.svelte";
</script>

<Hero/>

<Search/>

<SocialLinks/>

<SupportCard
    main_message='Want to keep this project'
    highlight='✨alive✨'
    button_link='https://paypal.me/typos1?country.x=US&locale.x=en_US'
    button_text='💖 Support Me! 💖'
    sub_message='My Paypal'
/>

<Arrow/>

<InfoSection/>

<div class="button-spacing">
    <RedirectButton button_url="/vods" button_txt="Search VODS"/>
    <RedirectButton button_url="https://discord.com/invite/He4KFXDpJJ" button_txt="Upload a VOD"/>
</div>

<style>
    .button-spacing {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        align-items: center;
        padding: 50px 0;
    }

</style>
