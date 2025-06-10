<script lang="ts">
    import "$lib/styles/global.css";
    import Nav from "$lib/components/Nav.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Search from "$lib/components/Search.svelte";
	import SocialLinks from "$lib/components/SocialLinks.svelte";
    import RedirectButton from "$lib/components/RedirectButton.svelte";
	import InfoCard from "$lib/components/InfoCard.svelte";

    let numv = 5;
</script>

<div class="layout-container">
    <Nav></Nav>

    <Hero/>

    <Search/>

    <SocialLinks/>

    <div style="margin-bottom: 50px;"></div>
    <InfoCard
    main_message='Want to keep this project'
    highlight='✨ alive ✨'
    button_link='https://www.paypal.com/donate/?business=GNWVEK4K64F4Y&no_recurring=0&item_name=Donating+to+me+helps+ensure+I+keep+all+my+projects+maintained%21&currency_code=USD'
    button_text='💖 Support Me! 💖'
    sub_message='My Paypal'
    />

    <p class="about" id="about">Hello, this web app was created to access Splatoon 3 VODS</p>
    <RedirectButton/>
</div>

<style> 
    .layout-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100dvh;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .about {
        padding: 500px 0 500px 0;
    }
</style>