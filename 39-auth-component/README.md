![cf](http://i.imgur.com/7v5ASc8.png) `<Auth/>` Component
===

## Learning Objectives
* Students will be able integrate front-end authorization controls using React
* Students will be able to completely manage a login/logout process using React

## The `<Auth/>` Component
* Implemented as a non-visual wrapping component
* Encloses any component that requires protection.
* When the Auth component detects a 'falsy' condition, the children will not render.
* In all cases, `<Auth/>` would require a valid login.
* In some cases, `<Auth/>` might require a certain capability.

i.e. Hide a link until you have been logged in
`
<Auth>
    <Link to="/profile">Profile</Link>
</Auth>
`

i.e.  Hide a feature unless you have the right capability, based on your role.

`
<Auth capability="delete">
    <a href="#" onClick={this.deleteAccount}>Delete This Account</a>
</Auth>
`
