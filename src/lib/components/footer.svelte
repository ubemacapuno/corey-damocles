<script>
    let copyrightYear = new Date().getFullYear() 
</script>
<footer>
    <p>© {copyrightYear} Corey Damocles. <a href="https://github.com/ubemacapuno/corey-damocles-portfolio" target="_blank"> Coded</a> with SvelteKit.</p>
</footer>

<style>

p {
    text-align: center;
    margin: 0 auto;
    padding: 2rem 0.5rem;
}

footer {
    /* background-color: #332FD0; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

@media (max-width: 350px) {
	footer {
        flex-direction: column;
	}
}
</style>