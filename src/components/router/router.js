import AboutComponent from '../pages/AboutComponent.vue';
import SkillComponent from '../pages/SkillComponent.vue';
import ProjectComponent from '../pages/ProjectComponent.vue';
import CareerComponent from '../pages/CareerComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/about",
        name: "AboutComponent",
        component: AboutComponent
    },
    {
        path: "/#skills",
        name: "SkillComponent",
        component: SkillComponent
    },
    {
        path: "/#projects",
        name: "ProjectComponent",
        component: ProjectComponent
    },
    {
        path: "/#career",
        name: "CareerComponent",
        component: CareerComponent
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;