import React from 'react' ;

const UserList = (props) => {
    return (
        <div>
            <div>
                <marker 
                    onClick ={() => {
                        props.onSelect( props.id );
                    }}
                     >*</marker>
                <li> {props.text} </li>
            </div>
        </div>
    );  
};

export default UserList ;