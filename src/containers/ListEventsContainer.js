import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchEvents, { fetchEventDetails } from ".././actions/ListEventsActions";
import ListEvents from '.././components/ListEventsComponent/ListEvents';

const mapStateToProps = (state) => {
  return state.ListEventsReducer;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchEvents,
    fetchEventDetails,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEvents);