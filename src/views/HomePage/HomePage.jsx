import React, { useEffect } from 'react';
import Layout from "../../component/Layout/layout";
import Home from "../../component/Home/Home";
import {connect, useDispatch} from 'react-redux';
import transactionOperations from "../../redux/transactions/transactionOperations";

const HomePage = ({token, userId}) => {
  const dispatch = useDispatch();

  useEffect(() => { 
    // console.log(userId)
    // console.log(token)
      dispatch(transactionOperations.getTransactions(userId, token));
    }, []);
return ( 
  <Layout>
    <Home />
  </Layout>
  )};

const mapDispatchToProps = (state) => ({
  token: state.auth.token,
  userId: state.auth.user.id
}) 

export default connect(mapDispatchToProps)(HomePage);
