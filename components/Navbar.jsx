import {CircleHelp , MessageSquareMore , Settings2, BellDot} from 'lucide-react';


const Navbar = () => {
    return (
        <nav class="flex flex-row-reverse fixed top-0 z-10 w-full p-2 mr-2 justify-items-end items-center md:left-[300px] bg-transparent">
            <div className='justify-between items-center flex flex-row p-2 flex-grow w-full max-w-[600px] mr-[350px] pl-10'>
               <CircleHelp color='black'/>
               <MessageSquareMore color='black'/>
               <Settings2 color='black'/>
               <BellDot color='black'/>
               <div class="flex items-center justify-center space-x-2">
                  <button type="button" class="flex rounded-full focus:ring-4 focus:ring-gray-300">
                     <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                     <h2 className='text-black text-lg font-bold p-0 pl-2'>Adeline H. Dancy</h2>
                  </button>
               </div>
            </div>
            <div class="flex items-center space-x-4 flex-grow pr-3">     
              <input type="text" class="w-full h-10 px-4 py-2 text-sm text-black placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:border-gray-700 dark:focus:ring-gray-600" placeholder="Search..."/>
            </div>
         </nav>
       );
   };
   
   export default Navbar;