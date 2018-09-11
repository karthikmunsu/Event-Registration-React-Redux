import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchEvents, { fetchEventDetails } from ".././actions/ListEventsActions";
import removeEvent from '.././actions/DeleteEventAction';
import ListEvents from '.././components/ListEventsComponent/ListEvents';

const mapStateToProps = (state) => {
  return state.ListEventsReducer;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchEvents,
    fetchEventDetails,
    removeEvent,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEvents);