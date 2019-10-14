import React, { Component } from 'react'

export default class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftpanel: false,
            menuLists: [
                { id: 'list001', text: 'Home ', icon: 'mdi-home'},
                { id: 'list002', text: 'About ', icon: 'mdi-home'},
                { id: 'list003', text: 'Contact ', icon: 'mdi-home'}
            ]
        }
    }

    printList(text) {
        console.log(text)
    }

    render() {
        return (
            <section className="left-panel">
                <ul>
                    {
                        this.state.menuLists.map(item => {
                            return <li className="pointer" key={item.id} onClick={this.printList.bind(this, item.text)}>{item.text}</li>
                        })
                    }
                </ul>
            </section>
        )
    }
}
