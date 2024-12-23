export const Sidebar = () => {
return (
    <>
     <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
               <div className="top-0 p-3">
                  <svg width="98" height="42" viewBox="0 0 597 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M282.153 215.673C276.351 215.673 270.828 214.695 265.584 212.74C260.34 210.785 255.988 207.744 252.529 203.617C249.182 199.599 247.397 194.386 247.173 187.978H267.09C267.648 190.802 269.21 192.757 271.776 193.843C274.454 195.037 277.355 195.635 280.48 195.635C282.488 195.635 284.385 195.418 286.17 194.983C288.067 194.657 289.852 194.331 291.526 194.006V214.369C289.852 214.587 288.234 214.858 286.672 215.184C285.222 215.51 283.715 215.673 282.153 215.673ZM254.538 182.928C245.946 182.928 238.359 182.113 231.776 180.484C225.304 178.855 219.837 175.868 215.374 171.524C211.022 167.18 207.73 160.989 205.499 152.953C203.379 144.916 202.319 134.435 202.319 121.511C202.319 108.696 203.435 98.2694 205.666 90.2326C207.898 82.0871 211.189 75.8423 215.541 71.498C219.892 67.1538 225.304 64.1671 231.776 62.538C238.359 60.8003 245.946 59.9315 254.538 59.9315C263.241 59.9315 270.828 60.8003 277.299 62.538C283.883 64.1671 289.35 67.1538 293.702 71.498C298.053 75.8423 301.289 82.0871 303.409 90.2326C305.64 98.2694 306.756 108.696 306.756 121.511C306.756 134.435 305.64 144.916 303.409 152.953C301.289 160.989 297.997 167.18 293.534 171.524C289.183 175.868 283.771 178.855 277.299 180.484C270.828 182.113 263.241 182.928 254.538 182.928ZM254.538 157.677C259.112 157.677 262.906 157.188 265.919 156.211C268.931 155.125 271.274 153.333 272.948 150.835C274.733 148.228 275.961 144.59 276.63 139.92C277.411 135.141 277.802 129.005 277.802 121.511C277.802 113.8 277.411 107.555 276.63 102.777C275.961 97.9979 274.733 94.3596 272.948 91.8617C271.274 89.2551 268.931 87.5174 265.919 86.6486C262.906 85.6711 259.112 85.1824 254.538 85.1824C250.074 85.1824 246.337 85.6711 243.324 86.6486C240.311 87.5174 237.912 89.2551 236.127 91.8617C234.453 94.3596 233.226 97.9979 232.445 102.777C231.664 107.555 231.273 113.8 231.273 121.511C231.273 129.005 231.608 135.141 232.278 139.92C233.059 144.59 234.286 148.228 235.96 150.835C237.745 153.333 240.144 155.125 243.157 156.211C246.169 157.188 249.963 157.677 254.538 157.677Z" fill="black"/>
                  <path d="M346.941 182.928C339.019 182.928 332.771 180.593 328.196 175.923C323.733 171.144 321.501 164.682 321.501 156.537V94.3053H350.456V147.74C350.456 151.867 351.46 154.636 353.469 156.048C355.477 157.46 358.099 158.166 361.335 158.166C363.567 158.166 366.133 157.623 369.034 156.537C372.046 155.451 374.501 154.093 376.398 152.464V94.3053H405.185V181.95H381.252L376.398 173.316C372.493 175.706 367.974 177.932 362.841 179.995C357.82 181.95 352.52 182.928 346.941 182.928Z" fill="black"/>
                  <path d="M451.321 220.56L460.526 181.95C454.724 181.95 449.815 180.919 445.798 178.855C441.781 176.792 438.49 173.968 435.923 170.384C433.469 166.691 431.628 162.401 430.4 157.514L415.17 94.3053H445.128L457.179 151.812C457.625 153.441 458.183 154.745 458.853 155.722C459.522 156.699 460.247 157.46 461.028 158.003C461.921 158.437 462.758 158.763 463.539 158.98C464.32 159.089 464.989 159.143 465.547 159.143L479.271 94.3053H508.728L483.958 204.432L475.589 220.56H451.321Z" fill="black"/>
                  <path d="M548.578 182.439C541.884 182.439 536.305 181.407 531.842 179.344C527.379 177.172 524.087 173.968 521.967 169.732C519.847 165.497 518.787 160.121 518.787 153.604V57.6508H547.742V149.206C547.742 151.921 548.021 154.093 548.578 155.722C549.136 157.351 550.029 158.6 551.256 159.469C552.484 160.229 554.046 160.772 555.943 161.098L561.968 161.913V182.439H548.578Z" fill="black"/>
                  <path d="M576.247 182.276C573.792 182.276 572.564 181.082 572.564 178.692V160.772C572.564 158.274 573.792 157.025 576.247 157.025H592.983C595.661 157.025 597 158.274 597 160.772V178.692C597 179.995 596.61 180.919 595.828 181.462C595.159 182.005 594.211 182.276 592.983 182.276H576.247Z" fill="black"/>
                  <path d="M151.937 47.5359C152.573 66.2793 152.042 84.6232 146.965 102.579C140.388 125.846 127.988 145.78 110.356 162.636C98.8546 173.633 85.2357 181.704 70.9405 188.757C61.4761 193.429 52.3701 198.685 43.7672 204.732C31.9478 213.038 22.1372 223.264 14.0738 235.028C9.76227 241.318 5.90567 247.897 1.82766 254.34C1.45327 254.931 0.962137 255.448 0.523338 256C0.350234 255.902 0.17713 255.804 0 255.706C0.998368 253.055 1.92427 250.38 3.00316 247.76C11.912 226.174 22.5921 205.429 34.6893 185.381C49.5642 160.732 66.5042 137.47 85.7711 115.922C100.115 99.881 115.211 84.4704 130.13 68.9228C136.813 61.9596 143.882 55.3528 150.778 48.5894C151.096 48.2761 151.446 47.9824 151.937 47.5359Z" fill="black"/>
                  <path d="M29.8504 172.814C29.7216 167.75 29.468 162.687 29.4881 157.623C29.5686 140.375 34.0452 124.225 42.6239 109.155C48.5899 98.6748 56.5246 89.6909 65.3207 81.3883C85.5376 62.316 105.734 43.2241 125.976 24.1753C134.212 16.421 142.533 8.74507 150.818 1.03782C151.132 0.744095 151.498 0.501285 152.134 0C152.134 0.838086 152.134 1.33154 152.134 1.82499C152.134 10.3703 152.167 18.9196 152.102 27.4649C152.098 28.2717 151.74 29.2782 151.176 29.846C138.306 42.7815 125.307 55.5996 112.49 68.586C95.2073 86.0879 78.2069 103.852 63.1065 123.218C54.1091 134.76 45.7196 146.716 38.3043 159.299C35.6474 163.811 32.9743 168.314 30.3053 172.822H29.8424L29.8504 172.814Z" fill="#0A0A0A"/>
                </svg>
               </div>
               <div className="h-1"></div>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ms-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
</>

  );
}