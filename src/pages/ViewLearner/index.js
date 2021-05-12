import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import SideLayout from "../../components/SideLayout";
import ApexPie from "../../components/Charts/ApexPie";

export const ViewLearner = (props) => {
  const { learner } = props;
  let history = useHistory();

  useEffect(() => {
    if (Object.keys(learner).length === 0) {
      history.push("/learnerslist");
    }
  }, []);

  const series = [parseInt(learner.noofCommits), parseInt(learner.linesofCode)];

  const labels = ["Total Commits", "Lines of Code"];

  const extra = `${learner.noofCommits} Commit's and ${learner.linesofCode} Lines of code written in the last 3 month's `;

  const goBack = () => {
      history.goBack();
  }

  if (Object.keys(learner).length === 0) return null;

  return (
    <div className="container margin-top">
        <h2 onClick={() => goBack()} className="link"><ArrowLeftOutlined /></h2>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={7}>
          <SideLayout
            profilePic={learner.img}
            name={learner.name}
            ProfileDetails={learner.personalInfo}
            joinedOn={learner.dateJoined}
            presentDays={learner.daysPresent}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={15} xxl={14}>
          <ApexPie
            series={series}
            labels={labels}
            extra={<h3 style={{ textAlign: "center" }}>{extra}</h3>}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => ({
  learner: state.learner,
});

export default connect(mapStateToProps)(ViewLearner);
