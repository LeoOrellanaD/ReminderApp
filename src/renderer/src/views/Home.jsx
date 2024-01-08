import SearchBar from '../components/SearchBar'
import BigCards from '../components/BigCards'

function Home() {
  return (
    <div className=" flex flex-col items-center bg-background-color  h-screen w-screen">
      <h1 className="text-center font-myriad-bold mt-8 text-3xl mb-4 ">Reminder App</h1>
      <SearchBar></SearchBar>
      <BigCards></BigCards>
    </div>
  )
}

export default Home
