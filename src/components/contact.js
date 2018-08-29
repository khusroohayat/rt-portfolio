import React, { Component } from 'react';

class Contact extends Component {
    
    render() { 
        return ( 
            <main id="contact">
        <h1 className="lg-heading">
          Contact&nbsp;<span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
              <span className="text-secondary">Email: </span>
              khusroo.hayat@gmail.com
          </div>
          <div>
              <span className="text-secondary">Phone: </span>
              (+92)-332-3279737
          </div>
          <div>
              <span className="text-secondary">Address: </span>
              Hyderabad, Pakistan
          </div>
        </div>
      </main>
         );
    }
}
 
export default Contact;