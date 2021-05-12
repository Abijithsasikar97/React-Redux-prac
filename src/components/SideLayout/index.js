import React from "react";
import { Avatar, Divider, Card } from "antd";
import PropTypes from "prop-types";
import Flex from "../Flex";
import {
  CalendarOutlined,
  HomeOutlined,
  PushpinOutlined,
  LinkedinFilled,
  TwitterSquareFilled,
  FacebookFilled,
} from "@ant-design/icons";

export const SideLayout = ({ profilePic, ProfileDetails, name, joinedOn, presentDays }) => {
  return (
    <Card>
      <Flex
        className="w-100 text-center"
        alignItems="center"
        flexDirection="column"
        justifyContent="between"
      >
        <Avatar
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          src={profilePic}
        />
        <h1 className="text-muted">{name}</h1>
        <h3>{ProfileDetails.title}</h3>
        <h4>
          <CalendarOutlined /> {joinedOn}
        </h4>
        <p>
          <HomeOutlined /> {ProfileDetails.location}
        </p>
        <Divider />
        <div>
          <a className="link left" href={ProfileDetails.site}>
            <PushpinOutlined /> {ProfileDetails.site}
          </a>
          <a className="link left" href={ProfileDetails.linkedin}>
            <LinkedinFilled /> {ProfileDetails.linkedin}
          </a>
          <a className="link left" href={ProfileDetails.twitter}>
            <TwitterSquareFilled /> {ProfileDetails.twitter}
          </a>
          <a className="link left" href={ProfileDetails.facebook}>
            <FacebookFilled /> {ProfileDetails.facebook}
          </a>
        </div>
        <Divider />
        <div>
            <p>{`${presentDays} days present from the date joined (${joinedOn})`}</p>
        </div>
      </Flex>
    </Card>
  );
};

SideLayout.prototype = {
  profilePic: PropTypes.string,
  ProfileDetails: PropTypes.object,
  name: PropTypes.string,
  joinedOn: PropTypes.string,
  presentDays: PropTypes.string,
};

export default SideLayout;
