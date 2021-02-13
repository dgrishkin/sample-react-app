import React from 'react';

export default class Info extends React.PureComponent {
    state = {
        someVal: 0,
        someStr: "Слово пастыря",
    }

    changeSomeVal = () => {
        this.setState({ someVal: this.state.someVal + 1 });
    }

    changeSomeStr = () => {
        this.setState({ someStr: this.state.someStr + ' ' + this.state.someVal });
    }

    resetState = () => {
        this.setState({
            someVal: 0,
            someStr: "Слово пастыря"
        });
    }

    render() {
        return (
            <div>
                <p>Какое-то значение: {this.state.someVal}</p>
                <p>Какая-то строка: {this.state.someStr}</p>
                <button onClick={this.changeSomeVal}>Поменять какое-то значение</button>
                <button onClick={this.changeSomeStr}>Поменять какую-то строку</button>
                <button onClick={this.resetState}>Сброс</button>
                <br />
                <br />
            </div>
        )
    }
}