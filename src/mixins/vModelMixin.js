export default {
    props: {
        value: [String, Number, Array, Boolean, Object]
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value)
        }
    }
}
