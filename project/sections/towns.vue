<template>
    <div class="towns">
        <h4 class="sectionTitle">Towns</h4>
        <Card></Card>
    </div>
</template>

<script>
import Card from '../components/card.vue'
export default {
    name: "Towns",
    components: {
        Card,
    },
    data() {
        return {
            towns: [
                {
                    name: "Stow-on-Side",
                    image: "",
                    hasGym: true,
                    desc: "",
                    route: [] //<-num array of routes, should we keep it this way or just write the routes in the description?
                },
                {
                    name: "Motostoke",
                    image: "",
                    hasGym: true,
                    desc: "",
                },
                {
                    name: "Wedgehurst",
                    image: "",
                    hasGym: true,
                    desc: "",
                }
            ],
        }
    },
}
</script>

<style>

</style>