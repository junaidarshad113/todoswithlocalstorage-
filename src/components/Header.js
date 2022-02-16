import React from 'react'

const Header = (props) => {

    return (
        <div><nav className="navbar navbar-dark bg-primary ">
            <div className="container-fluid">
                <a className="navbar-brand">My Todo List</a>
                <form className="d-flex">
                </form>
                <div>
                   Total:{props.todoCount}
                </div>
            </div>
        </nav></div>
    )
}

export default Header