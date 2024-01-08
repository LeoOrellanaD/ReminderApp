import {
  IoFileTraySharp,
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoFlagSharp
} from 'react-icons/io5'

const BigCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 w-2/4 h-[140px]">
      {/* First card */}
      <div className="bg-card-color p-3 rounded-lg flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#0e79f2] text-white rounded-full flex items-center justify-center w-14 h-14">
            <IoCalendarNumberOutline className="text-4xl" />
          </div>
          <p className="text-2xl font-myriad-semi text-tbc1 ml-1">Hoy</p>
        </div>
        <div>
          <p className="text-5xl font-myriad-semi">1</p>
        </div>
      </div>
      {/* Second card */}
      <div className="bg-card-color p-3 rounded-lg flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#fc0207] text-white rounded-full flex items-center justify-center w-14 h-14">
            <IoCalendarOutline className="text-4xl" />
          </div>
          <p className="text-2xl font-myriad-semi text-tbc1 ml-1">Programado</p>
        </div>
        <div>
          <p className="text-5xl font-myriad-semi">2</p>
        </div>
      </div>
      {/* Third card */}
      <div className="bg-card-color p-3 rounded-lg flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#000000] text-white rounded-full flex items-center justify-center w-14 h-14">
            <IoFileTraySharp className="text-4xl" />
          </div>
          <p className="text-2xl font-myriad-semi text-tbc1 ml-1">Todo</p>
        </div>
        <div>
          <p className="text-5xl font-myriad-semi">3</p>
        </div>
      </div>
      {/* fourth card */}
      <div className="bg-card-color p-3 rounded-lg flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#ff8c03] text-white rounded-full flex items-center justify-center w-14 h-14">
            <IoFlagSharp className="text-4xl" />
          </div>
          <p className="text-2xl font-myriad-semi text-tbc1 ml-1">Marcado</p>
        </div>
        <div>
          <p className="text-5xl font-myriad-semi">4</p>
        </div>
      </div>
    </div>
  )
}

export default BigCards
