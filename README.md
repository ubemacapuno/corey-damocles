## Corey Damocles Portfolio: <a target="_blank" href="https://coreydamocles.netlify.app/">Visit My Portfolio Here</a>!

This is my most up-to-date portfolio with my recent projects and contact links, developed using SvelteKit.

 <tr>
    <td width="100%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/corey-damocles-portfolio.gif?raw=true" width="100%"  alt="Portfolio Gif."/>
    </td>
  </tr>

## How It's Made:

**Tech used:** 

Svelte/SvelteKit, JavaScript/HTML/CSS

Please be sure to checkout [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), and install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run dev
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn dev
```

## Optimizations:

As I learn more, I will plan to apply new features to my portfolio. When I get more projects under my belt, I'd like to update the portfolio section and have more interactivity (ex. modals), and maybe include a blog section.

## Lessons Learned:

During build/deployment, I learned that to enable <a target="_blank" href="https://docs.netlify.com/forms/setup/">contact-form-submission with Netlify hosted sites</a>, Netlify will search through the application's HTML for forms containing "data-netlify="true"" in order to add form functionality. However, when building the application with a front-end library such as SvelteKit, the form data will not be detected because when the application builds with Netlify (at "build time"), the HTML has already been dynamically rendered to JavaScript (at "run time"), meaning there is no longer any HTML for Netlify to search through during build time. To get around this, the application needs to pre-render the HTML prior to build time so that Netlify can catch the proper data during the build to set-up form submission functionality. For more info about this, check out this <a target="_blank" href="https://dev.to/swyx/how-to-use-sveltekit-with-netlify-forms-5gmj">blog post</a> I referenced to solve my issue.
