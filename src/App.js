import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    // can reference state ANYWHERE in my code by using this.state
    render() {
        return (
            <div>
                <h1>Is state important to know?</h1>
                <h1>{this.state.answer}</h1>
            </div>
        )
    }
}

export default App