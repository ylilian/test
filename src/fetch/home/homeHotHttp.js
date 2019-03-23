import { httpGet } from '../../utils/http'

export function homeHotHttp1(city){
    return httpGet('/api/homehot1?city=' + city)
}

export function homeHotHttp2(city) {
    return httpGet('/api/homehot2?city=' + city)
}