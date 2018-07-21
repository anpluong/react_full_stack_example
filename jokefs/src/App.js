import React, {Component} from 'react';
const axios = require('axios');

class App extends Component {
    constructor(props) {
      super(props); 
      this.state = {
        array: []
    }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.get('http://localhost:3333/api/jokes')
        .then(function (response) {
            console.log(response.data);
   
            return response.data;
        })
        .then((result) => {
            let newArray = [...result]

            this.setState({
                array: newArray
            })
        })

    }

    render() {


     const listItems = this.state.array.map((item) =>
        <li key={item.id}>{item.id}     {item.joke}</li>
      );

      return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <button>Submit</button>
            </form>
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
      </div>  
      )
    }
}


export default App;