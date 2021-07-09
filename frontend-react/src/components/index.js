import React from 'react';
import emptyImage from "../empty.jpg"
import loadingImg from "../476.gif"
import fs from "fs"
class ItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: ''
        }
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleUpload(e) {
        const imageFile = e.target.files[0];
        const form = new FormData();
        form.append('myFile', imageFile);
        this.setState({
            form: form
        })

    }
    render() {
        // console.log(this.state.form)
        return (
            <div>
                <div>
                    {/* <form action="/upload" enctype="multipart/form-data" method="POST"> */}
                        <input type="file" name="myFile" onChange={(e) => this.handleUpload(e)}/>
                        <input type="submit" value="Upload a file" onClick={() => this.props.uploadImage(this.state.form)}/>
                    {/* </form> */}
                </div>
            </div>
        );
    }
}

export default ItemComponent;