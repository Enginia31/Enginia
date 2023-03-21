function formatname(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Enginia',
    lastName: 'Mandiangan'
};

const element = (
    <h1> 
      Hello, {formatname(user)}! </h1>
);

function Tiga() {
    return (
        element
    );
}

export default Tiga;