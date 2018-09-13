import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListEvents, Interested, Not_Interested } from '.././actions/ParticipantActions';
import Participant from '.././components/ParticipantComponent/Participant';

const mapStateToProps = state => {
  console.log(state);
  return state.ParticipantReducer;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ListEvents,
    Interested,
    Not_Interested,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Participant);