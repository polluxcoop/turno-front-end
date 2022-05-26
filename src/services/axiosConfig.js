import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'https://apiturnos.polluxcoop.com/api',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNWRlMDdmOGIzMWJkOWVlNGQzMjdjNjhkZTFhMWEzNzExOGM3ZDQxMjVjNmIxOTBiZGY3Nzk2YzdiNWRlM2U3OGJlMzY2ZWQ2ODlmZWU2MDUiLCJpYXQiOjE2NTM1NzQ2MjQuODkzMjksIm5iZiI6MTY1MzU3NDYyNC44OTMyOTQsImV4cCI6MTY4NTExMDYyNC43Njc1ODQsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.tFSF_N6WbQ45gVrWDiTkv2bbaFZfAVyHs7WTYp4AlB-903cmxcBfEDGclzT2cf9oUoDTZjDZA-ljV1Ce3_lX_w-14x5SQuysUkWOpMzXA3T67hKrggntWO1G494GdnTv1UR_wdIn_F-tER8OGHu2CRcvIhcV2nsF_N4TLylHayVohEUHILcZl5RaIzKcjhrLMSG7qQlp8DVXXk7oMKMqrWhr_jUV_vWsKcEGhr9MBA8pdZmLtsRThO5A07MuMzPsw-D86hBWCNSO-lEu0AbPw1ao8B2OKqEAU-JnlJFaHXZ74aKZYrD0Nhet28uz_U6Q65OYgZ34dkYaZ3eKyZg6_gTgyuj1moPNiQIdNKzcqGFbEH-jSLslw2Ju5qPBp_mpw4heeh4CUKG1MOt-pqk5uiIzQtLDfbOxz2nFhy6DTkSN1TbuWiAzRng6eqLmnuO0kwfcX2hYyNnPwHx5G3md1sFt86xMRZtWsmvsEIQBb2ZPB2mtcYY1NDb21LHRWizoDB3nUQ6zhXGW85EE14pGV2rFwhNUMkmYgTvVQTOXj6ASRq3FUETTdjkBWaSDVQrpS8JW7RkSFJm5pfkIsChajIH_KQnd0f57oo9N3DyQ35bjXC2PYtifPY6AWHWWeSxC377Xe9V8oM_Vndu_9a2gbm1UG_dgmW0v8q2oh5OBeWE'
        }
    })



}
