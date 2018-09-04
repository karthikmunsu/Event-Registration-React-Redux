import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserSignUp } from ".././actions/LoginAction";
import SignUp from '../components/SignUpComponent/SignUp';

const mapStateToProps = (state) => {
  console.log(state.SignUpReducer)
  return state.SignUpReducer;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    UserSignUp
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);