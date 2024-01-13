import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';


class Index extends Component 
{
    render(){
        return (
            <div>
                <h1>Hello React World</h1>
            </div>
        )
    }
}

const container = document.getElementById('index');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Index/>);