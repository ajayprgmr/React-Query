import './App.css'
import { useQuery } from 'react-query'

const App = () => {
  const {
    data,
    dataUpdatedAt,
    error,
    errorUpdatedAt,
    failureCount,
    failureReason,
    fetchStatus,
    isError,
    isFetched,
    isFetchedAfterMount,
    isFetching,
    isInitialLoading,
    isLoading,
    isLoadingError,
    isPaused,
    isPending,
    isPlaceholderData,
    isRefetchError,
    isRefetching,
    isStale,
    isSuccess,
    refetch,
    status,
  } = useQuery('slokData', () =>
    fetch('https://bhagavadgitaapi.in/chapter/2/').then((res) => res.json())
  )

  // Log each property
  console.log('data:', data)
  console.log('dataUpdatedAt:', dataUpdatedAt)
  console.log('error:', error)
  console.log('errorUpdatedAt:', errorUpdatedAt)
  console.log('failureCount:', failureCount)
  console.log('failureReason:', failureReason)
  console.log('fetchStatus:', fetchStatus)
  console.log('isError:', isError)
  console.log('isFetched:', isFetched)
  console.log('isFetchedAfterMount:', isFetchedAfterMount)
  console.log('isFetching:', isFetching)
  console.log('isInitialLoading:', isInitialLoading)
  console.log('isLoading:', isLoading)
  console.log('isLoadingError:', isLoadingError)
  console.log('isPaused:', isPaused)
  console.log('isPending:', isPending)
  console.log('isPlaceholderData:', isPlaceholderData)
  console.log('isRefetchError:', isRefetchError)
  console.log('isRefetching:', isRefetching)
  console.log('isStale:', isStale)
  console.log('isSuccess:', isSuccess)
  console.log('refetch:', refetch)
  console.log('status:', status)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h2>{`Chapter Name : ${data.name}`}</h2>
      <p>{data.meaning.hi}</p>
      <p>{data.summary.hi}</p>
    </div>
  )
}

export default App

