import React from 'react';

class HelloWorld extends React.Component{

    state = {name : "akilesh"};
    
    render(){
        return (
        <h1>hello World {this.state.name}</h1>
        );
    }
}

export default HelloWorld;