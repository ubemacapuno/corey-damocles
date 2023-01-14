<!-- This is for global styling layout -->
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
</svelte:head>
<script context="module">
    import ContactFooter from "$lib/components/contact-footer.svelte"
    import Footer from "$lib/components/footer.svelte"
    import MobileHeader from '$lib/components/MobileHeader.svelte'
    import Header from '$lib/components/Header.svelte'
    import "../app.css"
</script>
<Header />
<MobileHeader />
<slot></slot>
<ContactFooter />
<Footer />
