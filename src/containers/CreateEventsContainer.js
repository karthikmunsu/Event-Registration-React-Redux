import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createEvent from '.././actions/CreateEventsActions';
import CreateEvent from '.././components/CreateEventComponent/CreateEvent';

const mapStateToProps = (state) => {
  return state.CreateEventsReducer;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createEvent,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
