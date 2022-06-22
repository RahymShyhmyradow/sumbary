import React from 'react'

function TehnikiHyzmat() {
  return (
    <div className='w-3/4 mt-5'>
      <div className='w-36 relative'>
        <button class="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">Dropdown</button>

        <div class="hidden absolute peer-hover:flex hover:flex w-[200px] left-[115px] top-0 flex-col bg-white drop-shadow-lg">
          <a class="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
          <a class="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
          <a class="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
        </div>
      </div>

    </div>
  )
}

export default TehnikiHyzmat
