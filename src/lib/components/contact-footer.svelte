<script context="module">
// @ts-nocheck

	export const prerender = true;

	import codepenIcon from "/src/lib/Images/contact/codepen-icon.svg"
	import githubIcon from "/src/lib/Images/contact/github-icon.svg"
	import linkedinIcon from "/src/lib/Images/contact/linkedin-icon.svg"
	import twitterIcon from "/src/lib/Images/contact/twitter-icon.svg"
</script>
<div class="flex-wrapper" id="contact">
	<div class="page-wrapper"> 
		<!-- <header>  -->
			<h2>Let's connect!</h2> <!--ID contact for smooth-scroll-->
			<!--Social Media Links / Insert SVGs here-->
			<ul class="icons">
				<li><a target="_blank" href="https://linkedin.com/in/corey-damocles-43709295"><img src={linkedinIcon} alt="Linkedin Logo" class="icon"></a></li>
				<li><a target="_blank" href="https://github.com/ubemacapuno"><img src={githubIcon} alt="Github Logo" class="icon"></a></li>
				<li><a target="_blank" href="https://codepen.io/corey-damocles"><img src={codepenIcon} alt="Codepen Logo" class="icon"></a></li>
				<li><a target="_blank" href="https://twitter.com/coreydamo"><img src={twitterIcon} alt="Twitter Logo" class="icon"></a></li>
			</ul>
		<!-- </header> -->

		<div class="contact-card">
			<form name="contact-form-netlify" method="POST" data-netlify="true" netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="test" />
				<div class="fields">
					<div class="field half">
						<p class="contact-form">Name</p>
						<input type="text" name="name" id="name" required/>
					</div>
					<div class="field half">
						<p class="contact-form">Email</p>
						<input type="email" name="email" id="email" required/>
					</div>
					<div class="field half">
						<p class="contact-form">Subject</p>
						<input type="text" name="subject" id="subject" />
					</div>
					<div class="field">
						<p class="contact-form">Message</p>
						<textarea name="message" id="message" rows="4" required></textarea>
					</div>
					<div class="field">
						<div data-netlify-recaptcha="true"></div>
					</div>
					<button type="submit" value="Send Email" class="primary"><span>Submit</span></button>
				</div>
			</form>
		</div>
	</div>
</div>

	
<style>
input, textarea{
	margin-bottom: 1rem;
	padding: 0.5rem;
}
.flex-wrapper{
	background-image: linear-gradient(to right top,#E15FED,#9254C8,#332FD0);
	padding-bottom: 50px;
}

.page-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 900px;
	margin: 0 auto;
}

ul {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 16px 0;
}

li {
	display: inline;
	list-style: none;
	margin: 0 5px;
}

h2 {
	color: white;
}

.primary {
	color: white;
	cursor: pointer;
	font-size: inherit;
	font-family: inherit;
	font-weight: bold;
	border: 2px solid var(--nav-text-color);
	padding: 10px;
	background-color: transparent;
    transition: all 0.2s;
    cursor: pointer;
}

.primary:hover {
    background-color: var(--tertiary-accent-color);
}
/* contact form styling */
.contact-card{
	width: 95%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.contact-card p{
	color: var(--pure-white);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 16px;
}

form, textarea, input {
	border: 2px solid var(--nav-text-color);
}

form {
	border-radius: 1rem;
	padding: 1rem;
	width: 100%;
	background-color: var(--alternate-background-color);
} 
.fields {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
}
.field input, .field, .field textarea {
	width: 100%;
}
textarea {
	resize: none;
	min-height: 100px;
}

.contact-form {
	text-align: left;
}
.field {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.field p{
	margin-left: 0;
	margin-bottom: 10px;
}
.fields button {
	background-color: var(--accent-color);
	border-radius: 0.5rem;
}

button:hover {
    background-color: var(--secondary-color);
}


</style>
