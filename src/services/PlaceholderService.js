import Api from "./Api";



export default {
    getPlaceholder() {
        return Api().get('/?_limit=12')
    }
}