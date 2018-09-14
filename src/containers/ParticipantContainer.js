import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListEvents, Interested, Not_Interested, AllEvents } from '.././actions/ParticipantActions';
import Participant from '.././components/ParticipantComponent/Participant';

const mapStateToProps = state => {
  return state.ParticipantReducer;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ListEvents,
    Interested,
    Not_Interested,
    AllEvents,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Participant);