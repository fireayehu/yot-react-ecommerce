import { Bars } from "react-loader-spinner";

export const Loading = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#26a69a"
      ariaLabel="bars-loading"
      visible={true}
    />
  );
};
