import axiosConfig from "@/services/axiosConfig";

export const turnosServices = {
    async getAvailableSlots(date) {
        return axiosConfig().get(`/available_slots/1/1/${date}`)
            .then(response => response.data)
    },
    async saveTurn(request) {
        console.log(request)
        return axiosConfig().post('/appointments', request).then(response => console.log(response))
    },
    async getDates(start, end) {
        return axiosConfig().get(`/available_slots/${start}/${end}?filters[service_id]=1`)
            .then(response => response.data)
    }
}
