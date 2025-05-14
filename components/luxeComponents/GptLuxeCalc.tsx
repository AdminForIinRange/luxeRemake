import React, { useState } from 'react'

const GptLuxeCalc = () => {
  const [address, setAddress] = useState('')
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }

  const handleClick = async () => {
    if (!address) {
      setError('Please enter an address.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Send the address to the backend to get the metrics
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      })

      if (!res.ok) {
        throw new Error('Failed to fetch data from the API')
      }

      const data = await res.json()

      if (data.error) {
        throw new Error(data.error) // Handle any errors returned from the API
      }

      // Set the response data (metrics)
      setResponse(data.response)
    } catch (error) {
      setError(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Real Estate Analysis</h1>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter property address"
      />
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Get Property Metrics'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
     {response && (
  <div>
    <h2>Property Metrics</h2>
    <p><strong>Revenue:</strong> {response.revenue || 'Data not available'}</p>
    <p><strong>Revenue Trend:</strong> {response.revenueTrend || 'Data not available'}</p>
    <p><strong>Occupancy:</strong> {response.occupancy || 'Data not available'}</p>
    <p><strong>Occupancy Trend:</strong> {response.occupancyTrend || 'Data not available'}</p>
    <p><strong>Daily Rate:</strong> {response.dailyRate || 'Data not available'}</p>
    <p><strong>Daily Rate Trend:</strong> {response.dailyRateTrend || 'Data not available'}</p>
    <p><strong>Market Score:</strong> {response.marketScore || 'Data not available'}</p>
    <p><strong>Expenses:</strong> {response.expenses || 'Data not available'}</p>
    <p><strong>Income:</strong> {response.income || 'Data not available'}</p>
    <p><strong>Cap Rate:</strong> {response.capRate || 'Data not available'}</p>
  </div>
)}

    </div>
  )
}

export default GptLuxeCalc
