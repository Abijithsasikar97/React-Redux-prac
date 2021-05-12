import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Avatar } from "antd";
import Learners from "../../assets/data/Learners.json";
import { connect } from "react-redux";
import { learnerData } from "../../redux/action/Learner";

const { Meta } = Card;

const cardStyle = {
  border: "1px solid #ccc",
  marginBottom: "15px",
};

export const LearnersList = (props) => {
  const { learnerData } = props;
  let history = useHistory();
  const [learnerList, setLearnerList] = useState(Learners);

  const viewLearner = (data) => {
    learnerData(data);
    history.push("/viewlearner");
  };
  return (
    <>
      <div className="container text-center margin-top">
        {learnerList.map((data, index) => {
          return (
            <Card
              onClick={() => viewLearner(data)}
              key={data.id}
              style={cardStyle}
              hoverable
            >
              <Meta
                avatar={<Avatar size={64} shape="square" src={data.img} />}
                title={data.name}
                description={data.email}
              />
              {data.personalInfo.location}
            </Card>
          );
        })}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  learnerData: (learner) => dispatch(learnerData(learner)),
});

export default connect(null, mapDispatchToProps)(LearnersList);
