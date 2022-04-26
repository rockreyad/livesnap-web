import React, { Component } from 'react'
import Header from './Header'

export class Contact extends Component {
  render() {
    return (
      <div>
     <Header/>
      <div className="container mx-auto sm:px-4">
      <h2 className="text-2xl font-semibold py-3 uppercase">
          Reach to Livesnap
        </h2>

        <div className="flex space-y-4">

          <div className="">
            <h3 className="text-lg">Contact from is coming soon..</h3>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Contact