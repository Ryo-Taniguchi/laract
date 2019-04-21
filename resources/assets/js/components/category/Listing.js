import React, { Component } from 'react';
import axios from 'axios';
export default class Listing extends Component {

    constructor()
    {
        super();
        this.state = {
            categoryies: []
        }
    }

    componentDidMount() 
    {
        axios.get('http://127.0.0.1:8000/category')
        .then(response=>{
            this.setState({categoryies: response.data});
        });
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">State</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categoryies.map(category=>{
                                return (
                                <tr>
                                <th scope="row">1</th>
                                <td>{category.name}</td>
                                <td>{category.active==1?("Active"):("InActive")}</td>
                                <td>{category.created_at}</td>
                                <td>{category.updated_at}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
