import { c as create_ssr_component, f as createEventDispatcher, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
const browser = BROWSER;
const Saos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animation = "none" } = $$props;
  let { animation_out = "none; opacity: 0" } = $$props;
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { css_observer = "" } = $$props;
  let { css_animation = "" } = $$props;
  const dispatch = createEventDispatcher();
  let observing = true;
  const countainer = `__saos-${Math.random()}__`;
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  if ($$props.animation_out === void 0 && $$bindings.animation_out && animation_out !== void 0)
    $$bindings.animation_out(animation_out);
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.css_observer === void 0 && $$bindings.css_observer && css_observer !== void 0)
    $$bindings.css_observer(css_observer);
  if ($$props.css_animation === void 0 && $$bindings.css_animation && css_animation !== void 0)
    $$bindings.css_animation(css_animation);
  {
    dispatch("update", { observing });
  }
  return `<div${add_attribute("id", countainer, 0)}${add_attribute("style", css_observer, 0)}>${`<div style="${"animation: " + escape(animation, true) + "; " + escape(css_animation, true)}">${slots.default ? slots.default({}) : ``}</div>`}</div>`;
});
const tortoiseTeaHouse = "/_app/immutable/assets/tortoise-tea-house.fcf3a6a2.jpg";
const qcLogger = "/_app/immutable/assets/qc-logger.6328fd8a.jpg";
const dyzeeDiaries = "/_app/immutable/assets/dyzee-diaries.a70775c4.jpg";
const dropzoneAPI = "/_app/immutable/assets/dropzone-api.01e17712.jpg";
const foodieBlog = "/_app/immutable/assets/foodie-blog-resize.82d145b0.jpg";
const capaTracker = "/_app/immutable/assets/capa-tracker.d305865d.jpg";
const pokedexLite = "/_app/immutable/assets/pokedex-lite.4388c560.jpg";
const portrait = "/_app/immutable/assets/portrait.e4a6be56.jpg";
let siteUrl = "https://coreydamocles.netlify.app/";
let siteName = "Corey Damocles - Portfolio";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Corey Damocles - Portfolio" } = $$props;
  let { description = "Corey's latest projects and media" } = $$props;
  let { pathname = "" } = $$props;
  let { image = "" } = $$props;
  let { robots = "index, follow" } = $$props;
  let siteTitle = `${title} | ${siteName}`;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.robots === void 0 && $$bindings.robots && robots !== void 0)
    $$bindings.robots(robots);
  return `


${$$result.head += `<!-- HEAD_svelte-3y5rzd_START -->${$$result.title = `<title>${escape(siteTitle)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)}>${image ? `<meta name="${"image"}"${add_attribute("content", `${siteUrl}${image}`, 0)}>` : ``}<meta name="${"robots"}"${add_attribute("content", robots, 0)}><link rel="${"canonical"}"${add_attribute("href", `${siteUrl}${pathname}`, 0)}><meta property="${"st:title"}"${add_attribute("content", siteTitle, 0)}><meta property="${"st:info"}"${add_attribute("content", description, 0)}>${pathname ? `<meta property="${"og:url"}"${add_attribute("content", `${siteUrl}${pathname}`, 0)}>` : ``}${image ? `<meta property="${"og:image"}"${add_attribute("content", `${siteUrl}${image}`, 0)}>` : ``}<meta property="${"og:title"}"${add_attribute("content", siteTitle, 0)}><meta property="${"og:description"}"${add_attribute("content", description, 0)}>${image ? `<meta name="${"twitter:image"}"${add_attribute("content", `${siteUrl}${image}`, 0)}>` : ``}<meta name="${"twitter:title"}"${add_attribute("content", siteTitle, 0)}><meta name="${"twitter:description"}"${add_attribute("content", description, 0)}>${slots.default ? slots.default({}) : ``}<!-- HEAD_svelte-3y5rzd_END -->`, ""}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1yek3hj.svelte-1yek3hj,.svelte-1yek3hj.svelte-1yek3hj:after,.svelte-1yek3hj.svelte-1yek3hj:before{box-sizing:border-box}body.svelte-1yek3hj.svelte-1yek3hj,.projects-container.svelte-1yek3hj.svelte-1yek3hj{background-color:var(--background-color)}header.svelte-1yek3hj.svelte-1yek3hj{padding:1.2rem;height:100vh}.hero.svelte-1yek3hj.svelte-1yek3hj{padding:9rem 0 13rem 0;max-width:900px}.intro.svelte-1yek3hj.svelte-1yek3hj{font-size:1.4rem;text-align:left;margin:0;padding:0;color:var(--nav-text-color)}.snippet.svelte-1yek3hj.svelte-1yek3hj{font-size:1.3rem}.name.svelte-1yek3hj.svelte-1yek3hj{margin-top:0}.statement.svelte-1yek3hj.svelte-1yek3hj{color:var(--tertiary-color)}.name.svelte-1yek3hj.svelte-1yek3hj,.projects-container.svelte-1yek3hj h2.svelte-1yek3hj,#about.svelte-1yek3hj.svelte-1yek3hj{background:-webkit-linear-gradient(rgb(255, 255, 255), #00b8d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent}h2.svelte-1yek3hj.svelte-1yek3hj{text-align:center;padding-top:10px;color:var(--tertiary-color)}h3.svelte-1yek3hj.svelte-1yek3hj{color:var(--primary-color)}.profile-img.svelte-1yek3hj.svelte-1yek3hj{max-width:350px;max-height:350px;border-radius:50%;object-fit:cover;overflow:hidden;box-shadow:0.25rem 5px 5px var(--tertiary-accent-color)}.wrapper-about-me.svelte-1yek3hj.svelte-1yek3hj{margin:0 auto;padding:0 1.2rem;max-width:1200px}.wrapper-projects.svelte-1yek3hj.svelte-1yek3hj{display:flex;align-items:center;flex-direction:row;max-width:1140px;padding:1.2rem 1.2rem 70px 1.2rem}.about-me-container.svelte-1yek3hj.svelte-1yek3hj{background-color:#000;background-image:linear-gradient(to right top, #e15fed, #9254c8, #332fd0);padding-bottom:5rem}.about-me-container.svelte-1yek3hj h2.svelte-1yek3hj{color:white}.about-me.svelte-1yek3hj.svelte-1yek3hj{display:flex;align-items:center;justify-content:center;flex-direction:row;min-height:550px}.about-me-right.svelte-1yek3hj.svelte-1yek3hj{padding-left:10px;margin-left:40px;display:flex;align-items:flex-start;flex-direction:column;max-width:100%}.about-me-left.svelte-1yek3hj.svelte-1yek3hj{padding-right:10px;margin-right:40px;display:flex;align-items:center;flex-direction:column}.about-me.svelte-1yek3hj p.svelte-1yek3hj{color:white}.about-me.svelte-1yek3hj p.svelte-1yek3hj:last-child{margin-bottom:30px}.disclaimer.svelte-1yek3hj.svelte-1yek3hj{font-style:italic}.projects-container.svelte-1yek3hj.svelte-1yek3hj{margin:0 5px;display:flex;align-items:center;flex-direction:column;position:relative}.project-img.svelte-1yek3hj.svelte-1yek3hj{min-width:650px;padding-left:15px;transition:all 0.3s}.project-link.svelte-1yek3hj.svelte-1yek3hj{border-radius:0.7rem}.project-img.svelte-1yek3hj.svelte-1yek3hj:hover{transform:perspective(650px) rotateY(-20deg) translateY(-15px) rotateX(3deg) scale(1)}@media(max-width: 900px){.about-me.svelte-1yek3hj.svelte-1yek3hj{flex-direction:column}.about-me-right.svelte-1yek3hj.svelte-1yek3hj,.about-me-left.svelte-1yek3hj.svelte-1yek3hj{padding:0;margin:0}.profile-img.svelte-1yek3hj.svelte-1yek3hj{max-width:270px;max-height:270px;margin:0 0 30px 0}.wrapper-about-me.svelte-1yek3hj.svelte-1yek3hj{max-width:1200px}.wrapper-projects.svelte-1yek3hj.svelte-1yek3hj{flex-direction:column;max-width:960px}.projects-container.svelte-1yek3hj.svelte-1yek3hj{margin:0}.about-me.svelte-1yek3hj p.svelte-1yek3hj{margin:0.4rem 0}.project-img.svelte-1yek3hj.svelte-1yek3hj{min-width:600px;padding:15px 5px}.project-img.svelte-1yek3hj.svelte-1yek3hj:hover{transform:none}.snippet.svelte-1yek3hj.svelte-1yek3hj{font-size:1rem}}@media(max-width: 650px){.project-img.svelte-1yek3hj.svelte-1yek3hj{min-width:350px}}@media(max-width: 450px){h3.svelte-1yek3hj.svelte-1yek3hj{border-bottom:1px solid var(--tertiary-color)}.profile-img.svelte-1yek3hj.svelte-1yek3hj{max-width:200px;max-height:200px}.about-me-right.svelte-1yek3hj.svelte-1yek3hj,.about-me-left.svelte-1yek3hj.svelte-1yek3hj{padding:0px 0px}.project-img.svelte-1yek3hj.svelte-1yek3hj{min-width:200px}}@media(min-width: 1200px){.hero.svelte-1yek3hj.svelte-1yek3hj{margin-left:170px}}@keyframes from-left{0%{transform:rotateX(50deg) translateX(-200vw) skewX(-50deg);opacity:1}100%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}@keyframes from-right{0%{transform:rotateX(-50deg) translateX(200vw) skewX(50deg);opacity:1}100%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}@keyframes swing-in-top-fwd{0%{transform:rotateX(-100deg);transform-origin:top;opacity:0}100%{transform:rotateX(0deg);transform-origin:top;opacity:1}}@keyframes svelte-1yek3hj-fadein{from{opacity:0}to{opacity:1}}",
  map: null
};
const router = browser;
const prerender = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Corey Damocles - Portfolio",
      description: "Portfolio Homepage",
      pathname: "/"
    },
    {},
    {}
  )}

${$$result.head += `<!-- HEAD_svelte-eg2ru5_START -->${$$result.title = `<title>Corey Damocles - Portfolio</title>`, ""}<!-- HEAD_svelte-eg2ru5_END -->`, ""}
<header class="${"svelte-1yek3hj"}"><section class="${"hero svelte-1yek3hj"}"><h2 class="${"intro svelte-1yek3hj"}">Hi, my name is</h2>
		<br class="${"svelte-1yek3hj"}">
		<h1 class="${"name svelte-1yek3hj"}">Corey Damocles.</h1>
		<h1 class="${"statement svelte-1yek3hj"}">I build web applications.</h1>
		<p class="${"snippet svelte-1yek3hj"}">I am a software engineer and QA professional specializing in the development of dynamic and
			efficient web applications to fit your needs. I currently develop software applications at <a target="${"_blank"}" rel="${"noopener"}" href="${"https://purefunc.io"}" class="${"svelte-1yek3hj"}">Pure Func</a>
			and <a target="${"_blank"}" rel="${"noopener"}" href="${"https://fastdms.com/"}" class="${"svelte-1yek3hj"}">Fast DMS</a>.
		</p></section></header>
<body id="${"about-scroll"}" class="${"svelte-1yek3hj"}">
	<section class="${"about-me-container svelte-1yek3hj"}" id="${"about-me-container"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<h2 id="${"about"}" class="${"svelte-1yek3hj"}">About Me</h2>
			`;
      }
    }
  )}
		<div class="${"about-me wrapper-about-me svelte-1yek3hj"}"><div class="${"about-me-left svelte-1yek3hj"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", portrait, 0)} alt="${"Profile of Corey"}" class="${"profile-img svelte-1yek3hj"}">`;
      }
    }
  )}</div>
			${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"about-me-right svelte-1yek3hj"}"><p class="${"svelte-1yek3hj"}">Hey! My name is Corey Damocles and I am a software engineer based in Phoenix, AZ. I am a
						tech junkie and have a passion for building out web applications with the latest
						technologies. I joined the <a href="${"https://purefunc.io/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}">Pure Func</a>
						web development agency as a developer in April 2022, and joined
						<a href="${"https://fastdms.com/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}">Fast DMS</a> as a software
						engineer in December 2022.
					</p>
					<p class="${"svelte-1yek3hj"}">I am currently developing projects with the cutting edge framework <a href="${"https://kit.svelte.dev/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}">SvelteKit</a>, as well as building applications with MERN (MongoDB/Express/React/Node) and other fun
						tech stacks. The tools and languages I use include TypeScript, Svelte/SvelteKit, React,
						Vite, Node, Express, MongoDB, PostgreSQL, Supabase, Git, HTML, and CSS.
					</p>
					<p class="${"svelte-1yek3hj"}">Let&#39;s build something together!</p></div>`;
      }
    }
  )}</div></section>
	
	<section class="${"projects-container svelte-1yek3hj"}" id="${"projects"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<h2 class="${"svelte-1yek3hj"}">Projects</h2>
			`;
      }
    }
  )}
		
		<div class="${"wrapper-projects svelte-1yek3hj"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-text svelte-1yek3hj"}"><h3 class="${"svelte-1yek3hj"}">CAPA Tracker</h3>
					<p class="${"svelte-1yek3hj"}">Document and track CAPA reports with CAPA Tracker! This full-stack application allows
						users to create and update CAPA records. Requests to the database are handled by
						SvelteKit <a href="${"https://kit.svelte.dev/docs/load"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}">Loading data</a>
						and
						<a href="${"https://kit.svelte.dev/docs/form-actions"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}">Form actions</a> (no Node.js!).
					</p>
					<p class="${"svelte-1yek3hj"}">CAPA stands for Corrective and Preventive Action, and is a process by which a
						manufacturing organization can make improvements to reduce non-conformances and process
						gaps.
					</p>
					<p class="${"disclaimer svelte-1yek3hj"}">*CAPA Tracker is under construction and authentication may become disconnected from
						production, preventing login access!
					</p>
					<p class="${"svelte-1yek3hj"}">SvelteKit, TypeScript, Tailwind CSS + DaisyUI, MongoDB, Auth.js (GitHub OAuth provider),
						hosted on Netlify.
					</p>
					<a href="${"https://github.com/ubemacapuno/ts-capa-tracker-refactor"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Repo</span></button></a>
					<a href="${"https://capa-tracker.netlify.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Demo</span></button></a></div>`;
      }
    }
  )}
			${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-image svelte-1yek3hj"}"><a href="${"https://capa-tracker.netlify.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><img class="${"project-img svelte-1yek3hj"}"${add_attribute("src", capaTracker, 0)} alt="${"CAPA Tracker project"}"></a></div>`;
      }
    }
  )}</div>

		<div class="${"wrapper-projects svelte-1yek3hj"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-text svelte-1yek3hj"}"><h3 class="${"svelte-1yek3hj"}">Foodie Blog</h3>
					<p class="${"svelte-1yek3hj"}">Indulge your culinary senses with Foodie Blog! This full-stack application is a haven
						for food enthusiasts to create, share, and explore delectable recipes. With a virtual
						assistant powered by <a href="${"https://openai.com/blog/introducing-chatgpt-and-whisper-apis"}" class="${"svelte-1yek3hj"}">Chat GPT
						</a>, Foodie Blog provides interactive guidance, recipe suggestions, and culinary
						support, transforming your cooking experience into an engaging adventure.
					</p>
					<p class="${"svelte-1yek3hj"}">Whether you&#39;re a home cook or a professional chef, Foodie Blog offers a platform to
						document your favorite dishes and find inspiration for your next meal. Foodie Blog is
						continually updated, enhancing its features and user interface to provide a
						comprehensive and enjoyable experience.
					</p>
					<p class="${"svelte-1yek3hj"}">SvelteKit, TypeScript, Tailwind CSS, MongoDB, Auth.js (GitHub OAuth provider),
						Superforms, Zod, Chat GPT API, hosted on Vercel.
					</p>
					<a href="${"https://github.com/ubemacapuno/foodie-blog-sveltekit"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Repo</span></button></a>
					<a href="${"https://foodie-blog-sveltekit.vercel.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Demo</span></button></a></div>`;
      }
    }
  )}
			${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-image svelte-1yek3hj"}"><a href="${"https://foodie-blog-sveltekit.vercel.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><img class="${"project-img svelte-1yek3hj"}"${add_attribute("src", foodieBlog, 0)} alt="${"Foodie Blog Project"}"></a></div>`;
      }
    }
  )}</div>

		
		<div class="${"wrapper-projects svelte-1yek3hj"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-text svelte-1yek3hj"}"><h3 class="${"svelte-1yek3hj"}">QC Logger</h3>
					<p class="${"svelte-1yek3hj"}">Record your QC laboratory results using QC Logger! This app was inspired by my prior
						experience as a laboratory professional, where I would routinely record QC test results
						for various manufactured pharmaceuticals on paper. Why not make it electronic? This
						full-stack project is made with React and Supabase.
					</p>
					<p class="${"svelte-1yek3hj"}">React, Supabase, HTML, SCSS, JavaScript</p>
					<a href="${"https://github.com/ubemacapuno/qc-logger"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Repo</span></button></a>
					<a href="${"https://qc-logger.netlify.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Demo</span></button></a></div>`;
      }
    }
  )}
			${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-image svelte-1yek3hj"}"><a href="${"https://qc-logger.netlify.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><img class="${"project-img svelte-1yek3hj"}"${add_attribute("src", qcLogger, 0)} alt="${"QC Logger project"}"></a></div>`;
      }
    }
  )}</div>
		
		<div class="${"wrapper-projects svelte-1yek3hj"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-text svelte-1yek3hj"}"><h3 class="${"svelte-1yek3hj"}">Dyzee Diaries</h3>
					<p class="${"svelte-1yek3hj"}">The Dyzee Diaries landing page was a collaborative effort with the Pure Func team. Our
						client had a slow-loading website, and it was our goal to recreate and optimize the
						static website using SvelteKit. We split up our tasks and used a tracker tool to track
						and update our task progress. My tasks included styling/animations, content, images, and
						components. This application was my first introduction to using and deploying a Svelte
						application.
					</p>
					<p class="${"svelte-1yek3hj"}">SvelteKit, HTML, CSS, JavaScript</p>
					<a href="${"https://github.com/ubemacapuno/dyzee-diaries"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Repo</span></button></a>
					<a href="${"https://demo-dyzee-diaries.netlify.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Demo</span></button></a></div>`;
      }
    }
  )}
			${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-image svelte-1yek3hj"}"><a href="${"https://demo-dyzee-diaries.netlify.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><img class="${"project-img svelte-1yek3hj"}"${add_attribute("src", dyzeeDiaries, 0)} alt="${"Dyzee Diaries project"}"></a></div>`;
      }
    }
  )}</div>
		
		<div class="${"wrapper-projects svelte-1yek3hj"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-text svelte-1yek3hj"}"><h3 class="${"svelte-1yek3hj"}">Tortoise Tea House</h3>
					<p class="${"svelte-1yek3hj"}">I developed a website for the Tortoise Tea House bubble tea shop located in Phoenix, AZ.
						It is a slick single-paged desert-themed application that is a single page, and is
						responsive.
					</p>
					<p class="${"svelte-1yek3hj"}">SvelteKit, HTML, CSS, JavaScript</p>
					<a href="${"https://github.com/ubemacapuno/tortoise-tea-house-site"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Repo</span></button></a>
					<a href="${"https://demo-tortoiseteahouse.netlify.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Demo</span></button></a></div>`;
      }
    }
  )}
			${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-image svelte-1yek3hj"}"><a href="${"https://demo-tortoiseteahouse.netlify.app/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><img class="${"project-img svelte-1yek3hj"}"${add_attribute("src", tortoiseTeaHouse, 0)} alt="${"Tortoise Tea House project"}"></a></div>`;
      }
    }
  )}</div>
		
		<div class="${"wrapper-projects svelte-1yek3hj"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-text svelte-1yek3hj"}"><h3 class="${"svelte-1yek3hj"}">Random Dropzone API</h3>
					<p class="${"svelte-1yek3hj"}">I enjoy playing first-person shooter games on my free-time, and developed an API that
						randomizes various map locations for the Call of Duty: Warzone battle royale videogame.
						There are four maps to choose from, with each map corresponding to a different HTTP GET
						request on the API which is hosted on Railway.app.
					</p>
					<p class="${"disclaimer svelte-1yek3hj"}">*Please note that the app is hosted on a free Railway.app account.
					</p>
					<p class="${"svelte-1yek3hj"}">HTML, CSS, and JavaScript front-end on <a href="${"https://codepen.io/corey-damocles/pen/RwQdeWG"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}">Codepen</a></p>
					<p class="${"svelte-1yek3hj"}">Node.js, Express.js, and API hosted on Railway.app.</p>
					<a href="${"https://github.com/ubemacapuno/random-dropzone-api"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Repo</span></button></a>
					<a href="${"https://codepen.io/corey-damocles/pen/RwQdeWG"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Live</span></button></a></div>`;
      }
    }
  )}
			${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-image svelte-1yek3hj"}"><a href="${"https://codepen.io/corey-damocles/pen/RwQdeWG"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><img class="${"project-img svelte-1yek3hj"}"${add_attribute("src", dropzoneAPI, 0)} alt="${"Dropzone API project"}"></a></div>`;
      }
    }
  )}</div>
		
		<div class="${"wrapper-projects svelte-1yek3hj"}">${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-text svelte-1yek3hj"}"><h3 class="${"svelte-1yek3hj"}">Pokédex Lite</h3>
					<p class="${"svelte-1yek3hj"}">I am an avid Pokémon fan and created this simple Pokédex app to teach myself how to use
						async functions and promises while using an API. Providing a Pokémon name or number will
						send a request to the API, which should then respond back with a Pokémon if found in the
						database. I also incorporated a random function that will randomly choose a Pokémon for
						the user! The card colors are responsive to the typing of the given Pokémon.
					</p>
					<p class="${"svelte-1yek3hj"}">HTML, CSS, JavaScript, API by <a href="${"https://pokeapi.co/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}">PokéAPI.co</a></p>
					<a href="${"https://github.com/ubemacapuno/pokedex-lite"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Repo</span></button></a>
					<a href="${"https://codepen.io/corey-damocles/pen/rNJZQXB"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><button class="${"project-link svelte-1yek3hj"}"><span class="${"svelte-1yek3hj"}">Live</span></button></a></div>`;
      }
    }
  )}
			${validate_component(Saos, "Saos").$$render(
    $$result,
    {
      once: true,
      animation: "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
      top: 250,
      bottom: 250
    },
    {},
    {
      default: () => {
        return `<div class="${"projects-image svelte-1yek3hj"}"><a href="${"https://codepen.io/corey-damocles/pen/rNJZQXB"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1yek3hj"}"><img class="${"project-img svelte-1yek3hj"}"${add_attribute("src", pokedexLite, 0)} alt="${"Pokédex Lite project"}"></a></div>`;
      }
    }
  )}</div></section>
</body>`;
});
export {
  Page as default,
  prerender,
  router
};
