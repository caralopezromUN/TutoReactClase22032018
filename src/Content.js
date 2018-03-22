import React, { Component } from 'react';
import './App.css';

class Content extends Component {
    constructor(props) {
        super();
        this.state = {  mode: undefined}

    }
    handleViewClick(e){
        this.setState({
            event : 1
        })
    }
    handleHideClick(e){
        this.setState({
            event : 0
        })
    }
    componentWillMount(){
        let mode;
        if (this.props.age > 70) {
          mode = 'Viejo';
        } else if (this.props.age < 18) {
          mode = 'Joven';
        } else {
          mode = 'Adulto';
        }
        this.setState({ mode });
    }

    render() {

            
        return (
            <div className="App">
                <h4>Esto es un componente</h4>
                <h5>
                    {this.props.name}
                </h5>
                <h3>
                    {this.props.type}
                </h3>
                <h1>
                    {this.state.event}
                </h1>
            
                

                <p>Soy {this.state.mode} </p>
            </div>
        );
 
        
    
    }
}

export default Content;
