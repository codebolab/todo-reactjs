import React from 'react';
import './ClassComponent.css'

class ClassComponent extends React.Component {
    constructor() {
        super();
        this.execute = this.execute.bind(this);
        this.state = {contador: 0};
    }

    execute(event) {
        this.setState({contador: this.state.contador + 1})
    }

    componentDidMount(){
        console.log(`el componente se ha montado`)
    }

    render() {
        return (
            <button onClick={this.execute} className={`button-class`}>
                contador {this.state.contador}
            </button>
        );
    }
}

export default ClassComponent;