import React, { Component } from 'react'

 class ErrorBoundary extends Component {
     constructor(props) {
         super(props)

         this.state = {
              isError : false
         }
     }

     static getDerivedStateFromError(error){
        return {
            isError : true
        }
     }
     componentDidCatch(error,info){
         console.log(error);
         console.log(info);
     }

    render() {
        if(this.state.isError){
   return (
            <div>
                <h1>Something went wrong!!</h1>
            </div>
        )
   }
   return this.props.children;

    }
}

export default ErrorBoundary
