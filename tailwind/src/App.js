import React from "react"

function App() {
  return (
    <React.Fragment>
      <div className="demo">
        <div className="px-6 py-4 sm:flex sm:items-center">
          <div className="text-center sm:text-left sm:flex-grow">
            <div className="my-4">
              <p className="text-xl leading-tight mb-2">Trần Thị Diễm Hương</p>
              <p className="text-sm leading-tight text-grey-dark">Frontend Coder.</p>
            </div>
            <div>
              <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Info</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto shadow-lg mt-5">
        <div className="bg-gray-200 p-4">
          <span className="block wrap-number">1</span>
          <span className="block wrap-number">2</span>
          <span className="block wrap-number">3</span>
        </div>
        <div className="bg-gray-200">
          <div className="inline-block wrap-number">1</div>
          <div className="inline-block wrap-number">2</div>
          <div className="inline-block wrap-number">3</div>
        </div>
      </div>

      <div className="p-4">
        <img className="float-left mr-4 my-2 h-24" alt="" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
        <img className="float-right ml-4 my-2 h-32" alt="" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
        <p className="clear-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
      </div>

      <div className="container mx-auto overflow-auto h-40 border-2 border-gray-400 ">
        <div>
          <div className="sticky top-0 bg-gray-200 p-2">Sticky Heading 1</div>
          <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
        </div>
        <div>
          <div className="sticky top-0 bg-gray-200 p-2">Sticky Heading 2</div>
          <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
        </div>
        <div>
          <div className="sticky top-0 bg-gray-200 p-2">Sticky Heading 3</div>
          <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
        </div>
      </div>

      <div className="flex justify-evenly bg-gray-200 m-5">
        <div className="wrap-number px-4 py-2">1</div>
        <div className="wrap-number px-4 py-2">2</div>
        <div className="wrap-number px-4 py-2">3</div>
      </div>

      <div class="w-full p-6 bg-blue-100">
        <div class="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">OUR SERVICES</div>
        <div class="p-2 text-center text-lg text-gray-700">We offer the best web development solutions.</div>
        <div class="flex justify-center flex-wrap p-10">
          <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div class="flex items-center w-48 h-20 bg-orange-500">
              <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
            </div>
            <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
            <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
            <div class="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
              <i class="fas fa-chevron-right mt-2 text-orange-500"></i>
            </div>
          </div>
          <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div class="flex items-center w-48 h-20 bg-orange-500">
              <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
            </div>
            <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
            <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
            <div class="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
              <i class="fas fa-chevron-right mt-2 text-orange-500"></i>
            </div>
          </div>
          <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div class="flex items-center w-48 h-20 bg-orange-500">
              <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
            </div>
            <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
            <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
            <div class="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
              <i class="fas fa-chevron-right mt-2 text-orange-500"></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
