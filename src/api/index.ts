const api = {
  get: async (URL: string) => {
    const response = await fetch(`http://localhost:8080/${URL}`)
   
    const data = await response.json()
   
    return data
  },
  post: async (URL: string, data: any) => {
    const response = await fetch(`http://localhost:8080/${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response.json()
  }
}

export default api