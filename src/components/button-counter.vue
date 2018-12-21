<template>
    <button v-on:click="emitEvent">You clicked me {{ count }} times.</button>
</template>

<script>
    export default {
        name: "button-counter",
        props: {
            value: Number
        },
        data: function() {
            return {
                count: this.value
            }
        },
        methods: {
            emitEvent: function() {
                let count = ++this.count
                this.$emit('counter-updated', count)
                this.$parent.$emit('counter-updated', count)
            }
        },
        watch: {
            value() {
                this.count = this.value
            },
        }

    }
</script>

<style scoped>

</style>