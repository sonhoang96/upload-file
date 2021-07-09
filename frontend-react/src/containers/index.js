import * as types from "../constants"
import React from 'react';
import { connect } from "react-redux";
import * as actions from "../actions"
import ItemComponent from "../components"
class ItemContainer extends React.Component {
    componentDidMount() {
        // this.props.initload()
    }
    render() {
        return (
            <div>
                <ItemComponent {...this.props}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        listData: state.items.listData
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        initload: () => {
            dispatch(actions.getItems())
        },
        addItem: (data) => {
            dispatch(actions.postItem(data))
        },
        updateData: (data) => {
            dispatch(actions.updateItem(data))
        },
        deleteData: (data) => {
            dispatch(actions.deleteItem(data))
        },
        uploadImage: (data) => {
            dispatch(actions.uploadFile(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);