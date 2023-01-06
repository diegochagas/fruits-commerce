const api = {
  get: async (URL: string) => {
    const response = await fetch(`http://localhost:8080/${URL}`)
   
    const data = await response.json()
   
    return data
  }
}

export default api