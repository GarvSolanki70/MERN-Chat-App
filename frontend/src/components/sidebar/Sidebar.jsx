import React from 'react'
import SeachInput from './SeachInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
 			<SeachInput />
 			<div className='divider px-3'></div>
 			 <Conversations />
 			<LogoutButton /> 
 		</div>
  )
}

export default Sidebar;



//STARTER CODE
// import React from 'react'
// import SeachInput from './SeachInput';
// import Conversations from './Conversations';
// import LogoutButton from './LogoutButton';

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//  			<SeachInput />
//  			<div className='divider px-3'></div>
//  			 <Conversations />
//  			<LogoutButton /> 
//  		</div>
//   )
// }

// export default Sidebar;