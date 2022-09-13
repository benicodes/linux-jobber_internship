import React from 'react';

class Devs extends React.Component {
    render() {
        const {name, hobby, skill } = this.props;

        return (
            <div>
                <div>Name: {name}</div>
                <div>Hobby: {hobby}</div>
                <div>Skill: {skill}</div>
            </div>
        )
    }
}

export default Devs;