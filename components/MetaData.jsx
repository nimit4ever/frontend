import { Helmet } from "react-helmet-async";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - DB6`}</title>
    </Helmet>
  );
};

export default MetaData;
