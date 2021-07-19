import React from 'react';
import emptyImage from "../empty.jpg";
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import Loading from "./LoadingComponent"
class ItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: '',
            url: null
        }
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleUpload(file) {
        //Chọn file
        const imageFile = file[0];
        //Tạo đường dẫn để preview ảnh hiển thị cho người dùng nhìn thấy
        if (imageFile) {
            //Tạo form và đường dẫn rồi lưu vào State
            const form = new FormData();
            form.append('myFile', imageFile);
            this.setState({
                form: form,
                url: URL.createObjectURL(imageFile)
            })
        }
    }
    render() {
        const { form, url } = this.state;
        const { isLoading } = this.props;
        console.log(isLoading)
        const previewImg = {
            maxWidth: '400px',
            maxHeight: '450px'
        }
        const parentDiv = {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column-reverse'
        }
        const childDiv = {
            width: '400px',
            display: 'flex',
            justifyContent: 'space-between'
        }
        const marginBtn = {
            marginTop: 10
        }
        return (
            <div style={parentDiv}>
                <div style={childDiv}>
                    {/* Nút chọn ảnh */}
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        onChange={(evt) => this.handleUpload(evt.target.files)}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="contained-button-file" style={{ margin: 0 }}>
                        <Button
                            variant="contained"
                            color="default"
                            component={"span"}
                            startIcon={<CloudUploadIcon />}
                            style={marginBtn}
                        >
                            Upload
                        </Button>
                    </label>
                    {/* Nút chọn ảnh */}
                    {/* Nút save ảnh */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.props.uploadImage(form)}
                        startIcon={<SaveIcon />}
                        style={marginBtn}
                    >
                        Save
                    </Button>
                    {/* Nút save ảnh */}
                </div>
                <div>
                    {/* Tạo loading khi upload */}
                    {isLoading ?
                        <Loading />
                        :
                        <img
                            src={!url ? emptyImage : url}
                            style={previewImg}
                        />
                    }
                    {/* Tạo loading khi upload */}
                </div>
            </div>
        );
    }
}

export default ItemComponent;