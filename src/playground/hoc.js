// Higher Order Component (HOC) - A component that render another component
// Reuse code
// Render hijacking
// prop manipulation
// Abstract State
//


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>this info is: {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}   
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

const requiredAuthentication = (WrappedComponent) => {
   return (props) => (
   <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) :(<p>This is private info. Please log as admin!</p>)}   
            
        </div>
   )
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Admin" />, document.getElementById('app'));