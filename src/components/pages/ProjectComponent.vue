<template>
    <div id="project">
        <aside>
            <i class="fa-solid fa-paperclip"></i>
            <p>PROJECTS</p>
        </aside>
        <article class="project-list">
            <aside class="project-aside">
                <aside class="project-title">
                    <h2>PROGAME</h2>
                    <p>Board Game E-comerce Web-site</p>    
                </aside>
                <figure>
                    <img src="@/assets/progame.png" alt="progame">
                    <figcaption>
                        <p>This is a web page where you can buy board games or console games.This is a project for practicing <span style="color:red">PHP</span> . I have data bound in <span style="color:red">MYSQL</span>. Users can log in to their profile and edit their personal information. You can also sort products to see only what you want.</p>
                        <ul>
                            <aside>
                                <li>MAIN FUNCTION</li><p>Login, Sort items</p>  
                            </aside>
                            <aside>
                                <li>FRONTEND</li><p>HTML, CSS</p>
                            </aside>
                            <aside>
                                <li>BACKEND</li><p>PHP</p>
                            </aside>
                            <aside>
                                <li>DATABASE</li><p>MY SQL</p>
                            </aside>
                        </ul>
                    </figcaption>
                </figure>
                <a href="https://github.com/mia9005/progame.git" target="_blank">GIT HUB</a>
            </aside>

            <aside class="project-aside">
                <aside class="project-title">
                    <h2>PORTFOLIO</h2>
                    <p>My portfolio</p>    
                </aside>
                <figure>
                    <img src="@/assets/portfolio.png" alt="portfolio">
                    <figcaption>
                        <p>This is a web page that I made for my portfolio.This is for practicing <span style="color:red">vue.js</span> . You can see my information such as skills, projects, careers.</p>
                        <ul>
                            <aside>
                                <li>MAIN FUNCTION</li><p>Reaching Page</p>  
                            </aside>
                            <aside>
                                <li>FRONTEND</li><p>HTML, CSS, Vue.js</p>
                            </aside>
                            <aside>
                                <li>BACKEND</li><p>-</p>
                            </aside>
                            <aside>
                                <li>DATABASE</li><p>-</p>
                            </aside>
                        </ul>
                    </figcaption>
                </figure>
                <a href="https://github.com/mia9005/First-Portfolio.git" target="_blank">GIT HUB</a>
            </aside>
        </article>
    </div>
</template>
<script>
export default {
    name: "ProjectComponent"
}
</script>