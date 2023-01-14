<!-- 
  ? Sitewide SEO Component for use on all pages
  * These properties will override the ones in Default Helmet
  * Pathname must be given for canonical URLs 
-->
<script>
	export let title = 'Corey Damocles - Portfolio'
	export let description = 'Corey\'s latest projects and media'
	export let pathname = ''
	export let image = ''
	export let robots = 'index, follow'
	let siteUrl = 'https://coreydamocles.netlify.app/'
	let siteName = 'Corey Damocles - Portfolio'
	let siteTitle = `${title} | ${siteName}`
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={description} />
	{#if image}
		<meta name="image" content={`${siteUrl}${image}`} />
	{/if}
	<meta name="robots" content={robots} />
	<!-- Social -->
	<link rel="canonical" href={`${siteUrl}${pathname}`} />
	<meta property="st:title" content={siteTitle} />
	<meta property="st:info" content={description} />
	<!-- OG -->
	{#if pathname}
		<meta property="og:url" content={`${siteUrl}${pathname}`} />
	{/if}
	{#if image}
		<meta property="og:image" content={`${siteUrl}${image}`} />
	{/if}
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" content={description} />
	<!-- Twitter -->
	{#if image}
		<meta name="twitter:image" content={`${siteUrl}${image}`} />
	{/if}
	<meta name="twitter:title" content={siteTitle} />
	<meta name="twitter:description" content={description} />
	<slot />
</svelte:head>