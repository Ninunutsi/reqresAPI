import React from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import useGetRequest from "../../hooks/useGetRequest";
import { Loader } from "../../components/SVG-loader";
import {
  StyledDetailsPage,
  StyledH1,
  StyledHeader,
  StyledNoData,
} from "./detailsPage.styled";
import { SingleUser } from "../../components/single-data-details/single-user";
import { SingleResource } from "../../components/single-data-details/single-resource";

interface ApiResponse<T> {
  data: T;
}

interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ResourcesData {
  id: number;
  name: string;
  year: string;
  color: string;
  pantone_value: string;
}

export const DetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const pathName = location.pathname.slice(1).split("/")[0];
  const { data, loading } = useGetRequest<
    ApiResponse<UserData | ResourcesData>
  >(`https://reqres.in/api/${pathName}/${id}`);

  if (loading) return <Loader />;

  if (!data || !data.data) {
    return (
      <StyledNoData>
        No data available, <span onClick={() => navigate(-1)}>go back</span>
      </StyledNoData>
    );
  }

  const { data: responseData } = data;
  return (
    <StyledDetailsPage>
      <StyledHeader>
        {" "}
        <StyledH1 onClick={() => navigate(-1)}>go back</StyledH1>
        <NavLink to={"/main"}>
          <StyledH1>menu</StyledH1>
        </NavLink>
      </StyledHeader>
      {pathName === "users" ? (
        <SingleUser {...(responseData as UserData)} />
      ) : pathName === "resources" ? (
        <SingleResource {...(responseData as ResourcesData)} />
      ) : null}
    </StyledDetailsPage>
  );
};
