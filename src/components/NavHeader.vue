<template>
    <div class="header">
        <article>
            <div class="header-top">
                <div id="caption">
                    Mia's Portfolio
                </div>
                <details>
                    <summary class="fa-solid fa-bars"></summary>
                    <ul class="navbar">
                        <li>
                            <a href="#" @click.prevent="getSection('about')"><p>About Me</p></a>
                            
                        </li>
                        <li>
                            <a href="#" @click.prevent="getSection('skill')"><p>Skill</p></a>
                            
                        </li>
                        <li>
                            <a href="#" @click.prevent="getSection('project')"><p>Project</p></a>
                            
                        </li>
                        <li>
                            <a href="#" @click.prevent="getSection('career')"><p>Career</p></a>
                            
                        </li>
                    </ul>
                </details>
                <nav>
                    <ul class="navbar">
                        <li>
                            <a href="#" @click.prevent="getSection('about')"><p>About Me</p></a>
                            
                        </li>
                        <li>
                            <a href="#" @click.prevent="getSection('skill')"><p>Skill</p></a>
                            
                        </li>
                        <li>
                            <a href="#" @click.prevent="getSection('project')"><p>Project</p></a>
                            
                        </li>
                        <li>
                            <a href="#" @click.prevent="getSection('career')"><p>Career</p></a>
                            
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
    name: "NavHeader",
    methods : {
    getSection(sectionName){
      this.$emit("getSection", sectionName);
    }
  }
}
</script>