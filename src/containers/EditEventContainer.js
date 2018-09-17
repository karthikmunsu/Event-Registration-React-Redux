import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEventDetails } from ".././actions/ListEventsActions";
import updateEvent from ".././actions/UpdateEventActions";
import EditEvent from ".././components/EditEventComponent/EditEvent";

const mapStateToProps = state => {
  return state.EditEventReducer;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateEvent,
      fetchEventDetails,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEvent);
