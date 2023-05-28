export default function App() {
  return (
    <div className="bg-gray-50">
      <div className="fixed bg-transparent z-50 top-0 py-10 px-36 justify-center w-full">
        <div className="flex justify-between w-full">
          <h1 className="font-bold text-2xl text-blue-600">Agency</h1>
          <ul className="flex space-x-16 justify-center items-center">
            <li className="text-lg font-thin text-gray-900">Home</li>
            <li className="text-lg font-thin text-gray-900">About Us</li>
            <li className="text-lg font-thin text-gray-900">Service</li>
            <li className="text-lg font-thin text-gray-900">Pricing</li>
          </ul>
          <h1 className="bg-gray-50 rounded-xl px-10 py-2 text-sm">Sign Up</h1>
        </div>
      </div>
      <div className="h-[800px] flex flex-col relative bg-blue-100">
        <h1 className="text-6xl font-bold leading-[90px] w-[550px] mt-[200px] ml-36">Marketing is The Key of Business Sucess.</h1>
        <p className="w-[550px] mt-8 leading-normal ml-36 block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
        <div className="mx-48 my-10 flex space-x-10 items-center">
          <button className="bg-blue-600 px-10 py-2 text-blue-50 rounded-lg inline-block w-fit ">Get Started</button>
          <figure className="flex space-x-4 items-center">
            <img src={"/static/images/Polygon 1.png"} alt="polygon 1" className="bg-blue-600 rounded-full p-2 block"/>
            <p className="font-semibold">Watch Our Video</p>
          </figure>
          <figure className="relative z-[3] shadow-lg rounded-xl py-4 px-8 flex flex-col items-center bg-blue-50">
            <p>Our Creative team</p>
            <ul className="flex mt-2">
              <li className=""><img src={"/static/images/Rectangle 11.png"} alt="team1" className="block rounded-full w-10 shahow-sm" /></li>
              <li className="ml-[-15px]"><img src={"/static/images/Rectangle 15.png"} alt="team1" className="block rounded-full w-10 shahow-sm" /></li>
              <li className="ml-[-15px]"><img src={"/static/images/Rectangle 16.png"} alt="team1" className="block rounded-full w-10 shahow-sm" /></li>
              <li className="ml-[-15px]"><img src={"/static/images/Rectangle 17.png"} alt="team1" className="block rounded-full w-10 shahow-sm" /></li>
              <li className="ml-[-15px]"><img src={"/static/images/Rectangle 18.png"} alt="team1" className="block rounded-full w-10 shahow-sm" /></li>
              <li className="bg-blue-600 rounded-full p-2 text-sm text-center ml-[-15px] text-blue-50">8+</li>
            </ul>
          </figure>
        </div>
        <img src={"/static/images/On the way to the goal.png"} alt="img goal" className="absolute z-[2] top-36 h-[45rem] right-[11rem]" />
        <img src={"/static/images/Group 5.png"} alt="grup5" className="absolute z-[1] right-3 top-[7rem] w-[34rem]"/>
      </div>
      <div className=" mx-36 mt-[5rem]">
        <h1 className="text-3xl font-bold">See how much our client love.</h1>
        <img src={"/static/images/Screenshot (128) 1.png"} alt="badge" className="block mx-auto w-[40rem] mt-[2.5rem]" />
        <figure className="flex justify-start space-x-4 w-full mt-[4rem]">
          <img src={"/static/images/Answer.png"} alt="answer" className="w-[45%]" />
          <section className="space-y-4">
            <h2 className="font-bold leading-10 text-2xl w-[50%]  text-gray-600">Take Your Online marketing to the next level.</h2>
            <figure className="flex items-center space-x-3">
              <img src={"/static/images/Planner.png"} alt="planer" className="bg-green-600 p-2 rounded-md w-[40px] block"/>
              <div className="w-[45%]">
                <h3 className="text-gray-600 font-semibold">Direct Scheduling</h3>
                <p className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </figure>
            <figure className="flex items-center space-x-3">
              <img src={"/static/images/Notification.png"} alt="Notification" className="bg-red-600 p-2 rounded-md w-[40px] block"/>
              <div className="w-[45%]">
                <h3 className="text-gray-600 font-semibold">Reminders</h3>
                <p className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </figure>
            <figure className="flex items-center space-x-3">
              <img src={"/static/images/Shopping Bag.png"} alt="shoping" className="bg-purple-600 p-2 rounded-md w-[40px] block"/>
              <div className="w-[45%]">
                <h3 className="text-gray-600 font-semibold">Shop Grid</h3>
                <p className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </figure>
          </section>
        </figure>
      </div>
      <div className="mx-36 mt-[5rem]">
        <h1 className="w-[400px] text-3xl font-bold text-center mx-auto leading-[3rem]">Want you to Boost your Business?</h1>
        <p className="w-[360px] text-xs text-gray-500 text-center mx-auto mt-[0.5rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="flex py-[3rem] justify-evenly items-center ">
          <figure className="shadow-2xl rounded-lg p-10 w-[30%]">
            <img src={"/static/images/2012.png"} alt="2012" className="bg-green-500 p-2 rounded-lg w-[65px] mb-8"/>
            <div className="space-y-1">
              <h1 className="font-bold text-lg text-gray-700">Scheduling</h1>
              <p className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            <a href="#" className="mt-4 inline-block text-blue-700 text-xs font-bold">Read more <img src="public\Arrow 2.png" alt="arrow r" className="inline-block w-[13px] ml-2" /></a>
          </figure>
          <figure className="shadow-2xl rounded-lg p-10 w-[30%]">
            <img src={"/static/images/Bitcoin Cryptocurrency.png"} alt="2012" className="bg-purple-500 p-2 rounded-lg w-[65px] mb-8"/>
            <div className="space-y-1">
              <h1 className="font-bold text-lg text-gray-700">Increase conversion</h1>
              <p className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            <a href="#" className="mt-4 inline-block text-blue-700 text-xs font-bold">Read more <img src="public\Arrow 2.png" alt="arrow r" className="inline-block w-[13px] ml-2" /></a>
          </figure>
          <figure className="shadow-2xl rounded-lg p-10 w-[30%]">
            <img src={"/static/images/Pie Chart.png"} alt="2012" className="bg-red-500 p-2 rounded-lg w-[65px] mb-8"/>
            <div className="space-y-1">
              <h1 className="font-bold text-lg text-gray-700">Increase analytics</h1>
              <p className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>
            <a href="#" className="mt-4 inline-block text-blue-700 text-xs font-bold">Read more <img src="public\Arrow 2.png" alt="arrow r" className="inline-block w-[13px] ml-2" /></a>
          </figure>
        </div>
      </div>
      <div className="mx-36 py-[3rem] flex space-x-4 justify-center items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-700">Unique Solutions for Your Business</h1>
          <p className="text-gray-500 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          <ul className="flex items-center justify-evenly pt-[1rem]">
            <li className="px-8 py-4 bg-red-50 w-fit rounded-lg">
              <p className="text-5xl text-red-500 font-bold">50+</p>
              <p className="text-center">Total Client</p>
            </li>
            <li className="px-8 py-4 bg-red-50 w-fit rounded-lg">
              <p className="text-5xl text-blue-500 font-bold">100+</p>
              <p className="text-center">Total Client</p>
            </li>
          </ul>
        </div>
        <img src={"/static/images/Recruiter found an employee.png"} alt="recruter" className="" />
      </div>

      <div className="mx-36 py-[3rem] space-y-4 ">
        <h2 className="text-blue-700 font-thin text-lg text-center">TESTEMONIALS</h2>
        <h1 className="text-gray-700 text-3xl font-bold text-center">What The People Thinks About Us</h1>
        <div className="flex justify-center items-center space-x-4 pt-5">
          <section className="flex flex-col justify-evenly pt-10 bg-gray-50 rounded-xl shadow-xl p-8 w-[45%]">
            <figure className="flex space-x-3">
              <img src={"/static/images/Ellipse 6.png"} alt="eclipe 6" />
              <div>
                <h3 className="text-lg font-semibold">Jack Williamson</h3>
                <p className="text-xs text-gray-500">One Year With Us</p>
              </div>
            </figure>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
          </section>
          <section className="flex flex-col justify-evenly pt-10 bg-gray-50 rounded-xl shadow-xl border-blue-700 border p-8 w-[45%]">
            <figure className="flex space-x-3">
              <img src={"/static/images/Ellipse 6.png"} alt="eclipe 6" />
              <div>
                <h3 className="text-lg font-semibold">Jack Williamson</h3>
                <p className="text-xs text-gray-500">One Year With Us</p>
              </div>
            </figure>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
          </section>
          <section className="flex flex-col justify-evenly pt-10 bg-gray-50 rounded-xl shadow-xl p-8 w-[45%]">
            <figure className="flex space-x-3">
              <img src={"/static/images/Ellipse 6.png"} alt="eclipe 6" />
              <div>
                <h3 className="text-lg font-semibold">Jack Williamson</h3>
                <p className="text-xs text-gray-500">One Year With Us</p>
              </div>
            </figure>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
          </section>
        </div>
      </div>
      <div className="mx-36 py-[3rem] space-y-4 ">
        <h1 className="text-center text-gray-700 font-bold text-3xl">Latest News</h1>
        <p className="text-xs text-gray-500 text-center">There are many variations of passages of lorem lpsum available, but the majority have suffered alteraction</p>
        <div className="flex space-x-4 justify-evenly items-center">
          <section className="border border-blue-700 rounded-xl p-8 bg-gray-50 w-[40%]">
            <img src={"/static/images/unsplash_8YG31Xn4dSw.png"} alt="UNSP1" className="mx-auto"/>
            <div className="flex justify-between pt-3">
              <figure className="flex items-center space-x-2">
                <img src={"/static/images/Person.png"} alt="person" className="w-[30px] block rounded-full " />
                <p className="text-xs">Jack Wilson</p>
              </figure>
              <figure className="flex items-center space-x-2 ">
                <img src={"/static/images/2013.png"} alt="person" className="w-[30px] block rounded-full" />
                <p className="text-xs">06 March 2022</p>
              </figure>
            </div>
            <p className="leading-9 font-bold text-lg mt-4">Discover cennect with great local business in your</p>
          </section>
          <section className="border border-blue-700 rounded-xl p-8 bg-gray-50 w-[40%]">
            <img src={"/static/images/unsplash_diNfwACx8bk.png"} alt="UNSP1" className="mx-auto"/>
            <div className="flex justify-between pt-3">
              <figure className="flex items-center space-x-2">
                <img src={"/static/images/Person.png"} alt="person" className="w-[30px] block rounded-full " />
                <p className="text-xs">Jack Wilson</p>
              </figure>
              <figure className="flex items-center space-x-2 ">
                <img src={"/static/images/2013.png"} alt="person" className="w-[30px] block rounded-full" />
                <p className="text-xs">06 March 2022</p>
              </figure>
            </div>
            <p className="leading-9 font-bold text-lg mt-4">Discover cennect with great local business in your</p>
          </section>
          <section className="border border-blue-700 rounded-xl p-8 bg-gray-50 w-[40%]">
            <img src={"/static/images/unsplash_2FPjlAyMQTA.png"} alt="UNSP1" className="mx-auto"/>
            <div className="flex justify-between pt-3">
              <figure className="flex items-center space-x-2">
                <img src={"/static/images/Person.png"} alt="person" className="w-[30px] block rounded-full " />
                <p className="text-xs">Jack Wilson</p>
              </figure>
              <figure className="flex items-center space-x-2 ">
                <img src={"/static/images/2013.png"} alt="person" className="w-[30px] block rounded-full" />
                <p className="text-xs">06 March 2022</p>
              </figure>
            </div>
            <p className="leading-9 font-bold text-lg mt-4">Discover cennect with great local business in your</p>
          </section>
        </div>
      </div>
      <div className="mx-36 py-[3rem] space-y-4 "> 
        <h2 className="text-blue-700 font-thin text-lg text-center">Join Our Comunity</h2>
        <h1 className="text-gray-700 text-3xl font-bold text-center">Subscribe To Our Newsletter</h1>
        <p className="text-gray-500 text-center w-[500px] mx-auto">There are many variations of passages of lorem lpsum available, but the majority have suffered alteraction</p>
        <div className="relative shrink-0">
          <input type="text" className="bg-gray-50 border w-[40rem] h-[2.5rem] mx-auto block border-blue-700 rounded-xl focus:outline-blue-500"/>
          <button className="absolute top-0 right-[13.5rem] bg-blue-600 text-blue-50 h-[2.5rem] px-4 rounded-xl">Subscribe</button>
        </div>
      </div>
      <div className="px-36 py-[3rem] space-y-4 flex justify-evenly items-center bg-blue-600"> 
        <section className="w-[35%]">
          <h1 className="text-blue-50 font-bold text-2xl">Agency</h1>
          <p className="text-blue-50 pt-4 text-xs">There are many variations of passages of lorem lpsum available, but the majority have suffered alteraction</p>
          <ul className="flex space-x-2 pt-2">
            <li><img src={"/static/images/Group 37.png"} alt="in" className="w-[50px] block"/></li>
            <li><img src={"/static/images/Group 38.png"} alt="fb" className="w-[50px] block"/></li>
            <li><img src={"/static/images/Group 39.png"} alt="tw" className="w-[50px] block"/></li>
          </ul>
        </section>
        <section>
          <h1 className="text-blue-50 font-bold text-2xl">Product</h1>
          <ul className="flex flex-col space-y-2">
            <li className="pt-2">
              <p className="text-blue-50 text-xs">Employee database</p>
            </li>
            <li>
              <p className="text-blue-50 text-xs">Payroll</p>
            </li>
            <li>
              <p className="text-blue-50 text-xs">Absences</p>
            </li>
            <li>
              <p className="text-blue-50 text-xs">Time tracking</p>
            </li>
          </ul>
        </section>
        <section>
          <h1 className="text-blue-50 font-bold text-2xl">Information</h1>
          <ul className="flex flex-col space-y-2">
            <li className="pt-2">
              <p className="text-blue-50 text-xs">FAQs</p>
            </li>
            <li>
              <p className="text-blue-50 text-xs">Blog</p>
            </li>
            <li>
              <p className="text-blue-50 text-xs">Support</p>
            </li>
            <li>
              <p className="text-blue-50 text-xs">Payroll</p>
            </li>
          </ul>
        </section>
        <section>
          <h1 className="text-blue-50 font-bold text-2xl">Company</h1>
          <ul className="flex flex-col space-y-2">
            <li className="pt-2">
              <p className="text-blue-50 text-xs">About US</p>
            </li>
            <li>
              <p className="text-blue-50 text-xs">Career</p>
            </li>
            <li>
              <p className="text-blue-50 text-xs">Contact Us</p>
            </li>
          </ul>
        </section>
      </div>
      <p className="text-center text-gray-50 bg-blue-600 pb-10">© 2021 Real State - All Rights Reserved.</p>
    </div>
  )
}