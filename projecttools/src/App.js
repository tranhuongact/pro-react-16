import React from 'react';

const name = 'Huong'
const city = 'Ha Noi'
export default class App extends React.Component {

  message = () => `Hello ${name} from ${city}`

  render = () => {
    <h4 className="bg-primary text-white text-center p-3">
      {this.message()}
    </h4>
  }
}
