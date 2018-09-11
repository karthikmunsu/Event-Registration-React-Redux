import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import updateEvent from ".././actions/UpdateEventActions";
import EditEvent from ".././components/EditEventComponent/EditEvent";

const mapStateToProps = state => {
  return state.EditEventReducer;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateEvent
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEvent);
