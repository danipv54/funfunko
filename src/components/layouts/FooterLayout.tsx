export const FooterLayout = () => {
  return (
    <div className='mt-8 mb-auto'>
      <div className='bg-slate-900 py-8 px-8 flex space-x-16'>

        <img src="https://www.funko.com/static/media/funko-logo-white.445c4f62.svg" alt="logo" />
        <div className='flex space-x-8'>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="w-6 h-6 text-slate-50"> <path d="M9.97.97a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06
             1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 01-1.06-1.06l3-3zM9.75 6.75v6a.75.75 0 001.5
              0v-6h3a3 3 0 013 3v7.5a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3h3z" /> <path d="M7.151 
              21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5
               4.5 0 01-4.5 4.5H7.151z" />
            </svg>
          </a>

          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 
            h-6 text-slate-50">  <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 
            2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0
             01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 
             0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 
             6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 
             8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z"
              clipRule="evenodd" />
            </svg>
          </a>

          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
             className="w-6 h-6 text-slate-50">  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 
             01.359.852L12.982 9.75h7.268a.75.75 0  01.548 1.262l-10.5 11.25a.75.75 0 
             01-1.272-.71l1.992-7.302H3.75a.75.75 0  01-.548-1.262l10.5-11.25a.75.75 0 
             01.913-.143z" clipRule="evenodd" />
            </svg>
          </a>

          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            className="w-6 h-6 text-slate-50">  <path fillRule="evenodd" d="M4.848 2.771A49.144
             49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 
             1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 
             4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 
             01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 
             3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 
             01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div className='flex justify-around mt-8 bg-gray-100 pb-4'>
        <ul className='space-y-2 mt-4 flex flex-col'>
          <b>ACCOUNT</b>
          <a href="#">Account</a>
          <a href="#">Order History</a>
          <a href="#">Pop Yourself</a>
          <a href="#">Funko Fan Club</a>
          <a href="#">Notification Settings</a>
        </ul>

        <ul className='space-y-2 mt-4 flex flex-col'>
          <b >ASSISTANCE</b>
          <a href="#">Support Center</a>
          <a href="#">Returns Policy</a>
          <a href="#">Cancellation Policy</a>
          <a href="#">Replacement Policy</a>
          <a href="#">Accessibility Statement</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Resellers</a>
        </ul>

        <ul className='space-y-2 mt-4 flex flex-col'>
          <b>ABOUT FUNKO</b>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Newsroom</a>
          <a href="#">Funko Cares</a>
          <a href="#">Careers</a>
          <a href="#">Store Locator</a>
        </ul>

        <ul className='space-y-2 mt-4 flex flex-col'>
          <b >CONNECT WITH US</b>
          <a href="#">Contact Us</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">Digital Pop!</a>
          <a href="#">Loungefly</a>
          <a href="#">Funko Games</a>
        </ul>

      </div>

    </div>
  )
}
