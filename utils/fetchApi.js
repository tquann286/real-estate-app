import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '806b4ed36bmsh97d96b82cdb67c8p146942jsn2b0952e5ccb0',
		},
	})

	return data
}
