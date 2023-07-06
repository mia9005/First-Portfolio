<template>
    <div class="header">
        <article>
            <div class="header-top">
                <div id="caption">
                    Mia's Portfolio
                </div>
                <details>
                    <summary class="fa-solid fa-bars"></summary>
                    <ul>
                        <li>
                            <router-link to="#about" class="nav-link">About me</router-link>
                        </li>
                        <li>
                            <router-link to="#skill" class="nav-link">Skills</router-link>
                        </li>
                        <li>
                            <router-link to="#project" class="nav-link">Projects</router-link>
                        </li>
                        <li>
                            <router-link to="#career" class="nav-link">Career</router-link>
                        </li>
                    </ul>
                </details>
                <nav>
                    <ul class="navbar">
                        <li>
                            <router-link to="#about" class="nav-link">About me</router-link>
                        </li>
                        <li>
                            <router-link to="#skill" class="nav-link">Skills</router-link>
                        </li>
                        <li>
                            <router-link to="#project" class="nav-link">Projects</router-link>
                        </li>
                        <li>
                            <router-link to="#career" class="nav-link">Career</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header-bottom">
                <aside>
                    <h1>- MIA Lee -</h1>
                    <h1>Web Developer Portfolio</h1>
                </aside>
                <strong></strong>
                <aside>
                    <p>I'm a web developer full of passion</p>
                </aside>
                <a href="#about">start</a>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: "NavHeader"
}
</script>