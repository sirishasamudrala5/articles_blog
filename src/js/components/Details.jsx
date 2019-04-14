import React from "react";
import { connect } from "react-redux";

class Details extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let artid = this.props.location.state.id;
        const artrow  = this.props.articles.find((element) => {
            return element.id === artid;
        });

        return (
            <div className="row mt-5">
                <div className="col-md-9 offset-md-1">
                    <h2>Details - {artrow.title}</h2>
                    <div>{this.props.location.state.id}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
};
export default connect(mapStateToProps, null)(Details); 