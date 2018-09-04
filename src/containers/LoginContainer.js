import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserSignIn } from ".././actions/LoginAction";
import Login from '.././components/Login/Login';

const mapStateToProps = (state) => {
  console.log(state.LoginReducer)
  return state.LoginReducer;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    UserSignIn
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);