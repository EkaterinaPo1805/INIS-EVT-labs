export async function 
	client(url, method, body = {}) { 
	const options = {
		method: method,
		headers: {
			'Content-Type': 
				'application/json', 
		},
	}
    if (method === 'POST') {
        options.body = JSON.stringify(body)
    }

    try {
        const response = await window.fetch(url, options) 
        const data = await response.json()
        if (response.ok) {
            return {
                status: response.status,
                headers: response.headers,
                url: response.url,
                data,
            }
        }
        throw new Error(response.statusText)
    } catch{}

}

client.get = (url) => client(url, 'GET') 
client.post = (url, body) => client(url, 'POST', body) 