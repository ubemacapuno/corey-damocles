<script lang="ts">
// This code below allows for smooth scrolling to ID on click
const scrollToElement = (selector: any) => {
	const element = document.querySelector(selector);
	if (!element) return;
	let position = element.getBoundingClientRect().top;
	let offset = position + window.pageYOffset;
	window.scrollTo({
		top: offset,
		behavior: 'smooth'
	});
};
// End code for smooth scrolling to ID on click
</script>

<div class="header-wrapper">
	<nav class="mobile-nav">

			<ul>
				<!-- The following anchors below will use smooth scrolling to get to their respective element IDs -->
				<li class="page-link">
					<a href={'#'} on:click|preventDefault={() => scrollToElement('#about-me-container')}>About</a>
				</li>
				<li class="page-link">
					<a href={'#'} on:click|preventDefault={() => scrollToElement('#projects')}>Projects</a>
				</li>
				<li class="page-link">
					<a href={'#'} on:click|preventDefault={() => scrollToElement('#contact')}>Contact</a>
				</li>
			</ul>

	</nav>
</div>

<style>
	.header-wrapper {
		margin: 0 1rem;
	}

    a{
		font-size: 1.4rem;
        color: var(--tertiary-color);
		transition:0.3s;
    }

	a:hover {
	text-decoration: none;
	color: var(--pure-white);
	}

    ul{
        display:flex;
        justify-content:flex-end;
        list-style:none;
    }

    .page-link {
        padding: 0 1rem;
    }

    @media (max-width: 450px) {
		.header-wrapper {
			display: none;
		}
	}

</style>
