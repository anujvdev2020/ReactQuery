import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get("http://localhost:4000/users/" + email);
};

const fetchUserCoursesByChannelId = (channelId) => {
    return axios.get("http://localhost:4000/channels/" + channelId);
  };
const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], ()=>fetchUserByEmail(email));

  const channelId=user?.data.channelId

  useQuery(['courses',channelId],()=>fetchUserCoursesByChannelId(channelId),{
    enabled:!!channelId
  })
  return <div>DependentQueries </div>;
};

export default DependentQueries;
