<script context="module">
	export const router = browser;
	export const prerender = true;

	import { browser, dev } from '$app/environment';
	import Seo from '$lib/components/seo.svelte';
	import portrait from '$lib//Images/about/portrait.jpg';
	import pokedexLite from '$lib/Images/projects/pokedex-lite.jpg';
	import capaTracker from '$lib/Images/projects/capa-tracker.jpg';
	import foodieBlog from '$lib/Images/projects/foodie-blog-resize.jpg';
	import dropzoneAPI from '$lib//Images/projects/dropzone-api.jpg';
	import dyzeeDiaries from '$lib/Images/projects/dyzee-diaries.jpg';
	import qcLogger from '$lib/Images/projects/qc-logger.jpg';
	import tortoiseTeaHouse from '$lib/Images/projects/tortoise-tea-house.jpg';
	import Saos from 'saos';
</script>

<Seo title="Corey Damocles - Portfolio" description="Portfolio Homepage" pathname="/" />

<svelte:head>
	<title>Corey Damocles - Portfolio</title>
</svelte:head>
<header>
	<section class="hero">
		<h2 class="intro">Hi, my name is</h2>
		<br />
		<h1 class="name">Corey Damocles.</h1>
		<h1 class="statement">I build web applications.</h1>
		<p class="snippet">
			I am a software engineer and QA professional specializing in the development of dynamic and
			efficient web applications to fit your needs. I currently develop software applications at <a
				target="_blank"
				rel="noopener"
				href="https://purefunc.io">Pure Func</a
			>
			and <a target="_blank" rel="noopener" href="https://fastdms.com/">Fast DMS</a>.
		</p>
	</section>
</header>
<body id="about-scroll">
	<!--About Me section-->
	<section class="about-me-container" id="about-me-container">
		<Saos
			once={true}
			animation={'fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
			top={250}
			bottom={250}
		>
			<h2 id="about">About Me</h2>
			<!--ID about for smooth-scroll-->
		</Saos>
		<div class="about-me wrapper-about-me">
			<div class="about-me-left">
				<Saos
					once={true}
					animation={'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
				>
					<img src={portrait} alt="Profile of Corey" class="profile-img" />
				</Saos>
			</div>
			<Saos
				once={true}
				animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				top={250}
				bottom={250}
			>
				<div class="about-me-right">
					<p>
						Hey! My name is Corey Damocles and I am a software engineer based in Phoenix, AZ. I am a
						tech junkie and have a passion for building out web applications with the latest
						technologies. I joined the <a href="https://purefunc.io/" target="_blank" rel="noopener"
							>Pure Func</a
						>
						web development agency as a developer in April 2022, and joined
						<a href="https://fastdms.com/" target="_blank" rel="noopener">Fast DMS</a> as a software
						engineer in December 2022.
					</p>
					<p>
						I am currently developing projects with the cutting edge framework <a
							href="https://kit.svelte.dev/"
							target="_blank"
							rel="noopener">SvelteKit</a
						>, as well as building applications with MERN (MongoDB/Express/React/Node) and other fun
						tech stacks. The tools and languages I use include TypeScript, Svelte/SvelteKit, React,
						Vite, Node, Express, MongoDB, PostgreSQL, Supabase, Git, HTML, and CSS.
					</p>
					<p>Let's build something together!</p>
				</div>
			</Saos>
		</div>
	</section>
	<!--Projects section-->
	<section class="projects-container" id="projects">
		<Saos
			once={true}
			animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
			top={250}
			bottom={250}
		>
			<h2>Projects</h2>
			<!--ID projects for smooth-scroll-->
		</Saos>
		<!--CAPA Tracker Project-->
		<div class="wrapper-projects">
			<Saos
				once={true}
				animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-text">
					<h3>CAPA Tracker</h3>
					<p>
						Document and track CAPA reports with CAPA Tracker! This full-stack application allows
						users to create and update CAPA records. Requests to the database are handled by
						SvelteKit <a href="https://kit.svelte.dev/docs/load" target="_blank" rel="noopener"
							>Loading data</a
						>
						and
						<a href="https://kit.svelte.dev/docs/form-actions" target="_blank" rel="noopener"
							>Form actions</a
						> (no Node.js!).
					</p>
					<p>
						CAPA stands for Corrective and Preventive Action, and is a process by which a
						manufacturing organization can make improvements to reduce non-conformances and process
						gaps.
					</p>
					<p class="disclaimer">
						*CAPA Tracker is under construction and authentication may become disconnected from
						production, preventing login access!
					</p>
					<p>
						SvelteKit, TypeScript, Tailwind CSS + DaisyUI, MongoDB, Auth.js (GitHub OAuth provider),
						hosted on Netlify.
					</p>
					<a
						href="https://github.com/ubemacapuno/ts-capa-tracker-refactor"
						target="_blank"
						rel="noopener"><button class="project-link"><span>Repo</span></button></a
					>
					<a href="https://capa-tracker.netlify.app/" target="_blank" rel="noopener"
						><button class="project-link"><span>Demo</span></button></a
					>
				</div>
			</Saos>
			<Saos
				once={true}
				animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-image">
					<a href="https://capa-tracker.netlify.app/" target="_blank" rel="noopener"
						><img class="project-img" src={capaTracker} alt="CAPA Tracker project" /></a
					>
				</div>
			</Saos>
		</div>

		<div class="wrapper-projects">
			<Saos
				once={true}
				animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-text">
					<h3>Foodie Blog</h3>
					<p>
						Indulge your culinary senses with Foodie Blog! This full-stack application is a haven
						for food enthusiasts to create, share, and explore delectable recipes. With a virtual
						assistant powered by <a
							href="https://openai.com/blog/introducing-chatgpt-and-whisper-apis"
							>Chat GPT
						</a>, Foodie Blog provides interactive guidance, recipe suggestions, and culinary
						support, transforming your cooking experience into an engaging adventure.
					</p>
					<p>
						Whether you're a home cook or a professional chef, Foodie Blog offers a platform to
						document your favorite dishes and find inspiration for your next meal. Foodie Blog is
						continually updated, enhancing its features and user interface to provide a
						comprehensive and enjoyable experience.
					</p>
					<p>
						SvelteKit, TypeScript, Tailwind CSS, MongoDB, Auth.js (GitHub OAuth provider),
						Superforms, Zod, Chat GPT API, hosted on Vercel.
					</p>
					<a
						href="https://github.com/ubemacapuno/foodie-blog-sveltekit"
						target="_blank"
						rel="noopener"><button class="project-link"><span>Repo</span></button></a
					>
					<a href="https://foodie-blog-sveltekit.vercel.app/" target="_blank" rel="noopener"
						><button class="project-link"><span>Demo</span></button></a
					>
				</div>
			</Saos>
			<Saos
				once={true}
				animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-image">
					<a href="https://foodie-blog-sveltekit.vercel.app/" target="_blank" rel="noopener"
						><img class="project-img" src={foodieBlog} alt="Foodie Blog Project" /></a
					>
				</div>
			</Saos>
		</div>

		<!--QC Logger Project-->
		<div class="wrapper-projects">
			<Saos
				once={true}
				animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-text">
					<h3>QC Logger</h3>
					<p>
						Record your QC laboratory results using QC Logger! This app was inspired by my prior
						experience as a laboratory professional, where I would routinely record QC test results
						for various manufactured pharmaceuticals on paper. Why not make it electronic? This
						full-stack project is made with React and Supabase.
					</p>
					<p>React, Supabase, HTML, SCSS, JavaScript</p>
					<a href="https://github.com/ubemacapuno/qc-logger" target="_blank" rel="noopener"
						><button class="project-link"><span>Repo</span></button></a
					>
					<a href="https://qc-logger.netlify.app/" target="_blank" rel="noopener"
						><button class="project-link"><span>Demo</span></button></a
					>
				</div>
			</Saos>
			<Saos
				once={true}
				animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-image">
					<a href="https://qc-logger.netlify.app/" target="_blank" rel="noopener"
						><img class="project-img" src={qcLogger} alt="QC Logger project" /></a
					>
				</div>
			</Saos>
		</div>
		<!--Dyzee Diaries project-->
		<div class="wrapper-projects">
			<Saos
				once={true}
				animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-text">
					<h3>Dyzee Diaries</h3>
					<p>
						The Dyzee Diaries landing page was a collaborative effort with the Pure Func team. Our
						client had a slow-loading website, and it was our goal to recreate and optimize the
						static website using SvelteKit. We split up our tasks and used a tracker tool to track
						and update our task progress. My tasks included styling/animations, content, images, and
						components. This application was my first introduction to using and deploying a Svelte
						application.
					</p>
					<p>SvelteKit, HTML, CSS, JavaScript</p>
					<a href="https://github.com/ubemacapuno/dyzee-diaries" target="_blank" rel="noopener"
						><button class="project-link"><span>Repo</span></button></a
					>
					<a href="https://demo-dyzee-diaries.netlify.app/" target="_blank" rel="noopener"
						><button class="project-link"><span>Demo</span></button></a
					>
				</div>
			</Saos>
			<Saos
				once={true}
				animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-image">
					<a href="https://demo-dyzee-diaries.netlify.app/" target="_blank" rel="noopener"
						><img class="project-img" src={dyzeeDiaries} alt="Dyzee Diaries project" /></a
					>
				</div>
			</Saos>
		</div>
		<!--Tortoise Tea House project-->
		<div class="wrapper-projects">
			<Saos
				once={true}
				animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-text">
					<h3>Tortoise Tea House</h3>
					<p>
						I developed a website for the Tortoise Tea House bubble tea shop located in Phoenix, AZ.
						It is a slick single-paged desert-themed application that is a single page, and is
						responsive.
					</p>
					<p>SvelteKit, HTML, CSS, JavaScript</p>
					<a
						href="https://github.com/ubemacapuno/tortoise-tea-house-site"
						target="_blank"
						rel="noopener"><button class="project-link"><span>Repo</span></button></a
					>
					<a href="https://demo-tortoiseteahouse.netlify.app/" target="_blank" rel="noopener"
						><button class="project-link"><span>Demo</span></button></a
					>
				</div>
			</Saos>
			<Saos
				once={true}
				animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-image">
					<a href="https://demo-tortoiseteahouse.netlify.app/" target="_blank" rel="noopener"
						><img class="project-img" src={tortoiseTeaHouse} alt="Tortoise Tea House project" /></a
					>
				</div>
			</Saos>
		</div>
		<!-- Random Dropzone API project -->
		<div class="wrapper-projects">
			<Saos
				once={true}
				animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-text">
					<h3>Random Dropzone API</h3>
					<p>
						I enjoy playing first-person shooter games on my free-time, and developed an API that
						randomizes various map locations for the Call of Duty: Warzone battle royale videogame.
						There are four maps to choose from, with each map corresponding to a different HTTP GET
						request on the API which is hosted on Railway.app.
					</p>
					<p class="disclaimer">
						*Please note that the app is hosted on a free Railway.app account.
					</p>
					<p>
						HTML, CSS, and JavaScript front-end on <a
							href="https://codepen.io/corey-damocles/pen/RwQdeWG"
							target="_blank"
							rel="noopener">Codepen</a
						>
					</p>
					<p>Node.js, Express.js, and API hosted on Railway.app.</p>
					<a
						href="https://github.com/ubemacapuno/random-dropzone-api"
						target="_blank"
						rel="noopener"><button class="project-link"><span>Repo</span></button></a
					>
					<a href="https://codepen.io/corey-damocles/pen/RwQdeWG" target="_blank" rel="noopener"
						><button class="project-link"><span>Live</span></button></a
					>
				</div>
			</Saos>
			<Saos
				once={true}
				animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-image">
					<a href="https://codepen.io/corey-damocles/pen/RwQdeWG" target="_blank" rel="noopener"
						><img class="project-img" src={dropzoneAPI} alt="Dropzone API project" /></a
					>
				</div>
			</Saos>
		</div>
		<!-- Pokédex Lite Project -->
		<div class="wrapper-projects">
			<Saos
				once={true}
				animation={'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-text">
					<h3>Pokédex Lite</h3>
					<p>
						I am an avid Pokémon fan and created this simple Pokédex app to teach myself how to use
						async functions and promises while using an API. Providing a Pokémon name or number will
						send a request to the API, which should then respond back with a Pokémon if found in the
						database. I also incorporated a random function that will randomly choose a Pokémon for
						the user! The card colors are responsive to the typing of the given Pokémon.
					</p>
					<p>
						HTML, CSS, JavaScript, API by <a
							href="https://pokeapi.co/"
							target="_blank"
							rel="noopener">PokéAPI.co</a
						>
					</p>
					<a href="https://github.com/ubemacapuno/pokedex-lite" target="_blank" rel="noopener"
						><button class="project-link"><span>Repo</span></button></a
					>
					<a href="https://codepen.io/corey-damocles/pen/rNJZQXB" target="_blank" rel="noopener"
						><button class="project-link"><span>Live</span></button></a
					>
				</div>
			</Saos>
			<Saos
				once={true}
				animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'}
				top={250}
				bottom={250}
			>
				<div class="projects-image">
					<a href="https://codepen.io/corey-damocles/pen/rNJZQXB" target="_blank" rel="noopener"
						><img class="project-img" src={pokedexLite} alt="Pokédex Lite project" /></a
					>
				</div>
			</Saos>
		</div>
	</section>
</body>

<style>
	*,
	:after,
	:before {
		box-sizing: border-box;
	}

	body,
	.projects-container {
		background-color: var(--background-color);
	}

	header {
		padding: 1.2rem;
		height: 100vh;
	}

	.hero {
		padding: 9rem 0 13rem 0;
		max-width: 900px;
	}

	.intro {
		font-size: 1.4rem;
		text-align: left;
		margin: 0;
		padding: 0;
		color: var(--nav-text-color);
	}

	.snippet {
		font-size: 1.3rem;
	}

	.name {
		margin-top: 0;
	}

	.statement {
		color: var(--tertiary-color);
	}

	.name,
	.projects-container h2,
	#about {
		background: -webkit-linear-gradient(rgb(255, 255, 255), #00b8d4);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h2 {
		text-align: center;
		padding-top: 10px;
		color: var(--tertiary-color);
	}

	h3 {
		color: var(--primary-color);
	}

	.profile-img {
		max-width: 350px;
		max-height: 350px;
		border-radius: 50%;
		object-fit: cover;
		overflow: hidden;
		box-shadow: 0.25rem 5px 5px var(--tertiary-accent-color);
	}

	.wrapper-about-me {
		margin: 0 auto;
		padding: 0 1.2rem;
		max-width: 1200px;
	}

	.wrapper-projects {
		display: flex;
		align-items: center;
		flex-direction: row;
		max-width: 1140px;
		padding: 1.2rem 1.2rem 70px 1.2rem;
	}

	.about-me-container {
		background-color: #000;
		background-image: linear-gradient(to right top, #e15fed, #9254c8, #332fd0);
		padding-bottom: 5rem;
	}

	.about-me-container h2 {
		color: white;
	}

	.about-me {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		min-height: 550px;
	}

	.about-me-right {
		padding-left: 10px;
		margin-left: 40px;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		max-width: 100%;
	}

	.about-me-left {
		padding-right: 10px;
		margin-right: 40px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.about-me p {
		color: white;
	}

	.about-me p:last-child {
		margin-bottom: 30px;
	}

	.disclaimer {
		font-style: italic;
	}

	.projects-container {
		margin: 0 5px;
		display: flex;
		align-items: center;
		flex-direction: column;
		position: relative;
	}

	.project-img {
		min-width: 650px;
		padding-left: 15px;
		transition: all 0.3s;
	}

	.project-link {
		border-radius: 0.7rem;
	}

	.project-img:hover {
		transform: perspective(650px) rotateY(-20deg) translateY(-15px) rotateX(3deg) scale(1);
	}
	/* Media Queries */
	@media (max-width: 900px) {
		.about-me {
			flex-direction: column;
		}

		.about-me-right,
		.about-me-left {
			padding: 0;
			margin: 0;
		}

		.profile-img {
			max-width: 270px;
			max-height: 270px;
			margin: 0 0 30px 0;
		}

		.wrapper-about-me {
			max-width: 1200px;
		}

		.wrapper-projects {
			flex-direction: column;
			max-width: 960px;
		}
		.projects-container {
			margin: 0;
		}

		.about-me p {
			margin: 0.4rem 0;
		}

		.project-img {
			min-width: 600px;
			padding: 15px 5px;
		}

		.project-img:hover {
			transform: none;
		}
		.snippet {
			font-size: 1rem;
		}
	}

	@media (max-width: 650px) {
		.project-img {
			min-width: 350px;
		}
	}

	@media (max-width: 450px) {
		h3 {
			border-bottom: 1px solid var(--tertiary-color);
		}

		/* .snippet{
			font-size: 1rem;
		} */

		.profile-img {
			max-width: 200px;
			max-height: 200px;
		}
		.about-me-right,
		.about-me-left {
			padding: 0px 0px;
		}

		.project-img {
			min-width: 200px;
		}
	}

	@media (min-width: 1200px) {
		.hero {
			margin-left: 170px;
		}
	}

	/* *************************** */
	/* Animation Keyframes */
	/* *************************** */

	@keyframes -global-from-left {
		0% {
			transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}

	@keyframes -global-from-right {
		0% {
			transform: rotateX(-50deg) translateX(200vw) skewX(50deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}

	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes -global-scale-in-center {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes -global-swing-in-top-fwd {
		0% {
			transform: rotateX(-100deg);
			transform-origin: top;
			opacity: 0;
		}
		100% {
			transform: rotateX(0deg);
			transform-origin: top;
			opacity: 1;
		}
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
