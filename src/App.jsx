import CoffeeeForm from "./components/CoffeeForm"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Stats from "./components/Stats"
import History from "./components/History"
import { useAuth } from "./context/AuthContext"
import { coffeeConsumptionHistory } from "./utilis"

function App() {
  const {globalUser,isLoading,globalData}=useAuth()
  
  const isAuthenticated=globalUser
  const isData = globalData && !!Object.keys(globalData || {}).length
  const authenticatedContent =(
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout>
    <Hero />
    <CoffeeeForm isAuthenticated={isAuthenticated}/>
    {(isAuthenticated && isLoading) && (
      <p>Loading data...</p>
    )}
    {(isAuthenticated && isData) && (authenticatedContent)}
    </Layout>
  )
}

export default App
