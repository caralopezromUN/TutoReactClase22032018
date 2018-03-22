import React, { Component } from 'react';
import './App.css';
import Content from './Content';

class Lista extends Component {
    constructor(props) {
        super();
        this.state = { event: 0}
        this.handleViewClick = this.handleViewClick.bind(this)
        this.handleHideClick = this.handleHideClick.bind(this)
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
        if (this.state.event > 0) {
            
        return (
            <div className="App">
                <h4>Esto es un componente</h4>
                <h5>
                    {this.props.listado.map((user) =>{
                        return <Content key={user.id}
                                        name={user.name}
                                        age={user.type}/>
                    })}
                </h5>
                <h3>
                    {this.props.age}
                </h3>
                <h1>
                    {this.state.event}
                </h1>
            
                <button onClick={this.handleHideClick}>Hide</button>

                <p>Soy {this.state.mode} </p>
            </div>
        );
    }else {
        return(
        <div >
        <button onClick={this.handleViewClick} >View</button>
        </div>
        )
    }
    }
}

export default Lista;
