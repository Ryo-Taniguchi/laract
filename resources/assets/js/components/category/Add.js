import React, { Component } from 'react';

export default class Add extends Component {

    constructor() 
    {
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            category_name: ''
        }
    }

    onChangeCategoryName(e) {
        this.setState({
            category_name:e.target.value
        });
    }

    onSubmit(e)
    {   
        // defaultの動作を発生させない
        e.preventDefault();
        const category = {
            category_name : this.state.category_name
        }

        axios.post('http://127.0.0.1:8000/category/store',category)
        .then(res=>console.log(res.data));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="category_name">Category Name</label>
                    <input type="text"
                    className="form-control" 
                    id="category_name" 
                    value={this.state.category_name}
                    onChange={this.onChangeCategoryName}
                    placeholder="Enter email" />
                </div>   
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
